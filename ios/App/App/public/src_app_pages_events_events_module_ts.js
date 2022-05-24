"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_events_events_module_ts"],{

/***/ 3662:
/*!*******************************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailPageRoutingModule": () => (/* binding */ EventDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _event_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-detail.page */ 3727);




const routes = [
    {
        path: '',
        component: _event_detail_page__WEBPACK_IMPORTED_MODULE_0__.EventDetailPage
    }
];
let EventDetailPageRoutingModule = class EventDetailPageRoutingModule {
};
EventDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventDetailPageRoutingModule);



/***/ }),

/***/ 24350:
/*!***********************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailPageModule": () => (/* binding */ EventDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _event_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-detail-routing.module */ 3662);
/* harmony import */ var _event_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-detail.page */ 3727);
/* harmony import */ var _selling_points_selling_points_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selling-points/selling-points.module */ 12099);
/* harmony import */ var _selling_points_selling_points_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selling-points/selling-points.page */ 2399);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ 57693);










let EventDetailPageModule = class EventDetailPageModule {
};
EventDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _event_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventDetailPageRoutingModule,
            _selling_points_selling_points_module__WEBPACK_IMPORTED_MODULE_2__.SellingPointsPageModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule
        ],
        declarations: [_event_detail_page__WEBPACK_IMPORTED_MODULE_1__.EventDetailPage],
        entryComponents: [
            _selling_points_selling_points_page__WEBPACK_IMPORTED_MODULE_3__.SellingPointsPage
        ]
    })
], EventDetailPageModule);



/***/ }),

/***/ 3727:
/*!*********************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailPage": () => (/* binding */ EventDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event-detail.page.html */ 89448);
/* harmony import */ var _event_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-detail.page.scss */ 74682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81356);
/* harmony import */ var _selling_points_selling_points_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selling-points/selling-points.page */ 2399);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 39337);








let EventDetailPage = class EventDetailPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this._second = 1000;
        this._minute = this._second * 60;
        this._hour = this._minute * 60;
        this._day = this._hour * 24;
        this.source = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, 1000);
        /**url load  */
        this.preloadImage = "/assets/load_1.30.gif";
        /**clase preload */
        this.preloadClass = "img-principal";
        /**controla si fecha inicio es igual a fecha fin */
        this.dateControl = false;
        /**controla si fecha inicio es identica a fecha fin  */
        this.controlHour = false;
    }
    ngOnInit() {
        this.clock = this.source.subscribe((t) => {
            this.now = new Date();
            this.end = new Date(this.fecha);
            this.showDate();
        });
        const f = new Date(this.fecha);
        const ff = new Date(this.fechaFin);
        const fi = f.getDate() + "-" + f.getMonth() + "-" + f.getFullYear();
        const ffn = ff.getDate() + "-" + ff.getMonth() + "-" + ff.getFullYear();
        if (fi === ffn)
            this.dateControl = true;
        if (this.fecha.valueOf() === this.fechaFin.valueOf())
            this.controlHour = true;
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
        }
        else {
            this.day = 0;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
    }
    openMap() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: "https://www.google.com/maps/search/?api=1&query=" + this.latitud + "," + this.longitud });
    }
    openModalSellingPoint() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modalSellingPoint = yield this.modalCtrl.create({
                component: _selling_points_selling_points_page__WEBPACK_IMPORTED_MODULE_2__.SellingPointsPage,
                cssClass: "modal-selling-point",
                backdropDismiss: false,
                showBackdrop: true,
                componentProps: {
                    instagram: this.instagram,
                    tickAntel: this.tickAntel,
                    facebook: this.facebook,
                    whatsapp: this.whatsapp,
                },
                mode: 'ios',
            });
            yield modalSellingPoint.present();
        });
    }
};
EventDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
EventDetailPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["id",] }],
    fecha: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["fecha",] }],
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["titulo",] }],
    descripcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["descripcion",] }],
    imagen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["imagen",] }],
    lugar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["lugar",] }],
    latitud: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["latitud",] }],
    longitud: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["longitud",] }],
    fechaFin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["fechaFin",] }],
    instagram: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["instagram",] }],
    tickAntel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["tickAntel",] }],
    facebook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["facebook",] }],
    whatsapp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["whatsapp",] }],
    moneda: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["moneda",] }],
    precio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["precio",] }],
    precioUnico: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["precioUnico",] }],
    direccion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["direccion",] }]
};
EventDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-event-detail",
        template: _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_event_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventDetailPage);



/***/ }),

/***/ 41463:
/*!*******************************************************!*\
  !*** ./src/app/pages/events/events-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageRoutingModule": () => (/* binding */ EventsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page */ 54494);




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_0__.EventsPage
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ 16671:
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageModule": () => (/* binding */ EventsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-routing.module */ 41463);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page */ 54494);
/* harmony import */ var _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-detail/event-detail.page */ 3727);
/* harmony import */ var _event_detail_event_detail_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-detail/event-detail.module */ 24350);
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ 74356);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ 57693);











let EventsPageModule = class EventsPageModule {
};
EventsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _events_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventsPageRoutingModule,
            _event_detail_event_detail_module__WEBPACK_IMPORTED_MODULE_3__.EventDetailPageModule,
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_1__.EventsPage],
        entryComponents: [
            _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_2__.EventDetailPage,
        ]
    })
], EventsPageModule);



/***/ }),

/***/ 54494:
/*!*********************************************!*\
  !*** ./src/app/pages/events/events.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPage": () => (/* binding */ EventsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_events_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./events.page.html */ 81470);
/* harmony import */ var _events_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page.scss */ 99716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-detail/event-detail.page */ 3727);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 60568);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var src_app_services_database_visit_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database/visit-event.service */ 73070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database/slides.service */ 60696);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4276);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 18260);















