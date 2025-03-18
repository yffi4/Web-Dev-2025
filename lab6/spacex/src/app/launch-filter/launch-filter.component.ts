import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-launch-filter',
  template: '<button (click)="filter()">Show Successful Launches</button>',
  styleUrls: ['./launch-filter.component.css']
})
export class LaunchFilterComponent {
  @Output() filterSuccess = new EventEmitter<void>();

  filter(): void {
    this.filterSuccess.emit();
  }
}