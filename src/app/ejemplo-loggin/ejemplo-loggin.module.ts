import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploLogginPageRoutingModule } from './ejemplo-loggin-routing.module';

import { EjemploLogginPage } from './ejemplo-loggin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploLogginPageRoutingModule
  ],
  declarations: [EjemploLogginPage]
})
export class EjemploLogginPageModule {}
