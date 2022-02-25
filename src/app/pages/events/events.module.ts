import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { EventDetailPage } from '../event-detail/event-detail.page';

// Modulos propios
import { EventDetailPageModule } from '../event-detail/event-detail.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
     EventDetailPageModule,
    PipesModule,
    ReactiveFormsModule   
  ],
  declarations: [EventsPage],
  entryComponents: [
    EventDetailPage,
  ]
})
export class EventsPageModule {}
