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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dominga_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dominga.page.html */ 31899);
/* harmony import */ var _dominga_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dominga.page.scss */ 40303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 60568);
/* harmony import */ var src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/google-analytics.service */ 81679);







let DomingaPage = class DomingaPage {
    constructor(router, databaseSvc, gaService) {
        this.router = router;
        this.databaseSvc = databaseSvc;
        this.gaService = gaService;
        /**guarda datos de subscription a casa dominga */
        this.dominga = [];
        /**url load  */
        this.preloadImage = '/assets/load_1.30.gif';
        /**clase preload */
        this.preloadClass = 'img_dominga';
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
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
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
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
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
                                ? $slideEl.find('.swiper-slide-shadow-left')
                                : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-right')
                                : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        'transform-origin': `50% 50% -${swiperSize / 2}px`,
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
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                },
            },
        };
    }
    irHome() {
        this.router.navigate(['/tabs/home']);
    }
    ngOnInit() {
        document.title = 'Casa Dominga';
        this.gaService.googleAnalyticsPantallas('casa_dominga');
        this.databaseSvc.getDominga().subscribe((res) => {
            this.dominga = res;
        });
    }
};
DomingaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: src_app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__.GoogleAnalyticsService }
];
DomingaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-dominga',
        template: _C_Users_Administrador_Desktop_Repositorios_domingo_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dominga_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"information\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        (click)=\"irHome()\"\r\n        color=\"back\"\r\n        text=\"\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"back\">Casa Dominga</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides\r\n    *ngIf=\"dominga.length > 0\"\r\n    scrollbar=\"false\"\r\n    pager=\"false\"\r\n    [options]=\"slideOpts\"\r\n  >\r\n    <ion-slide *ngFor=\"let item of dominga\">\r\n      <ion-avatar>\r\n        <app-preload-details\r\n          #foto\r\n          [url]=\"item.url\"\r\n          [alt]=\"item.titulo\"\r\n          [urlPreload]=\"preloadImage\"\r\n          [clase]=\"preloadClass\"\r\n        ></app-preload-details>\r\n      </ion-avatar>\r\n      <div class=\"info_dominga\">\r\n        <ion-text class=\"titulo_dominga\"> {{ item.titulo }} </ion-text>\r\n        <ion-text class=\"info_detalle_dominga\"> {{ item.info }} </ion-text>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-list *ngIf=\"dominga.length === 0\">\r\n    <ion-slides class=\"slides_skeleton\">\r\n      <ion-slide class=\"slide_skeleton\" *ngFor=\"let item of [1]\">\r\n        <div class=\"img_skeleton\">\r\n          <ion-img src=\"/assets/img/img-skeleton_1.70.svg\"></ion-img>\r\n        </div>\r\n        <ion-skeleton-text\r\n          animated\r\n          style=\"width: 30%; height: 20px; margin: 2vh 3%\"\r\n        ></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 40303:
/*!*************************************************!*\
  !*** ./src/app/pages/dominga/dominga.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  height: calc(96vh - 56px);\n  margin: 2vh 3%;\n  border-radius: 10px !important;\n}\n\nion-slide {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border-radius: 10px !important;\n  background-color: var(--ion-color-back) !important;\n}\n\n.slide_skeleton {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.info_dominga {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0 10px 0;\n  background-color: var(--ion-color-back) !important;\n}\n\n.info_detalle_dominga {\n  padding: 10px 8px 0 8px;\n  height: calc(91vh - 76px - 70.6766917293vw);\n  font-family: \"Poppins\", sans-serif;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: var(--ion-color-dark);\n}\n\n.titulo_dominga {\n  height: 5vh;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n}\n\nion-avatar, .img_skeletom {\n  width: 100%;\n  height: auto;\n  min-height: 70.6766917293vw;\n  --border-radius: 10px 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWluZ2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrREFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoiZG9taW5nYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IGNhbGMoOTZ2aCAtIDU2cHgpO1xyXG4gIG1hcmdpbjogMnZoIDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFjaykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsaWRlX3NrZWxldG9uIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmluZm9fZG9taW5nYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2spICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmZvX2RldGFsbGVfZG9taW5nYSB7XHJcbiAgcGFkZGluZzogMTBweCA4cHggMCA4cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKCg5NnZoIC0gNXZoIC0gNzZweCkgLSAoKDEwMHZ3IC0gKDEwMHZ3ICogMC4wNikpIC8gMS4zMykpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi50aXR1bG9fZG9taW5nYSB7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuaW9uLWF2YXRhciwgLmltZ19za2VsZXRvbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoKDEwMHZ3IC0gKDEwMHZ3ICogMC4wNikpIC8gMS4zMyk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dominga_dominga_module_ts.js.map