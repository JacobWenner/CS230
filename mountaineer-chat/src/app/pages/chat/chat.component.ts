import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messagesRef: AngularFireList<any>;
  messages: Observable<any[]>;
  constructor(rtdb: AngularFireDatabase) {
    this.messagesRef = rtdb.list('messages');
    // Use snapshotChanges().map() to store the key
    this.messages = this.messagesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  addMessage(newName: string) {
    this.messagesRef.push({ text: newName });
  }
  updateMessage(key: string, newText: string) {
    this.messagesRef.update(key, { text: newText });
  }
  deleteMessage(key: string) {
    this.messagesRef.remove(key);
  }
}
