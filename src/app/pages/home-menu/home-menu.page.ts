import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
    selector: 'app-home-menu',
    templateUrl: './home-menu.page.html',
    styleUrls: ['./home-menu.page.scss'],
})
export class HomeMenuPage implements OnInit {



    constructor(
        private geolocation:Geolocation
    ) {
      this.geolocation.getCurrentPosition().then((resp) => {
          // resp.coords.latitude
          // resp.coords.longitude
          console.log("latitud", resp.coords.altitude)
      }).catch((error) => {
          console.log('Error getting location', error);
      });
    }

    ngOnInit() {
    }

}
