import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

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
  ) { }

  ngOnInit() {
    console.log(this.instagram, this.tickAntel, this.facebook, this.whatsapp)
  }

  cancelar() {
    const modal = this.modalCtrl.dismiss()
  }

  openTickAntel() {
    Browser.open({ url: this.tickAntel});
  }

  openInstagram() {
    Browser.open({ url: this.instagram});
  }

  openFacebook() {
    Browser.open({ url: this.facebook});
  }

  openWhatsapp() {
    Browser.open({ url: this.whatsapp});
  }


}
