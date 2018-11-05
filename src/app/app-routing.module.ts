import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrateComponent } from './components/registrate/registrate.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'registrate', component: RegistrateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
