"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_place-selected_place-selected_module_ts"],{

/***/ 80382:
/*!***********************************************************************!*\
  !*** ./src/app/pages/place-selected/place-selected-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceSelectedPageRoutingModule": () => (/* binding */ PlaceSelectedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _place_selected_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-selected.page */ 66727);




const routes = [
    {
        path: '',
        component: _place_selected_page__WEBPACK_IMPORTED_MODULE_0__.PlaceSelectedPage
    }
];
let PlaceSelectedPageRoutingModule = class PlaceSelectedPageRoutingModule {
};
PlaceSelectedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlaceSelectedPageRoutingModule);



/***/ }),

/***/ 73950:
/*!***************************************************************!*\
  !*** ./src/app/pages/place-selected/place-selected.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceSelectedPageModule": () => (/* binding */ PlaceSelectedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _place_selected_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-selected-routing.module */ 80382);
/* harmony import */ var _place_selected_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-selected.page */ 66727);
/* harmony import */ var _video_video_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video/video.module */ 97329);
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ 74356);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ 57693);










let PlaceSelectedPageModule = class PlaceSelectedPageModule {
};
PlaceSelectedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _place_selected_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceSelectedPageRoutingModule,
            _video_video_module__WEBPACK_IMPORTED_MODULE_2__.VideoPageModule,
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        ],
        declarations: [_place_selected_page__WEBPACK_IMPORTED_MODULE_1__.PlaceSelectedPage]
    })
], PlaceSelectedPageModule);



/***/ }),

/***/ 66727:
/*!*************************************************************!*\
  !*** ./src/app/pages/place-selected/place-selected.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceSelectedPage": () => (/* binding */ PlaceSelectedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_place_selected_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./place-selected.page.html */ 73079);
/* harmony import */ var _place_selected_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-selected.page.scss */ 1204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_database_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database/place.service */ 22087);
/* harmony import */ var _video_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video/video.page */ 35652);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _components_preload_details_preload_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/preload-details/preload-details.component */ 60563);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);












let PlaceSelectedPage = class PlaceSelectedPage {
    constructor(placeSvc, modalCtrl, router, actionSheetController, socialSharing, gaService, http) {
        this.placeSvc = placeSvc;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.socialSharing = socialSharing;
        this.gaService = gaService;
        this.http = http;
        this.place = null;
        this.near = [];
        this.param = '';
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 1,
            autoplay: true,
        };
        this.videos = [];
        /**url load  */
        this.preloadImage = '/assets/load_1.30.gif';
        /**clase preload */
        this.preloadClass = 'img-principal';
        /**clase preload galeria*/
        this.preloadClassGaleria = 'img-galeria';
        /**clase preload interes*/
        this.preloadClassInteres = 'img-interes';
        /**url para compartir */
        this.shareURL = 'https://developer-dominga.web.app/share-place/';
    }
    ngOnInit() {
        document.title = 'Detalle de Lugar';
        this.place_suscription = this.placeSvc.place_selected.subscribe((res) => {
            this.place = res;
            this.gaService.googleAnalyticsPantallas('detalle_de_lugar', res.nombre);
            if (this.place.videos.length > 0) {
                this.videos = this.place.videos.filter((item) => item.url !== null &&
                    item.url !== undefined &&
                    item.url !== '' &&
                    item.url !== ' ');
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
    getPlace(id) {
        this.placeSvc.getPlaceId(id);
    }
    socialSharingShare(nombre, id, imagen) {
        // console.log(imagen)
        // fetch(imagen, {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        //   mode: 'no-cors',
        // })
        //   .then((res) => res.blob())
        //   .then((imgBlob) => {
        //     console.log(imgBlob)
        //     let objectURL = URL.createObjectURL(imgBlob);
        //     console.log(objectURL);
        //   })
        //   .catch((error) => {
        //     console.log('Request failed', error);
        //   });
        let image = [imagen];
        this.gaService.googleAnalyticsCompartir('lugar', 'lugar_' + nombre);
        this.socialSharing.shareWithOptions({
            message: nombre,
            subject: nombre,
            files: image,
            url: this.shareURL + id,
            chooserTitle: 'Compartiendo ' + nombre,
        });
    }
    /**
     * Al seleccionar una imagen de la mini galería modifica la imagen principal
     */
    cambiarImagen(src) {
        this.preloadDetails.url = src;
    }
    irHome() {
        this.router.navigate(['/tabs/place']);
    }
    /**
     * Abre modal para reproducir video
     * @param url - URL del video que se va a ejecutar
     */
    verVideo(url, nombre) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.gaService.googleAnalyticsReproducirVideo('lugares', nombre);
            const video = yield this.modalCtrl.create({
                component: _video_video_page__WEBPACK_IMPORTED_MODULE_3__.VideoPage,
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
    /**
     * Al seleccionar sobre el mapa de cada lugar, se desplega un action-sheet
     * que brinda opciones de como llegar al mismo ya se en auto, bicicleta o caminando
     */
    abrirMapaActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
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
            yield actionSheet.present();
        });
    }
};
PlaceSelectedPage.ctorParameters = () => [
    { type: src_app_services_database_place_service__WEBPACK_IMPORTED_MODULE_2__.PlaceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__.SocialSharing },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__.GoogleAnalyticsService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
PlaceSelectedPage.propDecorators = {
    preloadDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_components_preload_details_preload_details_component__WEBPACK_IMPORTED_MODULE_4__.PreloadDetailsComponent, { static: true },] }]
};
PlaceSelectedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-place-selected',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_place_selected_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_place_selected_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlaceSelectedPage);



