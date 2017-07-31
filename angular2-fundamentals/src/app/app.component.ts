import { Component } from '@angular/core';

import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mail.messages">{{message}}</li>
      </ul>
      <app-simple-form *ngFor="let message of mail.messages" 
        [meh]="message"
        (click)="onUpdate($event)"
      >
        
      </app-simple-form>
    </div>
    `
})
export class AppComponent {
  title = "Let's Get started!";

  constructor(private mail: MailService ) {}

  onUpdate(event) {
    console.log(event);
  }
}
