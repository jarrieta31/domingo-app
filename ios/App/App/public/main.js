(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    { path: '', redirectTo: 'home-menu', pathMatch: 'full' },
    {
        path: 'map/:nombre',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("src_app_pages_map_map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/map/map.module */ 41662)).then(m => m.MapPageModule)
    },
    {
        path: 'where-sleep',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("src_app_pages_where-sleep_where-sleep_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/where-sleep/where-sleep.module */ 99291)).then(m => m.WhereSleepPageModule)
    },
    {
        path: 'where-eat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("src_app_pages_where-eat_where-eat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/where-eat/where-eat.module */ 6824)).then(m => m.WhereEatPageModule)
    },
    {
        path: 'descripcion/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_place_service_ts"), __webpack_require__.e("src_app_pages_modal-info_modal-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal-info/modal-info.module */ 60224)).then(m => m.ModalInfoPageModule)
    },
    {
        path: 'events',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("default-node_modules_capacitor_browser_dist_esm_index_js-src_app_services_database_slides_ser-b18619"), __webpack_require__.e("src_app_pages_events_events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/events/events.module */ 16671)).then(m => m.EventsPageModule)
    },
    {
        path: 'home-menu',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("src_app_pages_home-menu_home-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home-menu/home-menu.module */ 3066)).then(m => m.HomeMenuPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 27926)).then(m => m.TabsPageModule)
    },
    {
        path: 'place',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("default-src_app_services_database_place_service_ts"), __webpack_require__.e("default-node_modules_capacitor_browser_dist_esm_index_js-src_app_services_database_slides_ser-b18619"), __webpack_require__.e("src_app_pages_place_place_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/place/place.module */ 66671)).then(m => m.PlacePageModule)
    },
    {
        path: 'place-selected/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_place_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_place-selected_place-selected_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/place-selected/place-selected.module */ 73950)).then(m => m.PlaceSelectedPageModule)
    },
    {
        path: 'artist',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_artist_artist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/artist/artist.module */ 99106)).then(m => m.ArtistPageModule)
    },
    {
        path: 'dominga',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("src_app_pages_dominga_dominga_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dominga/dominga.module */ 27097)).then(m => m.DomingaPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81356);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 27567);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 54553);








let AppComponent = class AppComponent {
    constructor(platform, alertController, screenOrientation) {
        this.platform = platform;
        this.alertController = alertController;
        this.screenOrientation = screenOrientation;
        this.showSplash = true;
        this.gps = null;
        this.checkReady = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log("checkReady");
                yield this.platform.ready();
                //StatusBar.styleDefault();
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
                (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(3000).subscribe(() => (this.showSplash = false));
                this.checkDarkMode();
                this.modeDyslexic();
            }
            catch (error) {
                console.log("Error de Platform Ready: ", error);
            }
        });
        this.initializeApp();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    ngOnInit() { }
    ngOnDestroy() { }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.checkReady();
        });
    }
    checkDarkMode() {
        if (localStorage.getItem("modoOscuro") == "true") {
            try {
                document.body.classList.toggle("dark");
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    modeDyslexic() {
        if (localStorage.getItem("dyslexic") == "true") {
            try {
                document.body.classList.toggle("dyslexic");
            }
            catch (error) {
                console.log(error);
            }
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-root",
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gpsProviderFactory": () => (/* binding */ gpsProviderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 18260);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat */ 20762);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/database */ 97606);
/* harmony import */ var _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/analytics */ 80843);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ 57693);
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/pipes/pipes.module */ 74356);
/* harmony import */ var _providers_gps_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/gps-provider.service */ 53269);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 54553);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);







// Imports para cliente http

// Import enviroments







//Plugins

// Modulos propios de la app





function gpsProviderFactory(provider) {
    return () => provider.getUbicacionInicial();
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorageModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule.enablePersistence(),
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__.AngularFireDatabaseModule,
            _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_15__.AngularFireAnalyticsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(),
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        ],
        providers: [
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.APP_INITIALIZER,
                useFactory: gpsProviderFactory,
                deps: [_providers_gps_provider_service__WEBPACK_IMPORTED_MODULE_6__.GpsProvider],
                multi: true,
            },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy },
            _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber,
            _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation,
            _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__.SocialSharing
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 57693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating/rating.component */ 27222);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 36264);
/* harmony import */ var _text_to_speech_text_to_speech_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-to-speech/text-to-speech.component */ 65433);
/* harmony import */ var _minimapa_minimapa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minimapa/minimapa.component */ 21263);
/* harmony import */ var _preload_preload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preload/preload.component */ 9582);
/* harmony import */ var _preload_list_preload_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preload-list/preload-list.component */ 50754);
/* harmony import */ var _preload_details_preload_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preload-details/preload-details.component */ 60563);











let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        exports: [
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_0__.RatingComponent,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
            _text_to_speech_text_to_speech_component__WEBPACK_IMPORTED_MODULE_2__.TextToSpeechComponent,
            _minimapa_minimapa_component__WEBPACK_IMPORTED_MODULE_3__.MinimapaComponent,
            _preload_preload_component__WEBPACK_IMPORTED_MODULE_4__.PreloadComponent,
            _preload_list_preload_list_component__WEBPACK_IMPORTED_MODULE_5__.PreloadListComponent,
            _preload_details_preload_details_component__WEBPACK_IMPORTED_MODULE_6__.PreloadDetailsComponent
        ],
        declarations: [
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_0__.RatingComponent,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
            _text_to_speech_text_to_speech_component__WEBPACK_IMPORTED_MODULE_2__.TextToSpeechComponent,
            _minimapa_minimapa_component__WEBPACK_IMPORTED_MODULE_3__.MinimapaComponent,
            _preload_preload_component__WEBPACK_IMPORTED_MODULE_4__.PreloadComponent,
            _preload_list_preload_list_component__WEBPACK_IMPORTED_MODULE_5__.PreloadListComponent,
            _preload_details_preload_details_component__WEBPACK_IMPORTED_MODULE_6__.PreloadDetailsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 36264:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./menu.component.html */ 22060);
/* harmony import */ var _menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss */ 59993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);







