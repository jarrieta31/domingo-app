import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Imports para cliente http
import { HttpClientModule } from '@angular/common/http';

// Import enviroments
import { environment } from '../environments/environment';

// Nueva forma de agregar firebase
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ReactiveFormsModule } from '@angular/forms';

//Plugins
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';


// Modulos propios de la app
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './shared/pipes/pipes.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFirestoreModule.enablePersistence(),
        AppRoutingModule,
        BrowserModule,
        ComponentsModule,
        HttpClientModule,
        IonicModule.forRoot(),
        PipesModule,
        ReactiveFormsModule,
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        AndroidPermissions,
        CallNumber,
        Geolocation,
        InAppBrowser,
        LocationAccuracy,
        ScreenOrientation,
        SplashScreen,
        StatusBar,
        TextToSpeechAdvanced,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
