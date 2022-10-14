import { Component, ViewChild } from "@angular/core";
import { DondeDormir } from "../../shared/donde-dormir";
import { LoadingController } from "@ionic/angular";
import { WhereSleepService } from "src/app/services/database/where-sleep.service";
import { forkJoin, of, Subject } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SlidesService } from "src/app/services/database/slides.service";
import { Slider } from "src/app/shared/slider";
import { map, switchMap, takeUntil } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { GeolocationService } from "src/app/services/geolocation.service";
import { DatabaseService } from "src/app/services/database.service";
import { Point } from "src/app/shared/point";
import { environment } from "src/environments/environment";
import { Browser } from '@capacitor/browser';
import { IonSlides } from "@ionic/angular";
import { GoogleAnalyticsService } from "src/app/services/google-analytics.service";
import { SocialSharing } from "@awesome-cordova-plugins/social-sharing/ngx";

@Component({
  selector: "app-where-sleep",
  templateUrl: "./where-sleep.page.html",
  styleUrls: ["./where-sleep.page.scss"],
})
export class WhereSleepPage {
  /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
  private unsubscribe$: Subject<void>;
  /**filtro seleccionado, distancia o departamento */
  dist: number = null;
  dep: string = null;
  /**guarda la distancia del usuario a cada lugar en tiempo real */
  distancia: string | number;
  /**cantidad de horas para llegar a cada lugar */
  hora: string | number;
  /**cantidad de minutos para llegar a cada lugar */
  minuto: string | number;
  /**control la apertura de filtros */
  isFilterLocation: boolean = false;
  /**guardan filtos seleccionados */
  optionLocation: string = null;
  /**departamente seleccionado actualmente */
  currentDepto: string = this.databaseSvc.selectionDepto;
  /**url load  */
  preloadImage: string = "/assets/load.gif";
  sleep: DondeDormir[] = [];
  loading: any;
  textoBuscar = "";
    /**url para compartir */
    shareURL: string = "https://developer-dominga.web.app/share-where-sleep/";

  locationActive: any[] = [];

  /**url load  */
  preloadImage_list: string = "/assets/load_cuadrada.gif";
  /** clase de preload list */
  preloadClase: string = "img-dormir";

  /**captura los datos del formulario de filtros */
  dataForm: any = "";

  filterForm: FormGroup = this.fb.group({
    localidad: ["", Validators.required],
    tipo: ["", Validators.required],
  });

  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
  };

  /**se guardan los sliders de la pantalla donde_comer */
  sliderSleep: Slider[] = [];

  @ViewChild(IonSlides) slide: IonSlides;

  constructor(
    private loadingCtrl: LoadingController,
    public sleepSvc: WhereSleepService,
    private fb: FormBuilder,
    private sliderSvc: SlidesService,
    private geolocationSvc: GeolocationService,
    private http: HttpClient,
    private databaseSvc: DatabaseService,
    private socialSharing: SocialSharing,
    private gaService: GoogleAnalyticsService
  ) {}

  resetSlide() {
    this.slide.startAutoplay();
  }

  endSlide() {
    this.slide.stopAutoplay();
  }

  socialSharingShare(nombre: string, id: string) {
    this.gaService.googleAnalyticsCompartir('donde_dormir', 'donde_dormir_'+nombre);
    this.socialSharing.share(
      nombre,
      null,
      null,
      this.shareURL+id
    );
  }

  async show(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: "bubbles",
    });

    this.loading.present().then(() => {
      this.loading.dismiss();
    });
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

  filterSleep() {
    this.dataForm = this.filterForm.value;
    if (this.isFilterLocation) this.isFilterLocation = false;
    this.optionLocation = this.dataForm.localidad;
    if (this.dataForm.localidad === "") this.optionLocation = "localidad";
  }

  changeFilterSleep() {
    this.isFilterLocation = !this.isFilterLocation;
  }

  get selectdistancia() {
    return localStorage.getItem("distanceActivo") ? true : false;
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
      "https://api.mapbox.com/directions/v5/mapbox/driving/" +
        lngUser +
        "," +
        latUser +
        ";" +
        lngPlace +
        "," +
        latPlace +
        "?overview=full&geometries=geojson&access_token=pk.eyJ1IjoiY2FzYWRvbWluZ2EiLCJhIjoiY2s3NTlzajFoMDVzZTNlcGduMWh0aml3aSJ9.JcZFoGdIQnz3hSg2p4FGkA"
    );
  }

  /** =====>=>=>=> Metodos Filtro localidad <============== */
  /** Devuelve una lista de localidades */
  get localidades() {
    const wsleep = this.sleep;
    let localidades: string[] = [];
    if (wsleep.length > 0) {
      wsleep.forEach((we) => {
        if (localidades.indexOf(we.localidad) == -1) {
          localidades.push(we.localidad);
        }
      });
    }

    localidades = localidades.sort();
    return localidades;
  }

  openInstagram(url: string) {
    this.gaService.googleAnalyticsRedesSociales('donde_dormir', 'instagram');
    Browser.open({ url: url});
  }

  openWhatsapp(url: string) {
    this.gaService.googleAnalyticsRedesSociales('donde_dormir', 'whatsapp');
    Browser.open({ url: url});
  }

  ionViewWillEnter() {
    document.title = "Donde Dormir";
    this.gaService.googleAnalyticsPantallas('donde_dormir');
    if (
      localStorage.getItem("deptoActivo") != undefined &&
      localStorage.getItem("deptoActivo") != null
    ) {
      this.dist = null;
      this.dep = localStorage.getItem("deptoActivo");
    } else if (
      localStorage.getItem("distanceActivo") != undefined &&
      localStorage.getItem("distanceActivo") != null
    ) {
      this.dep = null;
      this.dist = parseInt(localStorage.getItem("distanceActivo"));
    }

    if (localStorage.getItem("deptoActivo") != this.currentDepto) {
      this.currentDepto = localStorage.getItem("deptoActivo");
      this.filterForm.reset();
      this.dataForm = "";
      this.optionLocation = "localidad";
    }

    this.unsubscribe$ = new Subject<void>();

    this.sliderSvc.getSliders();

    this.sliderSvc.slider
      .pipe(
        map((slider) => slider.filter((s) => s.pantalla === "donde_dormir")),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((res) => {
        this.sliderSleep = res;
      });

      this.resetSlide();

    /******** RXJS PARA TRAER LUGARES CON INFO COMPLETA ************************************/
    let posDep = this.geolocationSvc.posicion$.pipe(
      switchMap((pos: Point) => {
        return forkJoin(of(pos), this.getLocation(pos.longitud, pos.latitud));
      }),
      takeUntil(this.unsubscribe$)
    );

    let dto = posDep.pipe(
      switchMap((res) => this.sleepSvc.getDondeDormir(res[1])),
      takeUntil(this.unsubscribe$)
    );

    if (this.geolocationSvc.posicion$.value !== null) {
      dto
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((res) => {
          this.sleep = [];
          this.sleep = res;
        });
    } else {
      this.sleepSvc.getDondeDormir(this.dep).pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
        this.sleep = [];
        this.sleep = res;
      });
    }
    /************************************************************************************ */
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    this.isFilterLocation = false;

    this.endSlide();
  }
}
