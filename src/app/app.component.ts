import { Component } from '@angular/core';
import { Platform } from "@ionic/angular";
//import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
//import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { Subject, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { GeolocationService } from "./services/geolocation.service";
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';
import { Posicion } from './shared/donde-comer';
import { DatabaseService } from './services/database.service';
import { Point } from './shared/point';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    showSplash = true;
    modo: boolean;
    dyslexic: boolean;

    gps: any = null;

    /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
    private unsubscribe$: Subject<void>;

    constructor(
        private platform: Platform,
        //    private splashScreen: SplashScreen,
        //    private statusBar: StatusBar,
        private geolocationSvc: GeolocationService
    ) {
        this.initializeApp();
    }

    getCurrentCoordinate() {
        if (!Capacitor.isPluginAvailable('Geolocation')) {
            console.log('Plugin geolocation no available');
            return;
        }
        Geolocation.getCurrentPosition().then(data => {
            let posicion: Point = { longitud: data.coords.longitude, latitud: data.coords.latitude }
            this.geolocationSvc.posicion$.next( posicion )
            console.log("posicion iniciada")
        }).catch(err => {
            console.error(err);
        });
    }

    ngOnInit(): void {
        this.unsubscribe$ = new Subject<void>();

        setTimeout(() => {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        }, 5000)
    }

    initializeApp() {
        this.getCurrentCoordinate();
        this.platform.ready().then(() => {
            //   this.statusBar.styleDefault();
            //   this.splashScreen.hide();

            timer(3000).subscribe(() => (this.showSplash = false));
            this.checkDarkMode();
            this.modeDyslexic();
        });
    }

    checkDarkMode() {
        if (localStorage.getItem("modoOscuro") == "true") {
            try {
                document.body.classList.toggle("dark");
            } catch (error) {
                console.log(error);
            }
        }
    }

    modeDyslexic() {
        if (localStorage.getItem("dyslexic") == "true") {
            try {
                document.body.classList.toggle("dyslexic");
            } catch (error) {
                console.log(error);
            }
        }
    }
}
