import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cities = new BehaviorSubject([]);
  currentCities = this.cities.asObservable();

  constructor() { }

  createCity(city: any) {
    this.cities.next([...this.cities.value, city]);
    this.addMarker(city.coordinates);
  }

  private addMarker(coordinates: string) {
    const latLng = coordinates.split(',').map(coord => parseFloat(coord));
    const marker = L.marker(latLng).addTo(map);
  }
}