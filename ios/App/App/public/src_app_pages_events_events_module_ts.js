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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event-detail.page.html */ 89448);
/* harmony import */ var _event_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-detail.page.scss */ 74682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _selling_points_selling_points_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selling-points/selling-points.page */ 2399);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 39337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);











let EventDetailPage = class EventDetailPage {
    constructor(modalCtrl, socialSharing, gaService) {
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.gaService = gaService;
        this._second = 1000;
        this._minute = this._second * 60;
        this._hour = this._minute * 60;
        this._day = this._hour * 24;
        this.source = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(0, 1000);
        /**url load  */
        this.preloadImage = '/assets/load_1.30.gif';
        /**clase preload */
        this.preloadClass = 'img-principal';
        /**controla si fecha inicio es igual a fecha fin */
        this.dateControl = false;
        /**controla si fecha inicio es identica a fecha fin  */
        this.controlHour = false;
        /**url para compartir */
        this.shareURL = 'https://developer-dominga.web.app/share-event/';
        /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngOnInit() {
        document.title = 'Detalle de Evento';
        this.gaService.googleAnalyticsPantallas('detalle_de_evento', this.titulo);
        this.clock = this.source
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe((t) => {
            this.now = new Date();
            this.end = new Date(this.fecha);
            this.showDate();
        });
        const f = new Date(this.fecha);
        const ff = new Date(this.fechaFin);
        const fi = f.getDate() + '-' + f.getMonth() + '-' + f.getFullYear();
        const ffn = ff.getDate() + '-' + ff.getMonth() + '-' + ff.getFullYear();
        if (fi === ffn)
            this.dateControl = true;
        if (this.fecha.valueOf() === this.fechaFin.valueOf())
            this.controlHour = true;
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**comparte evento y envía evento compartir a google analytics
     * @param tipo nombre de pantalla compartida
     * @param nombre nombre de evento compartido
     * @param id id de evento compartido
     */
    socialSharingEvent(tipo, nombre, id) {
        this.gaService.googleAnalyticsCompartir(tipo, tipo + '_' + nombre);
        this.socialSharing.share(nombre, null, null, this.shareURL + id);
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
        this.gaService.googleAnalyticsMapa(this.titulo);
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({
            url: 'https://www.google.com/maps/search/?api=1&query=' +
                this.latitud +
                ',' +
                this.longitud,
        });
    }
    openModalSellingPoint() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modalSellingPoint = yield this.modalCtrl.create({
                component: _selling_points_selling_points_page__WEBPACK_IMPORTED_MODULE_2__.SellingPointsPage,
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
            yield modalSellingPoint.present();
        });
    }
};
EventDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_5__.GoogleAnalyticsService }
];
EventDetailPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['id',] }],
    fecha: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['fecha',] }],
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['titulo',] }],
    descripcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['descripcion',] }],
    imagen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['imagen',] }],
    lugar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['lugar',] }],
    latitud: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['latitud',] }],
    longitud: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['longitud',] }],
    fechaFin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['fechaFin',] }],
    instagram: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['instagram',] }],
    tickAntel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['tickAntel',] }],
    facebook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['facebook',] }],
    whatsapp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['whatsapp',] }],
    moneda: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['moneda',] }],
    precio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['precio',] }],
    precioUnico: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['precioUnico',] }],
    direccion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['direccion',] }],
    localidad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['localidad',] }],
    departamento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input, args: ['departamento',] }]
};
EventDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-event-detail',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_events_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./events.page.html */ 81470);
/* harmony import */ var _events_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page.scss */ 99716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-detail/event-detail.page */ 3727);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 60568);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var src_app_services_database_visit_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database/visit-event.service */ 73070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database/slides.service */ 60696);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4276);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);
















