import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _http:HttpClient) { }
  getCars(){
    return this._http.get('http://localhost:3000/api/dashboard/cars');
  }

  getCar(id:string){
    return this._http.get(`http://localhost:3000/api/dashboard/car/${id}`);
  }
}
