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
  tipos: any[] = [{tipo: "Fútbol 5", bd: "5"},{tipo: "Fútbol 7", bd: "7"},{tipo: "Basquetbol", bd: "B"}];
  luces: any[] = [{tipo: "Con luces", bd: 1},{tipo: "Sin luces", bd: 0}];
  pastos: any[] = [{tipo: "Artificial", bd: 1},{tipo: "Natural", bd: 0}];
  
  markersFiltrados: any[] = [
    {
      nombre: "El galpón",
      coords: "-34.2, -56.3",
      canchas: 3,
      tipo: "5, 7"
    }
  ];

  markers: any = [{
    id: 1,
    nombre: "El galpón",
    coords: "-34.2, -56.3",
    canchas: 3,
    tipo: "5, 7"
  }
  ]

  constructor(private dataService: DataService) {
  }

  ngOnInit() {    
    this.getMarkers();
  }

  getMarkers() {
    this.dataService.getMarkers().subscribe( res => {
      console.log(res);
      this.markers = res;
      this.markersFiltrados = this.markers;

    });
  }

  filtrarCanchas() {
    this.markersFiltrados = this.markers;

    let deporteSelected = document.getElementById("inputDeporte") as HTMLInputElement;
    let pastoSelected = document.getElementById("inputPasto") as HTMLInputElement;
    let luzSelected = document.getElementById("inputLuz") as HTMLInputElement;    

    if (deporteSelected.value == "B") {
      pastoSelected.value = "-1";
      pastoSelected.setAttribute("disabled", "true");
    } else {
      pastoSelected.removeAttribute("disabled");
    }    
    
    if (deporteSelected.value != "-1") { 
      this.markersFiltrados = this.markersFiltrados.filter( marker => marker.tipo.includes(deporteSelected.value));
    }
    if (pastoSelected.value != "-1") {
      this.markersFiltrados = this.markersFiltrados.filter( marker => marker.pasto == pastoSelected.value);
    }
    if (luzSelected.value != "-1") {
      this.markersFiltrados = this.markersFiltrados.filter( marker => marker.luces == luzSelected.value); 
    }
  }
  
}
