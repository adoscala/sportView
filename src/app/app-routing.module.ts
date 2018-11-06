import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrateComponent } from './components/registrate/registrate.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'registrate', component: RegistrateComponent},
  { path:'login', component: LoginComponent},
  { path:'reserva', component: ReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
