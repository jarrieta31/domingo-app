"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_artist_artist_module_ts"],{

/***/ 52433:
/*!*******************************************************!*\
  !*** ./src/app/pages/artist/artist-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistPageRoutingModule": () => (/* binding */ ArtistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _artist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist.page */ 88436);




const routes = [
    {
        path: '',
        component: _artist_page__WEBPACK_IMPORTED_MODULE_0__.ArtistPage
    }
];
let ArtistPageRoutingModule = class ArtistPageRoutingModule {
};
ArtistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArtistPageRoutingModule);



/***/ }),

/***/ 99106:
/*!***********************************************!*\
  !*** ./src/app/pages/artist/artist.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistPageModule": () => (/* binding */ ArtistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _artist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist-routing.module */ 52433);
/* harmony import */ var _artist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist.page */ 88436);
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ 74356);
/* harmony import */ var _video_video_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video/video.module */ 97329);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 57693);










let ArtistPageModule = class ArtistPageModule {
};
ArtistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _artist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArtistPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _video_video_module__WEBPACK_IMPORTED_MODULE_3__.VideoPageModule,
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        ],
        declarations: [_artist_page__WEBPACK_IMPORTED_MODULE_1__.ArtistPage]
    })
], ArtistPageModule);



/***/ }),

/***/ 88436:
/*!*********************************************!*\
  !*** ./src/app/pages/artist/artist.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistPage": () => (/* binding */ ArtistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_artist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./artist.page.html */ 96435);
/* harmony import */ var _artist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist.page.scss */ 89145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var src_app_services_database_artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database/artist.service */ 73623);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database/slides.service */ 60696);
/* harmony import */ var _video_video_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video/video.page */ 35652);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database.service */ 60568);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4276);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/browser */ 39337);
