let MenuComponent = class MenuComponent {
    constructor(menuCtrl, router, gaService) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.gaService = gaService;
        this.modoOscuro = localStorage.getItem('modoOscuro');
        this.dyslexic = localStorage.getItem('dyslexic');
        this.labelCheck = false;
        this.dyslexicCheck = false;
    }
    ngOnInit() { }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    changeTheme() {
        this.darkMode = localStorage.getItem('modoOscuro');
        if (this.darkMode == 'true') {
            this.gaService.googleAnalyticsModos('modo_oscuro', 'desactivar_oscuro');
            localStorage.removeItem('modoOscuro');
            document.body.classList.toggle('dark');
            this.modoOscuro = localStorage.getItem('modoOscuro');
            this.labelCheck = false;
        }
        else {
            this.gaService.googleAnalyticsModos('modo_oscuro', 'activar_oscuro');
            localStorage.setItem('modoOscuro', JSON.stringify(true));
            document.body.classList.toggle('dark');
            this.labelCheck = true;
        }
    }
    dyslexicFont() {
        this.dyslexicMode = localStorage.getItem('dyslexic');
        if (this.dyslexicMode == 'true') {
            this.gaService.googleAnalyticsModos('modo_dislexia', 'desactivar_dislexia');
            localStorage.removeItem('dyslexic');
            document.body.classList.toggle('dyslexic');
            this.dyslexic = localStorage.getItem('dyslexic');
            this.dyslexicCheck = false;
        }
        else {
            this.gaService.googleAnalyticsModos('modo_dislexia', 'activar_dislexia');
            localStorage.setItem('dyslexic', JSON.stringify(true));
            document.body.classList.toggle('dyslexic');
            this.dyslexicCheck = true;
            this;
        }
    }
    sleep() {
        this.router.navigate(['tabs/sleep']);
        this.menuCtrl.toggle();
    }
    artist() {
        this.router.navigate(['tabs/artist']);
        this.menuCtrl.toggle();
    }
    info() {
        this.router.navigate(['tabs/info']);
        this.menuCtrl.toggle();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__.GoogleAnalyticsService }
];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menu',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 21263:
/*!***********************************************************!*\
  !*** ./src/app/components/minimapa/minimapa.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinimapaComponent": () => (/* binding */ MinimapaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_minimapa_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./minimapa.component.html */ 28783);
/* harmony import */ var _minimapa_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minimapa.component.scss */ 30439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ 33858);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let MinimapaComponent = class MinimapaComponent {
    constructor(router, actionSheetController) {
        this.router = router;
        this.actionSheetController = actionSheetController;
    }
    ngAfterViewInit() {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_3__.accessToken = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mapBoxToken;
        this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__.Map({
            container: this.divMapa.nativeElement,
            style: "mapbox://styles/casadominga/ck9m4w6x10dd61iql4bh7jinz",
            center: [this.place.ubicacion.lng, this.place.ubicacion.lat],
            zoom: 15,
            interactive: false
        });
        const marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__.Marker({
            draggable: false,
            color: "#ea4335",
        }).setLngLat([this.place.ubicacion.lng, this.place.ubicacion.lat])
            .addTo(this.mapa);
        this.mapa.on("load", () => {
            this.mapa.resize();
        });
        //Abre una nueva pagina con el mapa
        this.mapa.on("click", () => {
            this.abrirMapaActionSheet();
        });
    }
    /**
     * Al seleccionar sobre el mapa de cada lugar, se desplega un action-sheet
     * que brinda opciones de como llegar al mismo ya se en auto, bicicleta o caminando
     */
    abrirMapaActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Abrir Mapa",
                cssClass: "my-custom-class",
                buttons: [
                    {
                        text: "Ir en auto",
                        icon: "car-sport",
                        handler: () => {
                            //Abre el mapa en modo auto
                            this.router.navigate([
                                "/map",
                                this.place.nombre,
                                {
                                    longitud: this.place.ubicacion.lng,
                                    latitud: this.place.ubicacion.lat,
                                    tipo: this.place.tipo,
                                    id: this.place.id,
                                    profile: "mapbox/driving-traffic",
                                },
                            ]);
                        },
                    },
                    {
                        text: "Ir caminando",
                        icon: "walk",
                        handler: () => {
                            this.router.navigate([
                                "/map",
                                this.place.nombre,
                                {
                                    longitud: this.place.ubicacion.lng,
                                    latitud: this.place.ubicacion.lat,
                                    tipo: this.place.tipo,
                                    id: this.place.id,
                                    profile: "mapbox/walking",
                                },
                            ]);
                            console.log("Ir caminando");
                        },
                    },
                    {
                        text: "Ir en bicicleta",
                        icon: "bicycle-outline",
                        handler: () => {
                            this.router.navigate([
                                "/map",
                                this.place.nombre,
                                {
                                    longitud: this.place.ubicacion.lng,
                                    latitud: this.place.ubicacion.lat,
                                    tipo: this.place.tipo,
                                    id: this.place.id,
                                    profile: "mapbox/driving",
                                },
                            ]);
                            console.log("Ir en Bicicleta");
                        },
                    },
                    {
                        text: "Cancelar",
                        icon: "close",
                        role: "cancel",
                        handler: () => {
                            console.log("Cancel clicked");
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
};
MinimapaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
MinimapaComponent.propDecorators = {
    divMapa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['mini_mapa', { static: false },] }],
    place: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['lugarActual',] }]
};
MinimapaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-minimapa',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_minimapa_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_minimapa_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MinimapaComponent);



/***/ }),

/***/ 60563:
/*!*************************************************************************!*\
  !*** ./src/app/components/preload-details/preload-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadDetailsComponent": () => (/* binding */ PreloadDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preload_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./preload-details.component.html */ 70910);
/* harmony import */ var _preload_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload-details.component.scss */ 30445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let PreloadDetailsComponent = class PreloadDetailsComponent {
    constructor() {
        this.viewImage = false;
    }
    mostrarImagen() {
        this.viewImage = true;
    }
};
PreloadDetailsComponent.ctorParameters = () => [];
PreloadDetailsComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["url",] }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["alt",] }],
    clase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["clase",] }],
    urlPreload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["urlPreload",] }]
};
PreloadDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-preload-details',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preload_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_preload_details_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreloadDetailsComponent);



/***/ }),

/***/ 50754:
/*!*******************************************************************!*\
  !*** ./src/app/components/preload-list/preload-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadListComponent": () => (/* binding */ PreloadListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preload_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./preload-list.component.html */ 75494);
/* harmony import */ var _preload_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload-list.component.scss */ 59189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let PreloadListComponent = class PreloadListComponent {
    constructor() {
        this.viewImage = false;
    }
    mostrarImagen() {
        this.viewImage = true;
    }
};
PreloadListComponent.ctorParameters = () => [];
PreloadListComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["url",] }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["alt",] }],
    clase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["clase",] }],
    urlPreload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["urlPreload",] }]
};
PreloadListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-preload-list',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preload_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_preload_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreloadListComponent);



/***/ }),

/***/ 9582:
/*!*********************************************************!*\
  !*** ./src/app/components/preload/preload.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadComponent": () => (/* binding */ PreloadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preload_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./preload.component.html */ 75312);
