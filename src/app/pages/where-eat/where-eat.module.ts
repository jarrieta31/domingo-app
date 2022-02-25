import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhereEatPageRoutingModule } from './where-eat-routing.module';

import { WhereEatPage } from './where-eat.page';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        ReactiveFormsModule,
        WhereEatPageRoutingModule,
    ],
    declarations: [WhereEatPage]
})
export class WhereEatPageModule { }
