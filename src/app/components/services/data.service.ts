import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ROOTURL: string = "http://192.168.150.36:3000/api/"  
  
  constructor(private http: HttpClient ) { }


  getMarkers() {
    return this.http.get(this.ROOTURL+"canchas");
  }


}
