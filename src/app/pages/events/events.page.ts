import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Eventos } from '../../shared/eventos';
import { EventDetailPage } from '../event-detail/event-detail.page';
import { DatabaseService } from 'src/app/services/database.service';
import { forkJoin, of, Subject, Subscription } from 'rxjs';
import { VisitEventService } from 'src/app/services/database/visit-event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { SlidesService } from 'src/app/services/database/slides.service';
import { Slider } from 'src/app/shared/slider';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { HttpClient } from '@angular/common/http';
import { Point } from 'src/app/shared/point';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
// export class EventsPage implements OnInit, OnDestroy {
export class EventsPage {
  /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
  private unsubscribe$: Subject<void>;

  textoBuscar = '';
  today: Date = new Date();
  now: Date = new Date();

  /**url load  */
  preloadImage: string = '/assets/load.gif';
  /**url load  */
  preloadImage_list: string = '/assets/load_1.30.gif';
  /** clase de preload list */
  preloadClase: string = 'img-evento';
  eventos: Eventos[] = [];
  eventos_xdptoSelection: Eventos[] = [];
  eventosSuscription: Subscription;
  dep: string = null;
  /**captura los datos del formulario de filtros */
  dataform: any = '';
  /**controla si se muestra o no el filtro general de lugares */
  isFilterLocation: boolean = false;
  isFilterType: boolean = false;
  isFilterDate: boolean = false;
  /**guardan filtos seleccionados */
  optionLocation: string = null;
  optionType: string = null;
  optionDateStart: string = null;
  optionDateEnd: string = null;
  /**guarda la distancia del usuario a cada lugar en tiempo real */
  distancia: string | number;
  /**cantidad de horas para llegar a cada lugar */
  hora: string | number;
  /**cantidad de minutos para llegar a cada lugar */
  minuto: string | number;
  /**filtro seleccionado distancia*/
  dist: number = null;
  /**chequea si en el array de lugares hay algo para mostrar en pantalla, si no lo hay se muestra msgEmptyPlace */
  checkDistance: boolean = false;
  /**departamente seleccionado actualmente */
  currentDepto: string = this.dbService.selectionDepto;
  /**dia siguiente al actual */
  nextDay: any;
  /**controla datetime */
  isDatetimeDesde: boolean = false;
  isDatetimeHasta: boolean = false;

  /**se guardan los sliders de la pantalla eventos */
  sliderEvents: Slider[] = [];

  filterForm: FormGroup = this.fb.group({
    tipo: ['', Validators.required],
    localidad: ['', Validators.required],
    fecha_fin: ['', Validators.required],
    fecha_inicio: ['', Validators.required],
  });

  isFilter: boolean = false;

  constructor(
    private veService: VisitEventService, //Servicio contador de visitas eventos.
    private modalCtrl: ModalController,
    public dbService: DatabaseService,
    private sliderSvc: SlidesService,
    private fb: FormBuilder,
    private geolocationSvc: GeolocationService,
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {
    this.nextDay = this.sumarDias(this.now, 1);
  }

  anioActual: number = 0;
  customYearValues = [];
  customDayShortNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  monthShortNames = [
    'Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Set, Oct, Nov, Dic',
  ];
  month: number = 0;
  day: string;
  fullDay: string = '';
  fullDayNext: string = '';
  month_aux: string = '';
  month_auxNext: string = '';

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

  /**
   * Muestra el modal con descripción más detallada del evento seleccionado
   * @param id - id del evento
   * @param fecha - fecha del evento
   * @param titulo - titulo del evento
   * @param descripcion - descripcion del evento
   * @param imagen - imagen del evento
   */
  async openModalDetailEvent(
    id: string,
    fecha: string,
    titulo: string,
    descripcion: string,
    imagen: string,
    lugar: string,
    latitud: number,
    longitud: number,
    fechaFin: string,
    instagram: string,
    tickAntel: string,
    facebook: string,
    whatsapp: string,
    moneda: string,
    precio: number,
    precioUnico: boolean,
    direccion: string
  ) {
    this.contadorVisitas(id);

    const modal = await this.modalCtrl.create({
      component: EventDetailPage,
      cssClass: 'modal-event',
      backdropDismiss: false,
      showBackdrop: true,
      componentProps: {
        id: id,
        fecha: fecha,
        titulo: titulo,
        descripcion: descripcion,
        imagen: imagen,
        lugar: lugar,
        latitud: latitud,
        longitud: longitud,
        fechaFin: fechaFin,
        instagram: instagram,
        tickAntel: tickAntel,
        facebook: facebook,
        whatsapp: whatsapp,
        moneda: moneda,
        precio: precio,
        precioUnico: precioUnico,
        direccion: direccion,
      },
    });

    await modal.present();
  }

  contadorVisitas(id: string) {
    this.veService.contadorVisitasEvento(id);
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

  /**endpoint de mapbox para calcular distancia entre dos puntos teniendo en cuenta las calles */
  getDistance(
    lngUser: number,
    latUser: number,
    lngPlace: number,
    latPlace: number
  ) {
    return this.http.get(
      'https://api.mapbox.com/directions/v5/mapbox/driving/' +
        lngUser +
        ',' +
        latUser +
        ';' +
        lngPlace +
        ',' +
        latPlace +
        '?overview=full&geometries=geojson&access_token=pk.eyJ1IjoiY2FzYWRvbWluZ2EiLCJhIjoiY2s3NTlzajFoMDVzZTNlcGduMWh0aml3aSJ9.JcZFoGdIQnz3hSg2p4FGkA'
    );
  }

  /** ===========>=>=>=> Metodos Para Filtro de Eventos ===========>=>=>=>*/
  changeFilterLocation() {
    this.isFilterLocation = !this.isFilterLocation;

    if (this.isFilterType) this.isFilterType = false;
    if (this.isFilterDate) this.isFilterDate = false;
  }

  changeFilterType() {
    this.isFilterType = !this.isFilterType;

    if (this.isFilterLocation) this.isFilterLocation = false;
    if (this.isFilterDate) this.isFilterDate = false;
  }

  changeFilterDate() {
    this.isFilterDate = !this.isFilterDate;

    if (this.isFilterType) this.isFilterType = false;
    if (this.isFilterLocation) this.isFilterLocation = false;
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'FECHA INCORRECTA',
      message:
        'Fecha desde no puede ser mayor que fecha hasta. Se reiniciará la lista',
      mode: 'ios',
      animated: true,
      buttons: [
        {
          text: 'Cerrar',
        },
      ],
    });

    await alert.present();
  }

