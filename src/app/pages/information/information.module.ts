import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPageRoutingModule } from './information-routing.module';

import { InformationPage } from './information.page';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InformationPageRoutingModule,
        IonicModule,
        PipesModule,
    ],
    declarations: [InformationPage]
})
export class InformationPageModule { }
