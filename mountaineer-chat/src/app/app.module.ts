import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './Pages/account/account.component';
import {FriendIconComponent} from './Pages/account/friend-icon.component'
import {ChatIconComponent} from './Pages/account/chat-icon.component'
import { ChatComponent } from './Pages/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FriendIconComponent,
    ChatIconComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
