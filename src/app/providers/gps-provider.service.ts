import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Point } from '../shared/point';
import { Geolocation, PositionOptions, Position } from '@capacitor/geolocation';
import { Device, DeviceInfo } from '@capacitor/device';

@Injectable({
    providedIn: 'root'
})
export class GpsProvider {

    gps: boolean = false;
    posicion: Point;
    deviceInfo: DeviceInfo;

    constructor(
        private platform: Platform,
    ) {
        console.log('provider.server')
    }

    async getUbicacionInicial() {
    
        const platformReady = await this.platform.ready();
        console.log('ready: ', platformReady)
        //await this.verEstadoGps(platformReady);
        
        return Geolocation.getCurrentPosition().then(
            pos => {
                console.log("pos: ", pos)
                if (pos !== null) {
                    this.gps = true;
                    this.posicion = { longitud: pos.coords.longitude, latitud: pos.coords.latitude }
                    console.log('provider: ', this.posicion)
                }else{this.gps = false}

            }
        ).catch(error => console.log('Error de gps-provider: ', error));

    }



}
