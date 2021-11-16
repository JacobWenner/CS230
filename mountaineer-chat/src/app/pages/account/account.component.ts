import { Component, OnInit } from '@angular/core';
import { mock_friends } from './mock-friends';
import { mock_chats } from './mock-chats';
import { ChatIcon } from './chat-icon.model';
import { FriendIcon } from './friend-icon.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  friends: FriendIcon[] = [];
  chats: ChatIcon[] = [];
  usersUrl: string = "https://mountaineer-chat-default-rtdb.firebaseio.com/users";
  danUrl: string = "/dan0016/status";
  statusNum: number = 1;
  statusColor: string = "A2A190";
  status: string = "Offline";

  constructor() {
    for (var friend of mock_friends) {
      this.friends.push(new FriendIcon(friend));
    }
    for (var chat of mock_chats) {
      this.chats.push(new ChatIcon(chat));
    }
  }

  ngOnInit(): void {}

  pushStatus(num: number) {
    console.log("push" + num);
  }

  setStatus(): void {
    if (this.statusNum < 4)
      this.statusNum++;
    else
      this.statusNum = 0;

    switch (this.statusNum) {
      case 0:
        console.log('invisible, white');
        this.statusColor = "#F5F2ED";
        this.status = "Invisible";
        break;
      case 1:
        console.log('offline, gray');
        this.statusColor = "#A2A190";
        this.status = "Offline";
        break;
      case 2:
        console.log('online, green');
        this.statusColor = "#06A414";
        this.status = "Online";
        break;
      case 3:
        console.log('do not disturb, red');
        this.statusColor = "#FF0000";
        this.status = "Do Not Disturb";
        break;
      case 4:
        console.log('afk, yellow');
        this.statusColor = "#E6E200";
        this.status = "AFK";
        break;
      default:
        console.log('offline');
        this.statusColor = "#A2A190";
        this.status = "Offline";
    }
    this.pushStatus(this.statusNum)
  }
}
