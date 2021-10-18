import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './pages/account/account.component';
import { FriendIconComponent } from './pages/account/friend-icon.component';
import { ChatIconComponent } from './pages/account/chat-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FriendIconComponent,
    ChatIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
