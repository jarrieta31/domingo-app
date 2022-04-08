import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceSelectedPageRoutingModule } from './place-selected-routing.module';

import { PlaceSelectedPage } from './place-selected.page';
import { VideoPageModule } from '../video/video.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { MinimapaComponent } from '../../components/minimapa/minimapa.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceSelectedPageRoutingModule,
    VideoPageModule,
    PipesModule,
    ComponentsModule,
  ],
  declarations: [PlaceSelectedPage]
})
export class PlaceSelectedPageModule {}