  filterEvento() {
    this.dataform = this.filterForm.value;

    if (this.isFilterLocation) this.isFilterLocation = false;
    if (this.isFilterType) this.isFilterType = false;
    if (this.isFilterDate) this.isFilterDate = false;

    this.optionLocation = this.dataform.localidad;
    this.optionType = this.dataform.tipo;
    this.optionDateStart = this.dataform.fecha_inicio;
    this.optionDateEnd = this.dataform.fecha_fin;

    if (this.optionDateStart !== '' && this.optionDateEnd !== '') {
      if (
        this.optionDateStart > this.optionDateEnd ||
        this.optionDateEnd < this.optionDateStart
      ) {
        this.optionDateStart = null;
        this.optionDateEnd = null;
        this.presentAlert();
      } else {
        this.optionDateStart = this.dataform.fecha_inicio;
        this.optionDateEnd = this.dataform.fecha_fin;
      }
    } else {
      this.optionDateStart = this.dataform.fecha_inicio;
      this.optionDateEnd = this.dataform.fecha_fin;
    }

    if (this.dataform.localidad === '') this.optionLocation = 'localidad';
    if (this.dataform.tipo === '') this.optionType = 'tipo';

    if (this.isDatetimeDesde) this.isDatetimeDesde = false;
    if (this.isDatetimeHasta) this.isDatetimeHasta = false;

    console.log('form', this.filterForm.value);
  }

  datetimeDesde() {
    this.isDatetimeDesde = !this.isDatetimeDesde;

    if (this.isDatetimeHasta) this.isDatetimeHasta = false;
  }

  datetimeHasta() {
    this.isDatetimeHasta = !this.isDatetimeHasta;

    if (this.isDatetimeDesde) this.isDatetimeDesde = false;
  }

  /**Retorna un arreglo con los tipos de eventos existentes por Departamento. */
  get lista_tipos_eventos() {
    /**Copia de arreglo de eventos para trabajar dentro de la funcion */
    const eventos = this.eventos;
    /**Pasar a variable Global
     * Guarda los tipos de eventos que estan en la base.
     * Luego se muestran al usuario
     */
    let tipos_eventos: string[] = [];
    if (eventos.length > 0) {
      eventos.forEach((ev) => {
        if (tipos_eventos.indexOf(ev.tipo) == -1) {
          tipos_eventos.push(ev.tipo);
        }
      });
    }
    tipos_eventos = tipos_eventos.sort();
    return tipos_eventos;
  }

  /**Retorna un arreglo con los tipos de eventos existentes por Departamento. */
  get lista_localidades_eventos() {
    /**Copia de arreglo de eventos para trabajar dentro de la funcion */
    const eventos = this.eventos;
    /**Pasar a variable Global
     * Guarda los tipos de eventos que estan en la base.
     * Luego se muestran al usuario
     */
    let localidades_eventos: string[] = [];
    if (eventos.length > 0) {
      eventos.forEach((ev) => {
        if (localidades_eventos.indexOf(ev.localidad) == -1) {
          localidades_eventos.push(ev.localidad);
        }
      });
    }
    localidades_eventos = localidades_eventos.sort();
    return localidades_eventos;
  }