/* harmony import */ var _preload_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload.component.scss */ 24404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let PreloadComponent = class PreloadComponent {
    constructor() {
        this.viewImage = false;
    }
    mostrarImagen() {
        this.viewImage = true;
    }
};
PreloadComponent.ctorParameters = () => [];
PreloadComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["url",] }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["alt",] }],
    urlPreload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["urlPreload",] }],
    clase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["clase",] }]
};
PreloadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-preload",
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preload_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_preload_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreloadComponent);



/***/ }),

/***/ 27222:
/*!*******************************************************!*\
  !*** ./src/app/components/rating/rating.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rating.component.html */ 74857);
/* harmony import */ var _rating_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.scss */ 94121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




var COLORS;
(function (COLORS) {
    COLORS["GREY"] = "#E0E0E0";
    COLORS["GREEN"] = "#76FF03";
    COLORS["YELLOW"] = "#FFCA28";
    COLORS["RED"] = "#DD2C00";
})(COLORS || (COLORS = {}));
;
let RatingComponent = class RatingComponent {
    constructor() {
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    rate(index) {
        // function used to change the value of our rating 
        // triggered when user, clicks a star to change the rating
        this.rating = index;
        this.ratingChange.emit(this.rating);
    }
    getColor(index) {
        /* function to return the color of a star based on what
         index it is. All stars greater than the index are assigned
         a grey color , while those equal or less than the rating are
         assigned a color depending on the rating. Using the following criteria:
      
              1-2 stars: red
              3 stars  : yellow
              4-5 stars: green
        */
        if (this.isAboveRating(index)) {
            return COLORS.GREY;
        }
        switch (this.rating) {
            case 1:
            case 2:
                return COLORS.RED;
            case 3:
                return COLORS.YELLOW;
            case 4:
            case 5:
                return COLORS.GREEN;
            default:
                return COLORS.GREY;
        }
    }
    isAboveRating(index) {
        // returns whether or not the selected index is above ,the current rating
        // function is called from the getColor function.
        return index > this.rating;
    }
    getSize() {
        return 24;
    }
    ngOnInit() { }
};
RatingComponent.ctorParameters = () => [];
RatingComponent.propDecorators = {
    rating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ratingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
RatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-rating',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rating_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingComponent);



/***/ }),

/***/ 65433:
/*!***********************************************************************!*\
  !*** ./src/app/components/text-to-speech/text-to-speech.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextToSpeechComponent": () => (/* binding */ TextToSpeechComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_text_to_speech_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./text-to-speech.component.html */ 94466);
/* harmony import */ var _text_to_speech_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-to-speech.component.scss */ 19792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_community_text_to_speech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/text-to-speech */ 78667);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);








let TextToSpeechComponent = class TextToSpeechComponent {
    constructor(platform, loading, gaService) {
        this.platform = platform;
        this.loading = loading;
        this.gaService = gaService;
        this.viewImage = true;
        this.rate = 1;
    }
    ngOnInit() {
        if (this.platform.is('ios') || this.platform.is('iphone')) {
            this.rate = 1.4;
        }
    }
    ngOnDestroy() {
        this.stopTextToSpeech();
    }
    googleAnalyticsAudioStart() {
        this.gaService.googleAnalyticsAudioStart(this.nombre);
    }
    googleAnalyticsAudioStop() {
        this.gaService.googleAnalyticsAudioStop(this.nombre);
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Por favor aguarde, procesando texto',
                duration: 2000,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    playTextToSpeech() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            this.viewImage = false;
            let arrText = this.texto.split('.');
            //console.log(arrText)
            _capacitor_community_text_to_speech__WEBPACK_IMPORTED_MODULE_2__.TextToSpeech.speak({ text: this.texto, lang: 'es-AR', rate: this.rate })
                .then(() => {
                this.stopTextToSpeech();
            })
                .catch((reason) => 
            // this.loading.dismiss()
            console.log(reason));
        });
    }
    stopTextToSpeech() {
        //        this.loading.dismiss();
        this.viewImage = true;
        _capacitor_community_text_to_speech__WEBPACK_IMPORTED_MODULE_2__.TextToSpeech.speak({ text: '', lang: 'es-AR', rate: 1 })
            .then(() => console.log('Done'))
            .catch((reason) => console.log(reason));
    }
};
TextToSpeechComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__.GoogleAnalyticsService }
];
TextToSpeechComponent.propDecorators = {
    texto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['texto',] }],
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['nombre',] }]
};
TextToSpeechComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-text-to-speech',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_text_to_speech_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_text_to_speech_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TextToSpeechComponent);



/***/ }),

/***/ 53269:
/*!***************************************************!*\
  !*** ./src/app/providers/gps-provider.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsProvider": () => (/* binding */ GpsProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/geolocation */ 2233);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 94219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/analytics */ 80843);










let GpsProvider = class GpsProvider {
    constructor(platform, http, ga) {
        this.platform = platform;
        this.http = http;
        this.ga = ga;
        this.gps = false;
        this.pais = null;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.getDeviceInfo = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.deviceInfo = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getInfo();
            let deviceID = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getId()).uuid;
            this.ga.setUserId(deviceID);
        });
        console.log('provider.server');
    }
    getUbicacionInicial() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const platformReady = yield this.platform.ready();
            console.log('ready: ', platformReady);
            //await this.verEstadoGps(platformReady);
            yield this.getDeviceInfo();
            if (!this.deviceInfo.isVirtual) {
                return _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.getCurrentPosition()
                    .then((pos) => {
                    console.log('pos: ', pos);
                    if (pos !== null) {
                        this.gps = true;
                        this.posicion = {
                            longitud: pos.coords.longitude,
                            latitud: pos.coords.latitude,
                        };
                        console.log('provider: ', this.posicion);
                        let res = this.getLocation(this.posicion.longitud, this.posicion.latitud);
                        let resDepto = this.getLocationDepto(this.posicion.longitud, this.posicion.latitud);
                        res.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe((res) => {
                            this.pais = res;
                        });
                        resDepto.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe((region) => {
                            this.ga.setUserProperties({ departamento: region });
                        });
                    }
                    else {
                        this.gps = false;
                    }
                })
                    .catch((error) => console.log('Error de gps-provider: ', error));
            }
            else {
                return new Promise((resolve, reject) => {
                    this.gps = true;
                    this.posicion = {
                        latitud: -34.33940051728305,
                        longitud: -56.713930578444064,
                    };
                    resolve({
                        value: this.posicion,
                        error: false,
                    });
                    reject({
                        error: true,
                        message: 'Error al obtener la posición virtual.',
                    });
                });
            }
        });
    }
    getLocation(lng, lat) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlMopboxDepto}${lng},${lat}.json?access_token=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mapBoxToken}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((a) => console.log(a)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((depto) => depto.features[depto.features.length - 1].text), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$));
    }
    getLocationDepto(lng, lat) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlMopboxDepto}${lng},${lat}.json?access_token=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mapBoxToken}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((a) => console.log(a)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((depto) => depto.features[depto.features.length - 2].text), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$));
    }
};
GpsProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_10__.AngularFireAnalytics }
];
GpsProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], GpsProvider);



