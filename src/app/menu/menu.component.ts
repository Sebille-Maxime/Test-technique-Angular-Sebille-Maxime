import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() mapClicked = new EventEmitter<void>();
  @Output() listClicked = new EventEmitter<void>();

  onMapClick() {
    this.mapClicked.emit();
  }

  onListClick() {
    this.listClicked.emit();
  }
}