let EventsPage = class EventsPage {
    constructor(veService, //Servicio contador de visitas eventos.
    modalCtrl, dbService, sliderSvc, fb, geolocationSvc, http, alertCtrl) {
        this.veService = veService;
        this.modalCtrl = modalCtrl;
        this.dbService = dbService;
        this.sliderSvc = sliderSvc;
        this.fb = fb;
        this.geolocationSvc = geolocationSvc;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.textoBuscar = "";
        this.today = new Date();
        this.now = new Date();
        /**url load  */
        this.preloadImage = "/assets/load.gif";
        /**url load  */
        this.preloadImage_list = "/assets/load_1.30.gif";
        /** clase de preload list */
        this.preloadClase = "img-evento";
        this.eventos = [];
        this.eventos_xdptoSelection = [];
        this.dep = null;
        /**captura los datos del formulario de filtros */
        this.dataform = "";
        /**controla si se muestra o no el filtro general de lugares */
        this.isFilterLocation = false;
        this.isFilterType = false;
        this.isFilterDate = false;
        /**guardan filtos seleccionados */
        this.optionLocation = null;
        this.optionType = null;
        this.optionDateStart = null;
        this.optionDateEnd = null;
        /**filtro seleccionado distancia*/
        this.dist = null;
        /**chequea si en el array de lugares hay algo para mostrar en pantalla, si no lo hay se muestra msgEmptyPlace */
        this.checkDistance = false;
        /**departamente seleccionado actualmente */
        this.currentDepto = this.dbService.selectionDepto;
        /**se guardan los sliders de la pantalla eventos */
        this.sliderEvents = [];
        this.filterForm = this.fb.group({
            tipo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            localidad: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            fecha_fin: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            fecha_inicio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        });
        this.isFilter = false;
        this.anioActual = 0;
        this.customYearValues = [];
        this.customDayShortNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
        this.monthShortNames = [
            "Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Set, Oct, Nov, Dic",
        ];
        this.month = 0;
        this.fullDay = "";
        this.fullDayNext = "";
        this.month_aux = "";
        this.month_auxNext = "";
        /**
         * Slide
         */
        this.slideOpts = {
            initialSlide: 0,
            speed: 2000,
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: true,
        };
        this.nextDay = this.sumarDias(this.now, 1);
    }
    /**
     * Muestra el modal con descripción más detallada del evento seleccionado
     * @param id - id del evento
     * @param fecha - fecha del evento
     * @param titulo - titulo del evento
     * @param descripcion - descripcion del evento
     * @param imagen - imagen del evento
     */
    openModalDetailEvent(id, fecha, titulo, descripcion, imagen, lugar, latitud, longitud, fechaFin, instagram, tickAntel, facebook, whatsapp, moneda, precio, precioUnico, direccion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.contadorVisitas(id);
            const modal = yield this.modalCtrl.create({
                component: _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_2__.EventDetailPage,
                cssClass: "modal-event",
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
            yield modal.present();
        });
    }
    contadorVisitas(id) {
        this.veService.contadorVisitasEvento(id);
    }
    getLocation(lng, lat) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.urlMopboxDepto}${lng},${lat}.json?access_token=${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.mapBoxToken}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((depto) => depto.features[depto.features.length - 2].text), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$));
    }
    /**endpoint de mapbox para calcular distancia entre dos puntos teniendo en cuenta las calles */
    getDistance(lngUser, latUser, lngPlace, latPlace) {
        return this.http.get("https://api.mapbox.com/directions/v5/mapbox/driving/" +
            lngUser +
            "," +
            latUser +
            ";" +
            lngPlace +
            "," +
            latPlace +
            "?overview=full&geometries=geojson&access_token=pk.eyJ1IjoiY2FzYWRvbWluZ2EiLCJhIjoiY2s3NTlzajFoMDVzZTNlcGduMWh0aml3aSJ9.JcZFoGdIQnz3hSg2p4FGkA");
    }
    /** ===========>=>=>=> Metodos Para Filtro de Eventos ===========>=>=>=>*/
    changeFilterLocation() {
        this.isFilterLocation = !this.isFilterLocation;
        if (this.isFilterType)
            this.isFilterType = false;
        if (this.isFilterDate)
            this.isFilterDate = false;
    }
    changeFilterType() {
        this.isFilterType = !this.isFilterType;
        if (this.isFilterLocation)
            this.isFilterLocation = false;
        if (this.isFilterDate)
            this.isFilterDate = false;
    }
    changeFilterDate() {
        this.isFilterDate = !this.isFilterDate;
        if (this.isFilterType)
            this.isFilterType = false;
        if (this.isFilterLocation)
            this.isFilterLocation = false;
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: "my-custom-class",
                header: "FECHA INCORRECTA",
                message: "Fecha desde no puede ser mayor que fecha hasta. Se reiniciará la lista",
                mode: "ios",
                animated: true,
                buttons: [
                    {
                        text: "Cerrar",
                    },
                ],
            });
            yield alert.present();
        });
    }
    filterEvento() {
        this.dataform = this.filterForm.value;
        if (this.isFilterLocation)
            this.isFilterLocation = false;
        if (this.isFilterType)
            this.isFilterType = false;
        if (this.isFilterDate)
            this.isFilterDate = false;
        this.optionLocation = this.dataform.localidad;
        this.optionType = this.dataform.tipo;
        this.optionDateStart = this.dataform.fecha_inicio;
        this.optionDateEnd = this.dataform.fecha_fin;
        if (this.optionDateStart !== "" && this.optionDateEnd !== "") {
            if (this.optionDateStart > this.optionDateEnd ||
                this.optionDateEnd < this.optionDateStart) {
                this.optionDateStart = null;
                this.optionDateEnd = null;
                this.presentAlert();
            }
            else {
                this.optionDateStart = this.dataform.fecha_inicio;
                this.optionDateEnd = this.dataform.fecha_fin;
            }
        }
        else {
            this.optionDateStart = this.dataform.fecha_inicio;
            this.optionDateEnd = this.dataform.fecha_fin;
        }
        if (this.dataform.localidad === "")
            this.optionLocation = "localidad";
        if (this.dataform.tipo === "")
            this.optionType = "tipo";
        console.log("form", this.filterForm.value);
    }
    /**Retorna un arreglo con los tipos de eventos existentes por Departamento. */
    get lista_tipos_eventos() {
        /**Copia de arreglo de eventos para trabajar dentro de la funcion */
        const eventos = this.eventos;
        /**Pasar a variable Global
         * Guarda los tipos de eventos que estan en la base.
         * Luego se muestran al usuario
         */
        let tipos_eventos = [];
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
        let localidades_eventos = [];
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
        return localStorage.getItem("distanceActivo") ? true : false;
    }
    /**
     *
     * @param tipo Nombre del "tipo" Evento. Usado como criterio de buscanda.
     * @returns Arreglo de Eventos para el "tipo" buscado.
     */
    eventosPorTipo(tipo) {
        /**Copia del arreglo de eventos */
        const eventos = this.eventos;
        let eventos_xtipo = [];
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
    eventosPorLocalidad(localidad) {
        /**Copia del arreglo de eventos */
        const eventos = this.eventos;
        let eventos_xlocalidad = [];
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
            this.day = ("0" + this.today.getDate()).toString();
        }
        else {
            this.day = this.today.getDate().toString();
        }
        if (this.month < 10) {
            this.month_aux = ("0" + (this.today.getMonth() + 1)).toString();
        }
        else {
            this.month_aux = (this.today.getMonth() + 1).toString();
        }
        this.fullDay = (this.anioActual +
            "-" +
            this.month_aux +
            "-" +
            this.day).toString();
        let yearNext = this.nextDay.getFullYear();
        let monthNext = this.nextDay.getMonth() + 1;
        let nextDate = this.nextDay.getDate().toString();
        if (nextDate.length === 1) {
            nextDate = ("0" + this.nextDay.getDate()).toString();
        }
        else {
            nextDate = this.nextDay.getDate().toString();
        }
        if (monthNext < 10) {
            this.month_auxNext = ("0" + (this.nextDay.getMonth() + 1)).toString();
        }
        else {
            this.month_auxNext = (this.nextDay.getMonth() + 1).toString();
        }
        this.fullDayNext = (yearNext +
            "-" +
            this.month_auxNext +
            "-" +
            nextDate).toString();
        this.customYearValues = [];
        for (let i = 0; i < 3; i++) {
            this.customYearValues.push(this.anioActual);
            this.anioActual = this.anioActual + 1;
        }
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        if (localStorage.getItem("deptoActivo") != undefined &&
            localStorage.getItem("deptoActivo") != null) {
            this.dist = null;
            this.dep = localStorage.getItem("deptoActivo");
        }
        else if (localStorage.getItem("distanceActivo") != undefined &&
            localStorage.getItem("distanceActivo") != null) {
            this.dep = null;
            this.dist = parseInt(localStorage.getItem("distanceActivo"));
        }
        if (localStorage.getItem("deptoActivo") != this.currentDepto) {
            this.currentDepto = localStorage.getItem("deptoActivo");
            this.filterForm.reset();
            this.dataform = "";
            this.optionLocation = "localidad";
            this.optionDateEnd = "";
            this.optionDateStart = "";
            this.optionType = "tipo";
        }
        this.sliderSvc.slider
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((slider) => slider.filter((s) => s.pantalla === "eventos")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$))
            .subscribe((res) => {
            this.sliderEvents = res;
        });
        /******** RXJS PARA TRAER LUGARES CON INFO COMPLETA ************************************/
        let posDep = this.geolocationSvc.posicion$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((pos) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(pos), this.getLocation(pos.longitud, pos.latitud));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$));
        let dto = posDep.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((res) => this.dbService.getEventos(res[1])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$));
        if (this.geolocationSvc.posicion$.value !== null) {
            dto.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe((res) => {
                this.eventos = [];
                this.eventos = res;
            });
        }
        else {
            this.dbService.getEventos(this.dep).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe((res) => {
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
    }
};
EventsPage.ctorParameters = () => [
    { type: src_app_services_database_visit_event_service__WEBPACK_IMPORTED_MODULE_4__.VisitEventService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_5__.SlidesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__.GeolocationService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController }
];
EventsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: "app-events",
        template: _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_events_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_events_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
    // export class EventsPage implements OnInit, OnDestroy {
], EventsPage);



