import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text">
      <button (click)="onClick($event, myInput.value)">Click Me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }
}
