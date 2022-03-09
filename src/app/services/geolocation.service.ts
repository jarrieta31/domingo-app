import { Injectable } from "@angular/core";
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as Mapboxgl from "mapbox-gl";
import { environment } from "../../environments/environment";
import { Observable, BehaviorSubject, Subscription, timer } from "rxjs";
import { Place } from "../shared/place";
import { TwoPoints } from "../shared/two-points";
import { Point } from "../shared/point";
import { Assessment } from "../shared/assessment";
import { HttpClient } from "@angular/common/http";
import { filter, tap } from 'rxjs/operators';
import { Geolocation } from '@capacitor/geolocation';
//import { CallbackID, Capacitor } from '@capacitor/core';

@Injectable({
    providedIn: "root",
})
export class GeolocationService {
    items: Place[] = [];
    valuationsPlaces: Assessment[] = [];
    mapa: Mapboxgl.Map;
    myPositionMarker: any = null;
    points: Point[];
    watchLocationUpdates: any;
    isWatching: boolean;
    distancia: number;
    posicion$: BehaviorSubject<Point> = new BehaviorSubject<Point>(null);
    posicion: Point = { longitud: 0, latitud: 0 };
    latCenter: number = 0;
    longCenter: number = 0;
    timetest: any;
    observerGps: any;
    public gps: boolean = false;
    subscriptionClock: any;
    public currentDepto: String = null;

    featureDepto: any[] = [];

    constructor(
        private http: HttpClient,
        //private geolocation: Geolocation,
    ) {

        //Geolocation.getCurrentPosition().then(position => {console.log})
        //this.getCurrentPosition()
        console.log("servicio")
        //this.getWhachPosition()

    }


    getLocation(lng: number, lat: number) {
        return this.http.get(
            "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
            lng +
            "," +
            lat +
            ".json?access_token=pk.eyJ1IjoiY2FzYWRvbWluZ2EiLCJhIjoiY2s3NTlzajFoMDVzZTNlcGduMWh0aml3aSJ9.JcZFoGdIQnz3hSg2p4FGkA"
        );
    }

    async getCurrentPosition() {
        const position = await Geolocation.getCurrentPosition();
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        
    }

    async getWhachPosition() {

        const watchId = await Geolocation.watchPosition({}, (position, err) => {
            //filter(p => p.coords != undefined)
            if (position !== null) {
                this.gps = true;
                this.posicion = { longitud: position.coords.longitude, latitud: position.coords.latitude };

                this.actualizarPosicion$({ longitud: position.coords.longitude, latitud: position.coords.latitude });
                this.getLocation(position.coords.longitude, position.coords.latitude).subscribe((dto: any) => {
                    this.featureDepto = [];
                    dto.features.forEach((res: any) => {
                        this.featureDepto.push(res.text);
                    });
                    let featureLen = this.featureDepto.length;
                    this.currentDepto = this.featureDepto[featureLen - 2];
                    console.log("timestamp gps: ", position.timestamp)
                    console.log("dpto. activo:", this.currentDepto);
                });
                this.actualizarMarcador();
            }
        });
    }

    actualizarMarcador() {
        if (this.myPositionMarker != null) {
            this.myPositionMarker.remove();
            this.myPositionMarker
                .setLngLat([this.posicion.longitud, this.posicion.latitud])
                .addTo(this.mapa);
        }
    }