/***/ }),

/***/ 31650:
/*!***********************************************************************!*\
  !*** ./src/app/pages/selling-points/selling-points-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellingPointsPageRoutingModule": () => (/* binding */ SellingPointsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _selling_points_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selling-points.page */ 2399);




const routes = [
    {
        path: '',
        component: _selling_points_page__WEBPACK_IMPORTED_MODULE_0__.SellingPointsPage
    }
];
let SellingPointsPageRoutingModule = class SellingPointsPageRoutingModule {
};
SellingPointsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SellingPointsPageRoutingModule);



/***/ }),

/***/ 12099:
/*!***************************************************************!*\
  !*** ./src/app/pages/selling-points/selling-points.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellingPointsPageModule": () => (/* binding */ SellingPointsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _selling_points_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selling-points-routing.module */ 31650);
/* harmony import */ var _selling_points_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selling-points.page */ 2399);







let SellingPointsPageModule = class SellingPointsPageModule {
};
SellingPointsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _selling_points_routing_module__WEBPACK_IMPORTED_MODULE_0__.SellingPointsPageRoutingModule
        ],
        declarations: [_selling_points_page__WEBPACK_IMPORTED_MODULE_1__.SellingPointsPage]
    })
], SellingPointsPageModule);



/***/ }),

/***/ 2399:
/*!*************************************************************!*\
  !*** ./src/app/pages/selling-points/selling-points.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellingPointsPage": () => (/* binding */ SellingPointsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_selling_points_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./selling-points.page.html */ 54559);
