import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrateComponent } from './components/registrate/registrate.component';

const routes: Routes = [
  { path:'registrate', component: RegistrateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
