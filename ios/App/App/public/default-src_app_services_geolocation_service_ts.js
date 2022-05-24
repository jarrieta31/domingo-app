"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_geolocation_service_ts"],{

/***/ 94058:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 26042);

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}


/***/ }),

/***/ 4276:
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationService": () => (/* binding */ GeolocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ 33858);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 18260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _providers_gps_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/gps-provider.service */ 53269);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 2233);








let GeolocationService = class GeolocationService {
    constructor(gpsProvider) {
        this.gpsProvider = gpsProvider;
        this.items = [];
        this.myPositionMarker = null;
        this.posicion = { longitud: 0, latitud: 0 };
        this.latCenter = 0;
        this.longCenter = 0;
        this.sourceClock$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, 36000);
        this.sourceGpsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.gps = false;
        this.currentDepto = null;
        this.featureDepto = [];
        this.options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 };
        this.unsubscribeGPS$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.gps = this.gpsProvider.gps;
        this.deviceInfo = this.gpsProvider.deviceInfo;
        this.posicion = this.gpsProvider.posicion;
        if (this.gps) {
            this.posicion$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.posicion);
        }
        else {
            this.posicion$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        }
        this.startGeolocation();
    }
    startGeolocation() {
        if (this.gps) {
            //Observable que obtiene los pulsos y obtiene la posicion
            this.sourceClock$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribeGPS$))
                .subscribe((res) => {
                console.log(res);
                if (!this.deviceInfo.isVirtual) {
                    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition(this.options)
                        .then((p) => {
                        if (p !== null) {
                            this.posicion = {
                                longitud: p.coords.longitude,
                                latitud: p.coords.latitude,
                            };
                            this.posicion$.next(this.posicion);
                            this.actualizarMarcador();
                        }
                    })
                        .catch((error) => {
                        //this.posicion = environment.casaDominga;
                        this.actualizarPosicion$(null);
                        if (this.myPositionMarker != null)
                            this.myPositionMarker.remove();
                        this.gps = false;
                        console.log("Error al obtener la ubicación" + error);
                    });
                }
                else {
                    this.posicion$.next({ latitud: -34.33940051728305, longitud: -56.713930578444064 });
                    this.actualizarMarcador();
                }
            });
        }
    }
    stopGeolocation() {
        this.unsubscribeGPS$.next();
        this.unsubscribeGPS$.complete();
    }
    actualizarMarcador() {
        if (this.myPositionMarker != null) {
            this.myPositionMarker.remove();
            this.myPositionMarker
                .setLngLat([this.posicion.longitud, this.posicion.latitud])
                .addTo(this.mapa);
        }
    }
    crearMapa(points) {
        // si el gps está activo crea el mapa con el marcador
        var centro;
        var maxmin;
        var zoom;
        this.points = points;
        mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.accessToken = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mapBoxToken;
        if (this.gps) {
            if (this.points.length > 1) {
                //agrega la posicion actual a la lista de puntos
                this.points.push(this.posicion);
                maxmin = this.getMaxMinPoints(this.points);
                centro = this.getCenterPoints(maxmin);
                this.distancia = this.calculateDistance(maxmin);
                zoom = this.calculateZoom(this.distancia);
            }
            this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.Map({
                container: "mapaBox",
                style: "mapbox://styles/casadominga/ck9m4w6x10dd61iql4bh7jinz",
                antialias: true,
                center: [centro.longitud, centro.latitud],
                zoom: zoom,
            });
            this.createMarker();
        }
        else {
            // Si el gps está desactivado
            if (this.points.length > 1) {
                maxmin = this.getMaxMinPoints(this.points);
                centro = this.getCenterPoints(maxmin);
                this.distancia = this.calculateDistance(maxmin);
                zoom = this.calculateZoom(this.distancia);
            }
            if (this.points.length == 1) {
                centro = {
                    longitud: this.points[0].longitud,
                    latitud: this.points[0].latitud,
                };
                zoom = 12;
                console.log(centro.longitud);
            }
            this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.Map({
                container: "mapaBox",
                style: "mapbox://styles/casadominga/ck9m4w6x10dd61iql4bh7jinz",
                antialias: true,
                center: [centro.longitud, centro.latitud],
                zoom: zoom,
            });
        }
        this.mapa.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.NavigationControl());
    }
    createMarker() {
        //Crea html para el marcador
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage = 'url("/assets/icon/marcador_celeste.svg")';
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.borderRadius = "50%";
        el.style.boxShadow = "1px 1px 40px #81bdda";
        //Agrega el marcador al mapa
        this.myPositionMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.Marker(el, { draggable: false })
            .setLngLat([this.posicion.longitud, this.posicion.latitud])
            .addTo(this.mapa);
        //Agrega la posición del usuario a la lista de puntos
        this.points.push(this.posicion);
        //Recalcula los puntos extremos
        let maxmin = this.getMaxMinPoints(this.points);
        //Recalcula el centro del mapa
        let centro = this.getCenterPoints(maxmin);
        this.distancia = this.calculateDistance(maxmin);
        let zoom = this.calculateZoom(this.distancia);
        this.mapa.setCenter([centro.longitud, centro.latitud]);
        this.mapa.setZoom(zoom);
    }
    // Recibe 2 Puntos y obtiene el centro retornando un Point
    getCenterPoints(Points) {
        let center = { latitud: 0, longitud: 0 };
        center.latitud = (Points.latitud1 + Points.latitud2) / 2;
        center.longitud = (Points.longitud1 + Points.longitud2) / 2;
        return center;
    }
    /* Recibe un array de lugares y calcula los Points mas alejados y retorna un array numérico
      con las coordenadas de ambos  */
    getMaxMinPoints(points) {
        let maxmin = {
            latitud1: 0,
            latitud2: 0,
            longitud1: 0,
            longitud2: 0,
        };
        let longMax = 0;
        let longMin = 0;
        let latMax = 0;
        let latMin = 0;
        for (let i = 0; i < points.length; i++) {
            if (i == 0) {
                longMax = +points[i].longitud;
                longMin = +points[i].longitud;
                latMax = +points[i].latitud;
                latMin = +points[i].latitud;
            }
            else {
                if (longMin > +points[i].longitud)
                    longMin = +points[i].longitud;
                if (latMin > +points[i].latitud)
                    latMin = +points[i].latitud;
                if (longMax < +points[i].longitud)
                    longMax = +points[i].longitud;
                if (latMax < +points[i].latitud)
                    latMax = +points[i].latitud;
            }
        }
        maxmin.latitud1 = latMin;
        maxmin.longitud1 = longMin;
        maxmin.latitud2 = latMax;
        maxmin.longitud2 = longMax;
        console.log(`LatMin ${latMin} LongMin ${longMin}`);
        return maxmin;
    }
    createMarkerCenter(centro) {
        //Crea html para el marcador
        var el = document.createElement("div");
        el.className = "marker2";
        el.style.backgroundColor = "rgb(255,30,100)";
        //el.style.backgroundImage = 'url("/assets/icon/marcador_azul.svg")';
        el.style.width = "20px";
        el.style.height = "20px";
        el.style.borderRadius = "50%";
        el.style.boxShadow = "1px 1px 20px #81bdda";
        //Agrega el marcador al mapa
        this.myPositionMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.Marker(el, { draggable: false })
            .setLngLat([centro.longitud, centro.latitud])
            .addTo(this.mapa);
    }
    calculateDistance(pts) {
        let p = 0.017453292519943295;
        let c = Math.cos;
        let a = 0.5 -
            c((pts.latitud1 - pts.latitud2) * p) / 2 +
            (c(pts.latitud2 * p) *
                c(pts.latitud1 * p) *
                (1 - c((pts.longitud1 - pts.longitud2) * p))) /
                2;
        let dis = 12742 * Math.asin(Math.sqrt(a));
        return Math.trunc(dis);
    }
    calculateZoom(distancia) {
        let zoom = 1;
        //El primer valor es la distancia y el segundo el zoom para ese rango de distancia
        let rangos = [
            [5, 12.6],
            [10, 12.6],
            [15, 11.5],
            [20, 11],
            [40, 9.5],
            [60, 8],
            [80, 7.5],
            [100, 7],
            [120, 6.5],
            [150, 6],
            [180, 5.5],
            [200, 5],
        ];
        for (let i = 0; i < rangos.length; i++) {
            for (let j = 0; j < rangos[i].length; j++) {
                console.log(rangos[i][0]);
                if (distancia <= rangos[i][0]) {
                    zoom = rangos[i][1];
                    return zoom;
                }
            }
        }
        return zoom;
    }
    getObsPosicion$() {
        return this.posicion$.asObservable();
    }
    actualizarPosicion$(point) {
        this.posicion = point;
        this.posicion$.next(this.posicion);
    }
    clearDatosMapa() {
        this.points = [];
        this.mapa.clearSorage();
    }
};
GeolocationService.ctorParameters = () => [
    { type: _providers_gps_provider_service__WEBPACK_IMPORTED_MODULE_2__.GpsProvider }
];
GeolocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: "root",
    })
], GeolocationService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_geolocation_service_ts.js.map