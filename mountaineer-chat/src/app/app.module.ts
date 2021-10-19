import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './pages/account/account.component';
import { FriendIconComponent } from './pages/account/friend-icon.component';
import { ChatIconComponent } from './pages/account/chat-icon.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FriendIconComponent,
    ChatIconComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
