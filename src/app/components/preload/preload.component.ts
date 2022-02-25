import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss'],
})
export class PreloadComponent {

  @Input('url') url: string;
  @Input('alt') alt: string;
  @Input('urlPreload') urlPreload: string;

  viewImage = false;

  constructor() { }

  mostrarImagen() {

    console.log("carga finalizada")
    this.viewImage = true;
    console.log(this.viewImage)
  }

  error(e){
    console.log(e)
  }
}