/***/ }),

/***/ 81679:
/*!******************************************************!*\
  !*** ./src/app/services/google-analytics.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAnalyticsService": () => (/* binding */ GoogleAnalyticsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/analytics */ 80843);



let GoogleAnalyticsService = class GoogleAnalyticsService {
    constructor(ga) {
        this.ga = ga;
    }
    /**métodos compartidos */
    googleAnalyticsPantallas(pantalla_visitada, nombre) {
        this.ga.logEvent('vistas_de_pantalla', { pantalla_visitada });
        if (pantalla_visitada === 'detalle_de_lugar') {
            let nombre_lugar_visitado = nombre;
            this.ga.logEvent(pantalla_visitada + '_visitas', {
                nombre_lugar_visitado,
            });
        }
        else if (pantalla_visitada === 'detalle_de_evento') {
            let nombre_evento_visitado = nombre;
            this.ga.logEvent(pantalla_visitada + '_visitas', {
                nombre_evento_visitado,
            });
        }
        else if (pantalla_visitada === 'descripcion_lugar') {
            let nombre_descripcion_lugar_visitada = nombre;
            this.ga.logEvent(pantalla_visitada + '_visitas', {
                nombre_descripcion_lugar_visitada,
            });
        }
        else if (pantalla_visitada === 'mapa') {
            let nombre_mapa_visto = nombre;
            this.ga.logEvent(pantalla_visitada + '_lugar_visto', {
                nombre_mapa_visto,
            });
        }
    }
    googleAnalyticsCompartir(tipo_compartir, nombre_compartir) {
        this.ga.logEvent('compartir', { tipo_compartir, nombre_compartir });
    }
    googleAnalyticsRedesSociales(pantalla_red_social, tipo_red_social) {
        this.ga.logEvent('vistas_redes_sociales', {
            pantalla_red_social,
            tipo_red_social,
        });
    }
    googleAnalyticsReproducirVideo(tipo_video, nombre_video) {
        this.ga.logEvent('reproducir_video', { tipo_video, nombre_video });
    }
    /**métodos lugares */
    googleAnalyticsAccesibilidad() {
        this.ga.logEvent('accesibilidad');
    }
    googleAnalyticsPuntosDeInteres() {
        this.ga.logEvent('puntos_de_interes');
    }
    googleAnalyticsAudioStart(nombre_audio_start) {
        this.ga.logEvent('audio_lugares_start', { nombre_audio_start });
    }
    googleAnalyticsAudioStop(nombre_audio_stop) {
        this.ga.logEvent('audio_lugares_stop', { nombre_audio_stop });
    }
    /**métodos eventos */
    googleAnalyticsMapa(nombre_mapa_evento) {
        this.ga.logEvent('ubicacion_evento', { nombre_mapa_evento });
    }
    /**métodos interfaz */
    googleAnalyticsModos(tipo_modo, toggle) {
        this.ga.logEvent('modos', { tipo_modo, toggle });
    }
    /**métodos filtros */
    googleAnalyticsFiltroHome(tipo_filtro_home, seleccion_home) {
        this.ga.logEvent('filtro_home', { tipo_filtro_home, seleccion_home });
    }
    googleAnalyticsFiltrosPantallas(filtro_pantalla, filtro_tipo) {
        this.ga.logEvent('filtros_pantallas', { filtro_pantalla, filtro_tipo });
    }
};
GoogleAnalyticsService.ctorParameters = () => [
    { type: _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_0__.AngularFireAnalytics }
];
GoogleAnalyticsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], GoogleAnalyticsService);



/***/ }),

/***/ 49278:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/filter-artist.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterArtistPipe": () => (/* binding */ FilterArtistPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterArtistPipe = class FilterArtistPipe {
    transform(artist, data) {
        if (data.length === 0) {
            return artist;
        }
        if (data.localidad !== null)
            data.localidad = data.localidad.toLowerCase();
        else
            data.localidad = "";
        if (data.categoria !== null)
            data.categoria = data.categoria.toLowerCase();
        else
            data.categoria = "";
        const art = artist.filter((item) => {
            return (item.localidad.toLowerCase().includes(data.localidad) &&
                item.categoria.toLowerCase().includes(data.categoria));
        });
        const vacio = [
            {
                "vacio": 1,
            },
        ];
        if (art.length === 0) {
            return vacio;
        }
        else
            return art;
    }
};
FilterArtistPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "filterArtist",
    })
], FilterArtistPipe);



/***/ }),

/***/ 46883:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/filter-events.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterEventsPipe": () => (/* binding */ FilterEventsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterEventsPipe = class FilterEventsPipe {
    transform(eventos, data) {
        if (data.length === 0) {
            return eventos;
        }
        if (data.formulario["departamento"] === undefined) {
            data.formulario["departamento"] = "";
        }
        if (data.formulario["general"] === undefined) {
            data.formulario["general"] = "";
        }
        if (data.formulario["localidad"] === undefined) {
            data.formulario["localidad"] = "";
        }
        if (data.formulario["fecha_desde"] === "" ||
            data.formulario["fecha_desde"] === undefined) {
            data.formulario["fecha_desde"] = new Date();
        }
        let fec_has = "Fri Dec 31 2100 00:00:00 GMT-0300 (hora estándar de Uruguay)";
        if (data.formulario["fecha_hasta"] === "" ||
            data.formulario["fecha_hasta"] === undefined) {
            data.formulario["fecha_hasta"] = new Date(fec_has);
        }
        if (data.formulario["fecha_desde"] !== "") {
            data.formulario["fecha_desde"] = new Date(data.formulario["fecha_desde"]);
            let year = data.formulario['fecha_desde'].getFullYear();
            let month = data.formulario['fecha_desde'].getMonth();
            let day = data.formulario['fecha_desde'].getDate();
            let fullDate = new Date(year, month, day);
            data.formulario["fecha_desde"] = fullDate;
        }
        if (data.formulario["fecha_hasta"] !== "") {
            data.formulario["fecha_hasta"] = new Date(data.formulario["fecha_hasta"]);
            let year = data.formulario['fecha_hasta'].getFullYear();
            let month = data.formulario['fecha_hasta'].getMonth();
            let day = data.formulario['fecha_hasta'].getDate();
            let fullDate = new Date(year, month, day, 23, 59, 59);
            data.formulario["fecha_hasta"] = fullDate;
        }
        data.formulario["departamento"] =
            data.formulario["departamento"].toLowerCase();
        data.formulario["general"] = data.formulario["general"].toLowerCase();
        data.formulario["localidad"] = data.formulario["localidad"].toLowerCase();
        return eventos.filter((item) => {
            return (item.departamento
                .toLowerCase()
                .includes(data.formulario["departamento"]) &&
                (item.descripcion.toLowerCase().includes(data.formulario["general"]) ||
                    item.nombre.toLowerCase().includes(data.formulario["general"])) &&
                item.localidad.toLowerCase().includes(data.formulario["localidad"]) &&
                item.fechaInicio >= data.formulario["fecha_desde"] &&
                item.fechaFin <= data.formulario["fecha_hasta"]);
        });
    }
};
FilterEventsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "filterEvents",
    })
], FilterEventsPipe);



