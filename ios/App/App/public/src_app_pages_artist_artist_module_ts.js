"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_artist_artist_module_ts"],{

/***/ 83450:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 39337:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 83450);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3765)).then(m => new m.BrowserWeb()),
});




/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_artist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./artist.page.html */ 96435);
/* harmony import */ var _artist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist.page.scss */ 89145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var src_app_services_database_artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database/artist.service */ 73623);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database/slides.service */ 60696);
/* harmony import */ var _video_video_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video/video.page */ 35652);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database.service */ 60568);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4276);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/browser */ 39337);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);



















let ArtistPage = class ArtistPage {
    constructor(fb, artistSvc, loadingCtrl, sliderSvc, modalCtrl, databaseSvc, geolocationSvc, http, gaService, socialSharing) {
        this.fb = fb;
        this.artistSvc = artistSvc;
        this.loadingCtrl = loadingCtrl;
        this.sliderSvc = sliderSvc;
        this.modalCtrl = modalCtrl;
        this.databaseSvc = databaseSvc;
        this.geolocationSvc = geolocationSvc;
        this.http = http;
        this.gaService = gaService;
        this.socialSharing = socialSharing;
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
        this.preloadImage = '/assets/load.gif';
        /**captura los datos del formulario de filtros */
        this.dataForm = '';
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
        this.preloadImage_list = '/assets/load_cuadrada.gif';
        /** clase de preload list */
        this.preloadClase = 'img-artista';
        /**url para compartir */
        this.shareURL = 'https://developer-dominga.web.app/artist/';
        this.filterForm = this.fb.group({
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            categoria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        });
    }
    resetSlide() {
        this.slide.startAutoplay();
    }
    endSlide() {
        this.slide.stopAutoplay();
    }
    artistShare(tipo, nombre, id) {
        this.gaService.googleAnalyticsCompartir(tipo, tipo + '_' + nombre);
        this.socialSharing.share(nombre, null, null, this.shareURL + id);
    }
    filterArtist(pantalla, tipo) {
        this.gaService.googleAnalyticsFiltrosPantallas(pantalla, tipo);
        this.dataForm = this.filterForm.value;
        if (this.isFilterLocation)
            this.isFilterLocation = false;
        if (this.isFilterType)
            this.isFilterType = false;
        this.optionLocation = this.dataForm.localidad;
        this.optionType = this.dataForm.categoria;
        if (this.dataForm.localidad === '')
            this.optionLocation = 'localidad';
        if (this.dataForm.categoria === '')
            this.optionType = 'tipo';
    }
    show(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message,
                spinner: 'bubbles',
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
        return localStorage.getItem('distanceActivo') ? true : false;
    }
    /**
     * Abre modal para reproducir video
     * @param url - URL del video que se va a ejecutar
     */
    verVideo(url, nombre) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.gaService.googleAnalyticsReproducirVideo('artistas', nombre);
            const video = yield this.modalCtrl.create({
                component: _video_video_page__WEBPACK_IMPORTED_MODULE_4__.VideoPage,
                cssClass: 'modal-video',
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
        this.socialNetwork('instagram');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__.Browser.open({ url: url });
    }
    openSpotify(url) {
        this.socialNetwork('spotify');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__.Browser.open({ url: url });
    }
    socialNetwork(tipo) {
        this.gaService.googleAnalyticsRedesSociales('artistas', tipo);
    }
    getLocation(lng, lat) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.urlMopboxDepto}${lng},${lat}.json?access_token=${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.mapBoxToken}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)((depto) => depto.features[depto.features.length - 2].text), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$));
    }
    ionViewWillEnter() {
        document.title = 'Artistas';
        this.gaService.googleAnalyticsPantallas('artistas');
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
            this.dataForm = '';
            this.optionLocation = 'localidad';
            this.optionType = 'tipo';
        }
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this.sliderSvc.getSliders();
        this.sliderSvc.slider
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)((slider) => slider.filter((s) => s.pantalla === 'artistas')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$))
            .subscribe((res) => {
            this.sliderArtist = res;
        });
        this.resetSlide();
        /******** RXJS PARA TRAER LUGARES CON INFO COMPLETA ************************************/
        let posDep = this.geolocationSvc.posicion$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)((pos) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(pos), this.getLocation(pos.longitud, pos.latitud));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$));
        if (this.geolocationSvc.posicion$.value !== null) {
            posDep
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)((dep) => (this.depDist = dep[1])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)((res) => this.artistSvc.getArtist(res[1])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$))
                .subscribe((res) => {
                this.artists = [];
                this.artists = res;
            });
        }
        else {
            this.artistSvc
                .getArtist(this.dep)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$))
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
};
ArtistPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_database_artist_service__WEBPACK_IMPORTED_MODULE_2__.ArtistService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.LoadingController },
    { type: src_app_services_database_slides_service__WEBPACK_IMPORTED_MODULE_3__.SlidesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseService },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__.GeolocationService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClient },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_9__.GoogleAnalyticsService },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__.SocialSharing }
];
ArtistPage.propDecorators = {
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonSlides,] }]
};
ArtistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-artist',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_artist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ 60696:
/*!*****************************************************!*\
  !*** ./src/app/services/database/slides.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlidesService": () => (/* binding */ SlidesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);




