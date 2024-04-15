import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploLogginPage } from './ejemplo-loggin.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploLogginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploLogginPageRoutingModule {}
