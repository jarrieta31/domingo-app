import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject, timer } from 'rxjs';
import { SellingPointsPage } from '../selling-points/selling-points.page';
import { Browser } from '@capacitor/browser';
import { takeUntil } from 'rxjs/operators';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit, OnDestroy {
  @Input('id') id: number;
  @Input('fecha') fecha: string;
  @Input('titulo') titulo: string;
  @Input('descripcion') descripcion: string;
  @Input('imagen') imagen: string;
  @Input('lugar') lugar: string;
  @Input('latitud') latitud: number;
  @Input('longitud') longitud: number;
  @Input('fechaFin') fechaFin: string;
  @Input('instagram') instagram: string;
  @Input('tickAntel') tickAntel: string;
  @Input('facebook') facebook: string;
  @Input('whatsapp') whatsapp: string;
  @Input('moneda') moneda: string;
  @Input('precio') precio: number;
  @Input('precioUnico') precioUnico: boolean;
  @Input('direccion') direccion: boolean;
  @Input('localidad') localidad: string;
  @Input('departamento') departamento: string;

  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;

  /**url load  */
  preloadImage: string = '/assets/load_1.30.gif';
  /**clase preload */
  preloadClass: string = 'img-principal';

  /**controla si fecha inicio es igual a fecha fin */
  dateControl: boolean = false;
  /**controla si fecha inicio es identica a fecha fin  */
  controlHour: boolean = false;

  /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private modalCtrl: ModalController,
    private socialSharing: SocialSharing
  ) {}

  ngOnInit() {
    document.title = "Detalle de Evento";
    
    this.clock = this.source
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((t) => {
        this.now = new Date();
        this.end = new Date(this.fecha);
        this.showDate();
      });

    const f = new Date(this.fecha);
    const ff = new Date(this.fechaFin);
    const fi = f.getDate() + '-' + f.getMonth() + '-' + f.getFullYear();
    const ffn = ff.getDate() + '-' + ff.getMonth() + '-' + ff.getFullYear();

    if (fi === ffn) this.dateControl = true;

    if (this.fecha.valueOf() === this.fechaFin.valueOf())
      this.controlHour = true;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  socialSharingEvent(nombre: string, imagen: string) {
    this.socialSharing.share(nombre, null, null, imagen);
  }

  /**
   * Cierra el modal del detalle del evento
   */
  salir() {
    this.modalCtrl.dismiss();
  }

  showDate() {
    let distance = this.end - this.now;
    if (distance > 0) {
      this.day = Math.floor(distance / this._day);
      this.hours = Math.floor((distance % this._day) / this._hour);
      this.minutes = Math.floor((distance % this._hour) / this._minute);
      this.seconds = Math.floor((distance % this._minute) / this._second);
    } else {
      this.day = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  openMap() {
    Browser.open({
      url:
        'https://www.google.com/maps/search/?api=1&query=' +
        this.latitud +
        ',' +
        this.longitud,
    });
  }

  async openModalSellingPoint() {
    const modalSellingPoint = await this.modalCtrl.create({
      component: SellingPointsPage,
      cssClass: 'modal-selling-point',
      backdropDismiss: true,
      showBackdrop: true,
      componentProps: {
        instagram: this.instagram,
        tickAntel: this.tickAntel,
        facebook: this.facebook,
        whatsapp: this.whatsapp,
      },
      mode: 'ios',
    });

    await modalSellingPoint.present();
  }
}
