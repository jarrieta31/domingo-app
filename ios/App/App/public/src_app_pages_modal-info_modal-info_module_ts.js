"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_modal-info_modal-info_module_ts"],{

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

/***/ 84684:
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalInfoPageRoutingModule": () => (/* binding */ ModalInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _modal_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-info.page */ 5921);




const routes = [
    {
        path: '',
        component: _modal_info_page__WEBPACK_IMPORTED_MODULE_0__.ModalInfoPage
    }
];
let ModalInfoPageRoutingModule = class ModalInfoPageRoutingModule {
};
ModalInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalInfoPageRoutingModule);



/***/ }),

/***/ 60224:
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalInfoPageModule": () => (/* binding */ ModalInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-info-routing.module */ 84684);
/* harmony import */ var _modal_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-info.page */ 5921);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);








// Import ionic-rating module
let ModalInfoPageModule = class ModalInfoPageModule {
};
ModalInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalInfoPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_modal_info_page__WEBPACK_IMPORTED_MODULE_1__.ModalInfoPage]
    })
], ModalInfoPageModule);



/***/ }),

/***/ 5921:
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalInfoPage": () => (/* binding */ ModalInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-info.page.html */ 67594);
/* harmony import */ var _modal_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-info.page.scss */ 36773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var src_app_services_database_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database/place.service */ 22087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/browser */ 39337);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);










let ModalInfoPage = class ModalInfoPage {
    constructor(callNumber, placeSvc, gaService) {
        this.callNumber = callNumber;
        this.placeSvc = placeSvc;
        this.gaService = gaService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.place = null;
        this.telefonos = [];
    }
    ngOnInit() {
        document.title = 'Descripción Lugar';
        this.placeSvc.place_selected
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$))
            .subscribe((res) => {
            this.gaService.googleAnalyticsPantallas('descripcion_lugar', res.nombre);
            this.place = res;
            this.place.telefonos.forEach((tel) => {
                if (tel['numero'] !== null &&
                    tel['numero'] !== undefined &&
                    tel['numero'] !== '' &&
                    tel['numero'] !== ' ') {
                    this.telefonos.push(tel['numero']);
                }
            });
        });
        if (this.place.web === null ||
            this.place.web === undefined ||
            this.place.web === '' ||
            this.place.web === ' ') {
            let elem = document.getElementById('web');
            elem.setAttribute('style', 'display:none');
        }
        if (this.place.facebook == null ||
            this.place.facebook === undefined ||
            this.place.facebook === '' ||
            this.place.facebook === ' ') {
            let elem = document.getElementById('facebook');
            elem.setAttribute('style', 'display:none');
        }
        if (this.place.instagram == null ||
            this.place.instagram === undefined ||
            this.place.instagram === '' ||
            this.place.instagram === ' ') {
            let elem = document.getElementById('instagram');
            elem.setAttribute('style', 'display:none');
        }
        if (this.place.whatsapp === null ||
            this.place.whatsapp === undefined ||
            this.place.whatsapp === '' ||
            this.place.whatsapp === ' ') {
            let elem = document.getElementById('whatsapp');
            elem.setAttribute('style', 'display:none');
        }
        if (this.telefonos.length === 0) {
            let elem = document.getElementById('phone');
            elem.setAttribute('style', 'display:none');
        }
    }
    ngAfterViewInit() {
        this.descripcionText = this.descripcionHtml.nativeElement.innerText;
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    callPhone() {
        this.gaService.googleAnalyticsRedesSociales('lugares', 'telefono');
        this.callNumber
            .callNumber(this.telefonos[0], true)
            .then((res) => console.log('Llamando!', res))
            .catch((err) => console.log('Error en llamada', err));
    }
    openWeb() {
        this.gaService.googleAnalyticsRedesSociales('lugares', 'web');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: this.place.web });
    }
    openFacebook() {
        this.gaService.googleAnalyticsRedesSociales('lugares', 'facebook');
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: this.place.facebook });
    }
};
ModalInfoPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber },
    { type: src_app_services_database_place_service__WEBPACK_IMPORTED_MODULE_3__.PlaceService },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_5__.GoogleAnalyticsService }
];
ModalInfoPage.propDecorators = {
    descripcionHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['descripcion', { static: true },] }]
};
ModalInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modal-info',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_info_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_info_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalInfoPage);