/* harmony import */ var _selling_points_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selling-points.page.scss */ 42488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 39337);






let SellingPointsPage = class SellingPointsPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        console.log(this.instagram, this.tickAntel, this.facebook, this.whatsapp);
    }
    cancelar() {
        const modal = this.modalCtrl.dismiss();
    }
    openTickAntel() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.tickAntel });
    }
    openInstagram() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.instagram });
    }
    openFacebook() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.facebook });
    }
    openWhatsapp() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.whatsapp });
    }
};
SellingPointsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
SellingPointsPage.propDecorators = {
    instagram: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    tickAntel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    facebook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    whatsapp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SellingPointsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-selling-points',
        template: _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_selling_points_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_selling_points_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SellingPointsPage);



/***/ }),

/***/ 89448:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/event-detail/event-detail.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"information\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        defaultHref=\"tabs/events\"\n        (click)=\"salir()\"\n        color=\"back\"\n        text=\"\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"back\" id=\"nombre\">{{titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"padre\" id=\"event-detail-container\">\n    <div class=\"diva\">\n      <app-preload-details\n        [url]=\"imagen\"\n        [alt]=\"titulo\"\n        [urlPreload]=\"preloadImage\"\n        [clase]=\"preloadClass\"\n      ></app-preload-details>\n    </div>\n    <section>\n      <div class=\"cuenta-regresiva\" *ngIf=\"day !== 0 || hours !== 0 || minutes !== 0 || seconds !== 0, else start\">\n        <div class=\"time\">\n          <ul class=\"time-list\">\n            <li id=\"event-detail-container\" class=\"count-bg-one radius\">\n              <span id=\"days\">{{day}}</span>Dias\n            </li>\n            <li id=\"event-detail-container\" class=\"count-bg-two radius\">\n              <span id=\"hours\">{{hours}}</span>Horas\n            </li>\n            <li id=\"event-detail-container\" class=\"count-bg-three radius\">\n              <span id=\"minutes\">{{minutes}}</span>Minutos\n            </li>\n            <li id=\"event-detail-container\" class=\"count-bg-four radius\">\n              <span id=\"seconds\">{{seconds}}</span>Segundos\n            </li>\n          </ul>\n        </div>\n      </div>\n      <ng-template #start>\n        <div class=\"event_start\">\n          Evento en curso\n        </div>\n      </ng-template>\n    </section>\n    <div class=\"ubicacion\">\n      <div id=\"event-detail-container\" class=\"dir\">\n        <div\n          id=\"event-detail-container\"\n          class=\"div-ubicacion\"\n          (click)=\"openMap()\"\n        >\n          {{ lugar }}\n        </div>\n        <i class=\"fi fi-rr-map-marker mark-info\"></i>{{ direccion }}\n      </div>\n    </div>\n    <div class=\"fecha-hora\">\n      <div class=\"fecha\">\n        <div id=\"event-detail-container\" class=\"div-fecha\">Fecha</div>\n        <div class=\"fecha-hora_div\">\n          <ion-icon name=\"calendar-outline\" class=\"mark-info\"></ion-icon>{{fecha\n          | date: 'dd.MM.yyyy'}}\n        </div>\n        <div\n          class=\"fecha-hora_div\"\n          *ngIf=\"!dateControl\"\n        >\n          <ion-icon name=\"calendar-outline\" class=\"mark-info\"></ion-icon\n          >{{fechaFin | date: 'dd.MM.yyyy'}}\n        </div>\n      </div>\n      <div class=\"hora\">\n        <div id=\"event-detail-container\" class=\"div-hora\">Hora</div>\n        <div class=\"fecha-hora_div\" *ngIf=\"fecha !== fechaFin\">\n          <ion-icon name=\"time-outline\" class=\"mark-info\"></ion-icon>{{fecha |\n          date:'HH:mm'}} <span *ngIf=\"!controlHour\">a {{fechaFin | date:'HH:mm'}}</span>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"descripcion\"\n      id=\"description-event\"\n      [innerHTML]=\"descripcion\"\n    ></div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"ticket\">\n    <div *ngIf=\"precioUnico && precio > 0\" class=\"entradas\">\n      <div id=\"event-detail-container\" class=\"entradas_div\">Valor ticket</div>\n      <div id=\"event-detail-container\" class=\"precios_div\">\n        {{ moneda }}&nbsp;{{ precio }}\n      </div>\n    </div>\n    <div *ngIf=\"precioUnico === false && precio > 0\" class=\"entradas\">\n      <div id=\"event-detail-container\" class=\"entradas_div\">Desde</div>\n      <div id=\"event-detail-container\" class=\"precios_div\">\n        {{ moneda }}&nbsp;{{ precio }}\n      </div>\n    </div>\n    <div *ngIf=\"precio === 0\" class=\"entradas\">\n      <div id=\"event-detail-container\" class=\"entradas_div\">Entrada</div>\n      <div id=\"event-detail-container\" class=\"precios_div\">Gratis</div>\n    </div>\n    <div\n      class=\"precio\"\n      (click)=\"openModalSellingPoint()\"\n    >\n      <div><i class=\"fas fa-ticket-alt mark-info\"></i></div>\n      <div id=\"event-detail-container\" class=\"puntos-venta\">\n        ver puntos de venta\n      </div>\n    </div>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 81470:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/events/events.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"slider\">\n      <ion-slides\n        class=\"sliderPrimero setHeight\"\n        scrollbar=\"false\"\n        pager=\"false\"\n        [options]=\"slideOpts\"\n      >\n        <ion-slide *ngFor=\"let item of sliderEvents\" class=\"sliderHijo\">\n          <a\n            *ngIf=\"item.link !== null && item.link !== '' && item.link !== ' ' && item.link !== undefined\"\n            href=\"{{ item.link }}\"\n            class=\"link\"\n          >\n            <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n              <ion-fab-button color=\"dark\">\n                <ion-icon\n                  *ngIf=\"item.linkTipo !== 'web'\"\n                  name=\"logo-{{ item.linkTipo }}\"\n                  class=\"icon-link\"\n                ></ion-icon>\n                <ion-icon\n                  *ngIf=\"item.linkTipo === 'web'\"\n                  name=\"globe-outline\"\n                  class=\"icon-link\"\n                ></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n          </a>\n          <app-preload\n            [url]=\"item.imagen.url\"\n            [alt]=\"item.imagen.name\"\n            [urlPreload]=\"preloadImage\"\n          ></app-preload>\n        </ion-slide>\n      </ion-slides>\n      <!-- =========>=>=>=> Filtro =========>=>=>=> -->\n      <div class=\"filter_place\">\n        <ion-label\n          *ngIf=\"!selectdistancia && (optionLocation === null || optionLocation === 'localidad' || optionLocation === '')\"\n          (click)=\"changeFilterLocation()\"\n          >localidad</ion-label\n        >\n        <ion-label\n          *ngIf=\"!selectdistancia && (optionLocation !== null && optionLocation !== 'localidad' && optionLocation !== '')\"\n          class=\"open_acordeon\"\n          (click)=\"changeFilterLocation()\"\n          >{{ optionLocation }}</ion-label\n        >\n        <img *ngIf=\"!selectdistancia\" src=\"/assets/icon/exchange.png\" alt=\"\" />\n        <ion-label\n          *ngIf=\"(optionType === null || optionType === 'tipo' || optionType === '')\"\n          (click)=\"changeFilterType()\"\n          >tipo</ion-label\n        >\n        <ion-label\n          *ngIf=\"(optionType !== null && optionType !== 'tipo' && optionType !== '')\"\n          (click)=\"changeFilterType()\"\n          class=\"open_acordeon\"\n          >{{ optionType }}</ion-label\n        >\n        <img src=\"/assets/icon/exchange.png\" alt=\"\" />\n        <ion-label\n          *ngIf=\"((optionDateStart === null || optionDateStart === 'fecha' || optionDateStart === '') && (optionDateEnd === null || optionDateEnd === 'fecha' || optionDateEnd === ''))\"\n          (click)=\"changeFilterDate()\"\n          >fecha</ion-label\n        >\n        <ion-label\n          *ngIf=\"((optionDateStart !== null && optionDateStart !== 'fecha' && optionDateStart !== '') || (optionDateEnd !== null && optionDateEnd !== 'fecha' && optionDateEnd !== ''))\"\n          (click)=\"changeFilterDate()\"\n          class=\"open_acordeon date_filter\"\n        >\n          <span *ngIf=\"optionDateStart !== null && optionDateStart !== ''\"\n            >desde {{ optionDateStart | date:'dd.MM' }}</span\n          ><br />\n          <span *ngIf=\"optionDateEnd !== null && optionDateEnd !== ''\"\n            >hasta {{ optionDateEnd | date:'dd.MM' }}</span\n          ></ion-label\n        >\n      </div>\n\n      <div>\n        <form [formGroup]=\"filterForm\" class=\"form_filter\">\n          <div *ngIf=\"isFilterDate\">\n            <!-- Filtro por Fecha  -->\n            <div class=\"filter_name\">\n              <span>Fecha</span>\n            </div>\n            <div>\n              <div class=\"filter_list\">\n                <ion-datetime\n                  (ionChange)=\"filterEvento()\"\n                  mode=\"ios\"\n                  placeholder=\"desde\"\n                  doneText=\"Seleccionar\"\n                  cancelText=\"Cancelar\"\n                  monthShortNames=\"{{monthShortNames}}\"\n                  min=\"{{ fullDay }}\"\n                  displayFormat=\"DD MMM YYYY\"\n                  yearValues=\"{{ customYearValues }}\"\n                  formControlName=\"fecha_inicio\"\n                >\n                  <!-- [ngModel]=\"fecha_inicio\"   -->\n                </ion-datetime>\n              </div>\n              <div class=\"filter_list\">\n                <ion-datetime\n                  (ionChange)=\"filterEvento()\"\n                  mode=\"ios\"\n                  placeholder=\"hasta\"\n                  doneText=\"Seleccionar\"\n                  cancelText=\"Cancelar\"\n                  monthShortNames=\"{{monthShortNames}}\"\n                  min=\"{{ fullDayNext }}\"\n                  displayFormat=\"DD MMM YYYY\"\n                  yearValues=\"{{ customYearValues }}\"\n                  formControlName=\"fecha_fin\"\n                >\n                  <!-- [ngModel]=\"fecha_fin\"   -->\n                </ion-datetime>\n              </div>\n            </div>\n          </div>\n          <!-- Filtro por Fecha  -->\n          <!-- Filtro por Localidad  -->\n          <div *ngIf=\"!selectdistancia && isFilterLocation\">\n            <div class=\"filter_name\">\n              <span>Localidad</span>\n            </div>\n            <div>\n              <ion-list class=\"list_type\" inset=\"true\">\n                <ion-radio-group\n                  (ionChange)=\"filterEvento()\"\n                  formControlName=\"localidad\"\n                  class=\"type_border\"\n                >\n                  <ion-item class=\"filter_list\" lines=\"none\">\n                    <ion-text>Todo</ion-text>\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\n                  </ion-item>\n                  <ion-item\n                    class=\"filter_list\"\n                    lines=\"none\"\n                    *ngFor=\"let loc of lista_localidades_eventos\"\n                  >\n                    <ion-text>{{ loc }}</ion-text>\n                    <ion-radio slot=\"end\" value=\"{{ loc }}\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            </div>\n          </div>\n          <!-- filtro por Localidad -->\n\n          <!-- filtro por Tipo -->\n          <div *ngIf=\"isFilterType\">\n            <div class=\"filter_name\">\n              <span>Tipo</span>\n            </div>\n            <div>\n              <ion-list class=\"list_type\" inset=\"true\">\n                <ion-radio-group\n                  (ionChange)=\"filterEvento()\"\n                  formControlName=\"tipo\"\n                  class=\"type_border\"\n                >\n                  <ion-item class=\"filter_list\" lines=\"none\">\n                    <ion-text>Todo</ion-text>\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\n                  </ion-item>\n                  <ion-item\n                    class=\"filter_list\"\n                    lines=\"none\"\n                    *ngFor=\"let cry of lista_tipos_eventos\"\n                  >\n                    <ion-text>{{ cry }}</ion-text>\n                    <ion-radio slot=\"end\" value=\"{{ cry }}\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            </div>\n          </div>\n          <!-- Filtro por Tipo -->\n        </form>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list>\n      <ng-container *ngFor=\"let item of eventos | filterEvents1:dataform\">\n        <ng-container *ngIf=\"item.vacio !== 1\">\n          <ion-item\n            *ngIf=\"(item.distanciaNumber <= dist || (dep != null && !this.dbService.noData && item.departamento === dep))\"\n            class=\"event\"\n            (click)=\"openModalDetailEvent(\n          item.id, \n          item.fechaInicio, \n          item.nombre, \n          item.descripcion, \n          item['imagen'].url, \n          item.lugar, \n          item['ubicacion'].lat, \n          item['ubicacion'].lng, \n          item.fechaFin, \n          item.instagram, \n          item.tickAntel, \n          item.facebook, \n          item.whatsapp, \n          item.moneda, \n          item.precio, \n          item.precioUnico,\n          item.direccion)\"\n          >\n            <ion-avatar item-start class=\"image-event\">\n              <app-preload-list\n                [url]=\"item.imagen.url\"\n                [urlPreload]=\"preloadImage_list\"\n                [clase]=\"preloadClase\"\n                [alt]=\"item.nombre\"\n              >\n              </app-preload-list>\n            </ion-avatar>\n            <div class=\"info-event\">\n              <div class=\"fecha\">\n                {{item.fechaInicio | date:'dd.MM.yyyy - HH:mm'}} hs\n              </div>\n              <div class=\"titulo\">{{item.nombre}}</div>\n              <div class=\"descripcion\">\n                {{ item.distancia | formatDistancia}}\n              </div>\n            </div>\n          </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"item.vacio === 1\">\n          <div class=\"empty\">\n            <i class=\"fi fi-rr-sad icon_empty\"></i>\n            <div class=\"text_empty\">\n              No hay eventos para mostrar con el filtro seleccionado\n            </div>\n          </div>\n        </ng-container>\n      </ng-container>\n    </ion-list>\n\n    <ion-list *ngIf=\"eventos.length === 0 && !this.dbService.noData\">\n      <ng-container *ngFor=\"let item of [1,2,3,4,5,6]\">\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text\n                animated\n                style=\"width: 80%\"\n              ></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text\n                animated\n                style=\"width: 60%\"\n              ></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text\n                animated\n                style=\"width: 30%\"\n              ></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n\n    <div *ngIf=\"this.dbService.noData && dist === null\" class=\"empty\">\n      <i class=\"fi fi-rr-sad icon_empty\"></i>\n      <div class=\"text_empty\">No existen eventos en {{ dep }}</div>\n    </div>\n\n    <div *ngIf=\"!this.dbService.controlDistance && dist !== null\" class=\"empty\">\n      <i class=\"fi fi-rr-sad icon_empty\"></i>\n      <div class=\"text_empty\">\n        No existen eventos en el rango de {{ dist }} km\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 54559:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/selling-points/selling-points.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"selling-points-title\">\n    <p class=\"selling_points_event title_selling\">Puntos de venta</p>\n    <ion-icon name=\"close-outline\" (click)=\"cancelar()\"></ion-icon>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-img\n          *ngIf=\"tickAntel !== null && tickAntel !== undefined\"\n          src=\"/assets/selling-point/ticket-color.png\"\n          (click)=\"openTickAntel()\"\n        ></ion-img>\n        <ion-img\n          *ngIf=\"tickAntel === null || tickAntel === undefined\"\n          src=\"/assets/selling-point/ticket-byn.png\"\n        >\n        </ion-img>\n        <ion-text>\n          <p class=\"selling_points_event\">Tickantel</p>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img\n          *ngIf=\"whatsapp !== null && whatsapp !== undefined\"\n          src=\"/assets/selling-point/wpp-color.png\"\n          (click)=\"openWhatsapp()\"\n        ></ion-img>\n        <ion-img\n          *ngIf=\"whatsapp === null || whatsapp === undefined\"\n          src=\"/assets/selling-point/wpp-byn.png\"\n        ></ion-img>\n        <ion-text>\n          <p class=\"selling_points_event\">WhatsApp</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-img\n          *ngIf=\"instagram !== null && instagram !== undefined\"\n          src=\"/assets/selling-point/ig.png\"\n          (click)=\"openInstagram()\"\n        ></ion-img>\n        <ion-img\n          *ngIf=\"instagram === null || instagram === undefined\"\n          src=\"/assets/selling-point/ig-byn.png\"\n        ></ion-img>\n        <ion-text>\n          <p class=\"selling_points_event\">Instagram</p>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img\n          *ngIf=\"facebook !== null && facebook !== undefined\"\n          src=\"/assets/selling-point/fb.svg\"\n          (click)=\"openFacebook()\"\n        ></ion-img>\n        <ion-img\n          *ngIf=\"facebook === null || facebook === undefined\"\n          src=\"/assets/selling-point/fb-byn.png\"\n        ></ion-img>\n        <ion-text>\n          <p class=\"selling_points_event\">Facebook</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 74682:
/*!***********************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  z-index: 0;\n}\nion-title {\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n}\n.padre {\n  width: 100%;\n  height: auto;\n  padding: 3% 3% 0 3%;\n}\n.foto > img {\n  width: 100%;\n  height: auto;\n  border-radius: 5px 5px 0 0;\n}\n.fecha-hora {\n  display: flex;\n  justify-content: space-between;\n}\n.ubicacion {\n  display: flex;\n  border-radius: 5px;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 6px;\n  padding: 15px;\n  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  color: #000;\n  background-color: var(--ion-color-light);\n}\n.div-ubicacion,\n.div-fecha,\n.div-hora {\n  padding-bottom: 10px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.div-ubicacion {\n  text-decoration: underline;\n  color: var(--ion-color-dark);\n  font-family: \"Poppins\", sans-serif;\n}\n.fecha,\n.hora {\n  width: 49%;\n  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  color: var(--ion-color-dark);\n  border-radius: 5px;\n  padding: 15px;\n  background-color: var(--ion-color-light);\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.mark-info {\n  margin-right: 15px !important;\n  color: var(--ion-color-dark);\n  font-size: 1.2em;\n  font-family: \"Poppins\", sans-serif;\n}\n.dir,\n.fecha-hora_div {\n  font-size: 0.8em;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.descripcion {\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  margin-top: 5px;\n  background-color: var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 15px;\n  font-family: Barlow;\n  font-size: 12px;\n  line-height: 17px;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 50;\n}\n.ticket {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  background-color: var(--ion-color-text);\n  border-top: 10px solid var(--ion-color-back);\n}\n.entradas {\n  width: 35%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.precio {\n  width: 63%;\n  margin: 4px;\n  background-color: var(--ion-color-options);\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.entradas_div {\n  font-size: 0.6em;\n  margin-top: 2px;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.precios_div {\n  font-size: 1.3em;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.puntos-venta {\n  color: #fff;\n  font-weight: 700;\n  font-family: \"Poppins\", sans-serif;\n}\na {\n  text-decoration: underline;\n}\n.event_start {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold;\n  padding: 20px;\n  font-size: 1.3em;\n  color: var(--ion-color-back);\n  background-color: var(--ion-color-party);\n  border-radius: 5px;\n}\nsection {\n  margin: 6px 0 8px 0;\n}\n.time-list {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  text-align: center;\n}\nli {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  width: 23%;\n  border-radius: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n.count-bg-one {\n  background: var(--ion-color-party);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n.count-bg-two {\n  background: var(--ion-color-information);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n.count-bg-three {\n  background: var(--ion-color-favorite);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n.count-bg-four {\n  background: var(--ion-color-circuits);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n#days,\n#hours,\n#minutes,\n#seconds {\n  font-size: 2.5em;\n  font-weight: bold;\n  color: #fff;\n}\n.raduis {\n  font-family: \"Poppins\", sans-serif;\n}\n@media only screen and (max-width: 325px) {\n  .time-list {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFDQSw2RkFBQTtBQUVSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUFBRjtBQUdBOzs7RUFHRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUFGO0FBR0E7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBOztFQUVFLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsaURBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7QUFBRjtBQUdBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBOztFQUVFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUFGO0FBR0E7RUFDRSxpQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBO0VBQ0UsMEJBQUE7QUFBRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLG1CQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUZGO0FBS0E7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTs7OztFQUlFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFLQTtFQUNFLGtDQUFBO0FBRkY7QUFLQTtFQUNFO0lBQ0UsZUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoiZXZlbnQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86d2dodEAyMDAmZGlzcGxheT1zd2FwXCIpO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB6LWluZGV4OiAwO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wYWRyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDMlIDMlIDAgMyU7XG59XG5cbi5mb3RvID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG5cbi5mZWNoYS1ob3JhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udWJpY2FjaW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5kaXYtdWJpY2FjaW9uLFxuLmRpdi1mZWNoYSxcbi5kaXYtaG9yYSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5kaXYtdWJpY2FjaW9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZlY2hhLFxuLmhvcmEge1xuICB3aWR0aDogNDklO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hcmstaW5mbyB7XG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5kaXIsXG4uZmVjaGEtaG9yYV9kaXYge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5kZXNjcmlwY2lvbiB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgZm9udC1mYW1pbHk6IEJhcmxvdztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4udGlja2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRleHQpO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1iYWNrKTtcbn1cblxuLmVudHJhZGFzIHtcbiAgd2lkdGg6IDM1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByZWNpbyB7XG4gIHdpZHRoOiA2MyU7XG4gIG1hcmdpbjogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itb3B0aW9ucyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZW50cmFkYXNfZGl2IHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5wcmVjaW9zX2RpdiB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5wdW50b3MtdmVudGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8vIEN1ZW50YSByZWdyZXNpdmFcblxuLmV2ZW50X3N0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFjayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wYXJ0eSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbjogNnB4IDAgOHB4IDA7XG59XG5cbi50aW1lLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMjMlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb3VudC1iZy1vbmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcGFydHkpO1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb3VudC1iZy10d28ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5mb3JtYXRpb24pO1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb3VudC1iZy10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1mYXZvcml0ZSk7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvdW50LWJnLWZvdXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY2lyY3VpdHMpO1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNkYXlzLFxuI2hvdXJzLFxuI21pbnV0ZXMsXG4jc2Vjb25kcyB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnJhZHVpcyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjVweCkge1xuICAudGltZS1saXN0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 99716:
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "::-webkit-scrollbar {\n  display: none;\n}\n\nion-icon {\n  font-size: 1.5rem;\n  margin-left: 8%;\n  color: var(--ion-color-back);\n}\n\nion-title {\n  color: var(--ion-color-back);\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 5%;\n  justify-content: center;\n}\n\n.location {\n  margin: 10px 0;\n  width: 100%;\n}\n\n.filter {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.event {\n  display: flex;\n  flex-direction: row;\n}\n\n.image-event {\n  width: 42%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 4px;\n}\n\n.info-event {\n  width: 55%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.info-event > div {\n  width: 100%;\n  margin: 0 0 0 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.fecha {\n  font-weight: bold;\n  color: var(--ion-color-favorite);\n  font-size: 0.7em;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: 1em;\n  color: #6b6b6b;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.descripcion {\n  font-size: 0.8em;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.event > .info-event {\n  align-self: flex-start;\n}\n\n.link {\n  z-index: 1500;\n}\n\n.icon-link {\n  margin: 0 !important;\n}\n\n.slider {\n  width: 100%;\n}\n\n.sliderPrimero,\n.sliderHijo,\n.banner,\n.imgSlider {\n  width: 100%;\n}\n\n.sliderPrimero {\n  background-color: #eeeeee;\n}\n\n* {\n  z-index: 0;\n}\n\n.empty {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 50px;\n  height: 35vh;\n  width: auto;\n}\n\n.text_empty {\n  color: #d6d2d1;\n  text-align: center;\n  padding-bottom: 15px;\n  font-size: 1.2em;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.icon_empty {\n  font-size: 5em;\n  color: #d6d2d1;\n}\n\n.filter_place {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin: -30px auto 10px auto;\n  position: relative;\n  z-index: 50;\n  width: 90%;\n  background-color: var(--ion-color-light);\n  padding: 16px;\n  border-radius: 60px;\n}\n\nion-label {\n  font-weight: bold;\n  font-family: \"Poppins\";\n  color: #a1a1a1;\n  font-size: 0.8em;\n}\n\n.form_filter {\n  display: flex;\n  flex-direction: column;\n  margin: 0 5% 5px 5%;\n  z-index: 100;\n  background-color: var(--ion-color-back);\n  border-radius: 16px;\n  box-shadow: 0px 0px 9px -1px rgba(161, 141, 141, 0.75);\n}\n\n.filter_name {\n  padding: 15px 0 15px 15px;\n  font-weight: bold;\n  width: 100%;\n  font-size: 0.95em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n\n.filter_list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 2px solid #ddd;\n  width: 100%;\n  height: 35px;\n  font-size: 0.9em;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n\n.filter_type {\n  width: 100%;\n}\n\n.type_border > .last:last-child {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n}\n\n.list_type {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n  min-height: 30px;\n  max-height: 200px;\n  overflow-y: scroll;\n}\n\n.open_acordeon {\n  color: #fc67ff;\n}\n\n.date_filter {\n  font-size: 0.6rem;\n}\n\nion-radio {\n  --color-checked: #fc67ff;\n}\n\n.list-md {\n  padding: 0 !important;\n}\n\nion-datetime {\n  --placeholder-color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBOzs7O0VBSUUsV0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFHQSxzREFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsMENBQUE7RUFDQSwyQ0FBQTtBQURGOztBQUlBO0VBQ0UsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsMENBQUE7QUFERiIsImZpbGUiOiJldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIDUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvY2F0aW9uIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsdGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cblxuLmV2ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmltYWdlLWV2ZW50IHtcbiAgd2lkdGg6IDQyJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5pbmZvLWV2ZW50IHtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8tZXZlbnQgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uZmVjaGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mYXZvcml0ZSk7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM2YjZiNmI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmRlc2NyaXBjaW9uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5ldmVudCA+IC5pbmZvLWV2ZW50IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmxpbmsge1xuICB6LWluZGV4OiAxNTAwO1xufVxuXG4uaWNvbi1saW5rIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRlclByaW1lcm8sXG4uc2xpZGVySGlqbyxcbi5iYW5uZXIsXG4uaW1nU2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXJQcmltZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuKiB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggNTBweDtcbiAgaGVpZ2h0OiAzNXZoO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnRleHRfZW1wdHkge1xuICBjb2xvcjogI2Q2ZDJkMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pY29uX2VtcHR5IHtcbiAgZm9udC1zaXplOiA1ZW07XG4gIGNvbG9yOiAjZDZkMmQxO1xufVxuXG4vL2ZpbHRyb1xuLmZpbHRlcl9wbGFjZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IC0zMHB4IGF1dG8gMTBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDUwO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uZm9ybV9maWx0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAgNSUgNXB4IDUlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAtMXB4IHJnYmEoMTYxLCAxNDEsIDE0MSwgMC43NSk7XG59XG5cbi5maWx0ZXJfbmFtZSB7XG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZpbHRlcl9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5maWx0ZXJfdHlwZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHlwZV9ib3JkZXIgPiAubGFzdDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdF90eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ub3Blbl9hY29yZGVvbiB7XG4gIGNvbG9yOiAjZmM2N2ZmO1xufVxuXG4uZGF0ZV9maWx0ZXIge1xuICBmb250LXNpemU6IDAuNnJlbTtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmM2N2ZmO1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufSJdfQ== */";

/***/ }),

/***/ 42488:
/*!***************************************************************!*\
  !*** ./src/app/pages/selling-points/selling-points.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  height: 100px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n  color: #000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nh3 {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  width: 100%;\n  --border-radius: none;\n}\n\nion-img {\n  width: 30%;\n  height: auto;\n}\n\nion-text > p {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  font-size: 0.9em;\n  margin-top: 3px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.selling-points-title {\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--ion-color-information);\n}\n\n.selling-points-title > p {\n  width: 90%;\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.title_selling {\n  color: var(--ion-color-back);\n}\n\n.close {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxpbmctcG9pbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic2VsbGluZy1wb2ludHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5heyBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1ncmlkIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tdGV4dCA+IHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2VsbGluZy1wb2ludHMtdGl0bGUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5mb3JtYXRpb24pO1xufVxuXG4uc2VsbGluZy1wb2ludHMtdGl0bGUgPiBwIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGVfc2VsbGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFjayk7XG59XG5cbi5jbG9zZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_events_module_ts.js.map