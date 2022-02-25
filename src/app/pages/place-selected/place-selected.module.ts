import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceSelectedPageRoutingModule } from './place-selected-routing.module';

import { PlaceSelectedPage } from './place-selected.page';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { VideoPageModule } from '../video/video.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        IonicModule,
        PipesModule,
        PlaceSelectedPageRoutingModule,
        VideoPageModule,
    ],
    declarations: [PlaceSelectedPage]
})
export class PlaceSelectedPageModule { }
