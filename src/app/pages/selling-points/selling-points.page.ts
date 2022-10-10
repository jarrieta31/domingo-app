import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-selling-points',
  templateUrl: './selling-points.page.html',
  styleUrls: ['./selling-points.page.scss'],
})
export class SellingPointsPage implements OnInit {

  @Input() instagram: string;
  @Input() tickAntel: string;
  @Input() facebook: string;
  @Input() whatsapp: string;
  
  constructor(
    private modalCtrl: ModalController,
    private gaService: GoogleAnalyticsService,
  ) { }

  ngOnInit() {
    document.title = 'Puntos de Venta Eventos';
    this.gaService.googleAnalyticsPantallas('puntos_de_venta_eventos');
  }

  cancelar() {
    const modal = this.modalCtrl.dismiss()
  }

  openTickAntel() {
    this.gaService.googleAnalyticsRedesSociales('eventos', 'tickantel');
    Browser.open({ url: this.tickAntel});
  }

  openInstagram() {
    this.gaService.googleAnalyticsRedesSociales('eventos', 'instagram');
    Browser.open({ url: this.instagram});
  }

  openFacebook() {
    this.gaService.googleAnalyticsRedesSociales('eventos', 'facebook');
    Browser.open({ url: this.facebook});
  }

  openWhatsapp() {
    this.gaService.googleAnalyticsRedesSociales('eventos', 'whatsapp');
    Browser.open({ url: this.whatsapp});
  }


}
