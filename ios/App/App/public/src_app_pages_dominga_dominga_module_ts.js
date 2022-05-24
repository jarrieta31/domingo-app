"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dominga_dominga_module_ts"],{

/***/ 92581:
/*!*********************************************************!*\
  !*** ./src/app/pages/dominga/dominga-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomingaPageRoutingModule": () => (/* binding */ DomingaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dominga_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dominga.page */ 14413);




const routes = [
    {
        path: '',
        component: _dominga_page__WEBPACK_IMPORTED_MODULE_0__.DomingaPage
    }
];
let DomingaPageRoutingModule = class DomingaPageRoutingModule {
};
DomingaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DomingaPageRoutingModule);



/***/ }),

/***/ 27097:
/*!*************************************************!*\
  !*** ./src/app/pages/dominga/dominga.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomingaPageModule": () => (/* binding */ DomingaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dominga_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dominga-routing.module */ 92581);
/* harmony import */ var _dominga_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dominga.page */ 14413);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);








let DomingaPageModule = class DomingaPageModule {
};
DomingaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _dominga_routing_module__WEBPACK_IMPORTED_MODULE_0__.DomingaPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_dominga_page__WEBPACK_IMPORTED_MODULE_1__.DomingaPage]
    })
], DomingaPageModule);



/***/ }),

/***/ 14413:
/*!***********************************************!*\
  !*** ./src/app/pages/dominga/dominga.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomingaPage": () => (/* binding */ DomingaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dominga_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dominga.page.html */ 31899);
/* harmony import */ var _dominga_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dominga.page.scss */ 40303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 60568);






let DomingaPage = class DomingaPage {
    constructor(router, databaseSvc) {
        this.router = router;
        this.databaseSvc = databaseSvc;
        /**guarda datos de subscription a casa dominga */
        this.dominga = [];
        /**url load  */
        this.preloadImage = "/assets/load_1.30.gif";
        /**clase preload */
        this.preloadClass = "img_dominga";
        /**Configuración de slider mini galeria */
        this.slideOpts = {
            initialSlide: 0,
            speed: 1000,
            spaceBetween: 0,
            autoplay: true,
            grabCursor: true,
            cubeEffect: {
                //shadow: true,
                slideShadows: true,
                shadowOffset: 1,
                shadowScale: 0.94,
            },
            on: {
                beforeInit: function () {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true,
                    };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const swiper = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find(".swiper-cube-shadow");
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) {
                            slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
                        }
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + round * 4 * swiperSize;
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = 3 * swiperSize + swiperSize * 4 * round;
                        }
                        if (rtl) {
                            tx = -tx;
                        }
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = slideIndex * 90 + progress * 90;
                            if (rtl)
                                wrapperRotate = -slideIndex * 90 - progress * 90;
                        }
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            // Set shadows
                            let shadowBefore = isHorizontal
                                ? $slideEl.find(".swiper-slide-shadow-left")
                                : $slideEl.find(".swiper-slide-shadow-top");
                            let shadowAfter = isHorizontal
                                ? $slideEl.find(".swiper-slide-shadow-right")
                                : $slideEl.find(".swiper-slide-shadow-bottom");
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
                        "-moz-transform-origin": `50% 50% -${swiperSize / 2}px`,
                        "-ms-transform-origin": `50% 50% -${swiperSize / 2}px`,
                        "transform-origin": `50% 50% -${swiperSize / 2}px`,
                    });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) -
                                Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            const multiplier = 1.5 -
                                (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
                                    Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = swiper.browser.isSafari || swiper.browser.isUiWebView
                        ? -swiperSize / 2
                        : 0;
                    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const swiper = this;
                    const { $el, slides } = swiper;
                    slides
                        .transition(duration)
                        .find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find(".swiper-cube-shadow").transition(duration);
                    }
                },
            },
        };
    }
    irHome() {
        this.router.navigate(["/tabs/home"]);
    }
    ngOnInit() {
        this.databaseSvc.getDominga().subscribe((res) => {
            this.dominga = res;
        });
    }
};
DomingaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
DomingaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-dominga",
        template: _home_administrador_ionic_domingo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dominga_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dominga_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DomingaPage);



/***/ }),

/***/ 31899:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dominga/dominga.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"information\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        (click)=\"irHome()\"\n        color=\"back\"\n        text=\"\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"back\">Casa Dominga</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides\n    *ngIf=\"dominga.length > 0\"\n    scrollbar=\"false\"\n    pager=\"false\"\n    [options]=\"slideOpts\"\n  >\n    <ion-slide *ngFor=\"let item of dominga\">\n      <ion-avatar>\n        <app-preload-details\n          #foto\n          [url]=\"item.url\"\n          [alt]=\"item.titulo\"\n          [urlPreload]=\"preloadImage\"\n          [clase]=\"preloadClass\"\n        ></app-preload-details>\n      </ion-avatar>\n      <div class=\"info_dominga\">\n        <ion-text class=\"titulo_dominga\"> {{ item.titulo }} </ion-text>\n        <ion-text class=\"info_detalle_dominga\"> {{ item.info }} </ion-text>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list *ngIf=\"dominga.length === 0\">\n    <ion-slides class=\"slides_skeleton\">\n      <ion-slide class=\"slide_skeleton\" *ngFor=\"let item of [1]\">\n        <div class=\"img_skeleton\">\n          <ion-img src=\"/assets/img/img-skeleton_1.70.svg\"></ion-img>\n        </div>\n        <ion-skeleton-text\n          animated\n          style=\"width: 30%; height: 20px; margin: 2vh 3%\"\n        ></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      </ion-slide>\n    </ion-slides>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 40303:
/*!*************************************************!*\
  !*** ./src/app/pages/dominga/dominga.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  height: calc(96vh - 56px);\n  margin: 2vh 3%;\n  border-radius: 10px !important;\n}\n\nion-slide {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border-radius: 10px !important;\n  background-color: var(--ion-color-back) !important;\n}\n\n.slide_skeleton {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.info_dominga {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0 10px 0;\n  background-color: var(--ion-color-back) !important;\n}\n\n.info_detalle_dominga {\n  padding: 10px 8px 0 8px;\n  height: calc(91vh - 76px - 70.6766917293vw);\n  font-family: \"Poppins\", sans-serif;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: var(--ion-color-dark);\n}\n\n.titulo_dominga {\n  height: 5vh;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n}\n\nion-avatar, .img_skeletom {\n  width: 100%;\n  height: auto;\n  min-height: 70.6766917293vw;\n  --border-radius: 10px 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWluZ2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrREFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoiZG9taW5nYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiBjYWxjKDk2dmggLSA1NnB4KTtcbiAgbWFyZ2luOiAydmggMyU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKSAhaW1wb3J0YW50O1xufVxuXG4uc2xpZGVfc2tlbGV0b24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmluZm9fZG9taW5nYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrKSAhaW1wb3J0YW50O1xufVxuXG4uaW5mb19kZXRhbGxlX2RvbWluZ2Ege1xuICBwYWRkaW5nOiAxMHB4IDhweCAwIDhweDtcbiAgaGVpZ2h0OiBjYWxjKCg5NnZoIC0gNXZoIC0gNzZweCkgLSAoKDEwMHZ3IC0gKDEwMHZ3ICogMC4wNikpIC8gMS4zMykpO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4udGl0dWxvX2RvbWluZ2Ege1xuICBoZWlnaHQ6IDV2aDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuaW9uLWF2YXRhciwgLmltZ19za2VsZXRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKDEwMHZ3IC0gKDEwMHZ3ICogMC4wNikpIC8gMS4zMyk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dominga_dominga_module_ts.js.map