/***/ }),

/***/ 16892:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/filter-events1.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterEvents1Pipe": () => (/* binding */ FilterEvents1Pipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterEvents1Pipe = class FilterEvents1Pipe {
    transform(eventos, dataform) {
        let dist = localStorage.getItem("distanceActivo");
        let distFound = false;
        if (dataform.length === 0) {
            return eventos;
        }
        if (dataform.localidad !== null)
            dataform.localidad = dataform.localidad.toLowerCase();
        else
            dataform.localidad = "";
        if (dataform.tipo !== null)
            dataform.tipo = dataform.tipo.toLowerCase();
        else
            dataform.tipo = "";
        let fec_ini = new Date();
        if (dataform.fecha_inicio === "" ||
            dataform.fecha_inicio === undefined ||
            dataform.fecha_inicio === null) {
            dataform.fecha_inicio = new Date(fec_ini);
        }
        let fec_has = "Fri Dec 31 2100 00:00:00 GMT-0300 (hora estándar de Uruguay)";
        if (dataform.fecha_fin === "" ||
            dataform.fecha_fin === undefined ||
            dataform.fecha_fin === null) {
            dataform.fecha_fin = new Date(fec_has);
        }
        if (dataform.fecha_inicio !== "") {
            dataform.fecha_inicio = new Date(dataform.fecha_inicio);
            let year = dataform.fecha_inicio.getFullYear();
            let month = dataform.fecha_inicio.getMonth();
            let day = dataform.fecha_inicio.getDate();
            let fullDate = new Date(year, month, day);
            dataform.fecha_inicio = fullDate;
        }
        if (dataform.fecha_fin !== "") {
            dataform.fecha_fin = new Date(dataform.fecha_fin);
            let year = dataform.fecha_fin.getFullYear();
            let month = dataform.fecha_fin.getMonth();
            let day = dataform.fecha_fin.getDate();
            let fullDate = new Date(year, month, day, 23, 59, 59);
            dataform.fecha_fin = fullDate;
        }
        if (dataform.fecha_inicio > dataform.fecha_fin) {
            dataform.fecha_inicio = "";
            dataform.fecha_fin = "";
            return eventos;
        }
        const ev = eventos.filter((ev) => {
            return (ev.tipo.toLowerCase().includes(dataform.tipo) &&
                ev.localidad.toLowerCase().includes(dataform.localidad) &&
                dataform.fecha_inicio <= ev.fechaInicio &&
                dataform.fecha_fin >= ev.fechaFin);
        });
        const vacio = [
            {
                vacio: 1,
            },
        ];
        if (dist !== null) {
            if (ev.length > 0) {
                ev.forEach((event) => {
                    if (event.distancia < parseInt(dist)) {
                        distFound = true;
                    }
                });
            }
            if (distFound === false) {
                return vacio;
            }
        }
        if (ev.length === 0) {
            return vacio;
        }
        else
            return ev;
    }
};
FilterEvents1Pipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "filterEvents1",
    })
], FilterEvents1Pipe);



/***/ }),

/***/ 4852:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/filter-places.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPlacesPipe": () => (/* binding */ FilterPlacesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterPlacesPipe = class FilterPlacesPipe {
    transform(places, data) {
        let dist = localStorage.getItem("distanceActivo");
        let distFound = false;
        if (data.length === 0) {
            return places;
        }
        if (data.localidad !== null)
            data.localidad = data.localidad.toLowerCase();
        else
            data.localidad = "";
        if (data.tipo !== null)
            data.tipo = data.tipo.toLowerCase();
        else
            data.tipo = "";
        const pl = places.filter((item) => {
            return (item.localidad.toLowerCase().includes(data.localidad) &&
                item.tipo.toLowerCase().includes(data.tipo));
        });
        const vacio = [
            {
                vacio: 1,
            },
        ];
        if (dist !== null) {
            if (pl.length > 0) {
                pl.forEach((places) => {
                    if (places.distancia < parseInt(dist)) {
                        distFound = true;
                    }
                });
            }
            if (distFound === false) {
                return vacio;
            }
        }
        if (pl.length === 0) {
            return vacio;
        }
        else
            return pl;
    }
};
FilterPlacesPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "filterPlaces",
    })
], FilterPlacesPipe);



/***/ }),

/***/ 39550:
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/filtro-donde-comer.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroDondeComerPipe": () => (/* binding */ FiltroDondeComerPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FiltroDondeComerPipe = class FiltroDondeComerPipe {
    transform(eat, data) {
        if (data.length === 0) {
            return eat;
        }
        if (data.localidad !== undefined || data.localidad !== null)
            data.localidad = data.localidad.toLowerCase();
        return eat.filter((item) => {
            return item.localidad.toLowerCase().includes(data.localidad);
        });
    }
};
FiltroDondeComerPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "filtroDondeComer",
    })
], FiltroDondeComerPipe);



/***/ }),

/***/ 55910:
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/filtro-donde-dormir.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroDondeDormirPipe": () => (/* binding */ FiltroDondeDormirPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FiltroDondeDormirPipe = class FiltroDondeDormirPipe {
    transform(dondeDormir, data) {
        if (data.length === 0) {
            return dondeDormir;
        }
        if (data.localidad != null || data.localidad != undefined)
            data.localidad = data.localidad.toLowerCase();
        return dondeDormir.filter(item => {
            return item.localidad.toLowerCase().includes(data.localidad);
        });
    }
};
FiltroDondeDormirPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroDondeDormir'
    })
], FiltroDondeDormirPipe);



