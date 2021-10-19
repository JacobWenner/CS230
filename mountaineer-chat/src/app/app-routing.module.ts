import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AccountScreenComponent } from './pages/account-screen.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: AccountScreenComponent },
  { path: '', redirectTo: '/account', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
