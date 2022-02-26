import { Component, OnInit } from '@angular/core';
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { Subject } from "rxjs";
import { DatabaseService } from "src/app/services/database.service";
import { GeolocationService } from "src/app/services/geolocation.service";
import { Departament } from "src/app/shared/departament";
import { AlertController } from "@ionic/angular";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: 'app-home-menu',
    templateUrl: './home-menu.page.html',
    styleUrls: ['./home-menu.page.scss'],
})
export class HomeMenuPage {

    depto: boolean = false;
    distance: boolean = false;

    deptosActivos: Departament[] = [];
    deptoSelected: any = null;
    distanceSelected: any = null;

    optionDsitance: number[] = [10, 25, 50, 75, 100, 150];

    deptoSave: String = null;
    distanceSave: String = null;

    gps: any = null;

    /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
    private unsubscribe$: Subject<void>;

    constructor(
        private dbService: DatabaseService,
        private geolocationSvc: GeolocationService,
        public alertController: AlertController,
    ) {
     }

    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "SELECCIONAR FILTRO",
            message: "Debe seleccionar un filtro para continuar",
            buttons: [
                {
                    text: "Departamento",
                    handler: () => {
                        this.depto = true;
                    },
                },
                {
                    text: "Distancia",
                    handler: () => {
                        this.distance = true;
                    },
                },
            ],
        });

        if (
            (this.deptoSelected == null || this.deptoSelected == undefined) &&
            !this.depto &&
            (this.distanceSelected == null || this.distanceSelected == undefined) &&
            !this.distance
        )
            await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log("onDidDismiss resolved with role", role);
    }

    seeDepto() {
        this.depto = !this.depto;
        if (this.distance) this.distance = !this.distance;
    }

    seeDistance() {
        this.distance = !this.distance;
        if (this.depto) this.depto = !this.depto;
    }

    select(depto: string | null, distance: number | null) {
        this.dbService.getSelectMenu(depto, distance);

        if (depto != null && depto != undefined) {
            this.deptoSelected = depto;
            localStorage.setItem("deptoActivo", depto);
            localStorage.removeItem("distanceActivo");
            this.deptoSave = depto;
            this.distanceSave = null;
            this.distance = false;
            this.depto = false;
            this.distanceSelected = null;
        } else if (distance != null && distance != undefined) {
            this.distanceSelected = distance;
            this.deptoSave = null;
            localStorage.setItem("distanceActivo", distance.toString());
            localStorage.removeItem("deptoActivo");
            this.distanceSave = distance.toString() + ' km';
            this.depto = false;
            this.distance = false;
            this.deptoSelected = null;
        }
    }
    

    ionViewWillEnter() {

        this.unsubscribe$ = new Subject<void>();

        this.geolocationSvc.posicion$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res) => {
                console.log(res);
                this.gps = res;
            });

        setTimeout(() => {
            this.presentAlert();
        }, 2500);

        let deptoSave = localStorage.getItem("deptoActivo");
        let distanceSave = localStorage.getItem("distanceActivo");

        if (distanceSave !== null) this.distanceSave = distanceSave + ' km';
        else this.distanceSave = null;

        this.deptoSave = deptoSave;

        if (deptoSave != null && deptoSave != undefined) {
            this.dbService.selectionDepto = deptoSave;
            this.deptoSelected = this.dbService.selectionDepto;
        } else if (distanceSave != null && distanceSave != undefined) {
            this.dbService.selectionDistance = parseInt(distanceSave);
            this.distanceSelected = this.dbService.selectionDistance;
        }

        this.depto = false;
        this.dbService.getDepartamentosActivos();
        this.dbService.departamentosActivos
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res) => (this.deptosActivos = res));
    }

    ionViewDidLeave() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
