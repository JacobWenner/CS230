// core angular modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// custom modules

import { LoggedOutComponent } from './pages/auth/logout/logged-out.component';
import { AccountComponent } from './pages/account/account.component';
import { ChatMembersComponent } from './pages/chat-members.component';
import { FriendIconComponent } from './pages/account/friend-icon.component';
import { ChatIconComponent } from './pages/account/chat-icon.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AddFriendComponent } from './pages/account/add-friend.component';

// database stuff

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideStorage, getStorage } from '@angular/fire/storage';

// deployment environment vars

import { environment } from '../environments/environment';
import { AccountLoginComponent } from './pages/auth/login/account-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggedOutComponent,
    ChatMembersComponent,
    AccountComponent,
    FriendIconComponent,
    ChatIconComponent,
    ChatComponent,
    AddFriendComponent,
    AccountLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
