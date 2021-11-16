import { Component, OnInit } from '@angular/core';
import { ChatIcon } from './chat-icon.model';
import { FriendIcon } from './friend-icon.model';
import { mock_chats } from './mock-chats';
import { mock_friends } from './mock-friends';

@Component({
  selector: 'app-add-friend',
  templateUrl: 'add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  friends: FriendIcon[] = [];
  chats: ChatIcon[] = [];
  constructor() {
    for (var friend of mock_friends) {
      this.friends.push(new FriendIcon(friend));
    }
    for (var chat of mock_chats) {
      this.chats.push(new ChatIcon(chat));
    }
  }

  ngOnInit(): void {}
}
