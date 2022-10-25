import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PlaceService } from 'src/app/services/database/place.service';
import { Place } from 'src/app/shared/place';
import { VideoPage } from '../video/video.page';
import * as Mapboxgl from 'mapbox-gl';
import { Router } from '@angular/router';
import { PreloadDetailsComponent } from '../../components/preload-details/preload-details.component';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-place-selected',
  templateUrl: './place-selected.page.html',
  styleUrls: ['./place-selected.page.scss'],
})
export class PlaceSelectedPage implements OnInit, OnDestroy {
  @ViewChild(PreloadDetailsComponent, { static: true })
  preloadDetails: PreloadDetailsComponent;

  place: Place = null;
  place_suscription: Subscription;
  mapa: Mapboxgl.Map;
  near: any[] = [];
  near_places: Subscription;

  param: string = '';

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 1,
    autoplay: true,
  };

  videos: any[] = [];

  /**url load  */
  preloadImage: string = '/assets/load_1.30.gif';
  /**clase preload */
  preloadClass: string = 'img-principal';
  /**clase preload galeria*/
  preloadClassGaleria: string = 'img-galeria';
  /**clase preload interes*/
  preloadClassInteres: string = 'img-interes';
  /**url para compartir */
  shareURL: string = 'https://developer-dominga.web.app/share-place/';

  base64: string = '';

  constructor(
    private placeSvc: PlaceService,
    private modalCtrl: ModalController,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private gaService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    document.title = 'Detalle de Lugar';

    this.place_suscription = this.placeSvc.place_selected.subscribe((res) => {
      this.place = res;
      this.gaService.googleAnalyticsPantallas('detalle_de_lugar', res.nombre);
      if (this.place.videos.length > 0) {
        this.videos = this.place.videos.filter(
          (item: any) =>
            item.url !== null &&
            item.url !== undefined &&
            item.url !== '' &&
            item.url !== ' '
        );
      }

      this.placeSvc.getPlaceNear();

      this.near_places = this.placeSvc.near_places.subscribe((res) => {
        this.near = [];
        this.near = res;
      });
    });
  }

  ngOnDestroy() {
    this.place_suscription.unsubscribe();
    this.near_places.unsubscribe();
  }

  /**selecciona lugar actual */
  getPlace(id: string) {
    this.placeSvc.getPlaceId(id);
  }

  urlDowload() {
    this.placeSvc.urlDowload();
  }

  socialSharingShare(nombre: string, id: string) {
    this.placeSvc.urlDowload().subscribe((res) => {
      this.socialSharing.share(nombre, null, res, this.shareURL + id);
    });
    this.gaService.googleAnalyticsCompartir('lugar', 'lugar_' + nombre);
  }

  /**
   * Al seleccionar una imagen de la mini galería modifica la imagen principal
   */
  cambiarImagen(src: string) {
    this.preloadDetails.url = src;
  }

  irHome() {
    this.router.navigate(['/tabs/place']);
  }

  /**
   * Abre modal para reproducir video
   * @param url - URL del video que se va a ejecutar
   */
  async verVideo(url: string, nombre: string) {
    this.gaService.googleAnalyticsReproducirVideo('lugares', nombre);
    const video = await this.modalCtrl.create({
      component: VideoPage,
      cssClass: 'modal-video',
      backdropDismiss: false,
      showBackdrop: true,
      componentProps: {
        url: url,
      },
      mode: 'ios',
    });

    await video.present();
  }

  /**
   * Al seleccionar sobre el mapa de cada lugar, se desplega un action-sheet
   * que brinda opciones de como llegar al mismo ya se en auto, bicicleta o caminando
   */
  async abrirMapaActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Abrir Mapa',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Ir en auto',
          icon: 'car-sport',
          handler: () => {
            //Abre el mapa en modo auto
            this.router.navigate([
              '/map',
              this.place.nombre,
              {
                longitud: this.place.ubicacion.lng,
                latitud: this.place.ubicacion.lat,
                tipo: this.place.tipo,
                id: this.place.id,
                profile: 'mapbox/driving-traffic',
              },
            ]);
          },
        },
        {
          text: 'Ir caminando',
          icon: 'walk',
          handler: () => {
            this.router.navigate([
              '/map',
              this.place.nombre,
              {
                longitud: this.place.ubicacion.lng,
                latitud: this.place.ubicacion.lat,
                tipo: this.place.tipo,
                id: this.place.id,
                profile: 'mapbox/walking',
              },
            ]);
            console.log('Ir caminando');
          },
        },
        {
          text: 'Ir en bicicleta',
          icon: 'bicycle-outline',
          handler: () => {
            this.router.navigate([
              '/map',
              this.place.nombre,
              {
                longitud: this.place.ubicacion.lng,
                latitud: this.place.ubicacion.lat,
                tipo: this.place.tipo,
                id: this.place.id,
                profile: 'mapbox/driving',
              },
            ]);
            console.log('Ir en Bicicleta');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
