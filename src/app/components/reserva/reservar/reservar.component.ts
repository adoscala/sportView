import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  id: number;
  markers: any = [];
  marker: Object;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    });
    this.getMarkers();
  }

  getMarkers() {
    this.dataService.getMarkers().subscribe( res => {
      this.markers = res;
      this.filtrarPorId(this.id);
    });
  }

  filtrarPorId( id: number) {
    this.marker = this.markers.filter( (marker: any) => marker.id == id )[0];
    console.log(this.marker);
  }

}
