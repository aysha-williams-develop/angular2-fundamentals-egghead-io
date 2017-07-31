import { Component } from '@angular/core';

import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mail.messages">{{message.text}}</li>
      </ul>
      <app-simple-form 
        *ngFor="let message of mail.messages" 
        [meh]="message.text"
        (update)="onUpdate(message.id, $event.text)"
      >
        
      </app-simple-form>
    </div>
    `
})
export class AppComponent {
  title = "Let's Get started!";

  constructor(private mail: MailService ) {}

  onUpdate(id, text) {
    this.mail.update(id, text);
    console.log(event);
  }
}
