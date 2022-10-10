import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss'],
})
export class TextToSpeechComponent implements OnInit {
  @Input('texto') texto: string;
  @Input('nombre') nombre: string;
  viewImage = true;
  rate: number = 1;

  constructor(
    private platform: Platform,
    private loading: LoadingController,
    private gaService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    if (this.platform.is('ios') || this.platform.is('iphone')) {
      this.rate = 1.4;
    }
  }

  ngOnDestroy(): void {
    this.stopTextToSpeech();
  }

  googleAnalyticsAudioStart() {
    this.gaService.googleAnalyticsAudioStart(this.nombre);
  }

  googleAnalyticsAudioStop() {
    this.gaService.googleAnalyticsAudioStop(this.nombre);
  }

  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde, procesando texto',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async playTextToSpeech() {
    this.presentLoading();
    this.viewImage = false;
    let arrText = this.texto.split('.');
    //console.log(arrText)

    TextToSpeech.speak({ text: this.texto, lang: 'es-AR', rate: this.rate })
      .then(() => {
        this.stopTextToSpeech();
      })
      .catch((reason: any) =>
        // this.loading.dismiss()
        console.log(reason)
      );
  }

  stopTextToSpeech() {
    //        this.loading.dismiss();
    this.viewImage = true;
    TextToSpeech.speak({ text: '', lang: 'es-AR', rate: 1 })
      .then(() => console.log('Done'))
      .catch((reason: any) => console.log(reason));
  }
}