let EventsPage = class EventsPage {
    constructor(veService, //Servicio contador de visitas eventos.
    modalCtrl, dbService, sliderSvc, fb, geolocationSvc, http, alertCtrl, gaService) {
        this.veService = veService;
        this.modalCtrl = modalCtrl;
        this.dbService = dbService;
        this.sliderSvc = sliderSvc;
        this.fb = fb;
        this.geolocationSvc = geolocationSvc;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.gaService = gaService;
        this.textoBuscar = '';
        this.today = new Date();
        this.now = new Date();
        /**url load  */
        this.preloadImage = '/assets/load.gif';
        /**url load  */
        this.preloadImage_list = '/assets/load_1.30.gif';
        /** clase de preload list */
        this.preloadClase = 'img-evento';
        this.eventos = [];
        this.eventos_xdptoSelection = [];
        this.dep = null;
        /**captura los datos del formulario de filtros */
        this.dataform = '';
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
        this.formatDateEnd = null;
        /**se guardan los sliders de la pantalla eventos */
        this.sliderEvents = [];
        this.filterForm = this.fb.group({
            tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            fecha_fin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            fecha_inicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        });
        this.isFilter = false;
        this.anioActual = 0;
        this.customYearValues = [];
        this.customDayShortNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        this.monthShortNames = [
            'Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Set, Oct, Nov, Dic',
        ];
        this.month = 0;
        this.fullDay = '';
        this.fullDayNext = '';
        this.month_aux = '';
        this.month_auxNext = '';
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
    resetSlide() {
        this.slide.startAutoplay();
    }
    endSlide() {
        this.slide.stopAutoplay();
    }
    close() {
        this.datetime.cancel(true);
    }
    confirm() {
        this.datetime.confirm(true);
    }
    /**
     * Muestra el modal con descripción más detallada del evento seleccionado
     * @param id - id del evento
     * @param fecha - fecha del evento
     * @param titulo - titulo del evento
     * @param descripcion - descripcion del evento
     * @param imagen - imagen del evento
     */
    openModalDetailEvent(id, fecha, titulo, descripcion, imagen, lugar, latitud, longitud, fechaFin, instagram, tickAntel, facebook, whatsapp, moneda, precio, precioUnico, direccion, localidad, departamento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.contadorVisitas(id);
            const modal = yield this.modalCtrl.create({
                component: _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_2__.EventDetailPage,
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
                    localidad: localidad,
                    departamento: departamento
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((depto) => depto.features[depto.features.length - 2].text), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$));
    }
    /**endpoint de mapbox para calcular distancia entre dos puntos teniendo en cuenta las calles */
    getDistance(lngUser, latUser, lngPlace, latPlace) {
        return this.http.get('https://api.mapbox.com/directions/v5/mapbox/driving/' +
            lngUser +
            ',' +
            latUser +
            ';' +
            lngPlace +
            ',' +
            latPlace +
            '?overview=full&geometries=geojson&access_token=pk.eyJ1IjoiY2FzYWRvbWluZ2EiLCJhIjoiY2s3NTlzajFoMDVzZTNlcGduMWh0aml3aSJ9.JcZFoGdIQnz3hSg2p4FGkA');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'FECHA INCORRECTA',
                message: 'Fecha desde no puede ser mayor que fecha hasta. Seleccione una fecha menor o igual a ' + this.formatDateEnd,
                mode: 'ios',
                animated: true,
                buttons: [
                    {
                        text: 'Cerrar',
                    },
                ],
            });
            yield alert.present();
        });
    }
    filterEvento(pantalla, tipo) {
        this.gaService.googleAnalyticsFiltrosPantallas(pantalla, tipo);
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
        if (this.optionDateStart !== '' && this.optionDateEnd !== '') {
            if (this.optionDateStart > this.optionDateEnd ||
                this.optionDateEnd < this.optionDateStart) {
                this.optionDateStart = null;
                this.dataform.fecha_inicio = null;
                this.formatDateEnd = new Date(this.optionDateEnd).toLocaleDateString();
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
        if (this.dataform.localidad === '')
            this.optionLocation = 'localidad';
        if (this.dataform.tipo === '')
            this.optionType = 'tipo';
        console.log('form', this.filterForm.value);
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
        return localStorage.getItem('distanceActivo') ? true : false;
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
     * @param localidad Nombre de la "localidad" donde se realiza el Evento.
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
        document.title = "Eventos";
        this.gaService.googleAnalyticsPantallas('eventos');
        this.sliderSvc.getSliders();
        this.anioActual = new Date().getFullYear();
        this.month = this.today.getMonth() + 1;
        this.day = this.today.getDate().toString();
        if (this.day.length === 1) {
            this.day = ('0' + this.today.getDate()).toString();
        }
        else {
            this.day = this.today.getDate().toString();
        }
        if (this.month < 10) {
            this.month_aux = ('0' + (this.today.getMonth() + 1)).toString();
        }
        else {
            this.month_aux = (this.today.getMonth() + 1).toString();
        }
        this.fullDay = (this.anioActual +
            '-' +
            this.month_aux +
            '-' +
            this.day).toString();
        let yearNext = this.nextDay.getFullYear();
        let monthNext = this.nextDay.getMonth() + 1;
        let nextDate = this.nextDay.getDate().toString();
        if (nextDate.length === 1) {
            nextDate = ('0' + this.nextDay.getDate()).toString();
        }
        else {
            nextDate = this.nextDay.getDate().toString();
        }
        if (monthNext < 10) {
            this.month_auxNext = ('0' + (this.nextDay.getMonth() + 1)).toString();
        }
        else {
            this.month_auxNext = (this.nextDay.getMonth() + 1).toString();
        }
        this.fullDayNext = (yearNext +
            '-' +
            this.month_auxNext +
            '-' +
            nextDate).toString();
        this.customYearValues = [];
        for (let i = 0; i < 3; i++) {
            this.customYearValues.push(this.anioActual);
            this.anioActual = this.anioActual + 1;
        }
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        if (localStorage.getItem('deptoActivo') != undefined &&
            localStorage.getItem('deptoActivo') != null) {
            this.dist = null;
            this.dep = localStorage.getItem('deptoActivo');
        }
        else if (localStorage.getItem('distanceActivo') != undefined &&
            localStorage.getItem('distanceActivo') != null) {
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((slider) => slider.filter((s) => s.pantalla === 'eventos')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$))
            .subscribe((res) => {
            this.sliderEvents = res;
        });
        this.resetSlide();
        /******** RXJS PARA TRAER LUGARES CON INFO COMPLETA ************************************/
        let posDep = this.geolocationSvc.posicion$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)((pos) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(pos), this.getLocation(pos.longitud, pos.latitud));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$));
        let dto = posDep.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)((res) => this.dbService.getEventos(res[1])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$));
        if (this.geolocationSvc.posicion$.value !== null) {
            dto.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$)).subscribe((res) => {
                this.eventos = [];
                this.eventos = res;
            });
        }
        else {
            this.dbService
                .getEventos(this.dep)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$))
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
        this.endSlide();
    }
};
EventsPage.ctorParameters = () => [
    { type: src_app_services_database_visit_event_service__WEBPACK_IMPORTED_MODULE_4__.VisitEventService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_5__.SlidesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__.GeolocationService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_8__.GoogleAnalyticsService }
];
EventsPage.propDecorators = {
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonSlides,] }],
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonDatetime,] }]
};
EventsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-events',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_events_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_selling_points_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./selling-points.page.html */ 54559);
/* harmony import */ var _selling_points_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selling-points.page.scss */ 42488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 39337);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);