  /**retorna true si se selecciono Distancia como filtro principal */
  get selectdistancia() {
    return localStorage.getItem('distanceActivo') ? true : false;
  }

  /**
   *
   * @param tipo Nombre del "tipo" Evento. Usado como criterio de buscanda.
   * @returns Arreglo de Eventos para el "tipo" buscado.
   */
  eventosPorTipo(tipo: string): Eventos[] {
    /**Copia del arreglo de eventos */
    const eventos: Eventos[] = this.eventos;
    let eventos_xtipo: Eventos[] = [];
    if (eventos.length > 0) {
      eventos_xtipo = eventos.filter((ev) => ev.tipo == tipo);
    }
    return eventos_xtipo;
  }

  /**
   *
   * @param tipo Nombre de la "localidad" donde se realiza el Evento.
   *  Es usado como criterio de buscanda.
   * @returns Arreglo de Eventos que se realizaran en esa "localidad".
   */
  eventosPorLocalidad(localidad: string): Eventos[] {
    /**Copia del arreglo de eventos */
    const eventos: Eventos[] = this.eventos;
    let eventos_xlocalidad: Eventos[] = [];
    if (eventos.length > 0) {
      eventos_xlocalidad = eventos.filter((ev) => ev.localidad == localidad);
    }
    return eventos_xlocalidad;
  }
  /** <=<=<=<=========== Metodos Para Filtro de Eventos <=<=<=<===========*/

  sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  ionViewWillEnter() {
    this.sliderSvc.getSliders();
    this.anioActual = new Date().getFullYear();
    this.month = this.today.getMonth() + 1;
    this.day = this.today.getDate().toString();

    if (this.day.length === 1) {
      this.day = ('0' + this.today.getDate()).toString();
    } else {
      this.day = this.today.getDate().toString();
    }

    if (this.month < 10) {
      this.month_aux = ('0' + (this.today.getMonth() + 1)).toString();
    } else {
      this.month_aux = (this.today.getMonth() + 1).toString();
    }

    this.fullDay = (
      this.anioActual +
      '-' +
      this.month_aux +
      '-' +
      this.day
    ).toString();

    let yearNext: string = this.nextDay.getFullYear();
    let monthNext: number = this.nextDay.getMonth() + 1;
    let nextDate: string = this.nextDay.getDate().toString();

    if (nextDate.length === 1) {
      nextDate = ('0' + this.nextDay.getDate()).toString();
    } else {
      nextDate = this.nextDay.getDate().toString();
    }

    if (monthNext < 10) {
      this.month_auxNext = ('0' + (this.nextDay.getMonth() + 1)).toString();
    } else {
      this.month_auxNext = (this.nextDay.getMonth() + 1).toString();
    }

    this.fullDayNext = (
      yearNext +
      '-' +
      this.month_auxNext +
      '-' +
      nextDate
    ).toString();

    this.customYearValues = [];
    for (let i = 0; i < 3; i++) {
      this.customYearValues.push(this.anioActual);
      this.anioActual = this.anioActual + 1;
    }

    this.unsubscribe$ = new Subject<void>();

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
      this.dataform = '';
      this.optionLocation = 'localidad';
      this.optionDateEnd = '';
      this.optionDateStart = '';
      this.optionType = 'tipo';
    }

    this.sliderSvc.slider
      .pipe(
        map((slider) => slider.filter((s) => s.pantalla === 'eventos')),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((res) => {
        this.sliderEvents = res;
      });

    /******** RXJS PARA TRAER LUGARES CON INFO COMPLETA ************************************/
    let posDep = this.geolocationSvc.posicion$.pipe(
      switchMap((pos: Point) => {
        return forkJoin(of(pos), this.getLocation(pos.longitud, pos.latitud));
      }),
      takeUntil(this.unsubscribe$)
    );

    let dto = posDep.pipe(
      switchMap((res) => this.dbService.getEventos(res[1])),
      takeUntil(this.unsubscribe$)
    );

    if (this.geolocationSvc.posicion$.value !== null) {
      dto.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
        this.eventos = [];
        this.eventos = res;
      });
    } else {
      this.dbService
        .getEventos(this.dep)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res) => {
          this.eventos = [];
          this.eventos = res;
        });
    }
    /************************************************************************************ */
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    this.isFilterLocation = false;
    this.isFilterType = false;
    this.isFilterDate = false;
    this.isDatetimeDesde = false;
    this.isDatetimeHasta = false;
  }
}
