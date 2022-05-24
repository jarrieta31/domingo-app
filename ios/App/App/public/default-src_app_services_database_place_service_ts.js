"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_database_place_service_ts"],{

/***/ 22087:
/*!****************************************************!*\
  !*** ./src/app/services/database/place.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceService": () => (/* binding */ PlaceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/distance */ 72415);
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geolocation.service */ 4276);






let PlaceService = class PlaceService {
    constructor(afs, geolocationSvc) {
        this.afs = afs;
        this.geolocationSvc = geolocationSvc;
        /**Nombre del departamento seleccionado actualmente*/
        this.depto = null;
        /**Distancia seleccionada actualmente */
        this.distance = null;
        /**Departamento actual para usar cuando se selecciona filtro por distancia */
        this.currentDpto = null;
        /**Guarda todos los lugares del departamento seleccionado actualmente*/
        this.allLugares = [];
        /**Se van acumulando todos los lugares de los departamentos seleccionados */
        this.initPlace = [];
        /** Guarda el nombre de los departamentos que ya fueron seleccionados por el usuario*/
        this.save_depto = [];
        /**Se guardan todos los lugares con la distancia desde el lugar seleccionado */
        this.distance_place = [];
        /**se guardan los lugares recibidos desde el filtro distancia */
        this.distancePlaces = [];
        /**controla si la base devuelve datos */
        this.noData = false;
        /**controla que existen lugares en el rango de distancia */
        this.controlDistance = false;
        this.deptoLimit = [
            { nameDepto: "Artigas", limit: ["Artigas", "Salto", "Rivera"] },
            {
                nameDepto: "Canelones",
                limit: ["Canelones", "Florida", "Lavalleja", "Maldonado", "San José"],
            },
            {
                nameDepto: "Cerro Largo",
                limit: [
                    "Cerro Largo",
                    "Durazno",
                    "Rivera",
                    "Tacuarembó",
                    "Treinta y Tres",
                ],
            },
            {
                nameDepto: "Colonia",
                limit: ["Colonia", "Flores", "San José", "Soriano"],
            },
            {
                nameDepto: "Durazno",
                limit: [
                    "Durazno",
                    "Cerro Largo",
                    "Flores",
                    "Florida",
                    "Río Negro",
                    "Soriano",
                    "Tacuarembó",
                    "Treinta y Tres",
                ],
            },
            {
                nameDepto: "Flores",
                limit: [
                    "Flores",
                    "Colonia",
                    "Durazno",
                    "Florida",
                    "Río Negro",
                    "San José",
                    "Soriano",
                ],
            },
            {
                nameDepto: "Florida",
                limit: [
                    "Florida",
                    "Canelones",
                    "Durazno",
                    "Flores",
                    "Lavalleja",
                    "San José",
                    "Treinta y Tres",
                ],
            },
            {
                nameDepto: "Lavalleja",
                limit: [
                    "Lavalleja",
                    "Canelones",
                    "Florida",
                    "Maldonado",
                    "Rocha",
                    "Treinta y Tres",
                ],
            },
            {
                nameDepto: "Maldonado",
                limit: ["Maldonado", "Canelones", "Lavalleja", "Rocha"],
            },
            { nameDepto: "Montevideo", limit: ["Montevideo", "Canelones", "San José"] },
            {
                nameDepto: "Paysandú",
                limit: ["Paysandú", "Río Negro", "Salto", "Tacuarembó"],
            },
            {
                nameDepto: "Río Negro",
                limit: [
                    "Río Negro",
                    "Durazno",
                    "Flores",
                    "Paysandú",
                    "Soriano",
                    "Tacuarembó",
                ],
            },
            {
                nameDepto: "Rivera",
                limit: ["Rivera", "Artigas", "Cerro Largo", "Salto", "Tacuarembó"],
            },
            {
                nameDepto: "Rocha",
                limit: ["Rocha", "Maldonado", "Lavalleja", "Treinta y Tres"],
            },
            {
                nameDepto: "Salto",
                limit: ["Salto", "Artigas", "Paysandú", "Rivera", "Tacuarembó"],
            },
            {
                nameDepto: "San José",
                limit: [
                    "San José",
                    "Canelones",
                    "Colonia",
                    "Flores",
                    "Florida",
                    "Soriano",
                ],
            },
            {
                nameDepto: "Soriano",
                limit: [
                    "Soriano",
                    "Colonia",
                    "Durazno",
                    "Flores",
                    "Río Negro",
                    "San José",
                ],
            },
            {
                nameDepto: "Tacuarembó",
                limit: [
                    "Tacuarembó",
                    "Cerro Largo",
                    "Durazno",
                    "Paysandú",
                    "Río Negro",
                    "Rivera",
                    "Salto",
                ],
            },
            {
                nameDepto: "Treinta y Tres",
                limit: [
                    "Treinta y Tres",
                    "Cerro Largo",
                    "Durazno",
                    "Florida",
                    "Lavalleja",
                    "Rocha",
                    "Tacuarembó",
                ],
            },
        ];
        this.places = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.initPlace);
    }
    /**
     * Devuelve los lugares del departamento seleccionado por el usuario
     * @param searchDepto se utiliza para chequear si el departamento ya fue seleccionado anteriormente
     */
    getPlaces(checkDepto) {
        this.depto = localStorage.getItem("deptoActivo");
        this.distance = parseInt(localStorage.getItem("distanceActivo"));
        this.allLugares = [];
        this.distancePlaces = [];
        this.controlDistance = false;
        let searchDepto = false;
        const options = "kilometers";
        if (this.depto != null) {
            this.save_depto.forEach((search) => {
                if (search == this.depto) {
                    searchDepto = true;
                }
            });
        }
        if (this.depto != null && !searchDepto) {
            this.afs
                .collection("lugares")
                .ref.where("departamento", "==", this.depto)
                .where("publicado", "==", true)
                .orderBy("prioridad")
                .get()
                .then((querySnapshot) => {
                const mapPlaces = new Map();
                querySnapshot.forEach((item) => {
                    const data = item.data();
                    let placesRequest = Object.assign({ id: item.id }, data);
                    mapPlaces.set(placesRequest.id, Object.assign({}, data));
                    let test = this.initPlace.find(function (element) {
                        return element.id === placesRequest.id;
                    });
                    if (test === undefined) {
                        this.initPlace.push(placesRequest);
                    }
                });
                this.allLugares = JSON.parse(JSON.stringify([...mapPlaces.values()]));
                if (this.geolocationSvc.posicion !== undefined &&
                    this.geolocationSvc.posicion !== null) {
                    this.allLugares.forEach((dist) => {
                        let calcDist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([
                            this.geolocationSvc.posicion.longitud,
                            this.geolocationSvc.posicion.latitud,
                        ], [dist.ubicacion.lng, dist.ubicacion.lat], { units: options });
                        dist.distancia = calcDist;
                        dist.distanciaNumber = calcDist;
                    });
                }
                else if (this.geolocationSvc.posicion === undefined ||
                    this.geolocationSvc.posicion === null) {
                    this.allLugares.forEach((dist) => {
                        dist.distancia = "Ubicación no activa";
                        dist.distanciaNumber = "Ubicación no activa";
                    });
                }
                if (querySnapshot.size !== 0) {
                    this.save_depto.push(this.depto);
                    this.noData = false;
                }
                else
                    this.noData = true;
                this.places.next(this.allLugares);
                searchDepto = false;
            })
                .catch((err) => {
                console.log(err);
            })
                .finally(() => "Fin");
        }
        else if (this.depto != null && searchDepto) {
            this.initPlace.forEach((res) => {
                if (res.departamento == this.depto) {
                    this.allLugares.push(res);
                }
            });
            if (this.geolocationSvc.posicion !== undefined &&
                this.geolocationSvc.posicion !== null) {
                this.allLugares.forEach((dist) => {
                    let calcDist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([
                        this.geolocationSvc.posicion.longitud,
                        this.geolocationSvc.posicion.latitud,
                    ], [dist.ubicacion.lng, dist.ubicacion.lat], { units: options });
                    dist.distancia = calcDist;
                    dist.distanciaNumber = calcDist;
                });
            }
            this.allLugares.length !== 0 ? (this.noData = false) : this.noData;
            this.places.next(this.allLugares);
        }
        else if (this.distance != null) {
            let deptoSearch = false;
            let limitCurrent = [];
            this.deptoLimit.forEach((res) => {
                if (res.nameDepto == checkDepto) {
                    res.limit.forEach((dep) => {
                        limitCurrent.push(dep);
                    });
                }
            });
            limitCurrent.forEach((dep) => {
                if (this.save_depto.length != 0) {
                    this.save_depto.forEach((search) => {
                        if (dep == search) {
                            deptoSearch = true;
                        }
                    });
                }
                if (deptoSearch) {
                    this.initPlace.forEach((init) => {
                        if (init.departamento == dep)
                            this.distancePlaces.push(init);
                    });
                    if (this.geolocationSvc.posicion !== undefined &&
                        this.geolocationSvc.posicion !== null) {
                        this.distancePlaces.forEach((dist) => {
                            let calcDist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([
                                this.geolocationSvc.posicion.longitud,
                                this.geolocationSvc.posicion.latitud,
                            ], [dist.ubicacion.lng, dist.ubicacion.lat], { units: options });
                            dist.distancia = calcDist;
                            dist.distanciaNumber = calcDist;
                            if (calcDist <= this.distance) {
                                this.controlDistance = true;
                            }
                        });
                    }
                    deptoSearch = false;
                }
                else {
                    this.afs
                        .collection("lugares")
                        .ref.where("departamento", "==", dep)
                        .where("publicado", "==", true)
                        .orderBy("prioridad")
                        .get()
                        .then((querySnapshot) => {
                        querySnapshot.forEach((item) => {
                            const data = item.data();
                            let placeDist = Object.assign({ id: item.id }, data);
                            let test = this.initPlace.find(function (element) {
                                return element.id === placeDist.id;
                            });
                            if (test === undefined) {
                                this.initPlace.push(placeDist);
                                this.distancePlaces.push(placeDist);
                            }
                        });
                        if (this.geolocationSvc.posicion !== undefined &&
                            this.geolocationSvc.posicion !== null) {
                            this.distancePlaces.forEach((dist) => {
                                let calcDist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([
                                    this.geolocationSvc.posicion.longitud,
                                    this.geolocationSvc.posicion.latitud,
                                ], [dist.ubicacion.lng, dist.ubicacion.lat], { units: options });
                                dist.distancia = calcDist;
                                dist.distanciaNumber = calcDist;
                                if (calcDist <= this.distance) {
                                    this.controlDistance = true;
                                }
                            });
                        }
                        if (!searchDepto && querySnapshot.size !== 0)
                            this.save_depto.push(dep);
                    })
                        .catch((err) => {
                        console.log(err);
                    })
                        .finally(() => "Fin");
                    deptoSearch = false;
                }
            });
            this.distancePlaces.length !== 0
                ? (this.noData = false)
                : (this.noData = true);
            this.places.next(this.distancePlaces);
        }
        return this.places;
    }
    /**Devuelve un lugar específico
     * @param id del lugar a buscar
     */
    getPlaceId(id) {
        this.place_selected = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.near_place = null;
        this.initPlace.forEach((res) => {
            if (res.id == id) {
                res.descripcionCorta =
                    res.descripcion.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 140) +
                        "..." +
                        `<a>Ver más</a>`;
                this.near_place = res;
                this.place_selected.next(res);
            }
        });
    }
    /**Busca los 4 lugares más cercanos al lugar seleccionado*/
    getPlaceNear() {
        this.near_places = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.distance_place = [];
        let options = "kilometers";
        this.initPlace.forEach((res) => {
            if (res.id != this.near_place.id && res.departamento == this.depto) {
                let dist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([this.near_place.ubicacion.lng, this.near_place.ubicacion.lat], [res.ubicacion.lng, res.ubicacion.lat], { units: options });
                this.distance_place.push({
                    id: res.id,
                    name: res.nombre,
                    image: res.imagenPrincipal,
                    distance: dist,
                });
            }
            else if (res.id != this.near_place.id && this.distance !== null) {
                let dist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([this.near_place.ubicacion.lng, this.near_place.ubicacion.lat], [res.ubicacion.lng, res.ubicacion.lat], { units: options });
                this.distance_place.push({
                    id: res.id,
                    name: res.nombre,
                    image: res.imagenPrincipal,
                    distance: dist,
                });
            }
        });
        this.distance_place.sort((a, b) => a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0);
        while (this.distance_place.length > 4) {
            this.distance_place.pop();
        }
        this.near_places.next(this.distance_place);
    }
};
PlaceService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _geolocation_service__WEBPACK_IMPORTED_MODULE_1__.GeolocationService }
];
PlaceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], PlaceService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_database_place_service_ts.js.map