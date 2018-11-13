import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrateComponent } from './components/registrate/registrate.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservarComponent } from './components/reserva/reservar/reservar.component';

const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'registrate', component: RegistrateComponent},
  { path:'login', component: LoginComponent},
  { path:'reservas', component: ReservaComponent},
  { path:'reservas/reservar/:id', component: ReservarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