/***/ }),

/***/ 73079:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/place-selected/place-selected.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"information\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        (click)=\"irHome()\"\r\n        color=\"back\"\r\n        text=\"\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"back\" id=\"nombre\">{{place.nombre}}</ion-title>\r\n    <ion-icon\r\n      color=\"back\"\r\n      slot=\"end\"\r\n      class=\"share\"\r\n      name=\"share-social-sharp\"\r\n      (click)=\"socialSharingShare(place.nombre, place.id, place.imagenPrincipal.url)\"\r\n    ></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-fab\r\n    *ngIf=\"videos.length > 0\"\r\n    vertical=\"top\"\r\n    horizontal=\"start\"\r\n    slot=\"fixed\"\r\n  >\r\n    <ion-fab-button color=\"danger\">\r\n      <ion-icon name=\"logo-youtube\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"bottom\" class=\"lista_videos\">\r\n      <ion-fab-button class=\"btn_video\" *ngFor=\"let video of videos\">\r\n        <ion-icon\r\n          (click)=\"verVideo(video.url, place.nombre)\"\r\n          name=\"videocam-outline\"\r\n          style=\"font-size: 180%\"\r\n        ></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <div class=\"padre\" id=\"place-container\">\r\n    <div class=\"diva\">\r\n      <app-preload-details\r\n        #foto\r\n        [url]=\"place.imagenPrincipal.url\"\r\n        [alt]=\"place.nombre\"\r\n        [urlPreload]=\"preloadImage\"\r\n        [clase]=\"preloadClass\"\r\n      ></app-preload-details>\r\n    </div>\r\n    <div class=\"divb\">\r\n      <ion-slides class=\"slidePadre\" pager=\"false\" [options]=\"slideOpts\">\r\n        <ion-slide class=\"slideHijo\" *ngFor=\"let img of place.imagenes\">\r\n          <div>\r\n            <app-preload-details\r\n              #foto\r\n              (click)=\"cambiarImagen(img.url)\"\r\n              [url]=\"img.url\"\r\n              [alt]=\"img.url\"\r\n              [urlPreload]=\"preloadImage\"\r\n              [clase]=\"preloadClassGaleria\"\r\n            ></app-preload-details>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <div class=\"divc\">\r\n      <div class=\"iconos\">\r\n        <div class=\"iconAuto\" *ngIf=\"place.auto == true\">\r\n          <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"iconEstilos\" *ngIf=\"place.bicicleta == true\">\r\n          <ion-icon name=\"bicycle-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"iconEstilos\" *ngIf=\"place.caminar == true\">\r\n          <ion-icon name=\"walk-outline\"></ion-icon>\r\n        </div>\r\n        <!-- <div id=\"dist\">\r\n                  <div>{{ distancia | formatDistancia }}</div>                 \r\n              </div> -->\r\n      </div>\r\n      <p\r\n        class=\"text\"\r\n        id=\"place-description\"\r\n        [routerLink]=\"['/descripcion', place.id]\"\r\n        [innerHTML]=\"place.descripcionCorta\"\r\n      ></p>\r\n    </div>\r\n    <div class=\"divd\">\r\n      <app-minimapa [lugarActual]=\"place\"></app-minimapa>\r\n    </div>\r\n    <h6 class=\"interes\">Te puede interesar</h6>\r\n    <div class=\"divf\">\r\n      <a\r\n        class=\"sugerencia\"\r\n        (click)=\"getPlace(sug.id); this.gaService.googleAnalyticsPuntosDeInteres()\"\r\n        *ngFor=\"let sug of near\"\r\n        [routerLink]=\"['/place-selected',sug.id]\"\r\n      >\r\n        <div class=\"sug\">\r\n          <app-preload-details\r\n            [url]=\"sug.image.url\"\r\n            [alt]=\"sug.image.url\"\r\n            [urlPreload]=\"preloadImage\"\r\n            [clase]=\"preloadClassInteres\"\r\n          ></app-preload-details>\r\n        </div>\r\n        <div class=\"infoSug\">\r\n          <div class=\"sugNombre\">{{ sug.name }}</div>\r\n          <div class=\"sugDistancia\">\r\n            {{ sug.distance | formatDistancia }} desde {{ place.nombre }}\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 1204:
/*!***************************************************************!*\
  !*** ./src/app/pages/place-selected/place-selected.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\n.share {\n  margin-right: 16px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n}\n\nion-title {\n  margin-left: 3%;\n}\n\n#nombre {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.diva {\n  width: 100%;\n}\n\n.divb {\n  width: 100%;\n  height: auto;\n  margin-top: 0.5%;\n}\n\n.divc {\n  width: 100%;\n  height: auto;\n  background-color: var(--ion-color-text);\n}\n\n.divd {\n  width: 100%;\n  height: 100px;\n  margin-top: 1.5%;\n}\n\n.divf {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.imgPrincipal {\n  width: 100%;\n  height: auto;\n  border-radius: 5px 5px 0 0;\n}\n\n.padre {\n  width: 100%;\n  height: auto;\n  padding: 3% 3% 0 3%;\n}\n\n.slideHijo,\n.slidePadre {\n  height: 100%;\n  width: 100%;\n}\n\n.text {\n  font-size: 12px;\n  margin: 0 4% 0 4% !important;\n  font-family: Barlow;\n  padding-bottom: 2%;\n  font-family: \"Poppins\", sans-serif;\n  display: inline-block;\n}\n\n.verMas {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  display: inline-block;\n}\n\n.distancia {\n  width: 50%;\n  float: left;\n}\n\n.iconos {\n  display: flex;\n  flex-direction: row;\n  margin: 1% 4% 2% 4%;\n  justify-content: left;\n  align-items: center;\n}\n\n.sugerencia {\n  width: 50%;\n  display: flex;\n  text-decoration: none;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.sug {\n  border-radius: 3px;\n  width: 46%;\n}\n\n.interes {\n  margin: 3% 0 3% 0;\n  font-weight: 400;\n  color: #00dea5;\n  height: 3%;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.infoSug {\n  margin: 0 0 0 2%;\n  padding: 2%;\n  width: 50%;\n}\n\n.iconEstilos {\n  margin: 3% 1.5% 0 1.5%;\n}\n\n.iconAuto {\n  margin: 3% 1.5% 0 0;\n}\n\n.sugNombre {\n  font-weight: bold;\n  color: #b6b6b6;\n  font-size: 0.6em;\n  margin-bottom: 5px;\n}\n\n.sugDistancia {\n  font-weight: 400;\n  font-size: 0.4em;\n  color: var(--ion-color-dark);\n  font-size: 10px;\n}\n\n#key {\n  display: none;\n}\n\n.estrellas {\n  margin-left: auto;\n  margin-top: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n#fav {\n  font-size: 150%;\n}\n\n#dist {\n  margin: 3% 2% 0 2%;\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.valoracion {\n  font-size: 11px;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.action-sheet-group {\n  background: #7b89d8;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .action-sheet-group {\n  background: #e5e5e5;\n}\n\n.lista_videos {\n  margin-top: 100%;\n}\n\n.btn_video {\n  margin-top: 10%;\n  height: 45px;\n  width: 45px;\n}\n\n.btn_redes {\n  margin-bottom: 10%;\n}\n\n.redes_sociales {\n  margin-bottom: 100%;\n}\n\n.access {\n  float: right;\n  margin-right: 3%;\n}\n\n@media only screen and (min-width: 768px) {\n  .interes {\n    margin: 2% 0 2% 0;\n    font-weight: 400;\n    color: #00dea5;\n    font-size: 32px;\n  }\n\n  .sugNombre {\n    font-weight: bold;\n    color: #b6b6b6;\n    font-size: 25px;\n    margin-top: 3px;\n    margin-bottom: 5px;\n  }\n\n  .sugDistancia {\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    font-size: 18px;\n  }\n\n  .estrellas {\n    margin-left: auto;\n    margin-top: 3%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #dist {\n    margin: 3% 2% 0 2%;\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .valoracion {\n    font-size: 20px;\n  }\n\n  .iconEstilos {\n    margin: 3% 2% 0 2%;\n    font-size: 20px;\n  }\n\n  .iconAuto {\n    margin: 3% 2% 0 0;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-height: 1024px) {\n  .interes {\n    margin: 4% 0 4% 0;\n    font-weight: 400;\n    color: #00dea5;\n    font-size: 32px;\n  }\n\n  .sugNombre {\n    font-weight: bold;\n    color: #b6b6b6;\n    font-size: 25px;\n  }\n\n  .sugDistancia {\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    font-size: 18px;\n  }\n\n  .iconEstilos {\n    margin: 3% 2% 0 2%;\n  }\n\n  .iconAuto {\n    margin: 3% 2% 0 0;\n  }\n\n  .estrellas {\n    margin-left: auto;\n    margin-top: 3%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #dist {\n    margin: 3% 2% 0 2%;\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .valoracion {\n    font-size: 20px;\n  }\n\n  .iconEstilos {\n    margin: 3% 2% 0 2%;\n    font-size: 25px;\n  }\n\n  .iconAuto {\n    margin: 3% 2% 0 0;\n    font-size: 25px;\n  }\n}\n\n@media only screen and (min-height: 1366px) {\n  .iconEstilos {\n    margin: 2% 2% 0 2%;\n  }\n\n  .iconAuto {\n    margin: 2% 2% 0 0;\n  }\n\n  .divb {\n    margin-top: 0.5%;\n  }\n}\n\n@media only screen and (min-height: 600px) and (max-height: 736px) {\n  .divb {\n    margin-top: 0.5%;\n  }\n\n  .interes {\n    margin: 2% 0 2% 0;\n    font-weight: 400;\n    color: #00dea5;\n  }\n}\n\n@media only screen and (min-height: 737px) and (max-height: 980px) {\n  .interes {\n    margin: 2% 0 0 0;\n    font-weight: 400;\n    color: #00dea5;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .sugNombre {\n    font-weight: bold;\n    color: #b6b6b6;\n    font-size: 10px;\n  }\n\n  .sugDistancia {\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    font-size: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlLXNlbGVjdGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGtDQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxzQkFBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0Usd0NBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUFKOztBQUdFLHVFQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUU7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQURKOztFQUlFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQURKOztFQUlFO0lBQ0UsZ0JBQUE7SUFDQSw0QkFBQTtJQUNBLGVBQUE7RUFESjs7RUFJRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBREo7O0VBSUU7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQURKOztFQUlFO0lBQ0UsZUFBQTtFQURKOztFQUlFO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBREo7O0VBSUU7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFESjtBQUNGOztBQUlFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFGSjs7RUFLRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFGSjs7RUFLRTtJQUNFLGdCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VBRko7O0VBS0U7SUFDRSxrQkFBQTtFQUZKOztFQUtFO0lBQ0UsaUJBQUE7RUFGSjs7RUFLRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBRko7O0VBS0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUZKOztFQUtFO0lBQ0UsZUFBQTtFQUZKOztFQUtFO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBRko7O0VBS0U7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFGSjtBQUNGOztBQUtFO0VBQ0U7SUFDRSxrQkFBQTtFQUhKOztFQU1FO0lBQ0UsaUJBQUE7RUFISjs7RUFNRTtJQUNFLGdCQUFBO0VBSEo7QUFDRjs7QUFNRTtFQUNFO0lBQ0UsZ0JBQUE7RUFKSjs7RUFPRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBSko7QUFDRjs7QUFPRTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFMSjtBQUNGOztBQVFFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBTko7O0VBU0U7SUFDRSxnQkFBQTtJQUNBLDRCQUFBO0lBQ0EsY0FBQTtFQU5KO0FBQ0YiLCJmaWxlIjoicGxhY2Utc2VsZWN0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLy9vdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuc2hhcmUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICB9XHJcblxyXG4gICNub21icmUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmRpdmEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXZiIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMC41JTtcclxuICB9XHJcbiAgXHJcbiAgLmRpdmMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXZkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXZmIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWdQcmluY2lwYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZHJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyUgMyUgMCAzJTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlSGlqbyxcclxuICAuc2xpZGVQYWRyZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwIDQlIDAgNCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBCYXJsb3c7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnZlck1hcyB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZGlzdGFuY2lhIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmljb25vcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogMSUgNCUgMiUgNCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc3VnZXJlbmNpYSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgXHJcbiAgLnN1ZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gIH1cclxuICBcclxuICAuaW50ZXJlcyB7XHJcbiAgICBtYXJnaW46IDMlIDAgMyUgMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwZGVhNTtcclxuICAgIGhlaWdodDogMyU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuaW5mb1N1ZyB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDIlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICAuaWNvbkVzdGlsb3Mge1xyXG4gICAgbWFyZ2luOiAzJSAxLjUlIDAgMS41JTtcclxuICB9XHJcbiAgXHJcbiAgLmljb25BdXRvIHtcclxuICAgIG1hcmdpbjogMyUgMS41JSAwIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWdOb21icmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2I2YjZiNjtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWdEaXN0YW5jaWEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC40ZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAja2V5IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lc3RyZWxsYXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI2ZhdiB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgfVxyXG4gIFxyXG4gICNkaXN0IHtcclxuICAgIG1hcmdpbjogMyUgMiUgMCAyJTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC52YWxvcmFjaW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgXHJcbiAgLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuICAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICM3Yjg5ZDg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0YV92aWRlb3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bl92aWRlbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bl9yZWRlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWRlc19zb2NpYWxlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYWNjZXNzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5pbnRlcmVzIHtcclxuICAgICAgbWFyZ2luOiAyJSAwIDIlIDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiAjMDBkZWE1O1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3VnTm9tYnJlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjYjZiNmI2O1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN1Z0Rpc3RhbmNpYSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICBcclxuICAgIC5lc3RyZWxsYXMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2Rpc3Qge1xyXG4gICAgICBtYXJnaW46IDMlIDIlIDAgMiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudmFsb3JhY2lvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uRXN0aWxvcyB7XHJcbiAgICAgIG1hcmdpbjogMyUgMiUgMCAyJTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb25BdXRvIHtcclxuICAgICAgbWFyZ2luOiAzJSAyJSAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTAyNHB4KSB7XHJcbiAgICAuaW50ZXJlcyB7XHJcbiAgICAgIG1hcmdpbjogNCUgMCA0JSAwO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBjb2xvcjogIzAwZGVhNTtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN1Z05vbWJyZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2I2YjZiNjtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN1Z0Rpc3RhbmNpYSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uRXN0aWxvcyB7XHJcbiAgICAgIG1hcmdpbjogMyUgMiUgMCAyJTtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uQXV0byB7XHJcbiAgICAgIG1hcmdpbjogMyUgMiUgMCAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmVzdHJlbGxhcyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjZGlzdCB7XHJcbiAgICAgIG1hcmdpbjogMyUgMiUgMCAyJTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC52YWxvcmFjaW9uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb25Fc3RpbG9zIHtcclxuICAgICAgbWFyZ2luOiAzJSAyJSAwIDIlO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaWNvbkF1dG8ge1xyXG4gICAgICBtYXJnaW46IDMlIDIlIDAgMDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxMzY2cHgpIHtcclxuICAgIC5pY29uRXN0aWxvcyB7XHJcbiAgICAgIG1hcmdpbjogMiUgMiUgMCAyJTtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uQXV0byB7XHJcbiAgICAgIG1hcmdpbjogMiUgMiUgMCAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRpdmIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjUlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA3MzZweCkge1xyXG4gICAgLmRpdmIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmludGVyZXMge1xyXG4gICAgICBtYXJnaW46IDIlIDAgMiUgMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgY29sb3I6ICMwMGRlYTU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDczN3B4KSBhbmQgKG1heC1oZWlnaHQ6IDk4MHB4KSB7XHJcbiAgICAuaW50ZXJlcyB7XHJcbiAgICAgIG1hcmdpbjogMiUgMCAwIDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiAjMDBkZWE1O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2NXB4KSB7XHJcbiAgICAuc3VnTm9tYnJlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjYjZiNmI2O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3VnRGlzdGFuY2lhIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_place-selected_place-selected_module_ts.js.map