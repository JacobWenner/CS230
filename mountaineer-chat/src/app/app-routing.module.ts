import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AddFriendComponent } from './pages/account/add-friend.component';
import { AccountScreenComponent } from './pages/account-screen.component';
import { ChatMembersComponent } from './pages/chat-members.component';
import { LoggedOutComponent } from './pages/logged-out/logged-out.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'addFriend', component: AddFriendComponent },
  { path: 'login', component: AccountScreenComponent },
  { path: 'chatMembers', component: ChatMembersComponent},
  { path: 'loggedOut', component: LoggedOutComponent},
  { path: '', redirectTo: '/account', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