    crearMapa(points: Array<Point>) {
        // si el gps está activo crea el mapa con el marcador
        var centro: Point;
        var maxmin: TwoPoints;
        var zoom: number;
        this.points = points;
        Mapboxgl.accessToken = environment.mapBoxToken;
        if (this.gps) {
            if (this.points.length > 1) {
                //agrega la posicion actual a la lista de puntos
                this.points.push(this.posicion);
                maxmin = this.getMaxMinPoints(this.points);
                centro = this.getCenterPoints(maxmin);
                this.distancia = this.calculateDistance(maxmin);
                zoom = this.calculateZoom(this.distancia);
            }

            this.mapa = new Mapboxgl.Map({
                container: "mapaBox",
                style: "mapbox://styles/casadominga/ck9m4w6x10dd61iql4bh7jinz",
                antialias: true,
                center: [centro.longitud, centro.latitud],
                zoom: zoom,
            });

            this.createMarker();
        } else {
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

            this.mapa = new Mapboxgl.Map({
                container: "mapaBox",
                style: "mapbox://styles/casadominga/ck9m4w6x10dd61iql4bh7jinz",
                antialias: true,
                center: [centro.longitud, centro.latitud],
                zoom: zoom,
            });
        }

        this.mapa.addControl(new Mapboxgl.NavigationControl());
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
        this.myPositionMarker = new Mapboxgl.Marker(el, { draggable: false })
            .setLngLat([this.posicion.longitud, this.posicion.latitud])
            .addTo(this.mapa);
        //Agrega la posición del usuario a la lista de puntos
        this.points.push(this.posicion as Point);
        //Recalcula los puntos extremos
        let maxmin: TwoPoints = this.getMaxMinPoints(this.points);
        //Recalcula el centro del mapa
        let centro: Point = this.getCenterPoints(maxmin);
        this.distancia = this.calculateDistance(maxmin);
        let zoom = this.calculateZoom(this.distancia);
        this.mapa.setCenter([centro.longitud, centro.latitud]);
        this.mapa.setZoom(zoom);
    }

    // Recibe 2 Puntos y obtiene el centro retornando un Point
    getCenterPoints(Points: TwoPoints): Point {
        let center: Point = { latitud: 0, longitud: 0 };
        center.latitud = (Points.latitud1 + Points.latitud2) / 2;
        center.longitud = (Points.longitud1 + Points.longitud2) / 2;
        return center;
    }

    /* Recibe un array de lugares y calcula los Points mas alejados y retorna un array numérico 
    con las coordenadas de ambos  */
    getMaxMinPoints(points: Array<Point>): TwoPoints {
        let maxmin: TwoPoints = {
            latitud1: 0,
            latitud2: 0,
            longitud1: 0,
            longitud2: 0,
        };
        let longMax: number = 0;
        let longMin: number = 0;
        let latMax: number = 0;
        let latMin: number = 0;
        for (let i = 0; i < points.length; i++) {
            if (i == 0) {
                longMax = +points[i].longitud;
                longMin = +points[i].longitud;
                latMax = +points[i].latitud;
                latMin = +points[i].latitud;
            } else {
                if (longMin > +points[i].longitud) longMin = +points[i].longitud;
                if (latMin > +points[i].latitud) latMin = +points[i].latitud;
                if (longMax < +points[i].longitud) longMax = +points[i].longitud;
                if (latMax < +points[i].latitud) latMax = +points[i].latitud;
            }
        }
        maxmin.latitud1 = latMin;
        maxmin.longitud1 = longMin;
        maxmin.latitud2 = latMax;
        maxmin.longitud2 = longMax;
        console.log(`LatMin ${latMin} LongMin ${longMin}`);
        return maxmin;
    }

    createMarkerCenter(centro: Point) {
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
        this.myPositionMarker = new Mapboxgl.Marker(el, { draggable: false })
            .setLngLat([centro.longitud, centro.latitud])
            .addTo(this.mapa);
    }

    calculateDistance(pts: TwoPoints): number {
        let p = 0.017453292519943295;
        let c = Math.cos;
        let a =
            0.5 -
            c((pts.latitud1 - pts.latitud2) * p) / 2 +
            (c(pts.latitud2 * p) *
                c(pts.latitud1 * p) *
                (1 - c((pts.longitud1 - pts.longitud2) * p))) /
            2;
        let dis = 12742 * Math.asin(Math.sqrt(a));
        return Math.trunc(dis);
    }

    calculateZoom(distancia: number): number {
        let zoom: number = 1;
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

    getPosicionActual$(): Observable<Point> {
        return this.posicion$.asObservable();
    }

    actualizarPosicion$(point: Point) {
        this.posicion = point;
        this.posicion$.next(this.posicion);
    }

    clearDatosMapa() {
        this.points = [];

        this.mapa.clearSorage();
    }
}
