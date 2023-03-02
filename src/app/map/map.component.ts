import * as L from 'leaflet';
import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map?: L.Map ;
  

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 2
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'OpenStreetMap'
    });

    tiles.addTo(this.map);

    const londonMarker = L.marker([51.5074, -0.1278]).addTo(this.map);
    londonMarker.bindPopup('London , population: 8982000 ');

    const parisMarker = L.marker([48.8566, 2.3522]).addTo(this.map);
    parisMarker.bindPopup('Paris , population: 2141000');

    const washingtonMarker = L.marker([38.9071923, -77.0368707]).addTo(this.map);
    washingtonMarker.bindPopup('Washington , population: 712 816');

    const tokyoMarker = L.marker([35.6895, 139.6917]).addTo(this.map);
    tokyoMarker.bindPopup('Tokyo , population: 13960000');

    const canberraMarker = L.marker([-35.282000, 149.128684]).addTo(this.map);
    canberraMarker.bindPopup('Canberra , population: 395 790');

    const mymarker = L.circleMarker([44.95000, -0.33333]).addTo(this.map);
    mymarker.bindPopup('Your position');
  }

}