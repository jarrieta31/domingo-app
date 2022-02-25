import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistPageRoutingModule } from './artist-routing.module';

import { ArtistPage } from './artist.page';

//Modulos propios
import { VideoPageModule } from '../video/video.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistPageRoutingModule,
    ReactiveFormsModule,
    VideoPageModule,
    PipesModule,
  ],
  declarations: [ArtistPage]
})
export class ArtistPageModule {}
