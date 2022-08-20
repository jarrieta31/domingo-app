import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Point } from '../shared/point';
import { Geolocation, PositionOptions, Position } from '@capacitor/geolocation';
import { Device, DeviceInfo } from '@capacitor/device';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GpsProvider {
  gps: boolean = false;
  posicion: Point;
  deviceInfo: DeviceInfo;
  pais: string = null;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private platform: Platform, private http: HttpClient) {
    console.log('provider.server');
  }

  async getUbicacionInicial() {
    const platformReady = await this.platform.ready();
    console.log('ready: ', platformReady);
    //await this.verEstadoGps(platformReady);
    await this.getDeviceInfo();
    if (!this.deviceInfo.isVirtual) {
      return Geolocation.getCurrentPosition()
        .then((pos) => {
          console.log('pos: ', pos);
          if (pos !== null) {
            this.gps = true;
            this.posicion = {
              longitud: pos.coords.longitude,
              latitud: pos.coords.latitude,
            };
            console.log('provider: ', this.posicion);
            let res = this.getLocation(
              this.posicion.longitud,
              this.posicion.latitud
            );
            res.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
              this.pais = res;
            });
          } else {
            this.gps = false;
          }
        })
        .catch((error) => console.log('Error de gps-provider: ', error));
    } else {
      return new Promise((resolve, reject) => {
        this.gps = true;
        this.posicion = {
          latitud: -34.33940051728305,
          longitud: -56.713930578444064,
        };
        resolve({
          value: this.posicion,
          error: false,
        });

        reject({
          error: true,
          message: 'Error al obtener la posición virtual.',
        });
      });
    }
  }

  getDeviceInfo = async () => {
    this.deviceInfo = await Device.getInfo();
  };

  getLocation(lng: number, lat: number) {
    return this.http
      .get<any>(
        `${environment.urlMopboxDepto}${lng},${lat}.json?access_token=${environment.mapBoxToken}`
      )
      .pipe(
        tap(a => console.log(a)),
        map((depto) => depto.features[depto.features.length - 1].text),
        takeUntil(this.unsubscribe$)
      );
  }
}
