"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_database_service_ts"],{

/***/ 60568:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/distance */ 72415);
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.service */ 4276);






let DatabaseService = class DatabaseService {
    // Iniciamos el servicio 'AngularFireDatabase' de Angular Fire
    constructor(afs, geolocationSvc) {
        this.afs = afs;
        this.geolocationSvc = geolocationSvc;
        this.today = new Date();
        /**Se van acumulando todos los lugares de los departamentos seleccionados */
        this.initEvents = [];
        /** Guarda el nombre de los departamentos que ya fueron seleccionados por el usuario*/
        this.save_depto = [];
        /** guarda los datos para pantalla de casa domninga */
        this.dominga = [];
        this.allEvents = [];
        this.selectionDepto = null;
        this.selectionDistance = null;
        /**Nombre del departamento seleccionado actualmente*/
        this.depto = null;
        /**Distancia seleccionada actualmente */
        this.distance = null;
        /**se guardan los lugares recibidos desde el filtro distancia */
        this.distanceEvents = [];
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
        this.allDepartament = [];
        this.deptoFound = false;
        this.eventos = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.distanceEvents);
        this.casaDominga = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.dominga);
    }
    /**
     * Departamento o distancia seleeccionado en la pantalla inicial
     */
    getSelectMenu(depto, distance) {
        if (depto == null) {
            this.selectionDistance = distance;
            this.selectionDepto = null;
        }
        else {
            this.selectionDepto = depto;
            this.selectionDistance = null;
        }
    }
    /**
     * Obtener eventos desde fecha de hoy
     */
    getEventos(checkDepto) {
        // console.log(this.initEvents);
        this.depto = localStorage.getItem("deptoActivo");
        this.distance = parseInt(localStorage.getItem("distanceActivo"));
        this.allEvents = [];
        this.distanceEvents = [];
        let currentDate = new Date();
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
                .collection("eventos")
                .ref.where("departamento", "==", this.selectionDepto)
                .where("fechaFin", ">=", this.today)
                .where("publicado", "==", true)
                .orderBy("fechaFin", "asc")
                .get()
                .then((querySnapshot) => {
                const mapEvents = new Map();
                querySnapshot.forEach((item) => {
                    const data = item.data();
                    data.fechaInicio = new Date(data.fechaInicio["seconds"] * 1000);
                    data.fechaFin = new Date(data.fechaFin["seconds"] * 1000);
                    let evento = Object.assign({ id: item.id }, data);
                    mapEvents.set(evento.id, Object.assign({}, data));
                    let test = this.initEvents.find(function (element) {
                        return element.id === evento.id;
                    });
                    if (test === undefined) {
                        this.initEvents.push(evento);
                    }
                });
                this.allEvents = [...mapEvents.values()];
                if (this.geolocationSvc.posicion !== undefined &&
                    this.geolocationSvc.posicion !== null) {
                    this.allEvents.forEach((dist) => {
                        let calcDist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([
                            this.geolocationSvc.posicion.longitud,
                            this.geolocationSvc.posicion.latitud,
                        ], [dist.ubicacion.lng, dist.ubicacion.lat], { units: options });
                        dist.distancia = calcDist;
                        dist.distanciaNumber = calcDist;
                    });
                }
                if (querySnapshot.size !== 0) {
                    this.save_depto.push(this.depto);
                    this.noData = false;
                }
                else
                    this.noData = true;
                searchDepto = false;
                this.allEvents.sort((a, b) => {
                    if (a.fechaInicio < b.fechaInicio) {
                        return -1;
                    }
                    if (a.fechaInicio > b.fechaInicio) {
                        return 1;
                    }
                    return 0;
                });
                this.eventos.next(this.allEvents);
            })
                .catch((err) => {
                console.log(err);
            })
                .finally(() => "Finally");
        }
        else if (this.depto != null && searchDepto) {
            this.initEvents.sort((a, b) => {
                if (a.fechaInicio < b.fechaInicio) {
                    return -1;
                }
                if (a.fechaInicio > b.fechaInicio) {
                    return 1;
                }
                return 0;
            });
            this.initEvents.forEach((res) => {
                if (res.departamento == this.depto && res.fechaFin >= currentDate) {
                    this.allEvents.push(res);
                }
            });
            if (this.geolocationSvc.posicion !== undefined &&
                this.geolocationSvc.posicion !== null) {
                this.allEvents.forEach((dist) => {
                    let calcDist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_0__["default"])([
                        this.geolocationSvc.posicion.longitud,
                        this.geolocationSvc.posicion.latitud,
                    ], [dist.ubicacion.lng, dist.ubicacion.lat], { units: options });
                    dist.distancia = calcDist;
                    dist.distanciaNumber = calcDist;
                });
            }
            this.allEvents.length !== 0 ? (this.noData = false) : this.noData;
            this.eventos.next(this.allEvents);
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
                    this.initEvents.forEach((init) => {
                        if (init.departamento == dep && init.fechaFin >= currentDate)
                            this.distanceEvents.push(init);
                    });
                    if (this.geolocationSvc.posicion !== undefined &&
                        this.geolocationSvc.posicion !== null) {
                        this.distanceEvents.forEach((dist) => {
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
                        .collection("eventos")
                        .ref.where("departamento", "==", dep)
                        .where("fechaFin", ">=", this.today)
                        .where("publicado", "==", true)
                        .orderBy("fechaFin", "asc")
                        .get()
                        .then((querySnapshot) => {
                        querySnapshot.forEach((item) => {
                            const data = item.data();
                            data.fechaInicio = new Date(data.fechaInicio["seconds"] * 1000);
                            data.fechaFin = new Date(data.fechaFin["seconds"] * 1000);
                            let evento = Object.assign({ id: item.id }, data);
                            let test = this.initEvents.find(function (element) {
                                return element.id === evento.id;
                            });
                            if (test === undefined) {
                                this.initEvents.push(evento);
                                this.distanceEvents.push(evento);
                            }
                        });
                        if (this.geolocationSvc.posicion !== undefined &&
                            this.geolocationSvc.posicion !== null) {
                            this.distanceEvents.forEach((dist) => {
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
            this.distanceEvents.length !== 0 ? (this.noData = false) : this.noData;
            this.distanceEvents.sort((a, b) => {
                if (a.fechaInicio < b.fechaInicio) {
                    return -1;
                }
                if (a.fechaInicio > b.fechaInicio) {
                    return 1;
                }
                return 0;
            });
            this.eventos.next(this.distanceEvents);
        }
        return this.eventos;
    }
    /**
     * Obtener departamentos activos
     */
    getDepartamentosActivos() {
        this.departamentosActivos = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.allDepartament);
        if (this.deptoFound === false) {
            this.afs
                .collection("departamentos")
                .ref.where("status", "==", true)
                .get()
                .then((querySnapshot) => {
                const arrDeptos = [];
                querySnapshot.forEach((item) => {
                    const data = item.data();
                    arrDeptos.push(Object.assign({ id: item.id }, data));
                });
                this.allDepartament = JSON.parse(JSON.stringify(arrDeptos));
                this.departamentosActivos.next(this.allDepartament);
                this.deptoFound = true;
            })
                .catch((err) => {
                console.log(err);
            })
                .finally(() => "Finally");
        }
        else {
            this.departamentosActivos.next(this.allDepartament);
        }
    }
    getDominga() {
        this.dominga = [];
        this.afs
            .collection("dominga")
            .ref.get()
            .then((querySnapshot) => {
            const arrDominga = [];
            querySnapshot.forEach((item) => {
                const data = item.data();
                arrDominga.push(Object.assign({ id: item.id }, data));
            });
            this.dominga = JSON.parse(JSON.stringify(arrDominga));
            this.casaDominga.next(this.dominga);
        })
            .catch((err) => {
            console.log(err);
        })
            .finally(() => "Finally");
        return this.casaDominga;
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _geolocation_service__WEBPACK_IMPORTED_MODULE_1__.GeolocationService }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], DatabaseService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_database_service_ts.js.map