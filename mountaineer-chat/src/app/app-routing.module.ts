import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AddFriendComponent } from './pages/account/add-friend.component';
import { ChatMembersComponent } from './pages/chat-members.component';
import { AccountLoginComponent } from './pages/auth/login/account-login.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'login', component: AccountLoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'addFriend', component: AddFriendComponent },
  { path: 'chatMembers', component: ChatMembersComponent},
  { path: '', redirectTo: '/account', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
