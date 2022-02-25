import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LeerTextoComponent } from './leer-texto/leer-texto.component';
import { MinimapaComponent } from './minimapa/minimapa.component';
import { MenuComponent } from './menu/menu.component';
import { PreloadComponent } from './preload/preload.component';

@NgModule({
    exports: [
      LeerTextoComponent,
      MinimapaComponent,
      MenuComponent,
      PreloadComponent,
    ],
    declarations: [
      LeerTextoComponent,
      MinimapaComponent,
      MenuComponent,
      PreloadComponent,
    ],
    imports: [
      CommonModule, 
      IonicModule  
    ]
  })
  export class ComponentsModule { }