/***/ }),

/***/ 17744:
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/filtro-informacion.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroInformacionPipe": () => (/* binding */ FiltroInformacionPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FiltroInformacionPipe = class FiltroInformacionPipe {
    // children: any[] = [];
    transform(information, texto) {
        if (texto.length === 0) {
            return information;
        }
        // let largo = information.length - 1;
        // let cont = 0;
        texto = texto.toLowerCase();
        //     this.children = [];
        //     for (let key in information) {
        //     		this.children.push(information[key].children)
        //   console.log(this.children[key][key].number);
        //   console.log(item.children[key].number);
        // }
        return information.filter(item => {
            return item.name.toLowerCase().includes(texto);
        });
    }
};
FiltroInformacionPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroInformacion'
    })
], FiltroInformacionPipe);



/***/ }),

/***/ 39749:
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/filtro-mas-opciones.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroMasOpcionesPipe": () => (/* binding */ FiltroMasOpcionesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FiltroMasOpcionesPipe = class FiltroMasOpcionesPipe {
    transform(Opciones, texto) {
        if (texto.length === 0) {
            return Opciones;
        }
        texto = texto.toLowerCase();
        return Opciones.filter(item => {
            return item.nombre.toLowerCase().includes(texto)
                || item.telefonos.numero.toLowerCase().includes(texto)
                || item.direccion.toLowerCase().includes(texto);
        });
    }
};
FiltroMasOpcionesPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroMasOpciones'
    })
], FiltroMasOpcionesPipe);



/***/ }),

/***/ 60089:
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/filtro-tipo-circuito.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroTipoCircuitoPipe": () => (/* binding */ FiltroTipoCircuitoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FiltroTipoCircuitoPipe = class FiltroTipoCircuitoPipe {
    transform(tipoCircuito, texto) {
        if (texto.length === 0) {
            return tipoCircuito;
        }
        texto = texto.toLowerCase();
        return tipoCircuito.filter(item => {
            return item.nombre.toLowerCase().includes(texto);
        });
    }
};
FiltroTipoCircuitoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroTipoCircuito'
    })
], FiltroTipoCircuitoPipe);



/***/ }),

/***/ 36727:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filtro.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroPipe": () => (/* binding */ FiltroPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FiltroPipe = class FiltroPipe {
    transform(arreglo, texto, columna) {
        if (texto.length === 0) {
            return arreglo;
        }
        texto = texto.toLowerCase();
        return arreglo.filter(item => {
            return item[columna].toLowerCase().includes(texto);
        });
    }
};
FiltroPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtro'
    })
], FiltroPipe);



/***/ }),

/***/ 31352:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/format-distancia.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatDistancia": () => (/* binding */ FormatDistancia)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FormatDistancia = class FormatDistancia {
    transform(texto) {
        let espacio = " ";
        var txtSalida = "";
        if ((typeof texto === "string" || typeof texto === "undefined")) {
            txtDistancia = "GPS no activo";
            return txtDistancia;
        }
        else if (typeof texto === "number") {
            var arrayTexto = texto.toString().split(espacio);
            var txtDistancia = arrayTexto[arrayTexto.length - 1];
            arrayTexto.pop();
            var numDistancia = Number(txtDistancia);
            if (numDistancia <= 1) {
                numDistancia = numDistancia * 1000;
                txtDistancia = String(Math.round(numDistancia * 1) / 1);
                txtDistancia = txtDistancia.replace(".", ",");
                txtDistancia = "A " + txtDistancia + " m";
            }
            else {
                txtDistancia = String(Math.round(numDistancia * 1000) / 1000);
                txtDistancia = txtDistancia.replace(".", ",");
                txtDistancia = "A " + txtDistancia + " km";
            }
            arrayTexto.push(txtDistancia);
            for (let i = 0; i < arrayTexto.length; i++) {
                if (i == 0) {
                    txtSalida = arrayTexto[i];
                }
                else {
                    txtSalida = txtSalida + espacio + arrayTexto[i];
                }
            }
        }
        return txtSalida;
    }
};
FormatDistancia = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "formatDistancia",
    })
], FormatDistancia);



/***/ }),

/***/ 38262:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/hour.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HourPipe": () => (/* binding */ HourPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let HourPipe = class HourPipe {
    transform(hour) {
        var txtSalida = "";
        if (hour < 1) {
            txtSalida = "0 h";
        }
        else {
            let cut = Math.trunc(hour);
            txtSalida = cut.toString() + " h";
        }
        return txtSalida;
    }
};
HourPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "hour",
    })
], HourPipe);



/***/ }),

/***/ 23551:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/minute.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinutePipe": () => (/* binding */ MinutePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let MinutePipe = class MinutePipe {
    transform(minute) {
        var txtSalida = "";
        if (minute < 1) {
            txtSalida = "0 min";
        }
        else {
            let cut = Math.trunc(minute);
            txtSalida = cut.toString() + " min";
        }
        return txtSalida;
    }
};
MinutePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'minute'
    })
], MinutePipe);



/***/ }),

/***/ 74356:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro.pipe */ 36727);
/* harmony import */ var _filtro_tipo_circuito_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtro-tipo-circuito.pipe */ 60089);
/* harmony import */ var _filtro_donde_dormir_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtro-donde-dormir.pipe */ 55910);
/* harmony import */ var _filtro_donde_comer_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filtro-donde-comer.pipe */ 39550);
/* harmony import */ var _filtro_informacion_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtro-informacion.pipe */ 17744);
/* harmony import */ var _filtro_mas_opciones_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filtro-mas-opciones.pipe */ 39749);
/* harmony import */ var _format_distancia_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format-distancia.pipe */ 31352);
/* harmony import */ var _filter_events_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-events.pipe */ 46883);
/* harmony import */ var _filter_places_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-places.pipe */ 4852);
/* harmony import */ var _filter_events1_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-events1.pipe */ 16892);
/* harmony import */ var _filter_artist_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-artist.pipe */ 49278);
/* harmony import */ var _hour_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hour.pipe */ 38262);
/* harmony import */ var _minute_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./minute.pipe */ 23551);