let ArtistPage = class ArtistPage {
    constructor(fb, artistSvc, loadingCtrl, sliderSvc, modalCtrl, databaseSvc, geolocationSvc, http) {
        this.fb = fb;
        this.artistSvc = artistSvc;
        this.loadingCtrl = loadingCtrl;
        this.sliderSvc = sliderSvc;
        this.modalCtrl = modalCtrl;
        this.databaseSvc = databaseSvc;
        this.geolocationSvc = geolocationSvc;
        this.http = http;
        /**guarda los lugares activos en la subscription del servicio */
        this.artists = [];
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
        this.locationActive = [];
        /**url load  */
        this.preloadImage = "/assets/load.gif";
        /**captura los datos del formulario de filtros */
        this.dataForm = "";
        /**se guardan los sliders de la pantalla artistas */
        this.sliderArtist = [];
        /**control la apertura de filtros */
        this.isFilterLocation = false;
        this.isFilterType = false;
        /**guardan filtos seleccionados */
        this.optionLocation = null;
        this.optionType = null;
        /**departamente seleccionado actualmente */
        this.currentDepto = this.databaseSvc.selectionDepto;
        /**filtro seleccionado, distancia o departamento */
        this.dist = null;
        this.dep = null;
        /**url load  */
        this.preloadImage_list = "/assets/load_cuadrada.gif";
        /** clase de preload list */
        this.preloadClase = "img-artista";
        this.filterForm = this.fb.group({
            localidad: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            categoria: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        });
    }
    filterArtist() {
        this.dataForm = this.filterForm.value;
        if (this.isFilterLocation)
            this.isFilterLocation = false;
        if (this.isFilterType)
            this.isFilterType = false;
        this.optionLocation = this.dataForm.localidad;
        this.optionType = this.dataForm.categoria;
        if (this.dataForm.localidad === "")
            this.optionLocation = "localidad";
        if (this.dataForm.categoria === "")
            this.optionType = "tipo";
    }
    show(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message,
                spinner: "bubbles",
            });
            this.loading.present().then(() => {
                this.loading.dismiss();
            });
        });
    }
    changeFilterLocation() {
        this.isFilterLocation = !this.isFilterLocation;
        if (this.isFilterType)
            this.isFilterType = false;
    }
    changeFilterType() {
        this.isFilterType = !this.isFilterType;
        if (this.isFilterLocation)
            this.isFilterLocation = false;
    }
    get lista_localidad_artis() {
        const artisList = this.artists;
        let artistlocalidadlist = [];
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
        let artisttipolist = [];
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
        return localStorage.getItem("distanceActivo") ? true : false;
    }
    /**
     * Abre modal para reproducir video
     * @param url - URL del video que se va a ejecutar
     */
    verVideo(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const video = yield this.modalCtrl.create({
                component: _video_video_page__WEBPACK_IMPORTED_MODULE_4__.VideoPage,
                cssClass: "modal-video",
                backdropDismiss: false,
                showBackdrop: true,
                componentProps: {
                    url: url,
                },
                mode: 'ios',
            });
            yield video.present();
        });
    }
    openInstagram(url) {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__.Browser.open({ url: url });
    }
    openSpotify(url) {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__.Browser.open({ url: url });
    }
    getLocation(lng, lat) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.urlMopboxDepto}${lng},${lat}.json?access_token=${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.mapBoxToken}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((depto) => depto.features[depto.features.length - 2].text), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$));
    }
    ionViewWillEnter() {
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
            this.dataForm = "";
            this.optionLocation = "localidad";
            this.optionType = "tipo";
        }
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.sliderSvc.getSliders();
        this.sliderSvc.slider
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((slider) => slider.filter((s) => s.pantalla === "artistas")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$))
            .subscribe((res) => {
            this.sliderArtist = res;
        });
        /******** RXJS PARA TRAER LUGARES CON INFO COMPLETA ************************************/
        let posDep = this.geolocationSvc.posicion$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)((pos) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(pos), this.getLocation(pos.longitud, pos.latitud));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$));
        if (this.geolocationSvc.posicion$.value !== null) {
            posDep
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)((dep) => (this.depDist = dep[1])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)((res) => this.artistSvc.getArtist(res[1])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$))
                .subscribe((res) => {
                this.artists = [];
                this.artists = res;
            });
        }
        else {
            this.artistSvc.getArtist(this.dep).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe$)).subscribe((res) => {
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
    }
};
ArtistPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_database_artist_service__WEBPACK_IMPORTED_MODULE_2__.ArtistService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.LoadingController },
    { type: src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_3__.SlidesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseService },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__.GeolocationService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient }
];
ArtistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: "app-artist",
        template: _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_artist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_artist_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArtistPage);



/***/ }),

/***/ 73623:
/*!*****************************************************!*\
  !*** ./src/app/services/database/artist.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistService": () => (/* binding */ ArtistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database.service */ 60568);





