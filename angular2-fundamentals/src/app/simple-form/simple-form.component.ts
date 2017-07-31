import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="meh">
      <button (click)="update.emit({text:message})">Click Me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() meh : string = "meh";
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
