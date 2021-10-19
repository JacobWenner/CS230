import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AccountComponent } from './Pages/account/account.component';
import { AddFriendComponent } from './Pages/account/add-friend.component';
import { ChatComponent } from './Pages/chat/chat.component';

=======
import { AccountComponent } from './pages/account/account.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AccountScreenComponent } from './pages/account-screen.component';
>>>>>>> main

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'chat', component: ChatComponent },
<<<<<<< HEAD
  { path: 'addFriend', component: AddFriendComponent },
=======
  { path: 'login', component: AccountScreenComponent },
>>>>>>> main
  { path: '', redirectTo: '/account', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
