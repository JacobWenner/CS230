import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home.component';
import { IpadComponent } from './body/ipad_page/ipad.component';
import { IphoneComponent } from './body/iphone.component';
import { MacComponent } from './body/mac.component';
import { MusicComponent } from './body/music_page/music.component';
import { StoreComponent } from './body/store.component';
import { SupportComponent } from './body/support_page/support.component';
import { TvComponent } from './body/tv_page/tv.component';
import { WatchComponent } from './body/watch.component';
import { AccountComponent } from './body/account.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'mac', component: MacComponent },
  { path: 'ipad', component: IpadComponent },
  { path: 'iphone', component: IphoneComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'tv', component: TvComponent },
  { path: 'music', component: MusicComponent },
  { path: 'support', component: SupportComponent },
  { path: 'account', component: AccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
