import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `You're now friends with John`,
    `John liked your tweet`,
    `Tacos!`
  ]

  constructor() { }

}
