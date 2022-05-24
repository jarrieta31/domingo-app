"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_modal-info_modal-info_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-info.page.html */ 67594);
/* harmony import */ var _modal_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-info.page.scss */ 36773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var src_app_services_database_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database/place.service */ 22087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/browser */ 39337);









let ModalInfoPage = class ModalInfoPage {
    constructor(callNumber, placeSvc) {
        this.callNumber = callNumber;
        this.placeSvc = placeSvc;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.place = null;
        this.telefonos = [];
    }
    ngOnInit() {
        this.placeSvc.place_selected
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$))
            .subscribe((res) => {
            this.place = res;
            this.place.telefonos.forEach((tel) => {
                if (tel["numero"] !== null &&
                    tel["numero"] !== undefined &&
                    tel["numero"] !== "" &&
                    tel["numero"] !== " ") {
                    this.telefonos.push(tel["numero"]);
                }
            });
        });
        if (this.place.web === null ||
            this.place.web === undefined ||
            this.place.web === "" ||
            this.place.web === " ") {
            let elem = document.getElementById("web");
            elem.setAttribute("style", "display:none");
        }
        if (this.place.facebook == null ||
            this.place.facebook === undefined ||
            this.place.facebook === "" ||
            this.place.facebook === " ") {
            let elem = document.getElementById("facebook");
            elem.setAttribute("style", "display:none");
        }
        if (this.place.instagram == null ||
            this.place.instagram === undefined ||
            this.place.instagram === "" ||
            this.place.instagram === " ") {
            let elem = document.getElementById("instagram");
            elem.setAttribute("style", "display:none");
        }
        if (this.place.whatsapp === null ||
            this.place.whatsapp === undefined ||
            this.place.whatsapp === "" ||
            this.place.whatsapp === " ") {
            let elem = document.getElementById("whatsapp");
            elem.setAttribute("style", "display:none");
        }
        if (this.telefonos.length === 0) {
            let elem = document.getElementById("phone");
            elem.setAttribute("style", "display:none");
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
        this.callNumber
            .callNumber(this.telefonos[0], true)
            .then((res) => console.log("Llamando!", res))
            .catch((err) => console.log("Error en llamada", err));
    }
    openWeb() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: this.place.web });
    }
    openFacebook() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: this.place.facebook });
    }
};
ModalInfoPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber },
    { type: src_app_services_database_place_service__WEBPACK_IMPORTED_MODULE_3__.PlaceService }
];
ModalInfoPage.propDecorators = {
    descripcionHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["descripcion", { static: true },] }]
};
ModalInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-modal-info",
        template: _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_info_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"options\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        defaultHref=\"places/{{place.id}}\"\n        color=\"back\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"back\"> {{ place.nombre }} </ion-title>\n  </ion-toolbar>\n  <!-- Botones de reproduccion Text To Speech -->\n  <app-text-to-speech [texto]=\"descripcionText\"></app-text-to-speech> \n</ion-header>\n<ion-content>\n  <ion-text>\n    <br>\n    <div #descripcion class=\"texto\" [innerHTML]=\"place.descripcion\"></div>\n  </ion-text>\n  <ion-grid>\n    <ion-row>\n      <ion-col id=\"web\">\n        <div class=\"ion-text-center\">\n          <div class=\"circulo_red\">\n            <div (click)=\"openWeb()\">\n              <ion-icon name=\"globe-outline\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col id=\"facebook\">\n        <div class=\"ion-text-center\">\n          <div class=\"circulo_red\">\n            <div (click)=\"openFacebook()\">\n              <ion-icon class=\"icon-fb\" name=\"logo-facebook\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col id=\"instagram\">\n        <div class=\"ion-text-center\">\n          <div class=\"circulo_red\">\n            <a href=\"{{ place.instagram }}\"\n              ><ion-icon name=\"logo-instagram\"></ion-icon\n            ></a>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col id=\"whatsapp\">\n        <div class=\"ion-text-center\">\n          <div class=\"circulo_red_wpp\">\n            <a href=\"{{ place.whatsapp }}\"\n              ><ion-icon name=\"logo-whatsapp\"></ion-icon\n            ></a>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col id=\"phone\">\n        <div class=\"ion-text-center\">\n          <div class=\"circulo_red\" (click)=\"callPhone()\">\n            <ion-icon name=\"call-outline\"></ion-icon>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 36773:
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".texto {\n  margin: 6%;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n\nion-title {\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-grid {\n  margin-left: 12%;\n  margin-right: 12%;\n}\n\n.circulo_red, .circulo_red > a, .circulo_red > div {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background: var(--ion-color-dark);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0px auto;\n  padding: 3%;\n}\n\n.circulo_red_wpp, .circulo_red_wpp > a {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background: var(--ion-color-whatsapp);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0px auto;\n  padding: 3%;\n}\n\nion-icon {\n  color: var(--ion-color-light) !important;\n  font-size: 1.5rem !important;\n}\n\n.icon-fb {\n  border-radius: 50%;\n}\n\n.access {\n  float: right;\n  margin-right: 3%;\n  font-size: 1rem !important;\n  color: var(--ion-color-back) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBQUNGIiwiZmlsZSI6Im1vZGFsLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRvIHtcbiAgbWFyZ2luOiA2JTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWdyaWQge1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICBtYXJnaW4tcmlnaHQ6IDEyJTtcbn1cblxuLmNpcmN1bG9fcmVkLCAuY2lyY3Vsb19yZWQgPiBhLCAuY2lyY3Vsb19yZWQgPiBkaXYge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcGFkZGluZzogMyU7XG59XG5cbi5jaXJjdWxvX3JlZF93cHAsIC5jaXJjdWxvX3JlZF93cHAgPiBhIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hhdHNhcHApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiAzJTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1mYiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmFjY2VzcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFjaykgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modal-info_modal-info_module_ts.js.map