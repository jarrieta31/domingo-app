import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { Departament } from 'src/app/shared/departament';
import { AlertController } from '@ionic/angular';
import { takeUntil } from 'rxjs/operators';
import { GpsProvider } from 'src/app/providers/gps-provider.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

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

  deptoSave: string = null;
  distanceSave: string = null;

  gps: boolean = false;

  /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
  private unsubscribe$: Subject<void>;

  constructor(
    private dbService: DatabaseService,
    private geolocationSvc: GeolocationService,
    public alertController: AlertController,
    private gpsProv: GpsProvider,
    private gaService: GoogleAnalyticsService
  ) {}

  country: string = null;

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SELECCIONAR FILTRO',
      message: 'Debe seleccionar un filtro para continuar',
      mode: 'ios',
      animated: true,
      buttons: [
        {
          text: 'Departamento',
          handler: () => {
            this.depto = true;
          },
        },
        {
          text: 'Distancia',
          handler: () => {
            this.distance = true;
          },
        },
      ],
    });

    if (
      (this.deptoSelected === null || this.deptoSelected === undefined) &&
      !this.depto &&
      (this.distanceSelected === null || this.distanceSelected === undefined) &&
      !this.distance &&
      this.gps === true &&
      this.country == 'Uruguay'
    )
      await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertDepto() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SELECCIONAR FILTRO',
      message:
        'Debe seleccionar un departamento para continuar',
      mode: 'ios',
      animated: true,
      buttons: [
        {
          text: 'Departamento',
          handler: () => {
            this.depto = true;
          },
        },
      ],
    });

    if (
      (this.deptoSelected === null || this.deptoSelected === undefined) &&
      !this.depto &&
      (this.distanceSelected === null || this.distanceSelected === undefined) &&
      !this.distance &&
      (this.gps === false || (this.gps && this.country != 'Uruguay'))
    )
      await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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
      this.gaService.googleAnalyticsFiltroHome('departamento', depto);
      this.deptoSelected = depto;
      localStorage.setItem('deptoActivo', depto);
      localStorage.removeItem('distanceActivo');
      this.deptoSave = depto;
      this.distanceSave = null;
      this.distance = false;
      this.depto = false;
      this.distanceSelected = null;
    } else if (distance != null && distance != undefined) {
      this.gaService.googleAnalyticsFiltroHome('distancia', distance+' km');
      this.distanceSelected = distance;
      this.deptoSave = null;
      localStorage.setItem('distanceActivo', distance.toString());
      localStorage.removeItem('deptoActivo');
      this.distanceSave = distance.toString() + ' km';
      this.depto = false;
      this.distance = false;
      this.deptoSelected = null;
    }
  }

  ionViewWillEnter() {
    this.unsubscribe$ = new Subject<void>();

    if (
      (this.geolocationSvc.posicion === null ||
        this.geolocationSvc.posicion === undefined) &&
      (localStorage.getItem('distanceActivo') !== null ||
        localStorage.getItem('distanceActivo') !== undefined)
    ) {
      localStorage.removeItem('distanceActivo');
    }

    this.depto = false;
    this.dbService.getDepartamentosActivos();
    this.dbService.departamentosActivos
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => (this.deptosActivos = res));

    this.gps = this.geolocationSvc.gps;

    setTimeout(() => {
      this.country = this.gpsProv.pais;
      console.log(this.country);
      this.presentAlert();
      this.presentAlertDepto();
    }, 2500);

    let deptoSave = localStorage.getItem('deptoActivo');
    let distanceSave = localStorage.getItem('distanceActivo');

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
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
