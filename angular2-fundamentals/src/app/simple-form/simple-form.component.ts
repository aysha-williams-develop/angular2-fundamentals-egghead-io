import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input 
        #myInput 
        type="text" 
        [(ngModel)]="meh"
        [ngClass]="{mousedown: isMousedown}"
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = false"
        (mouseleave)="isMousedown = false"
      >
      <button (click)="update.emit({text:meh})">Click Me!</button>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
    input:focus {
      font-weight: bold;
      outline: none;
    }
    button {
      border: none;
    }
    .mousedown {
      border: 2px solid green;
    }
  `]
})
export class SimpleFormComponent implements OnInit {
  @Input() meh : string = "meh";
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