/***/ }),

/***/ 67594:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/modal-info/modal-info.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"options\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        defaultHref=\"places/{{place.id}}\"\r\n        color=\"back\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"back\"> {{ place.nombre }} </ion-title>\r\n  </ion-toolbar>\r\n  <!-- Botones de reproduccion Text To Speech -->\r\n  <app-text-to-speech\r\n    [texto]=\"descripcionText\"\r\n    [nombre]=\"place.nombre\"\r\n  ></app-text-to-speech>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-text>\r\n    <br />\r\n    <div #descripcion class=\"texto\" [innerHTML]=\"place.descripcion\"></div>\r\n  </ion-text>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col id=\"web\">\r\n        <div class=\"ion-text-center\">\r\n          <div class=\"circulo_red\">\r\n            <div (click)=\"openWeb()\">\r\n              <ion-icon name=\"globe-outline\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col id=\"facebook\">\r\n        <div class=\"ion-text-center\">\r\n          <div class=\"circulo_red\">\r\n            <div (click)=\"openFacebook()\">\r\n              <ion-icon class=\"icon-fb\" name=\"logo-facebook\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col id=\"instagram\">\r\n        <div class=\"ion-text-center\">\r\n          <div class=\"circulo_red\">\r\n            <a\r\n              href=\"{{ place.instagram }}\" (click)=\"this.gaService.googleAnalyticsRedesSociales('lugares', 'instagram')\"\r\n              ><ion-icon name=\"logo-instagram\"></ion-icon\r\n            ></a>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col id=\"whatsapp\">\r\n        <div class=\"ion-text-center\">\r\n          <div class=\"circulo_red_wpp\">\r\n            <a\r\n              href=\"{{ place.whatsapp }}\" (click)=\"this.gaService.googleAnalyticsRedesSociales('lugares', 'whatsapp')\"\r\n              ><ion-icon name=\"logo-whatsapp\"></ion-icon\r\n            ></a>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col id=\"phone\">\r\n        <div class=\"ion-text-center\">\r\n          <div\r\n            class=\"circulo_red\"\r\n            (click)=\"callPhone()\"\r\n          >\r\n            <ion-icon name=\"call-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 36773:
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".texto {\n  margin: 6%;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n\nion-title {\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-grid {\n  margin-left: 12%;\n  margin-right: 12%;\n}\n\n.circulo_red, .circulo_red > a, .circulo_red > div {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background: var(--ion-color-dark);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0px auto;\n  padding: 3%;\n}\n\n.circulo_red_wpp, .circulo_red_wpp > a {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background: var(--ion-color-whatsapp);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0px auto;\n  padding: 3%;\n}\n\nion-icon {\n  color: var(--ion-color-light) !important;\n  font-size: 1.5rem !important;\n}\n\n.icon-fb {\n  border-radius: 50%;\n}\n\n.access {\n  float: right;\n  margin-right: 3%;\n  font-size: 1rem !important;\n  color: var(--ion-color-back) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBQUNGIiwiZmlsZSI6Im1vZGFsLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRvIHtcclxuICBtYXJnaW46IDYlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEyJTtcclxufVxyXG5cclxuLmNpcmN1bG9fcmVkLCAuY2lyY3Vsb19yZWQgPiBhLCAuY2lyY3Vsb19yZWQgPiBkaXYge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLmNpcmN1bG9fcmVkX3dwcCwgLmNpcmN1bG9fcmVkX3dwcCA+IGEge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoYXRzYXBwKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uLWZiIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hY2Nlc3Mge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFjaykgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modal-info_modal-info_module_ts.js.map