import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhereSleepPageRoutingModule } from './where-sleep-routing.module';

import { WhereSleepPage } from './where-sleep.page';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        ReactiveFormsModule,
        WhereSleepPageRoutingModule,
    ],
    declarations: [WhereSleepPage]
})
export class WhereSleepPageModule { }
