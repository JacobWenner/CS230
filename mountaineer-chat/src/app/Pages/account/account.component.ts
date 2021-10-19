import { Component, OnInit } from '@angular/core';
import { mock_friends } from './mock-friends';
import { FriendIcon } from "./friend-icon.model";
import { mock_chats } from './mock-chats';
import { ChatIcon } from "./chat-icon.model"
@Component({
  selector: 'app-account',
  templateUrl: './other_account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  friends:FriendIcon[] = [];
  chats:ChatIcon[] = [];
  constructor() {
    for(var friend of mock_friends){
      this.friends.push(new FriendIcon(friend));
    }
    for(var chat of mock_chats){
      this.chats.push(new ChatIcon(chat));
    }
   }

  ngOnInit(): void {
  }

}
