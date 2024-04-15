import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ejemplo-loggin',
    pathMatch: 'full'
  },
  {
    path: 'ejemplo-loggin',
    loadChildren: () => import('./ejemplo-loggin/ejemplo-loggin.module').then( m => m.EjemploLogginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
