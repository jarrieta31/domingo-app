"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 19080:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 11911);




const routes = [
    {
        path: "",
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: "home",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("src_app_pages_home-menu_home-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home-menu/home-menu.module */ 3066)).then((m) => m.HomeMenuPageModule),
            },
            {
                path: "place",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("default-src_app_services_database_place_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_place_place_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../place/place.module */ 66671)).then((m) => m.PlacePageModule),
            },
            {
                path: "events",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_events_events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../events/events.module */ 16671)).then((m) => m.EventsPageModule),
            },
            {
                path: "sleep",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_where-sleep_where-sleep_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../where-sleep/where-sleep.module */ 99291)).then((m) => m.WhereSleepPageModule),
            },
            {
                path: "eat",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_where-eat_where-eat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../where-eat/where-eat.module */ 6824)).then((m) => m.WhereEatPageModule),
            },
            {
                path: "artist",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_geolocation_service_ts"), __webpack_require__.e("default-node_modules_turf_distance_dist_es_index_js"), __webpack_require__.e("default-src_app_services_database_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_artist_artist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../artist/artist.module */ 99106)).then((m) => m.ArtistPageModule),
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 27926:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 19080);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 11911);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 11911:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 52563);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 73081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let TabsPage = class TabsPage {
    constructor(menu) {
        this.menu = menu;
    }
    ngOnInit() { }
    openCustom() {
        this.menu.enable(true, "first");
        this.menu.open("first");
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-tabs",
        template: _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 52563:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/tabs.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <i class=\"fi fi-rr-home icon-tab\"></i>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"events\">\n      <i class=\"fi fi-rr-calendar icon-tab\"></i>\n      <ion-label>Eventos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"place\">\n      <i class=\"fi fi-rr-map-marker icon-tab\"></i>\n      <ion-label>Lugares</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"eat\">\n      <i class=\"fi fi-rr-hamburger icon-tab\"></i>\n      <ion-label>Comida</ion-label>\n    </ion-tab-button>\n    <ion-tab-button class=\"moreOptions\" (click)=\"openCustom()\">\n      <i class=\"fi fi-rr-menu-dots icon-tab\"></i>\n      <ion-label>Más</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ 73081:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".icon-tab {\n  font-size: 2em;\n}\n\nion-tab-bar {\n  contain: none;\n  --border: none;\n}\n\n.moreOptions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-label {\n  font-size: 0.9em;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.main-option {\n  font-size: 20px;\n}\n\nion-tab-bar {\n  --color-selected: var(--ion-color-options);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFVQTtFQUNFLGVBQUE7QUFQRjs7QUFVQTtFQUNFLDBDQUFBO0FBUEYiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi10YWIge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBjb250YWluOiBub25lO1xuICAtLWJvcmRlcjogbm9uZTtcbn1cblxuLm1vcmVPcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cbi8vIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCgzKSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgbWFyZ2luLXRvcDogLTQwcHg7XG4vLyAgIC8vIGJveC1zaGFkb3c6IC0xcHggMXB4IDNweCAxcHggcmdiYSgxOTksIDE5NiwgMTk2LCAwLjU4KTtcbi8vICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAzcHggMXB4IHJnYmEoMTk5LCAxOTYsIDE5NiwgMC41OCk7XG4vLyAgIC8vIC1tb3otYm94LXNoYWRvdzogLTFweCAxcHggM3B4IDFweCByZ2JhKDE5OSwgMTk2LCAxOTYsIDAuNTgpO1xuLy8gfVxuXG4ubWFpbi1vcHRpb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLW9wdGlvbnMpO1xufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map