let SellingPointsPage = class SellingPointsPage {
    constructor(modalCtrl, gaService) {
        this.modalCtrl = modalCtrl;
        this.gaService = gaService;
    }
    ngOnInit() {
        document.title = 'Puntos de Venta Eventos';
        this.gaService.googleAnalyticsPantallas('puntos_de_venta_eventos');
    }
    cancelar() {
        const modal = this.modalCtrl.dismiss();
    }
    openTickAntel() {
        this.gaService.googleAnalyticsRedesSociales('eventos', 'tickantel');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.tickAntel });
    }
    openInstagram() {
        this.gaService.googleAnalyticsRedesSociales('eventos', 'instagram');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.instagram });
    }
    openFacebook() {
        this.gaService.googleAnalyticsRedesSociales('eventos', 'facebook');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.facebook });
    }
    openWhatsapp() {
        this.gaService.googleAnalyticsRedesSociales('eventos', 'whatsapp');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: this.whatsapp });
    }
};
SellingPointsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__.GoogleAnalyticsService }
];
SellingPointsPage.propDecorators = {
    instagram: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    tickAntel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    facebook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    whatsapp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
SellingPointsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-selling-points',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_selling_points_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"information\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        defaultHref=\"tabs/events\"\r\n        (click)=\"salir()\"\r\n        color=\"back\"\r\n        text=\"\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"back\" id=\"nombre\">{{titulo}}</ion-title>\r\n    <ion-icon\r\n      color=\"back\"\r\n      slot=\"end\"\r\n      class=\"share\"\r\n      name=\"share-social-sharp\"\r\n      (click)=\"socialSharingEvent('evento', titulo, id)\"\r\n    ></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"padre\" id=\"event-detail-container\">\r\n    <div class=\"diva\">\r\n      <app-preload-details\r\n        [url]=\"imagen\"\r\n        [alt]=\"titulo\"\r\n        [urlPreload]=\"preloadImage\"\r\n        [clase]=\"preloadClass\"\r\n      ></app-preload-details>\r\n    </div>\r\n    <section>\r\n      <div\r\n        class=\"cuenta-regresiva\"\r\n        *ngIf=\"day !== 0 || hours !== 0 || minutes !== 0 || seconds !== 0, else start\"\r\n      >\r\n        <div class=\"time\">\r\n          <ul class=\"time-list\">\r\n            <li id=\"event-detail-container\" class=\"count-bg-one radius\">\r\n              <span id=\"days\">{{day}}</span>Dias\r\n            </li>\r\n            <li id=\"event-detail-container\" class=\"count-bg-two radius\">\r\n              <span id=\"hours\">{{hours}}</span>Horas\r\n            </li>\r\n            <li id=\"event-detail-container\" class=\"count-bg-three radius\">\r\n              <span id=\"minutes\">{{minutes}}</span>Minutos\r\n            </li>\r\n            <li id=\"event-detail-container\" class=\"count-bg-four radius\">\r\n              <span id=\"seconds\">{{seconds}}</span>Segundos\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <ng-template #start>\r\n        <div class=\"event_start\">Evento en curso</div>\r\n      </ng-template>\r\n    </section>\r\n    <div class=\"ubicacion\">\r\n      <div id=\"event-detail-container\" class=\"dir\">\r\n        <div\r\n          id=\"event-detail-container\"\r\n          class=\"div-ubicacion\"\r\n          (click)=\"openMap()\"\r\n        >\r\n          {{ lugar }}\r\n        </div>\r\n        <div class=\"lugar\">\r\n          <div><i class=\"fi fi-rr-map-marker mark-info\"></i><br /></div>\r\n          <div>\r\n            <div>{{ direccion }}</div>\r\n            <div>{{ localidad }} - {{ departamento }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"fecha-hora\">\r\n      <div class=\"fecha\">\r\n        <div id=\"event-detail-container\" class=\"div-fecha\">Fecha</div>\r\n        <div class=\"fecha-hora_div\">\r\n          <ion-icon name=\"calendar-outline\" class=\"mark-info\"></ion-icon>{{fecha\r\n          | date: 'dd.MM.yyyy'}}\r\n        </div>\r\n        <div class=\"fecha-hora_div\" *ngIf=\"!dateControl\">\r\n          <ion-icon name=\"calendar-outline\" class=\"mark-info\"></ion-icon\r\n          >{{fechaFin | date: 'dd.MM.yyyy'}}\r\n        </div>\r\n      </div>\r\n      <div class=\"hora\">\r\n        <div id=\"event-detail-container\" class=\"div-hora\">Hora</div>\r\n        <div class=\"fecha-hora_div\" *ngIf=\"fecha !== fechaFin\">\r\n          <ion-icon name=\"time-outline\" class=\"mark-info\"></ion-icon>{{fecha |\r\n          date:'HH:mm'}}\r\n          <span *ngIf=\"!controlHour\">a {{fechaFin | date:'HH:mm'}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"descripcion\"\r\n      id=\"description-event\"\r\n      [innerHTML]=\"descripcion\"\r\n    ></div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <div class=\"ticket\">\r\n    <div *ngIf=\"precioUnico && precio > 0\" class=\"entradas\">\r\n      <div id=\"event-detail-container\" class=\"entradas_div\">Valor ticket</div>\r\n      <div id=\"event-detail-container\" class=\"precios_div\">\r\n        {{ moneda }}&nbsp;{{ precio }}\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"precioUnico === false && precio > 0\" class=\"entradas\">\r\n      <div id=\"event-detail-container\" class=\"entradas_div\">Desde</div>\r\n      <div id=\"event-detail-container\" class=\"precios_div\">\r\n        {{ moneda }}&nbsp;{{ precio }}\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"precio === 0\" class=\"entradas\">\r\n      <div id=\"event-detail-container\" class=\"entradas_div\">Entrada</div>\r\n      <div id=\"event-detail-container\" class=\"precios_div\">Gratis</div>\r\n    </div>\r\n    <div class=\"precio\" (click)=\"openModalSellingPoint()\">\r\n      <div><i class=\"fas fa-ticket-alt mark-info\"></i></div>\r\n      <div id=\"event-detail-container\" class=\"puntos-venta\">\r\n        ver puntos de venta\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-footer>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"slider\">\r\n      <ion-slides\r\n        class=\"sliderPrimero setHeight\"\r\n        scrollbar=\"false\"\r\n        pager=\"false\"\r\n        [options]=\"slideOpts\"\r\n      >\r\n        <ion-slide *ngFor=\"let item of sliderEvents\" class=\"sliderHijo\">\r\n          <a\r\n            *ngIf=\"item.link !== null && item.link !== '' && item.link !== ' ' && item.link !== undefined\"\r\n            href=\"{{ item.link }}\"\r\n            class=\"link\"\r\n          >\r\n            <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n              <ion-fab-button color=\"dark\">\r\n                <ion-icon\r\n                  *ngIf=\"item.linkTipo !== 'web'\"\r\n                  name=\"logo-{{ item.linkTipo }}\"\r\n                  class=\"icon-link\"\r\n                ></ion-icon>\r\n                <ion-icon\r\n                  *ngIf=\"item.linkTipo === 'web'\"\r\n                  name=\"globe-outline\"\r\n                  class=\"icon-link\"\r\n                ></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </a>\r\n          <app-preload\r\n            [url]=\"item.imagen.url\"\r\n            [alt]=\"item.imagen.name\"\r\n            [urlPreload]=\"preloadImage\"\r\n          ></app-preload>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <!-- =========>=>=>=> Filtro =========>=>=>=> -->\r\n      <div class=\"filter_place\">\r\n        <ion-label\r\n          *ngIf=\"!selectdistancia && (optionLocation === null || optionLocation === 'localidad' || optionLocation === '')\"\r\n          (click)=\"changeFilterLocation()\"\r\n          >localidad</ion-label\r\n        >\r\n        <ion-label\r\n          *ngIf=\"!selectdistancia && (optionLocation !== null && optionLocation !== 'localidad' && optionLocation !== '')\"\r\n          class=\"open_acordeon\"\r\n          (click)=\"changeFilterLocation()\"\r\n          >{{ optionLocation }}</ion-label\r\n        >\r\n        <img *ngIf=\"!selectdistancia\" src=\"/assets/icon/exchange.png\" alt=\"\" />\r\n        <ion-label\r\n          *ngIf=\"(optionType === null || optionType === 'tipo' || optionType === '')\"\r\n          (click)=\"changeFilterType()\"\r\n          >tipo</ion-label\r\n        >\r\n        <ion-label\r\n          *ngIf=\"(optionType !== null && optionType !== 'tipo' && optionType !== '')\"\r\n          (click)=\"changeFilterType()\"\r\n          class=\"open_acordeon\"\r\n          >{{ optionType }}</ion-label\r\n        >\r\n        <img src=\"/assets/icon/exchange.png\" alt=\"\" />\r\n        <ion-label\r\n          *ngIf=\"((optionDateStart === null || optionDateStart === 'fecha' || optionDateStart === '') && (optionDateEnd === null || optionDateEnd === 'fecha' || optionDateEnd === ''))\"\r\n          (click)=\"changeFilterDate()\"\r\n          >fecha</ion-label\r\n        >\r\n        <ion-label\r\n          *ngIf=\"((optionDateStart !== null && optionDateStart !== 'fecha' && optionDateStart !== '') || (optionDateEnd !== null && optionDateEnd !== 'fecha' && optionDateEnd !== ''))\"\r\n          (click)=\"changeFilterDate()\"\r\n          class=\"open_acordeon date_filter\"\r\n        >\r\n          <span *ngIf=\"optionDateStart !== null && optionDateStart !== ''\"\r\n            >desde {{ optionDateStart | date:'dd.MM.yyyy' }}</span\r\n          ><br />\r\n          <span *ngIf=\"optionDateEnd !== null && optionDateEnd !== ''\"\r\n            >hasta {{ optionDateEnd | date:'dd.MM.yyyy' }}</span\r\n          ></ion-label\r\n        >\r\n      </div>\r\n\r\n      <div>\r\n        <form [formGroup]=\"filterForm\" class=\"form_filter\">\r\n          <!-- Filtro por Fecha  -->\r\n          <div *ngIf=\"isFilterDate\">\r\n            <div class=\"filter_name\">\r\n              <span>Fecha</span>\r\n            </div>\r\n            <ion-list class=\"list_type_date\">\r\n              <ion-item\r\n                id=\"modal-desde\"\r\n                *ngIf=\"(optionDateStart === null || optionDateStart === 'fecha' || optionDateStart === '')\"\r\n                class=\"filter_list\"\r\n                >desde</ion-item\r\n              >\r\n              <ion-item\r\n                id=\"modal-desde\"\r\n                *ngIf=\"optionDateStart !== null && optionDateStart !== ''\"\r\n                class=\"filter_list\"\r\n                >desde\r\n                <span class=\"date-selected\"\r\n                  >&nbsp;&nbsp;{{ optionDateStart | date:'dd.MM.yyyy' }}</span\r\n                ></ion-item\r\n              >\r\n              <ion-modal trigger=\"modal-desde\">\r\n                <ng-template>\r\n                  <ion-content>\r\n                    <ion-datetime\r\n                      (ionChange)=\"filterEvento('eventos', 'fecha_inicio_evento')\"\r\n                      mode=\"ios\"\r\n                      min=\"{{ fullDay }}\"\r\n                      displayFormat=\"DD MMM YYYY\"\r\n                      yearValues=\"{{ customYearValues }}\"\r\n                      formControlName=\"fecha_inicio\"\r\n                      presentation=\"date\"\r\n                      size=\"cover\"\r\n                    >\r\n                      <ion-buttons slot=\"buttons\">\r\n                        <ion-button color=\"danger\" (click)=\"close()\"\r\n                          >Cancelar</ion-button\r\n                        >\r\n                        <ion-button color=\"primary\" (click)=\"confirm()\"\r\n                          >Seleccionar</ion-button\r\n                        >\r\n                      </ion-buttons>\r\n                    </ion-datetime>\r\n                  </ion-content>\r\n                </ng-template>\r\n              </ion-modal>\r\n              <ion-item\r\n                id=\"modal-hasta\"\r\n                *ngIf=\"(optionDateEnd === null || optionDateEnd === 'fecha' || optionDateEnd === '')\"\r\n                class=\"filter_list\"\r\n                >hasta</ion-item\r\n              >\r\n              <ion-item\r\n                id=\"modal-hasta\"\r\n                *ngIf=\"optionDateEnd !== null && optionDateEnd !== ''\"\r\n                class=\"filter_list\"\r\n                >hasta\r\n                <span class=\"date-selected\"\r\n                  >&nbsp;&nbsp;{{ optionDateEnd | date:'dd.MM.yyyy' }}</span\r\n                ></ion-item\r\n              >\r\n              <ion-modal trigger=\"modal-hasta\">\r\n                <ng-template>\r\n                  <ion-content>\r\n                    <ion-datetime\r\n                      (ionChange)=\"filterEvento('eventos', 'fecha_fin_evento')\"\r\n                      mode=\"ios\"\r\n                      min=\"{{ fullDayNext }}\"\r\n                      displayFormat=\"DD MMM YYYY\"\r\n                      yearValues=\"{{ customYearValues }}\"\r\n                      formControlName=\"fecha_fin\"\r\n                      presentation=\"date\"\r\n                      size=\"cover\"\r\n                    >\r\n                      <ion-buttons slot=\"buttons\">\r\n                        <ion-button color=\"danger\" (click)=\"close()\"\r\n                          >Cancelar</ion-button\r\n                        >\r\n                        <ion-button color=\"primary\" (click)=\"confirm()\"\r\n                          >Seleccionar</ion-button\r\n                        >\r\n                      </ion-buttons>\r\n                    </ion-datetime>\r\n                  </ion-content>\r\n                </ng-template>\r\n              </ion-modal>\r\n            </ion-list>\r\n          </div>\r\n          <!-- Filtro por Fecha  -->\r\n          <!-- Filtro por Localidad  -->\r\n          <div *ngIf=\"!selectdistancia && isFilterLocation\">\r\n            <div class=\"filter_name\">\r\n              <span>Localidad</span>\r\n            </div>\r\n            <div>\r\n              <ion-list class=\"list_type\">\r\n                <ion-radio-group\r\n                  (ionChange)=\"filterEvento('eventos', 'localidad_evento')\"\r\n                  formControlName=\"localidad\"\r\n                  class=\"type_border\"\r\n                >\r\n                  <ion-item class=\"filter_list\" lines=\"none\">\r\n                    <ion-text>Todo</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\r\n                  </ion-item>\r\n                  <ion-item\r\n                    class=\"filter_list\"\r\n                    lines=\"none\"\r\n                    *ngFor=\"let loc of lista_localidades_eventos\"\r\n                  >\r\n                    <ion-text>{{ loc }}</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"{{ loc }}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <!-- filtro por Localidad -->\r\n\r\n          <!-- filtro por Tipo -->\r\n          <div *ngIf=\"isFilterType\">\r\n            <div class=\"filter_name\">\r\n              <span>Tipo</span>\r\n            </div>\r\n            <div>\r\n              <ion-list class=\"list_type\">\r\n                <ion-radio-group\r\n                  (ionChange)=\"filterEvento('eventos', 'tipo_evento')\"\r\n                  formControlName=\"tipo\"\r\n                  class=\"type_border\"\r\n                >\r\n                  <ion-item class=\"filter_list\" lines=\"none\">\r\n                    <ion-text>Todo</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\r\n                  </ion-item>\r\n                  <ion-item\r\n                    class=\"filter_list\"\r\n                    lines=\"none\"\r\n                    *ngFor=\"let cry of lista_tipos_eventos\"\r\n                  >\r\n                    <ion-text>{{ cry }}</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"{{ cry }}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <!-- Filtro por Tipo -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-list>\r\n      <ng-container *ngFor=\"let item of eventos | filterEvents1:dataform\">\r\n        <ng-container *ngIf=\"item.vacio !== 1\">\r\n          <ion-item\r\n            *ngIf=\"(item.distanciaNumber <= dist || (dep != null && !this.dbService.noData && item.departamento === dep))\"\r\n            class=\"event\"\r\n            (click)=\"openModalDetailEvent(\r\n          item.id, \r\n          item.fechaInicio, \r\n          item.nombre, \r\n          item.descripcion, \r\n          item['imagen'].url, \r\n          item.lugar, \r\n          item['ubicacion'].lat, \r\n          item['ubicacion'].lng, \r\n          item.fechaFin, \r\n          item.instagram, \r\n          item.tickAntel, \r\n          item.facebook, \r\n          item.whatsapp, \r\n          item.moneda, \r\n          item.precio, \r\n          item.precioUnico,\r\n          item.direccion,\r\n          item.localidad,\r\n          item.departamento)\"\r\n          >\r\n            <ion-avatar item-start class=\"image-event\">\r\n              <app-preload-list\r\n                [url]=\"item.imagen.url\"\r\n                [urlPreload]=\"preloadImage_list\"\r\n                [clase]=\"preloadClase\"\r\n                [alt]=\"item.nombre\"\r\n              >\r\n              </app-preload-list>\r\n            </ion-avatar>\r\n            <div class=\"info-event\">\r\n              <div class=\"fecha\">\r\n                {{item.fechaInicio | date:'dd.MM.yyyy - HH:mm'}} hs\r\n              </div>\r\n              <div class=\"titulo\">{{item.nombre}}</div>\r\n              <div class=\"descripcion\">\r\n                {{ item.distancia | formatDistancia}}\r\n              </div>\r\n            </div>\r\n          </ion-item>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"item.vacio === 1\">\r\n          <div class=\"empty\">\r\n            <i class=\"fi fi-rr-sad icon_empty\"></i>\r\n            <div class=\"text_empty\">\r\n              No hay eventos para mostrar con el filtro seleccionado\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"eventos.length === 0 && !this.dbService.noData\">\r\n      <ng-container *ngFor=\"let item of [1,2,3,4,5,6]\">\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text\r\n                animated\r\n                style=\"width: 80%\"\r\n              ></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text\r\n                animated\r\n                style=\"width: 60%\"\r\n              ></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text\r\n                animated\r\n                style=\"width: 30%\"\r\n              ></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ng-container>\r\n    </ion-list>\r\n\r\n    <div *ngIf=\"this.dbService.noData && dist === null\" class=\"empty\">\r\n      <i class=\"fi fi-rr-sad icon_empty\"></i>\r\n      <div class=\"text_empty\">No existen eventos en {{ dep }}</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!this.dbService.controlDistance && dist !== null\" class=\"empty\">\r\n      <i class=\"fi fi-rr-sad icon_empty\"></i>\r\n      <div class=\"text_empty\">\r\n        No existen eventos en el rango de {{ dist }} km\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"selling-points-title\">\r\n    <p class=\"selling_points_event title_selling\">Puntos de venta</p>\r\n    <ion-icon name=\"close-outline\" (click)=\"cancelar()\"></ion-icon>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-img\r\n          *ngIf=\"tickAntel !== null && tickAntel !== undefined\"\r\n          src=\"/assets/selling-point/ticket-color.png\"\r\n          (click)=\"openTickAntel()\"\r\n        ></ion-img>\r\n        <ion-img\r\n          *ngIf=\"tickAntel === null || tickAntel === undefined\"\r\n          src=\"/assets/selling-point/ticket-byn.png\"\r\n        >\r\n        </ion-img>\r\n        <ion-text>\r\n          <p class=\"selling_points_event\">Tickantel</p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-img\r\n          *ngIf=\"whatsapp !== null && whatsapp !== undefined\"\r\n          src=\"/assets/selling-point/wpp-color.png\"\r\n          (click)=\"openWhatsapp()\"\r\n        ></ion-img>\r\n        <ion-img\r\n          *ngIf=\"whatsapp === null || whatsapp === undefined\"\r\n          src=\"/assets/selling-point/wpp-byn.png\"\r\n        ></ion-img>\r\n        <ion-text>\r\n          <p class=\"selling_points_event\">WhatsApp</p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-img\r\n          *ngIf=\"instagram !== null && instagram !== undefined\"\r\n          src=\"/assets/selling-point/ig.png\"\r\n          (click)=\"openInstagram()\"\r\n        ></ion-img>\r\n        <ion-img\r\n          *ngIf=\"instagram === null || instagram === undefined\"\r\n          src=\"/assets/selling-point/ig-byn.png\"\r\n        ></ion-img>\r\n        <ion-text>\r\n          <p class=\"selling_points_event\">Instagram</p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-img\r\n          *ngIf=\"facebook !== null && facebook !== undefined\"\r\n          src=\"/assets/selling-point/fb.svg\"\r\n          (click)=\"openFacebook()\"\r\n        ></ion-img>\r\n        <ion-img\r\n          *ngIf=\"facebook === null || facebook === undefined\"\r\n          src=\"/assets/selling-point/fb-byn.png\"\r\n        ></ion-img>\r\n        <ion-text>\r\n          <p class=\"selling_points_event\">Facebook</p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 74682:
/*!***********************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  z-index: 0;\n}\n.share {\n  margin-right: 16px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n}\nion-title {\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n}\n.padre {\n  width: 100%;\n  height: auto;\n  padding: 3% 3% 0 3%;\n}\n.foto > img {\n  width: 100%;\n  height: auto;\n  border-radius: 5px 5px 0 0;\n}\n.fecha-hora {\n  display: flex;\n  justify-content: space-between;\n}\n.ubicacion {\n  display: flex;\n  border-radius: 5px;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 6px;\n  padding: 15px;\n  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  color: #000;\n  background-color: var(--ion-color-light);\n}\n.div-ubicacion,\n.div-fecha,\n.div-hora {\n  padding-bottom: 10px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.div-ubicacion {\n  text-decoration: underline;\n  color: var(--ion-color-dark);\n  font-family: \"Poppins\", sans-serif;\n}\n.lugar {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.fecha,\n.hora {\n  width: 49%;\n  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0);\n  color: var(--ion-color-dark);\n  border-radius: 5px;\n  padding: 15px;\n  background-color: var(--ion-color-light);\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.mark-info {\n  margin-right: 15px !important;\n  color: var(--ion-color-dark);\n  font-size: 1.2em;\n  font-family: \"Poppins\", sans-serif;\n}\n.dir,\n.fecha-hora_div {\n  font-size: 0.8em;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.descripcion {\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  margin-top: 5px;\n  background-color: var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 15px;\n  font-family: Barlow;\n  font-size: 12px;\n  line-height: 17px;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 50;\n}\n.ticket {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  background-color: var(--ion-color-text);\n  border-top: 10px solid var(--ion-color-back);\n}\n.entradas {\n  width: 35%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.precio {\n  width: 63%;\n  margin: 4px;\n  background-color: var(--ion-color-options);\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.entradas_div {\n  font-size: 0.6em;\n  margin-top: 2px;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.precios_div {\n  font-size: 1.3em;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.puntos-venta {\n  color: #fff;\n  font-weight: 700;\n  font-family: \"Poppins\", sans-serif;\n}\na {\n  text-decoration: underline;\n}\n.event_start {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold;\n  padding: 20px;\n  font-size: 1.3em;\n  color: var(--ion-color-back);\n  background-color: var(--ion-color-party);\n  border-radius: 5px;\n}\nsection {\n  margin: 6px 0 8px 0;\n}\n.time-list {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  text-align: center;\n}\nli {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  width: 23%;\n  border-radius: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n.count-bg-one {\n  background: var(--ion-color-party);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n.count-bg-two {\n  background: var(--ion-color-information);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n.count-bg-three {\n  background: var(--ion-color-favorite);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n.count-bg-four {\n  background: var(--ion-color-circuits);\n  font-size: 0.5em;\n  font-weight: 400;\n  color: white;\n}\n#days,\n#hours,\n#minutes,\n#seconds {\n  font-size: 2.5em;\n  font-weight: bold;\n  color: #fff;\n}\n.raduis {\n  font-family: \"Poppins\", sans-serif;\n}\n@media only screen and (max-width: 325px) {\n  .time-list {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFDQSw2RkFBQTtBQUVSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBQUY7QUFHQTs7O0VBR0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBOztFQUVFLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsaURBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7QUFBRjtBQUdBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBOztFQUVFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUFGO0FBR0E7RUFDRSxpQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBO0VBQ0UsMEJBQUE7QUFBRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLG1CQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUZGO0FBS0E7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTs7OztFQUlFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFLQTtFQUNFLGtDQUFBO0FBRkY7QUFLQTtFQUNFO0lBQ0UsZUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoiZXZlbnQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybzp3Z2h0QDIwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uc2hhcmUge1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucGFkcmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAzJSAzJSAwIDMlO1xyXG59XHJcblxyXG4uZm90byA+IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG59XHJcblxyXG4uZmVjaGEtaG9yYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi51YmljYWNpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi5kaXYtdWJpY2FjaW9uLFxyXG4uZGl2LWZlY2hhLFxyXG4uZGl2LWhvcmEge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5kaXYtdWJpY2FjaW9uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmx1Z2FyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mZWNoYSxcclxuLmhvcmEge1xyXG4gIHdpZHRoOiA0OSU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1hcmstaW5mbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmRpcixcclxuLmZlY2hhLWhvcmFfZGl2IHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4uZGVzY3JpcGNpb24ge1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogN3B4IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IEJhcmxvdztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLnRpY2tldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dCk7XHJcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYmFjayk7XHJcbn1cclxuXHJcbi5lbnRyYWRhcyB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcmVjaW8ge1xyXG4gIHdpZHRoOiA2MyU7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW9wdGlvbnMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZW50cmFkYXNfZGl2IHtcclxuICBmb250LXNpemU6IDAuNmVtO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLnByZWNpb3NfZGl2IHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4ucHVudG9zLXZlbnRhIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8vIEN1ZW50YSByZWdyZXNpdmFcclxuXHJcbi5ldmVudF9zdGFydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFjayk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXBhcnR5KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIG1hcmdpbjogNnB4IDAgOHB4IDA7XHJcbn1cclxuXHJcbi50aW1lLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMjMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY291bnQtYmctb25lIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcGFydHkpO1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb3VudC1iZy10d28ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbmZvcm1hdGlvbik7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvdW50LWJnLXRocmVlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmF2b3JpdGUpO1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb3VudC1iZy1mb3VyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY2lyY3VpdHMpO1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNkYXlzLFxyXG4jaG91cnMsXHJcbiNtaW51dGVzLFxyXG4jc2Vjb25kcyB7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnJhZHVpcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNXB4KSB7XHJcbiAgLnRpbWUtbGlzdCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 99716:
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "::-webkit-scrollbar {\n  display: none;\n}\n\nion-icon {\n  font-size: 1.5rem;\n  margin-left: 8%;\n  color: var(--ion-color-back);\n}\n\nion-title {\n  color: var(--ion-color-back);\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 5%;\n  justify-content: center;\n}\n\n.location {\n  margin: 10px 0;\n  width: 100%;\n}\n\n.filter {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.event {\n  display: flex;\n  flex-direction: row;\n}\n\n.image-event {\n  width: 42%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 4px;\n}\n\n.info-event {\n  width: 55%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.info-event > div {\n  width: 100%;\n  margin: 0 0 0 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.fecha {\n  font-weight: bold;\n  color: var(--ion-color-favorite);\n  font-size: 0.7em;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: 1em;\n  color: #6b6b6b;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.descripcion {\n  font-size: 0.8em;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.event > .info-event {\n  align-self: flex-start;\n}\n\n.link {\n  z-index: 1500;\n}\n\n.icon-link {\n  margin: 0 !important;\n}\n\n.slider {\n  width: 100%;\n}\n\n.sliderPrimero,\n.sliderHijo,\n.banner,\n.imgSlider {\n  width: 100%;\n}\n\n.sliderPrimero {\n  background-color: #eeeeee;\n}\n\n* {\n  z-index: 0;\n}\n\n.empty {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 50px;\n  height: 35vh;\n  width: auto;\n}\n\n.text_empty {\n  color: #d6d2d1;\n  text-align: center;\n  padding-bottom: 15px;\n  font-size: 1.2em;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.icon_empty {\n  font-size: 5em;\n  color: #d6d2d1;\n}\n\n.filter_place {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin: -30px auto 10px auto;\n  position: relative;\n  z-index: 50;\n  width: 90%;\n  background-color: var(--ion-color-light);\n  padding: 16px;\n  border-radius: 60px;\n}\n\nion-label {\n  font-weight: bold;\n  font-family: \"Poppins\";\n  color: #a1a1a1;\n  font-size: 0.8em;\n}\n\n.form_filter {\n  display: flex;\n  flex-direction: column;\n  margin: 0 5% 5px 5%;\n  z-index: 100;\n  background-color: var(--ion-color-back);\n  border-radius: 16px;\n  box-shadow: 0px 0px 9px -1px rgba(161, 141, 141, 0.75);\n}\n\n.filter_name {\n  padding: 15px 0 15px 15px;\n  font-weight: bold;\n  width: 100%;\n  font-size: 0.95em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n\n.filter_list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 2px solid #ddd;\n  width: 100%;\n  height: 35px;\n  font-size: 0.9em;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n\n.filter_type {\n  width: 100%;\n}\n\n.type_border > .last:last-child {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n}\n\n.list_type {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n  min-height: 30px;\n  max-height: 200px;\n  overflow-y: scroll;\n}\n\n.list_type_date {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.list_type_date > ion-item {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.9em;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.open_acordeon {\n  color: #fc67ff;\n}\n\n.date_filter {\n  font-size: 0.6rem;\n}\n\nion-radio {\n  --color-checked: #fc67ff;\n}\n\n.list-md {\n  padding: 0 !important;\n}\n\n.date-selected {\n  font-weight: bold;\n  color: #fc67ff;\n}\n\n.back-date {\n  --background: var(--ion-color-light);\n}\n\nion-datetime {\n  height: auto;\n  width: auto;\n  max-width: 350px;\n}\n\nion-modal {\n  --width: 290px;\n  --height: 382px;\n  --border-radius: 8px;\n}\n\nion-modal ion-datetime {\n  height: 382px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBSUEsa0NBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBOzs7O0VBSUUsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBRkY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFHQSxzREFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0UsMENBQUE7RUFDQSwyQ0FBQTtBQUhGOztBQU1BO0VBQ0UsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLG9DQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkYiLCJmaWxlIjoiZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2spO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuLmV2ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5pbWFnZS1ldmVudCB7XHJcbiAgd2lkdGg6IDQyJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG4uaW5mby1ldmVudCB7XHJcbiAgd2lkdGg6IDU1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby1ldmVudCA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mZWNoYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mYXZvcml0ZSk7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiAjNmI2YjZiO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmRlc2NyaXBjaW9uIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmV2ZW50ID4gLmluZm8tZXZlbnQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICB6LWluZGV4OiAxNTAwO1xyXG59XHJcblxyXG4uaWNvbi1saW5rIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXJQcmltZXJvLFxyXG4uc2xpZGVySGlqbyxcclxuLmJhbm5lcixcclxuLmltZ1NsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXJQcmltZXJvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG4qIHtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uZW1wdHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCA1MHB4O1xyXG4gIGhlaWdodDogMzV2aDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnRleHRfZW1wdHkge1xyXG4gIGNvbG9yOiAjZDZkMmQxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaWNvbl9lbXB0eSB7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbiAgY29sb3I6ICNkNmQyZDE7XHJcbn1cclxuXHJcbi8vZmlsdHJvXHJcbi5maWx0ZXJfcGxhY2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogLTMwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSk7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmZvcm1fZmlsdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIDUlIDVweCA1JTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2spO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTFweCByZ2JhKDE2MSwgMTQxLCAxNDEsIDAuNzUpO1xyXG59XHJcblxyXG4uZmlsdGVyX25hbWUge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5maWx0ZXJfbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4uZmlsdGVyX3R5cGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udHlwZV9ib3JkZXIgPiAubGFzdDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3RfdHlwZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5saXN0X3R5cGVfZGF0ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubGlzdF90eXBlX2RhdGUgPiBpb24taXRlbSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3Blbl9hY29yZGVvbiB7XHJcbiAgY29sb3I6ICNmYzY3ZmY7XHJcbn1cclxuXHJcbi5kYXRlX2ZpbHRlciB7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbn1cclxuXHJcbmlvbi1yYWRpbyB7XHJcbiAgLS1jb2xvci1jaGVja2VkOiAjZmM2N2ZmO1xyXG59XHJcblxyXG4ubGlzdC1tZCB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0ZS1zZWxlY3RlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmYzY3ZmY7XHJcbn1cclxuXHJcbi5iYWNrLWRhdGUge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcblxyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCB7XHJcbiAgLS13aWR0aDogMjkwcHg7XHJcbiAgLS1oZWlnaHQ6IDM4MnB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5pb24tbW9kYWwgaW9uLWRhdGV0aW1lIHtcclxuICBoZWlnaHQ6IDM4MnB4O1xyXG59Il19 */";

/***/ }),

/***/ 42488:
/*!***************************************************************!*\
  !*** ./src/app/pages/selling-points/selling-points.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  height: 100px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n  color: #000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nh3 {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  width: 100%;\n  --border-radius: none;\n}\n\nion-img {\n  width: 30%;\n  height: auto;\n}\n\nion-text > p {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  font-size: 0.9em;\n  margin-top: 3px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.selling-points-title {\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--ion-color-information);\n}\n\n.selling-points-title > p {\n  width: 90%;\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.title_selling {\n  color: var(--ion-color-back);\n}\n\n.close {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxpbmctcG9pbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic2VsbGluZy1wb2ludHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5heyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tdGV4dCA+IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VsbGluZy1wb2ludHMtdGl0bGUge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWluZm9ybWF0aW9uKTtcclxufVxyXG5cclxuLnNlbGxpbmctcG9pbnRzLXRpdGxlID4gcCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZV9zZWxsaW5nIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2spO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_events_module_ts.js.map