let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe,
            _filtro_tipo_circuito_pipe__WEBPACK_IMPORTED_MODULE_1__.FiltroTipoCircuitoPipe,
            _filtro_donde_dormir_pipe__WEBPACK_IMPORTED_MODULE_2__.FiltroDondeDormirPipe,
            _filtro_donde_comer_pipe__WEBPACK_IMPORTED_MODULE_3__.FiltroDondeComerPipe,
            _filtro_informacion_pipe__WEBPACK_IMPORTED_MODULE_4__.FiltroInformacionPipe,
            _filtro_mas_opciones_pipe__WEBPACK_IMPORTED_MODULE_5__.FiltroMasOpcionesPipe,
            _format_distancia_pipe__WEBPACK_IMPORTED_MODULE_6__.FormatDistancia,
            _filter_events_pipe__WEBPACK_IMPORTED_MODULE_7__.FilterEventsPipe,
            _filter_places_pipe__WEBPACK_IMPORTED_MODULE_8__.FilterPlacesPipe,
            _filter_events1_pipe__WEBPACK_IMPORTED_MODULE_9__.FilterEvents1Pipe,
            _filter_artist_pipe__WEBPACK_IMPORTED_MODULE_10__.FilterArtistPipe,
            _hour_pipe__WEBPACK_IMPORTED_MODULE_11__.HourPipe,
            _minute_pipe__WEBPACK_IMPORTED_MODULE_12__.MinutePipe,
        ],
        exports: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe,
            _filtro_tipo_circuito_pipe__WEBPACK_IMPORTED_MODULE_1__.FiltroTipoCircuitoPipe,
            _filtro_donde_dormir_pipe__WEBPACK_IMPORTED_MODULE_2__.FiltroDondeDormirPipe,
            _filtro_donde_comer_pipe__WEBPACK_IMPORTED_MODULE_3__.FiltroDondeComerPipe,
            _filtro_informacion_pipe__WEBPACK_IMPORTED_MODULE_4__.FiltroInformacionPipe,
            _filtro_mas_opciones_pipe__WEBPACK_IMPORTED_MODULE_5__.FiltroMasOpcionesPipe,
            _format_distancia_pipe__WEBPACK_IMPORTED_MODULE_6__.FormatDistancia,
            _filter_events_pipe__WEBPACK_IMPORTED_MODULE_7__.FilterEventsPipe,
            _filter_places_pipe__WEBPACK_IMPORTED_MODULE_8__.FilterPlacesPipe,
            _filter_events1_pipe__WEBPACK_IMPORTED_MODULE_9__.FilterEvents1Pipe,
            _filter_artist_pipe__WEBPACK_IMPORTED_MODULE_10__.FilterArtistPipe,
            _hour_pipe__WEBPACK_IMPORTED_MODULE_11__.HourPipe,
            _minute_pipe__WEBPACK_IMPORTED_MODULE_12__.MinutePipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyALYzXkGTPXdlEb23pnIqU4NykVLuVieM0",
        authDomain: "developer-dominga.firebaseapp.com",
        projectId: "developer-dominga",
        storageBucket: "developer-dominga.appspot.com",
        messagingSenderId: "161489449929",
        appId: "1:161489449929:web:c4dbe31ec2902f5ffaae18",
        measurementId: "G-94TRQJ0LTH"
    },
    firebaseAPIKey: "AIzaSyALYzXkGTPXdlEb23pnIqU4NykVLuVieM0",
    mapBoxToken: "pk.eyJ1IjoiY2FzYWRvbWluZ2EiLCJhIjoiY2s3NTlzajFoMDVzZTNlcGduMWh0aml3aSJ9.JcZFoGdIQnz3hSg2p4FGkA",
    urlMopboxDepto: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    urlMapboxDistance: "https://api.mapbox.com/directions/v5/mapbox/driving/"
};


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"showSplash\" class=\"splash\">\r\n\t<div class=\"spinner\"></div>\r\n\t<p class=\"inicial-load\">Cargando...</p>\r\n</div>\r\n\r\n<ion-app mode=\"md\">\r\n\t<app-menu></app-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 22060:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/menu/menu.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"favorite\">\r\n      <ion-title color=\"back\">Configuraciones</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <i\r\n          class=\"fi fi-rr-arrow-left closeMenu\"\r\n          (click)=\"toggleMenu()\"\r\n        ></i>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-text>\r\n          <h3>Interfaz</h3>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon *ngIf=\"labelCheck == true\" slot=\"start\" name=\"sunny-outline\"></ion-icon>\r\n        <ion-icon *ngIf=\"labelCheck == false\" slot=\"start\" name=\"moon-outline\"></ion-icon>\r\n        <ion-label *ngIf=\"labelCheck == true\" class=\"fontOption\"> Tema claro</ion-label>\r\n        <ion-label *ngIf=\"labelCheck == false\" class=\"fontOption\"> Tema oscuro</ion-label>\r\n        <ion-toggle\r\n          *ngIf=\"modoOscuro == 'true'\"\r\n          slot=\"end\"\r\n          checked\r\n          (ionChange)=\"changeTheme()\"\r\n          mode=\"ios\"\r\n        ></ion-toggle>\r\n        <ion-toggle\r\n          *ngIf=\"modoOscuro == null\"\r\n          slot=\"end\"\r\n          (ionChange)=\"changeTheme()\"\r\n          mode=\"ios\"\r\n        ></ion-toggle>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n        <ion-label *ngIf=\"dyslexicCheck == false\" class=\"fontOption\"> Fuente dislexia</ion-label>\r\n        <ion-label *ngIf=\"dyslexicCheck == true\" class=\"fontOption\">Quitar fuente</ion-label>\r\n        <ion-toggle\r\n          *ngIf=\"dyslexic == 'true'\"\r\n          slot=\"end\"\r\n          checked\r\n          (ionChange)=\"dyslexicFont()\"\r\n          mode=\"ios\"\r\n        ></ion-toggle>\r\n        <ion-toggle\r\n          *ngIf=\"dyslexic == null\"\r\n          slot=\"end\"\r\n          (ionChange)=\"dyslexicFont()\"\r\n          mode=\"ios\"\r\n        ></ion-toggle>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-text>\r\n          <h3>Más opciones</h3>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-item (click)=\"sleep()\">\r\n        <ion-icon slot=\"start\" name=\"bed-outline\"></ion-icon>\r\n        <ion-label class=\"fontOption\">Donde dormir</ion-label>\r\n      </ion-item>\r\n      <ion-item (click)=\"artist()\">\r\n        <ion-icon slot=\"start\" name=\"color-palette-outline\"></ion-icon>\r\n        <ion-label class=\"fontOption\">Artistas</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n \r\n  </ion-content>\r\n</ion-menu>\r\n");

/***/ }),

/***/ 28783:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/minimapa/minimapa.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"mini-mapa\"  #mini_mapa>\r\n\r\n</div>\r\n");

/***/ }),

/***/ 70910:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/preload-details/preload-details.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n  <img [style.display]=\"viewImage == true ? 'block': 'none'\" [src]=\"url\" (load)=\"mostrarImagen()\" [class]=\"clase\">\r\n  <img [style.display]=\"viewImage == true ? 'none': 'block'\" [src]=\"urlPreload\" [class]=\"clase\">\r\n</div>");

