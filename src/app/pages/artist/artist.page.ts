import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ArtistService } from 'src/app/services/database/artist.service';
import { Artistas } from 'src/app/shared/artistas';
import { LoadingController, ModalController } from '@ionic/angular';
import { SlidesService } from 'src/app/services/database/slides.service';
import { Slider } from 'src/app/shared/slider';
import { VideoPage } from '../video/video.page';
import { DatabaseService } from 'src/app/services/database.service';
import { Point } from 'src/app/shared/point';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Browser } from '@capacitor/browser';
import { IonSlides } from '@ionic/angular';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage {
  constructor(
    private fb: FormBuilder,
    public artistSvc: ArtistService,
    private loadingCtrl: LoadingController,
    private sliderSvc: SlidesService,
    private modalCtrl: ModalController,
    private databaseSvc: DatabaseService,
    private geolocationSvc: GeolocationService,
    private http: HttpClient,
    private gaService: GoogleAnalyticsService,
    private socialSharing: SocialSharing
  ) {}

  /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
  private unsubscribe$: Subject<void>;

  /**guarda los lugares activos en la subscription del servicio */
  artists: Artistas[] = [];

  /**
   * Slide
   */
  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
  };

  locationActive: any[] = [];

  loading: any;

  /**url load  */
  preloadImage: string = '/assets/load.gif';
  /**captura los datos del formulario de filtros */
  dataForm: any = '';
  /**se guardan los sliders de la pantalla artistas */
  sliderArtist: Slider[] = [];
  /**control la apertura de filtros */
  isFilterLocation: boolean = false;
  isFilterType: boolean = false;
  /**guardan filtos seleccionados */
  optionLocation: string = null;
  optionType: string = null;
  /**departamente seleccionado actualmente */
  currentDepto: string = this.databaseSvc.selectionDepto;
  /**filtro seleccionado, distancia o departamento */
  dist: number = null;
  dep: string = null;
  /**departamento actual con filto por distancia activo */
  depDist: string;
  /**url load  */
  preloadImage_list: string = '/assets/load_cuadrada.gif';
  /** clase de preload list */
  preloadClase: string = 'img-artista';
  /**url para compartir */
  shareURL: string = 'https://developer-dominga.web.app/artist/';

  filterForm: FormGroup = this.fb.group({
    localidad: ['', Validators.required],
    categoria: ['', Validators.required],
  });

  @ViewChild(IonSlides) slide: IonSlides;

  resetSlide() {
    this.slide.startAutoplay();
  }

  endSlide() {
    this.slide.stopAutoplay();
  }

  artistShare(tipo: string, nombre: string, id: string) {
    this.gaService.googleAnalyticsCompartir(tipo, tipo+'_'+nombre, id);
    this.socialSharing.share(nombre, null, null, this.shareURL + id);
  }

  filterArtist() {
    this.dataForm = this.filterForm.value;

    if (this.isFilterLocation) this.isFilterLocation = false;
    if (this.isFilterType) this.isFilterType = false;

    this.optionLocation = this.dataForm.localidad;
    this.optionType = this.dataForm.categoria;

    if (this.dataForm.localidad === '') this.optionLocation = 'localidad';
    if (this.dataForm.categoria === '') this.optionType = 'tipo';
  }

  async show(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'bubbles',
    });

    this.loading.present().then(() => {
      this.loading.dismiss();
    });
  }

  changeFilterLocation() {
    this.isFilterLocation = !this.isFilterLocation;
    if (this.isFilterType) this.isFilterType = false;
  }

  changeFilterType() {
    this.isFilterType = !this.isFilterType;
    if (this.isFilterLocation) this.isFilterLocation = false;
  }

  get lista_localidad_artis() {
    const artisList = this.artists;
    let artistlocalidadlist: string[] = [];
    artisList.forEach((ar) => {
      if (artistlocalidadlist.indexOf(ar.localidad) == -1) {
        artistlocalidadlist.push(ar.localidad);
      }
    });
    artistlocalidadlist = artistlocalidadlist.sort();
    return artistlocalidadlist;
  }

  get lista_tipo_artis() {
    const artisList = this.artists;
    let artisttipolist: string[] = [];
    artisList.forEach((ar) => {
      if (artisttipolist.indexOf(ar.categoria) == -1) {
        artisttipolist.push(ar.categoria);
      }
    });
    artisttipolist = artisttipolist.sort();
    return artisttipolist;
  }

  /**retorna true si se selecciono Distancia como filtro principal */
  get selectdistancia() {
    return localStorage.getItem('distanceActivo') ? true : false;
  }

  /**
   * Abre modal para reproducir video
   * @param url - URL del video que se va a ejecutar
   */
  async verVideo(url: string) {
    this.gaService.googleAnalyticsReproducirVideo('artistas');
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

  openInstagram(url: string) {
    this.socialNetwork('instagram');
    Browser.open({ url: url });
  }

  openSpotify(url: string) {
    this.socialNetwork('spotify');
    Browser.open({ url: url });
  }

  socialNetwork(tipo: string) {
    this.gaService.googleAnalyticsRedesSociales('artistas', tipo);
  }

  getLocation(lng: number, lat: number) {
    return this.http
      .get<any>(
        `${environment.urlMopboxDepto}${lng},${lat}.json?access_token=${environment.mapBoxToken}`
      )
      .pipe(
        map((depto) => depto.features[depto.features.length - 2].text),
        takeUntil(this.unsubscribe$)
      );
  }

  ionViewWillEnter() {
    document.title = 'Artistas';
    this.gaService.googleAnalyticsPantallas('artistas');

    if (
      localStorage.getItem('deptoActivo') != undefined &&
      localStorage.getItem('deptoActivo') != null
    ) {
      this.dist = null;
      this.dep = localStorage.getItem('deptoActivo');
    } else if (
      localStorage.getItem('distanceActivo') != undefined &&
      localStorage.getItem('distanceActivo') != null
    ) {
      this.dep = null;
      this.dist = parseInt(localStorage.getItem('distanceActivo'));
    }

    if (localStorage.getItem('deptoActivo') != this.currentDepto) {
      this.currentDepto = localStorage.getItem('deptoActivo');
      this.filterForm.reset();
      this.dataForm = '';
      this.optionLocation = 'localidad';
      this.optionType = 'tipo';
    }

    this.unsubscribe$ = new Subject<void>();

    this.sliderSvc.getSliders();
    this.sliderSvc.slider
      .pipe(
        map((slider) => slider.filter((s) => s.pantalla === 'artistas')),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((res) => {
        this.sliderArtist = res;
      });

    this.resetSlide();

    /******** RXJS PARA TRAER LUGARES CON INFO COMPLETA ************************************/
    let posDep = this.geolocationSvc.posicion$.pipe(
      switchMap((pos: Point) => {
        return forkJoin(of(pos), this.getLocation(pos.longitud, pos.latitud));
      }),
      takeUntil(this.unsubscribe$)
    );

    if (this.geolocationSvc.posicion$.value !== null) {
      posDep
        .pipe(
          tap((dep) => (this.depDist = dep[1])),
          switchMap((res) => this.artistSvc.getArtist(res[1])),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((res) => {
          this.artists = [];
          this.artists = res;
        });
    } else {
      this.artistSvc
        .getArtist(this.dep)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res) => {
          this.artists = [];
          this.artists = res;
        });
    }
    /************************************************************************************ */
  }

  /**se ejecuta cada vez que se sale de la tab */
  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    this.isFilterLocation = false;
    this.isFilterType = false;

    this.endSlide();
  }
}
