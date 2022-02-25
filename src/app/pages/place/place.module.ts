import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacePageRoutingModule } from './place-routing.module';

import { PlacePage } from './place.page';

// Modulos 
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        IonicModule,
        PipesModule,
        PlacePageRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [PlacePage]
})
export class PlacePageModule { }
