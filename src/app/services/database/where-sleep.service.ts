import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { BehaviorSubject } from "rxjs";
import { DondeDormir } from "src/app/shared/donde-dormir";
import distance from "@turf/distance";
import { GeolocationService } from "../geolocation.service";

export declare type Units = "meters" | "millimeters" | "centimeters" | "kilometers" | "acres" | "miles" | "nauticalmiles" | "inches" | "yards" | "feet" | "radians" | "degrees" | "hectares";

@Injectable({
  providedIn: "root",
})
export class WhereSleepService {
  /**Nombre del departamento seleccionado actualmente*/
  depto: string = null;
  distance: number = null;
  /**Se van acumulando todos los lugares de los departamentos seleccionados */
  init_dondedormir: DondeDormir[] = [];
  /** Guarda el nombre de los departamentos que ya fueron seleccionados por el usuario*/
  save_depto: string[] = [];
  /**controla si la base devuelve datos */
  noData: boolean = false;
  /**controla que existen lugares en el rango de distancia */
  controlDistance: boolean = false;

  deptoLimit: any[] = [
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

  /**se guardan los lugares recibidos desde el filtro distancia */
  distanceSleep: DondeDormir[] = [];

  constructor(
    private afs: AngularFirestore,
    private geolocationSvc: GeolocationService
  ) {
    this.donde_dormir = new BehaviorSubject<DondeDormir[]>(
      this.init_dondedormir
    );
  }

  /**Se guardan los lugares del departamento seleccionado */
  donde_dormir: BehaviorSubject<DondeDormir[]>;
  /**Guarda todos los lugares del departamento seleccionado actualmente*/
  allDormir: DondeDormir[] = [];

  getDondeDormir(checkDepto: string) {
    this.depto = localStorage.getItem("deptoActivo");
    this.distance = parseInt(localStorage.getItem("distanceActivo"));
    this.allDormir = [];
    this.distanceSleep = [];

    this.controlDistance = false;

    let searchDepto: boolean = false;

    const options:Units = "kilometers";

    if (this.depto != null) {
      this.save_depto.forEach((search) => {
        if (search == this.depto) {
          searchDepto = true;
        }
      });
    }

    if (this.depto != null && !searchDepto) {
      this.afs
        .collection("donde_dormir")
        .ref.where("departamento", "==", this.depto)
        .where("publicado", "==", true)
        .orderBy("nombre")
        .get()
        .then((querySnapshot) => {
          const mapSleep = new Map();
          querySnapshot.forEach((item) => {
            const data: any = item.data();

            let sleep = { id: item.id, ...data };
            mapSleep.set(sleep.id, { ...data });
            
            let test = this.init_dondedormir.find(function (element) {
              return element.id === sleep.id;
            });

            if (test === undefined) {
              this.init_dondedormir.push(sleep);
            }
          });
          this.allDormir = JSON.parse(JSON.stringify([...mapSleep.values()]));

          if (
            this.geolocationSvc.posicion !== undefined &&
            this.geolocationSvc.posicion !== null
          ) {
            this.allDormir.forEach((dist) => {
              let calcDist = distance(
                [
                  this.geolocationSvc.posicion.longitud,
                  this.geolocationSvc.posicion.latitud,
                ],
                [dist.ubicacion.lng, dist.ubicacion.lat],
                {units: options}
              );
              dist.distancia = calcDist;
              dist.distanciaNumber = calcDist;
            });
          }

          if (querySnapshot.size !== 0) {
            this.save_depto.push(this.depto);
            this.noData = false;
          } else {
            this.noData = true;
          }

          this.allDormir.sort((a, b) => {
            const nombreA = a.nombre.toLowerCase();
            const nombreB = b.nombre.toLowerCase();
            if (nombreA < nombreB) {
              return -1;
            }

            if (nombreA > nombreB) {
              return 1;
            }

            return 0;
          });

          searchDepto = false;
          this.donde_dormir.next(this.allDormir);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => "Fin");
    } else if (this.depto != null && searchDepto) {
      this.init_dondedormir.forEach((res) => {
        if (res.departamento == this.depto) {
          this.allDormir.push(res);
        }
      });

      if (
        this.geolocationSvc.posicion !== undefined &&
        this.geolocationSvc.posicion !== null
      ) {
        this.allDormir.forEach((dist) => {
          let calcDist = distance(
            [
              this.geolocationSvc.posicion.longitud,
              this.geolocationSvc.posicion.latitud,
            ],
            [dist.ubicacion.lng, dist.ubicacion.lat],
            {units: options}
          );
          dist.distancia = calcDist;
          dist.distanciaNumber = calcDist;
        });
      }

      this.allDormir.length !== 0
        ? (this.noData = false)
        : (this.noData = true);

      this.allDormir.sort((a, b) => {
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();
        if (nombreA < nombreB) {
          return -1;
        }

        if (nombreA > nombreB) {
          return 1;
        }

        return 0;
      });

      this.donde_dormir.next(this.allDormir);
    } else if (this.distance != null) {
      let deptoSearch: boolean = false;
      let limitCurrent: string[] = [];

      this.deptoLimit.forEach((res) => {
        if (res.nameDepto == checkDepto) {
          res.limit.forEach((dep: string) => {
            limitCurrent.push(dep);
          });
        }
      });

      limitCurrent.forEach((dep: string) => {
        if (this.save_depto.length != 0) {
          this.save_depto.forEach((search) => {
            if (dep == search) {
              deptoSearch = true;
            }
          });
        }

        if (deptoSearch) {
          this.init_dondedormir.forEach((init: any) => {
            if (init.departamento == dep) this.distanceSleep.push(init);
          });

          if (
            this.geolocationSvc.posicion !== undefined &&
            this.geolocationSvc.posicion !== null
          ) {
            this.distanceSleep.forEach((dist) => {
              let calcDist = distance(
                [
                  this.geolocationSvc.posicion.longitud,
                  this.geolocationSvc.posicion.latitud,
                ],
                [dist.ubicacion.lng, dist.ubicacion.lat],
                {units: options}
              );
              dist.distancia = calcDist;
              dist.distanciaNumber = calcDist;

              if (calcDist <= this.distance) {
                this.controlDistance = true;
              }
            });
          }

          deptoSearch = false;
        } else {
          this.afs
            .collection("donde_dormir")
            .ref.where("departamento", "==", dep)
            .where("publicado", "==", true)
            .orderBy("nombre")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((item) => {
                const data: any = item.data();
               
                let sleep = { id: item.id, ...data };
console.log(sleep.nombre)
                let test = this.init_dondedormir.find(function (element) {
                  return element.id === sleep.id;
                });

                if (test === undefined) {
                  this.init_dondedormir.push(sleep);
                  this.distanceSleep.push(sleep);
                }
              });

              if (
                this.geolocationSvc.posicion !== undefined &&
                this.geolocationSvc.posicion !== null
              ) {
                this.distanceSleep.forEach((dist) => {
                  let calcDist = distance(
                    [
                      this.geolocationSvc.posicion.longitud,
                      this.geolocationSvc.posicion.latitud,
                    ],
                    [dist.ubicacion.lng, dist.ubicacion.lat],
                    {units: options}
                  );
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

      this.distanceSleep.length !== 0
        ? (this.noData = false)
        : (this.noData = true);

      this.distanceSleep.sort((a, b) => {
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();
        if (nombreA < nombreB) {
          return -1;
        }

        if (nombreA > nombreB) {
          return 1;
        }

        return 0;
      });

      this.donde_dormir.next(this.distanceSleep);
    }

    return this.donde_dormir;
  }
}
