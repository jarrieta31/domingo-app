import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Imports para cliente http
import { HttpClientModule } from '@angular/common/http';

// Import enviroments
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ReactiveFormsModule } from '@angular/forms';

//Plugins
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

// Modulos propios de la app
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './shared/pipes/pipes.module';

import { GpsProvider } from './providers/gps-provider.service';


export function gpsProviderFactory(provider: GpsProvider){
  return () => provider.getUbicacionInicial();
}

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
        {provide: APP_INITIALIZER, useFactory: gpsProviderFactory, deps: [GpsProvider], multi: true},
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        CallNumber,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