/***/ }),

/***/ 75494:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/preload-list/preload-list.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n  <img [style.display]=\"viewImage == true ? 'block': 'none'\" [src]=\"url\" (load)=\"mostrarImagen()\" [class]=\"clase\">\r\n  <img [style.display]=\"viewImage == true ? 'none': 'block'\" [src]=\"urlPreload\" [class]=\"clase\">\r\n</div>");

/***/ }),

/***/ 75312:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/preload/preload.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n  <img [style.display]=\"viewImage == true ? 'block': 'none'\" [src]=\"url\" (load)=\"mostrarImagen()\" [class]=\"clase\">\r\n  <img [style.display]=\"viewImage == true ? 'none': 'block'\" [src]=\"urlPreload\" [class]=\"clase\">\r\n</div>");

/***/ }),

/***/ 74857:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/rating/rating.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n  <i class=\"fas fa-star\" name=\"star-outline\" *ngFor=\"let num of [1,2,3,4,5]\"\r\n    (click)=\"rate(num)\" [ngStyle]=\"{'color':getColor(num)}\"></i>\r\n</div>\r\n");

/***/ }),

/***/ 94466:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/text-to-speech/text-to-speech.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    <ion-fab vertical=\"bottom\" color=\"red\" horizontal=\"end\" edge slot=\"fixed\" [style.display]=\"viewImage == false ? 'flex': 'none'\">\r\n        <ion-fab-button color=\"circuits\">\r\n            <ion-icon  color=\"light\" name=\"stop\" (click)=\"stopTextToSpeech(); googleAnalyticsAudioStop()\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\" [style.display]=\"viewImage == true ? 'flex': 'none'\">\r\n        <ion-fab-button color=\"circuits\">\r\n            <ion-icon color=\"light\" class=\"hecho\" name=\"play\" (click)=\"playTextToSpeech(); googleAnalyticsAudioStart()\" ></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ".splash {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-color-light);\n}\n\np {\n  color: var(--ion-color-dark);\n}\n\n.inicial-load {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  background-color: var(--ion-color-dark);\n  margin: 100px auto;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FBQ0Q7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUVBLG1EQUFBO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLHlEQUFBO0lBQ0EsaUVBQUE7RUFNRjtFQUxFO0lBQ0EsOERBQUE7SUFDQSxzRUFBQTtFQU9GO0VBTkU7SUFDQSxpRUFBQTtJQUNBLHlFQUFBO0VBUUY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BsYXNoe1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ei1pbmRleDogOTk5O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbnB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmluaWNpYWwtbG9hZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSB9XHJcbiAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSAgcm90YXRlWCgxODBkZWcpIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgMCUgeyBcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIFxyXG4gIH0gNTAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZykgXHJcbiAgfSAxMDAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 59993:
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap\");\n.closeMenu {\n  margin-right: 8px;\n  font-size: 1.1em;\n}\ni {\n  padding: 0 10px 0 0;\n  font-size: 1.3em;\n  color: var(--ion-color-back);\n}\nh3 {\n  font-weight: 700;\n  font-size: 1.2em;\n}\n.fontOption {\n  font-family: \"Poppins\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFFUjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksa0NBQUE7QUFBSiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5jbG9zZU1lbnUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG5pIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKTtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5mb250T3B0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */";

/***/ }),

/***/ 30439:
/*!*************************************************************!*\
  !*** ./src/app/components/minimapa/minimapa.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".mini-mapa {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmltYXBhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJtaW5pbWFwYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5pLW1hcGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 30445:
/*!***************************************************************************!*\
  !*** ./src/app/components/preload-details/preload-details.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div {\n  width: 100%;\n  height: 100%;\n}\n\n.img-principal {\n  border-radius: 5px 5px 0 0;\n}\n\n.img-interes {\n  border-radius: 3px;\n  width: 100%;\n  margin: 3px 0;\n}\n\n.img_dominga {\n  border-radius: 10px 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVDO0VBQ0csNEJBQUE7QUFDSiIsImZpbGUiOiJwcmVsb2FkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWctcHJpbmNpcGFsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG59XHJcblxyXG4uaW1nLWludGVyZXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDNweCAwO1xyXG4gIH1cclxuXHJcbiAuaW1nX2RvbWluZ2Ege1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuIH0iXX0= */";

/***/ }),

/***/ 59189:
/*!*********************************************************************!*\
  !*** ./src/app/components/preload-list/preload-list.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div {\n  width: 100%;\n  height: 100%;\n}\n\n.img-comer {\n  border-radius: 15% !important;\n  height: auto;\n  width: 100%;\n}\n\n.img-dormir {\n  border-radius: 15% !important;\n  height: auto;\n  width: 100%;\n}\n\n.img-artista {\n  border-top-left-radius: 5px !important;\n  border-bottom-left-radius: 5px !important;\n  overflow: hidden;\n}\n\n.img-evento {\n  width: 85%;\n  border-radius: 5%;\n  margin: 0px;\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.28);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxzQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLFVBQUE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7RUFHQSwrQ0FBQTtBQUZGIiwiZmlsZSI6InByZWxvYWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltZy1jb21lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nLWRvcm1pciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nLWFydGlzdGEge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4uaW1nLWV2ZW50byB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICAvL21pbi1oZWlnaHQ6IGNhbGMoKCgoMTAwdncpICogMC40MikgKiAwLjg1ICkgLyAxLjMzMzMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxufSJdfQ== */";

/***/ }),

/***/ 24404:
/*!***********************************************************!*\
  !*** ./src/app/components/preload/preload.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div {\n  width: 100%;\n  height: 100%;\n}\n\n.img_card_place {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InByZWxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWdfY2FyZF9wbGFjZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 94121:
/*!*********************************************************!*\
  !*** ./src/app/components/rating/rating.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 19792:
/*!*************************************************************************!*\
  !*** ./src/app/components/text-to-speech/text-to-speech.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div {\n  padding: 15px 0 0 6%;\n  height: 3.125rem;\n}\n\n.custom {\n  font-size: 38pt;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtdG8tc3BlZWNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBQ0oiLCJmaWxlIjoidGV4dC10by1zcGVlY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgcGFkZGluZzogMTVweCAwIDAgNiU7IFxyXG4gICAgaGVpZ2h0OiAzLjEyNXJlbTtcclxufVxyXG5cclxuLmN1c3RvbSB7XHJcbiAgICBmb250LXNpemU6IDM4cHQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgXHJcbn0iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map