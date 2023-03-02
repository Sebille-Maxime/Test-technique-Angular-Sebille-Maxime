import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { MapComponent } from '../map/map.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent  {
  showForm()  {
    
  }
    
  City = [
    {
      name: 'London',
      country: 'United Kingdom',
      population: '8.98 million'
    },
    {
      name: 'Paris',
      country: 'France',
      population: '2.14 million'
    },
    {
      name: 'Washington',
      country: 'Unated States',
      population: '0.712 million'
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      population: '1.39 million'
    },
    {
      name: 'Canberra',
      country: 'Australia',
      population: '0.39 million'
    }
  ];

  /*test ajout nouvelle ville via un formulaire 
  newCity = { name: '', latitude: 0, longitude: 0 };
  isFormVisible = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/cities', this.newCity).subscribe((data: any) => {
      // The server should return the new city data, including its ID
      const { id, name, latitude, longitude } = data;

      // Add the new city to your map as a new marker
      const marker = L.marker([latitude, longitude]).addTo(this.map);
      marker.bindPopup(name).openPopup();

      // Hide the form and clear the input values
      this.isFormVisible = false;
      this.newCity = { name: '', latitude: 0, longitude: 0 };
    });
  }

  showForm() {
    this.isFormVisible = true;
  }
  */

  
  //fonction ajout nouvelle ville fonctionnelle depuis le code 
  createCity(): void {
    const newCity = {
      name: 'Berlin',
      country: 'Germany',
      population: '3.77 million',
      coordinates: [52.5200, 13.4050]
    };
    this.City.push(newCity);
    const map = L.map('map').setView([52.5200, 13.4050], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    const newCityMarker = L.marker([52.5200, 13.4050]).addTo(map);
    newCityMarker.bindPopup(`<b>${newCity.name}</b><br>${newCity.country}<br>Population: ${newCity.population}`);
  }

  //fonction ajout nouvelle ville fonctionnelle depuis le code 
  editCity(): void {
    const updatedCity = {
      name: 'Paris',
      country: 'France',
      population: '2.3 million',
      coordinates: [48.8566, 2.3522]
    };
    const index = this.City.findIndex(city => city.name === 'Paris');
    this.City.splice(index, 1, updatedCity);
    const map = L.map('map').setView([48.8566, 2.3522], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    const editedCityMarker = L.marker([51.5074, -0.1278]).addTo(map);
    editedCityMarker.bindPopup(`<b>${updatedCity.name}</b><br>${updatedCity.country}<br>Population: ${updatedCity.population}`);
  }
  //fonction ajout nouvelle ville fonctionnelle depuis le code 
  deleteCity(): void {
    const index = this.City.findIndex(city => city.name === 'Tokyo');
    this.City.splice(index, 1);
    const map = L.map('map').setView([35.6895, 139.6917], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    const marker = L.marker([35.6895, 139.6917]).addTo(map)
      .bindPopup('<b>Tokyo</b><br>Japan<br>Population: 13.96 million');
    marker.remove();
  }
}