let SlidesService = class SlidesService {
    constructor(afs) {
        this.afs = afs;
        this.init_slider = [];
        this.allSlider = [];
        this.depto = null;
        this.save_depto = [];
        this.ckeckDist = false;
        this.slider = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.init_slider);
    }
    getSliders() {
        this.depto = localStorage.getItem("deptoActivo");
        this.allSlider = [];
        if (this.save_depto.length > 0) {
            var isDepto = false;
            this.save_depto.forEach(dep => {
                if (dep == this.depto)
                    isDepto = true;
            });
        }
        if (!isDepto && this.depto != null && !this.ckeckDist) {
            this.afs
                .collection("sliders")
                .ref.where("publicado", "==", true)
                .where("departamento", "==", this.depto)
                .get()
                .then((querySnapshot) => {
                const arrSlider = [];
                querySnapshot.forEach((item) => {
                    const data = item.data();
                    arrSlider.push(Object.assign({ id: item.id }, data));
                    this.init_slider.push(Object.assign({ id: item.id }, data));
                });
                this.save_depto.push(this.depto);
                this.allSlider = JSON.parse(JSON.stringify(arrSlider));
                this.slider.next(this.allSlider);
            })
                .catch((err) => {
                console.log(err);
            })
                .finally(() => "Fin");
        }
        else if (isDepto && this.depto != null) {
            this.init_slider.forEach(dep => {
                if (dep.departamento == this.depto)
                    this.allSlider.push(dep);
            });
            this.slider.next(this.allSlider);
        }
        else if (!this.ckeckDist) {
            this.init_slider = [];
            this.ckeckDist = true;
            this.afs
                .collection("sliders")
                .ref.where("publicado", "==", true)
                .get()
                .then((querySnapshot) => {
                const arrSlider = [];
                querySnapshot.forEach((item) => {
                    const data = item.data();
                    arrSlider.push(Object.assign({ id: item.id }, data));
                    this.init_slider.push(Object.assign({ id: item.id }, data));
                });
                this.allSlider = JSON.parse(JSON.stringify(arrSlider));
                this.allSlider.forEach(saveDepto => {
                    let deptoExist = false;
                    this.save_depto.forEach(search => {
                        if (saveDepto.departamento == search)
                            deptoExist = true;
                    });
                    if (!deptoExist)
                        this.save_depto.push(saveDepto.departamento);
                });
                this.slider.next(this.allSlider);
            })
                .catch((err) => {
                console.log(err);
            })
                .finally(() => "Fin");
        }
        else
            this.slider.next(this.init_slider);
    }
};
SlidesService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore }
];
SlidesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], SlidesService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"slider\">\r\n      <ion-slides\r\n        class=\"sliderPrimero setHeight\"\r\n        scrollbar=\"false\"\r\n        pager=\"false\"\r\n        [options]=\"slideOpts\"\r\n      >\r\n        <ion-slide *ngFor=\"let item of sliderArtist\" class=\"sliderHijo\">\r\n          <a\r\n            *ngIf=\"item.link !== null && item.link !== '' && item.link !== ' ' && item.link !== undefined\"\r\n            href=\"{{ item.link }}\"\r\n            class=\"link\"\r\n          >\r\n            <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n              <ion-fab-button color=\"dark\">\r\n                <ion-icon\r\n                  *ngIf=\"item.linkTipo !== 'web'\"\r\n                  name=\"logo-{{ item.linkTipo }}\"\r\n                  class=\"icon-link\"\r\n                ></ion-icon>\r\n                <ion-icon\r\n                  *ngIf=\"item.linkTipo === 'web'\"\r\n                  name=\"globe-outline\"\r\n                  class=\"icon-link\"\r\n                ></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </a>\r\n          <app-preload\r\n            [url]=\"item.imagen.url\"\r\n            [alt]=\"item.imagen.name\"\r\n            [urlPreload]=\"preloadImage\"\r\n          ></app-preload>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <!-- </div> -->\r\n\r\n      <!-- =========>=>=>=> Filtro =========>=>=>=> -->\r\n      <div class=\"filter_place\">\r\n        <ion-label\r\n          *ngIf=\"!selectdistancia && (optionLocation === null || optionLocation === 'localidad' || optionLocation === '')\"\r\n          (click)=\"changeFilterLocation()\"\r\n          >localidad</ion-label\r\n        >\r\n        <ion-label\r\n          *ngIf=\" !selectdistancia && (optionLocation !== null && optionLocation !== 'localidad' && optionLocation !== '')\"\r\n          class=\"open_filter\"\r\n          (click)=\"changeFilterLocation()\"\r\n          >{{ optionLocation }}</ion-label\r\n        >\r\n        <img *ngIf=\"!selectdistancia\" src=\"/assets/icon/exchange.png\" alt=\"\" />\r\n        <ion-label\r\n          *ngIf=\"optionType === null || optionType === 'tipo' || optionType === ''\"\r\n          (click)=\"changeFilterType()\"\r\n          >tipo</ion-label\r\n        >\r\n        <ion-label\r\n          *ngIf=\"optionType !== null && optionType !== 'tipo' && optionType !== ''\"\r\n          class=\"open_filter\"\r\n          (click)=\"changeFilterType()\"\r\n          >{{ optionType }}</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div>\r\n        <form [formGroup]=\"filterForm\" class=\"form_filter\">\r\n          <!-- Filtro por Localidad  -->\r\n          <div *ngIf=\"isFilterLocation\">\r\n            <div class=\"filter_name\">\r\n              <span>Localidad</span>\r\n            </div>\r\n            <div>\r\n              <ion-list class=\"list_type\">\r\n                <ion-radio-group\r\n                  (ionChange)=\"filterArtist('artista', 'localidad_artista')\"\r\n                  formControlName=\"localidad\"\r\n                  class=\"type_border\"\r\n                >\r\n                  <ion-item class=\"filter_list\" lines=\"none\">\r\n                    <ion-text>Todo</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\r\n                  </ion-item>\r\n                  <ion-item\r\n                    class=\"filter_list\"\r\n                    lines=\"none\"\r\n                    *ngFor=\"let loc of lista_localidad_artis\"\r\n                  >\r\n                    <ion-text>{{ loc }}</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"{{ loc }}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <!-- filtro por Localidad -->\r\n\r\n          <!-- filtro por Tipo -->\r\n          <div *ngIf=\"isFilterType\">\r\n            <div class=\"filter_name\">\r\n              <span>Tipo</span>\r\n            </div>\r\n            <div>\r\n              <ion-list class=\"list_type\">\r\n                <ion-radio-group\r\n                  (ionChange)=\"filterArtist('artista', 'tipo_artista')\"\r\n                  formControlName=\"categoria\"\r\n                  class=\"type_border\"\r\n                >\r\n                  <ion-item class=\"filter_list\" lines=\"none\">\r\n                    <ion-text>Todo</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"\"></ion-radio>\r\n                  </ion-item>\r\n                  <ion-item\r\n                    class=\"filter_list last\"\r\n                    lines=\"none\"\r\n                    *ngFor=\"let tipo of lista_tipo_artis\"\r\n                  >\r\n                    <ion-text>{{ tipo }}</ion-text>\r\n                    <ion-radio slot=\"end\" value=\"{{ tipo }}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <!-- Filtro por Tipo -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <div class=\"artist\" *ngFor=\"let art of artists | filterArtist:dataForm\">\r\n      <ng-container *ngIf=\"art.vacio !== 1\">\r\n        <div class=\"imgArtist\">\r\n          <app-preload-list\r\n            [url]=\"art.imagen.url\"\r\n            [alt]=\"art.nombre\"\r\n            [clase]=\"preloadClase\"\r\n            [urlPreload]=\"preloadImage_list\"\r\n          ></app-preload-list>\r\n        </div>\r\n        <div class=\"infoArtist\">\r\n          <div id=\"info-art\" class=\"type\">{{ art.categoria }}</div>\r\n          <div id=\"info-art\" class=\"name\">{{ art.nombre }}</div>\r\n          <div class=\"netArtist\">\r\n            <img\r\n              *ngIf=\"art.instagram !== null && art.instagram !== undefined && art.instagram !== '' && art.instagram !== ' ' \"\r\n              (click)=\"openInstagram(art.instagram)\"\r\n              src=\"/assets/icon/instagram.png\"\r\n              alt=\"instagram\"\r\n            />\r\n            <img\r\n              *ngIf=\"art.spotify !== null && art.spotify !== undefined && art.spotify !== '' && art.spotify !== ' ' \"\r\n              (click)=\"openSpotify(art.spotify)\"\r\n              src=\"/assets/icon/spotify.png\"\r\n              alt=\"spotify\"\r\n            />\r\n            <img\r\n              *ngIf=\"art.youtube !== null && art.youtube !== undefined && art.youtube !== '' && art.youtube !== ' ' \"\r\n              (click)=\"verVideo(art.youtube, art.nombre)\"\r\n              src=\"/assets/icon/youtube.png\"\r\n              alt=\"youtube\"\r\n            />\r\n            <img\r\n              (click)=\"artistShare('artista', art.nombre)\"\r\n              src=\"/assets/icon/share.png\"\r\n              alt=\"compartir\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"art.vacio === 1\">\r\n        <div class=\"empty\">\r\n          <i class=\"fi fi-rr-sad icon_empty\"></i>\r\n          <div class=\"text_empty\">\r\n            No hay artistas para mostrar con el filtro seleccionado\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"artists.length === 0 && !this.artistSvc.noData\">\r\n    <ng-container *ngFor=\"let item of [1,2,3,4,5,6]\">\r\n      <ion-item>\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n          </p>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ng-container>\r\n  </ion-list>\r\n\r\n  <div *ngIf=\"this.artistSvc.noData\" class=\"empty\">\r\n    <i class=\"fi fi-rr-sad icon_empty\"></i>\r\n    <div class=\"text_empty\" *ngIf=\"dep !== null\">\r\n      No hay artistas en {{ dep }}\r\n    </div>\r\n    <div class=\"text_empty\" *ngIf=\"dist !== null\">\r\n      No hay artistas en {{ depDist }}\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 89145:
/*!***********************************************!*\
  !*** ./src/app/pages/artist/artist.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap\");\n.list-md {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 50px;\n  width: auto;\n}\n.text_empty {\n  color: #d6d2d1;\n  text-align: center;\n  padding-bottom: 15px;\n  font-size: 1.2em;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n.icon_empty {\n  font-size: 5em;\n  color: #d6d2d1;\n}\n.slider {\n  width: 100%;\n}\n.sliderPrimero,\n.sliderHijo,\n.banner,\n.imgSlider {\n  width: 100%;\n}\n.sliderPrimero {\n  background-color: #eeeeee;\n}\n.link {\n  z-index: 1500;\n}\n.icon-link {\n  margin: 0 !important;\n}\n.artist {\n  display: flex;\n  flex-direction: row;\n  margin: 10px 4%;\n  border-radius: 5px;\n  background-color: var(--ion-color-light);\n}\n.imgArtist {\n  width: 40%;\n  /*height: auto; */\n  min-height: 36.8vw;\n}\n.infoArtist {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 25px;\n}\n#info-art:nth-child(1) {\n  font-weight: bold;\n}\n#info-art:nth-child(2) {\n  color: #1d1d1d;\n}\n.netArtist > img {\n  padding: 6px 1em 3px 0;\n}\n.type {\n  font-family: \"Poppins\", sans-serif;\n  color: #01dfb8;\n  font-size: 13px;\n}\n.name {\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark) !important;\n  padding-right: 3px;\n}\n@media (max-width: 341px) {\n  .name {\n    font-size: 14px;\n  }\n}\n.filter_place {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin: -30px auto 10px auto;\n  position: relative;\n  z-index: 50;\n  width: 90%;\n  background-color: var(--ion-color-light);\n  padding: 16px;\n  border-radius: 60px;\n}\nion-label {\n  font-weight: bold;\n  font-family: \"Poppins\";\n  color: #a1a1a1;\n  font-size: 0.8em;\n}\n.form_filter {\n  display: flex;\n  flex-direction: column;\n  margin: 0 5% 5px 5%;\n  z-index: 100;\n  background-color: var(--ion-color-back);\n  border-radius: 16px;\n  box-shadow: 0px 0px 9px -1px rgba(161, 141, 141, 0.75);\n}\n.filter_name {\n  padding: 15px 0 15px 15px;\n  font-size: 0.95em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.filter_name > span {\n  font-weight: 700;\n}\n.filter_list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 2px solid #ddd;\n  width: 100%;\n  height: 35px;\n  font-size: 0.9em;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--ion-color-dark);\n}\n.filter_type {\n  border-top: 2px solid #ddd;\n  width: 100%;\n}\n.type_border > .last:last-child {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n}\n.list_type {\n  border-bottom-left-radius: 16px !important;\n  border-bottom-right-radius: 16px !important;\n  min-height: 30px;\n  max-height: 200px;\n  overflow-y: scroll;\n}\n.open_filter {\n  color: #fc67ff;\n}\nion-radio {\n  --color-checked: #fc67ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFFUjtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtBQUFGO0FBR0E7Ozs7RUFJRSxXQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7QUFBRjtBQUdBO0VBQ0Usb0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFERjtBQUlBO0VBQ0UsaUJBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBS0E7RUFDRSxzQkFBQTtBQUZGO0FBS0E7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRkY7QUFLQTtFQUNFLGtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDRTtJQUNFLGVBQUE7RUFGRjtBQUNGO0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBR0Esc0RBQUE7QUFKRjtBQU9BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FBSkY7QUFPQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtBQUpGO0FBT0E7RUFDRSwwQ0FBQTtFQUNBLDJDQUFBO0FBSkY7QUFPQTtFQUNFLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtBQUpGO0FBT0E7RUFDRSx3QkFBQTtBQUpGIiwiZmlsZSI6ImFydGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4ubGlzdC1tZCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZW1wdHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCA1MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGV4dF9lbXB0eSB7XHJcbiAgY29sb3I6ICNkNmQyZDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pY29uX2VtcHR5IHtcclxuICBmb250LXNpemU6IDVlbTtcclxuICBjb2xvcjogI2Q2ZDJkMTtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXJQcmltZXJvLFxyXG4uc2xpZGVySGlqbyxcclxuLmJhbm5lcixcclxuLmltZ1NsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXJQcmltZXJvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgei1pbmRleDogMTUwMDtcclxufVxyXG5cclxuLmljb24tbGluayB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcnRpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW46IDEwcHggNCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi5pbWdBcnRpc3Qge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgLypoZWlnaHQ6IGF1dG87ICovXHJcbiAgbWluLWhlaWdodDogY2FsYygoMTAwdncgLSAoMTAwdncgKiAwLjA4KSkgKiAwLjQpO1xyXG59XHJcblxyXG4uaW5mb0FydGlzdCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy9hbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4jaW5mby1hcnQ6bnRoLWNoaWxkKDEpIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2luZm8tYXJ0Om50aC1jaGlsZCgyKSB7XHJcbiAgY29sb3I6IHJnYigyOSwgMjksIDI5KTtcclxufVxyXG5cclxuXHJcbi5uZXRBcnRpc3QgPiBpbWcge1xyXG4gIHBhZGRpbmc6IDZweCAxZW0gM3B4IDA7XHJcbn1cclxuXHJcbi50eXBlIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMwMWRmYjg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNDFweCkge1xyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZpbHRyb1xyXG4uZmlsdGVyX3BsYWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IC0zMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1MDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBjb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi5mb3JtX2ZpbHRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMCA1JSA1cHggNSU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0xcHggcmdiYSgxNjEsIDE0MSwgMTQxLCAwLjc1KTtcclxufVxyXG5cclxuLmZpbHRlcl9uYW1lIHtcclxuICBwYWRkaW5nOiAxNXB4IDAgMTVweCAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmlsdGVyX25hbWUgPiBzcGFuIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmlsdGVyX2xpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmZpbHRlcl90eXBlIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR5cGVfYm9yZGVyID4gLmxhc3Q6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0X3R5cGUge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ub3Blbl9maWx0ZXIge1xyXG4gIGNvbG9yOiAjZmM2N2ZmO1xyXG59XHJcblxyXG5pb24tcmFkaW8ge1xyXG4gIC0tY29sb3ItY2hlY2tlZDogI2ZjNjdmZjtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_artist_artist_module_ts.js.map