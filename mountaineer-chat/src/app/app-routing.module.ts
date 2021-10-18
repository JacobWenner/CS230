import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalariesComponent } from './Pages/account/account.component';

const routes: Routes = [{ path: 'account', component: AccountComponent }, {}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
