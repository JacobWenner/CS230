import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Pages/account/account.component';
import { AddFriendComponent } from './Pages/account/add-friend.component';
import { ChatComponent } from './Pages/chat/chat.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'addFriend', component: AddFriendComponent },
  { path: '', redirectTo: '/account', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
