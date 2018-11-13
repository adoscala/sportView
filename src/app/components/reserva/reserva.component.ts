import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  title: string = 'Reserva tu cancha!';
  lat: number = -34.8;
  lng: number = -56.16;
  zoom: number = 10;
  tipos: Object = [{tipo: "Fútbol 5", bd: "5"},{tipo: "Fútbol 7", bd: "7"},{tipo: "Basketball", bd: "B"}];
  luces: Object = [{tipo: "Con luces", bd: 1},{tipo: "Sin luces", bd: 0}];
  pastos: Object = [{tipo: "Artificial", bd: 1},{tipo: "Natural", bd: 0}];
  markerFiltrados: Object = [
    {
      nombre: "El galpón",
      coords: "-34.2, -56.3",
      canchas: 3,
      tipo: "5, 7"
    }
  ];

  markers: Object = [{
    id: 1,
    nombre: "El galpón",
    coords: "-34.2, -56.3",
    canchas: 3,
    tipo: "5, 7"
  }
  ]

  inputDeporte: string;
  inputPasto: string;
  inputLuz: string;


  constructor(private dataService: DataService) { }

  ngOnInit() {    
    this.getMarkers();
  }

  getMarkers() {
    this.dataService.getMarkers().subscribe( res => {
      console.log(res);
      this.markers = res;
    });
  }

  filtrarCanchas() {
    
    var inputDeporte = document.getElementById("inputDeporte").innerHTML;
    var inputPasto = document.getElementById("inputPasto").innerHTML.split('<option _ngcontent-c2="">')[1].split('</option>')[0];
    var inputLuz = document.getElementById("inputLuz").innerHTML.split('<option _ngcontent-c2="">')[1].split('</option>')[0];

    console.log(inputDeporte)
    console.log(inputPasto)
    console.log(inputLuz)

  }

  
}
