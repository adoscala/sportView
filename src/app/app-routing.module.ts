import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrateComponent } from './components/registrate/registrate.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'registar', component: RegistrateComponent},
  { path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
