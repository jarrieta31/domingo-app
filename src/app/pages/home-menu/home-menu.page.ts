import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';


@Component({
    selector: 'app-home-menu',
    templateUrl: './home-menu.page.html',
    styleUrls: ['./home-menu.page.scss'],
})
export class HomeMenuPage implements OnInit {



    constructor(
        private geolocation: Geolocation,
        private screenOrientation: ScreenOrientation,
        private tts: TextToSpeechAdvanced,
    ) {

        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log("latitud", resp.coords.altitude)
        }).catch((error) => {
            console.log('Error getting location', error);
        });

        console.log(this.screenOrientation.type);
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)

        this.tts.speak('Hello World')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
    }

    ngOnInit() {
    }

}
