import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    RegistrateComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    ReservaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyD5KhtMiH4v4aHXS-SfYTNjMAzSLcu3Jz8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
