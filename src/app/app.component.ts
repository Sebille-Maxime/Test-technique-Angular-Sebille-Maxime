import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  isMapVisible = true;
  isListVisible = false;

  showMap() {
    this.isMapVisible = true;
    this.isListVisible = false;
  }

  showList() {
    this.isMapVisible = false;
    this.isListVisible = true;
  }
  }