let ArtistService = class ArtistService {
    constructor(afs, db) {
        this.afs = afs;
        this.db = db;
        this.init_artist = [];
        this.save_depto = [];
        this.allArtist = [];
        /**controla si la base devuelve datos */
        this.noData = false;
        this.artist = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.init_artist);
    }
    getArtist(checkDepto) {
        this.depto = localStorage.getItem("deptoActivo");
        this.allArtist = [];
        let searchDepto = false;
        this.save_depto.forEach((search) => {
            if (this.depto !== null) {
                if (search == this.depto) {
                    searchDepto = true;
                }
            }
            else {
                if (search == checkDepto) {
                    searchDepto = true;
                }
            }
        });
        if (!searchDepto) {
            if (this.depto !== null) {
                this.afs
                    .collection("artistas")
                    .ref.where("departamento", "==", this.depto)
                    .where("publicado", "==", true)
                    .get()
                    .then((querySnapshot) => {
                    const mapArtist = new Map();
                    querySnapshot.forEach((item) => {
                        const data = item.data();
                        let artistReq = Object.assign({ id: item.id }, data);
                        mapArtist.set(artistReq.id, Object.assign({}, data));
                        let test = this.init_artist.find(function (element) {
                            return element.id === artistReq.id;
                        });
                        if (test === undefined) {
                            this.init_artist.push(artistReq);
                        }
                    });
                    this.allArtist = JSON.parse(JSON.stringify([...mapArtist.values()]));
                    if (querySnapshot.size !== 0) {
                        this.save_depto.push(this.depto);
                        this.noData = false;
                    }
                    else
                        this.noData = true;
                    this.artist.next(this.allArtist);
                    searchDepto = false;
                })
                    .catch((err) => {
                    console.log(err);
                })
                    .finally(() => "Fin");
            }
            else {
                this.afs
                    .collection("artistas")
                    .ref.where("departamento", "==", checkDepto)
                    .where("publicado", "==", true)
                    .get()
                    .then((querySnapshot) => {
                    const mapArtistDist = new Map();
                    querySnapshot.forEach((item) => {
                        const data = item.data();
                        let artistDist = Object.assign({ id: item.id }, data);
                        mapArtistDist.set(artistDist.id, Object.assign({}, data));
                        let test = this.init_artist.find(function (element) {
                            return element.id === artistDist.id;
                        });
                        if (test === undefined) {
                            this.init_artist.push(artistDist);
                        }
                    });
                    this.allArtist = JSON.parse(JSON.stringify([...mapArtistDist.values()]));
                    if (querySnapshot.size !== 0) {
                        this.save_depto.push(checkDepto);
                        this.noData = false;
                    }
                    else
                        this.noData = true;
                    this.artist.next(this.allArtist);
                    searchDepto = false;
                })
                    .catch((err) => {
                    console.log(err);
                })
                    .finally(() => "Fin");
            }
        }
        else if (searchDepto) {
            if (this.depto !== null) {
                this.init_artist.forEach((res) => {
                    if (res.departamento == this.depto) {
                        this.allArtist.push(res);
                    }
                });
            }
            else {
                this.init_artist.forEach((res) => {
                    if (res.departamento === checkDepto) {
                        this.allArtist.push(res);
                    }
                });
            }
            this.artist.next(this.allArtist);
        }
        return this.artist;
    }
};
ArtistService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService }
];
ArtistService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], ArtistService);



/***/ }),

