import { Component, Input, OnInit } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Component({
    selector: 'app-leer-texto',
    templateUrl: './leer-texto.component.html',
    styleUrls: ['./leer-texto.component.scss'],
})
export class LeerTextoComponent implements OnInit {

    @Input('texto1') texto: string;

    constructor() { }

    ngOnInit() { }

    playTextToSpeech() {
        TextToSpeech.speak({
            text: 'Hi I\'m Siri!',
            
            rate: 0.75,
            pitch: 0.9,
            
        })
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
    }

    stopTextToSpeech() {
        TextToSpeech.stop()
        .then( () => console.log("Stop"))
        .catch( (error) => console.log(error))
    }
}