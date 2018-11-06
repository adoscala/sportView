import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  title: string = 'Reserva tu cancha!';
  lat: number = -34.8;
  lng: number = -56.16;
  zoom: number = 11;

  constructor() { }

  ngOnInit() {
  }

}
