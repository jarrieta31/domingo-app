import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhereSleepPageRoutingModule } from './where-sleep-routing.module';

import { WhereSleepPage } from './where-sleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhereSleepPageRoutingModule
  ],
  declarations: [WhereSleepPage]
})
export class WhereSleepPageModule {}
