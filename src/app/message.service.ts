import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    const now = new Date();
    this.messages.push(`${now.getMonth()}月${now.getDate()}日 ${now.getHours()}時${now.getMinutes()}分 : ${message}`);
  }

  clear(){
    this.messages = [];
  }
}