/***/ 96435:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/artist/artist.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"slider\">\n      <ion-slides\n        class=\"sliderPrimero setHeight\"\n        scrollbar=\"false\"\n        pager=\"false\"\n        [options]=\"slideOpts\"\n      >\n        <ion-slide *ngFor=\"let item of sliderArtist\" class=\"sliderHijo\">\n          <a\n            *ngIf=\"item.link !== null && item.link !== '' && item.link !== ' ' && item.link !== undefined\"\n            href=\"{{ item.link }}\"\n            class=\"link\"\n          >\n            <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n              <ion-fab-button color=\"dark\">\n                <ion-icon\n                  *ngIf=\"item.linkTipo !== 'web'\"\n                  name=\"logo-{{ item.linkTipo }}\"\n                  class=\"icon-link\"\n                ></ion-icon>\n                <ion-icon\n                  *ngIf=\"item.linkTipo === 'web'\"\n                  name=\"globe-outline\"\n                  class=\"icon-link\"\n                ></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n          </a>\n          <app-preload\n            [url]=\"item.imagen.url\"\n            [alt]=\"item.imagen.name\"\n            [urlPreload]=\"preloadImage\"\n          ></app-preload>\n        </ion-slide>\n      </ion-slides>\n      <!-- </div> -->\n\n      <!-- =========>=>=>=> Filtro =========>=>=>=> -->\n      <div class=\"filter_place\">\n        <ion-label\n          *ngIf=\"!selectdistancia && (optionLocation === null || optionLocation === 'localidad' || optionLocation === '')\"\n          (click)=\"changeFilterLocation()\"\n          >localidad</ion-label\n        >\n        <ion-label\n          *ngIf=\" !selectdistancia && (optionLocation !== null && optionLocation !== 'localidad' && optionLocation !== '')\"\n          class=\"open_filter\"\n          (click)=\"changeFilterLocation()\"\n          >{{ optionLocation }}</ion-label\n        >\n        <img *ngIf=\"!selectdistancia\" src=\"/assets/icon/exchange.png\" alt=\"\" />\n        <ion-label\n          *ngIf=\"optionType === null || optionType === 'tipo' || optionType === ''\"\n          (click)=\"changeFilterType()\"\n          >tipo</ion-label\n        >\n        <ion-label\n          *ngIf=\"optionType !== null && optionType !== 'tipo' && optionType !== ''\"\n          class=\"open_filter\"\n          (click)=\"changeFilterType()\"\n          >{{ optionType }}</ion-label\n        >\n      </div>\n\n      <div>\n        <form [formGroup]=\"filterForm\" class=\"form_filter\">\n          <!-- Filtro por Localidad  -->\n          <div *ngIf=\"isFilterLocation\">\n            <div class=\"filter_name\">\n              <span>Localidad</span>\n            </div>\n            <div>\n              <ion-list class=\"list_type\" inset=\"true\">\n                <ion-radio-group\n                  (ionChange)=\"filterArtist()\"\n                  formControlName=\"localidad\"\n                  class=\"type_border\"\n                >\n                  <ion-item class=\"filter_list\" lines=\"none\">\n                    <ion-text>Todo</ion-text>\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\n                  </ion-item>\n                  <ion-item\n                    class=\"filter_list\"\n                    lines=\"none\"\n                    *ngFor=\"let loc of lista_localidad_artis\"\n                  >\n                    <ion-text>{{ loc }}</ion-text>\n                    <ion-radio slot=\"end\" value=\"{{ loc }}\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            </div>\n          </div>\n          <!-- filtro por Localidad -->\n\n          <!-- filtro por Tipo -->\n          <div *ngIf=\"isFilterType\">\n            <div class=\"filter_name\">\n              <span>Tipo</span>\n            </div>\n            <div>\n              <ion-list class=\"list_type\" inset=\"true\">\n                <ion-radio-group\n                  (ionChange)=\"filterArtist()\"\n                  formControlName=\"categoria\"\n                  class=\"type_border\"\n                >\n                  <ion-item class=\"filter_list\" lines=\"none\">\n                    <ion-text>Todo</ion-text>\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\n                  </ion-item>\n                  <ion-item\n                    class=\"filter_list last\"\n                    lines=\"none\"\n                    *ngFor=\"let tipo of lista_tipo_artis\"\n                  >\n                    <ion-text>{{ tipo }}</ion-text>\n                    <ion-radio slot=\"end\" value=\"{{ tipo }}\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            </div>\n          </div>\n          <!-- Filtro por Tipo -->\n        </form>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div class=\"artist\" *ngFor=\"let art of artists | filterArtist:dataForm\">\n      <ng-container *ngIf=\"art.vacio !== 1\">\n        <div class=\"imgArtist\">\n          <app-preload-list\n            [url]=\"art.imagen.url\"\n            [alt]=\"art.nombre\"\n            [clase]=\"preloadClase\"\n            [urlPreload]=\"preloadImage_list\"\n          ></app-preload-list>\n        </div>\n        <div class=\"infoArtist\">\n          <div id=\"info-art\" class=\"type\">{{ art.categoria }}</div>\n          <div id=\"info-art\" class=\"name\">{{ art.nombre }}</div>\n          <div class=\"netArtist\">\n            <img\n              *ngIf=\"art.instagram !== null && art.instagram !== undefined && art.instagram !== '' && art.instagram !== ' ' \"\n              (click)=\"openInstagram(art.instagram)\"\n              src=\"/assets/icon/instagram.png\"\n              alt=\"instagram\"\n            />\n            <img\n              *ngIf=\"art.spotify !== null && art.spotify !== undefined && art.spotify !== '' && art.spotify !== ' ' \"\n              (click)=\"openSpotify(art.spotify)\"\n              src=\"/assets/icon/spotify.png\"\n              alt=\"spotify\"\n            />\n            <img\n              *ngIf=\"art.youtube !== null && art.youtube !== undefined && art.youtube !== '' && art.youtube !== ' ' \"\n              (click)=\"verVideo(art.youtube)\"\n              src=\"/assets/icon/youtube.png\"\n              alt=\"youtube\"\n            />\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"art.vacio === 1\">\n        <div class=\"empty\">\n          <i class=\"fi fi-rr-sad icon_empty\"></i>\n          <div class=\"text_empty\">\n            No hay artistas para mostrar con el filtro seleccionado\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ion-list>\n\n  <ion-list *ngIf=\"artists.length === 0 && !this.artistSvc.noData\">\n    <ng-container *ngFor=\"let item of [1,2,3,4,5,6]\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n\n  <div *ngIf=\"this.artistSvc.noData\" class=\"empty\">\n    <i class=\"fi fi-rr-sad icon_empty\"></i>\n    <div class=\"text_empty\" *ngIf=\"dep !== null\">\n      No hay artistas en {{ dep }}\n    </div>\n    <div class=\"text_empty\" *ngIf=\"dist !== null\">\n      No hay artistas en {{ depDist }}\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 89145:
/*!***********************************************!*\
  !*** ./src/app/pages/artist/artist.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap\");\n.list-md {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 50px;\n  width: auto;\n}\n.text_empty {\n  color: #d6d2d1;\n  text-align: center;\n  padding-bottom: 15px;\n  font-size: 1.2em;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n.icon_empty {\n  font-size: 5em;\n  color: #d6d2d1;\n}\n.slider {\n  width: 100%;\n}\n.sliderPrimero,\n.sliderHijo,\n.banner,\n.imgSlider {\n  width: 100%;\n}\n.sliderPrimero {\n  background-color: #eeeeee;\n}\n.link {\n  z-index: 1500;\n}\n.icon-link {\n  margin: 0 !important;\n}\n.artist {\n  display: flex;\n  flex-direction: row;\n  margin: 10px 4%;\n  border-radius: 5px;\n  background-color: var(--ion-color-light);\n}\n.imgArtist {\n  width: 40%;\n  /*height: auto; */\n  min-height: 36.8vw;\n}\n.infoArtist {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 25px;\n}\n#info-art:nth-child(1) {\n  font-weight: bold;\n}\n#info-art:nth-child(2) {\n  color: #1d1d1d;\n}\n.netArtist > img {\n  padding: 6px 1em 3px 0;\n}\n.type {\n  font-family: \"Poppins\", sans-serif;\n  color: #01dfb8;\n  font-size: 13px;\n}\n.name {\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark) !important;\n  padding-right: 3px;\n}\n@media (max-width: 341px) {\n  .name {\n    font-size: 14px;\n  }\n}\n.filter_place {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin: -30px auto 10px auto;\n  position: relative;\n  z-index: 50;\n  width: 90%;\n  background-color: var(--ion-color-light);\n  padding: 16px;\n  border-radius: 60px;\n}\nion-label {\n  font-weight: bold;\n  font-family: \"Poppins\";\n  color: #a1a1a1;\n  font-size: 0.8em;\n}\n.form_filter {\n  display: flex;\n  flex-direction: column;\n  margin: 0 5% 5px 5%;\n  z-index: 100;\n  background-color: var(--ion-color-back);\n  border-radius: 16px;\n  box-shadow: 0px 0px 9px -1px rgba(161, 141, 141, 0.75);\n}\n.filter_name {\n  padding: 15px 0 15px 15px;\n  font-size: 0.95em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.filter_name > span {\n  font-weight: 700;\n}\n.filter_list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 2px solid #ddd;\n  width: 100%;\n  height: 35px;\n  font-size: 0.9em;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.filter_type {\n  border-top: 2px solid #ddd;\n  width: 100%;\n}\n.type_border > .last:last-child {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n}\n.list_type {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n  min-height: 30px;\n  max-height: 200px;\n  overflow-y: scroll;\n}\n.open_filter {\n  color: #fc67ff;\n}\nion-radio {\n  --color-checked: #fc67ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFFUjtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtBQUFGO0FBR0E7Ozs7RUFJRSxXQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7QUFBRjtBQUdBO0VBQ0Usb0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFERjtBQUlBO0VBQ0UsaUJBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBS0E7RUFDRSxzQkFBQTtBQUZGO0FBS0E7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRkY7QUFLQTtFQUNFLGtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDRTtJQUNFLGVBQUE7RUFGRjtBQUNGO0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBR0Esc0RBQUE7QUFKRjtBQU9BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FBSkY7QUFPQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtBQUpGO0FBT0E7RUFDRSwwQ0FBQTtFQUNBLDJDQUFBO0FBSkY7QUFPQTtFQUNFLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtBQUpGO0FBT0E7RUFDRSx3QkFBQTtBQUpGIiwiZmlsZSI6ImFydGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmVtcHR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCA1MHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnRleHRfZW1wdHkge1xuICBjb2xvcjogI2Q2ZDJkMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pY29uX2VtcHR5IHtcbiAgZm9udC1zaXplOiA1ZW07XG4gIGNvbG9yOiAjZDZkMmQxO1xufVxuXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXJQcmltZXJvLFxuLnNsaWRlckhpam8sXG4uYmFubmVyLFxuLmltZ1NsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGVyUHJpbWVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi5saW5rIHtcbiAgei1pbmRleDogMTUwMDtcbn1cblxuLmljb24tbGluayB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uYXJ0aXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxMHB4IDQlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5pbWdBcnRpc3Qge1xuICB3aWR0aDogNDAlO1xuICAvKmhlaWdodDogYXV0bzsgKi9cbiAgbWluLWhlaWdodDogY2FsYygoMTAwdncgLSAoMTAwdncgKiAwLjA4KSkgKiAwLjQpO1xufVxuXG4uaW5mb0FydGlzdCB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvL2FsaWduLWl0ZW1zOiBzdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4jaW5mby1hcnQ6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNpbmZvLWFydDpudGgtY2hpbGQoMikge1xuICBjb2xvcjogcmdiKDI5LCAyOSwgMjkpO1xufVxuXG5cbi5uZXRBcnRpc3QgPiBpbWcge1xuICBwYWRkaW5nOiA2cHggMWVtIDNweCAwO1xufVxuXG4udHlwZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMWRmYjg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm5hbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzQxcHgpIHtcbiAgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4vLyBmaWx0cm9cbi5maWx0ZXJfcGxhY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAtMzBweCBhdXRvIDEwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1MDtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmZvcm1fZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIDUlIDVweCA1JTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTFweCByZ2JhKDE2MSwgMTQxLCAxNDEsIDAuNzUpO1xufVxuXG4uZmlsdGVyX25hbWUge1xuICBwYWRkaW5nOiAxNXB4IDAgMTVweCAxNXB4O1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZmlsdGVyX25hbWUgPiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZpbHRlcl9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5maWx0ZXJfdHlwZSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnR5cGVfYm9yZGVyID4gLmxhc3Q6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3RfdHlwZSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm9wZW5fZmlsdGVyIHtcbiAgY29sb3I6ICNmYzY3ZmY7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZjNjdmZjtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_artist_artist_module_ts.js.map