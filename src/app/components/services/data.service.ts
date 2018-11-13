import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ROOTURL: string = "http://10.252.254.120:3000/api/"  
  
  constructor(private http: HttpClient ) { }


  getMarkers() {
    return this.http.get(this.ROOTURL+"canchas");
  }


}
