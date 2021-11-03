import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { Row_1Component } from './body/row_1/row_1.component';
import { Row_2Component } from './body/row_2/row_2.component';
import { Row_3Component } from './body/row_3/row_3.component';

import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { MacComponent } from './body/mac.component';
import { IpadComponent } from './body/ipad_page/ipad.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './body/home.component';
import { StoreComponent } from './body/store.component';
import { IphoneComponent } from './body/iphone.component';
import { WatchComponent } from './body/watch.component';
import { TvComponent } from './body/tv_page/tv.component';
import { MusicComponent } from './body/music_page/music.component';
import { SupportComponent } from './body/support_page/support.component';
import { CardComponent } from './body/card.component';
import { UserInfoComponent } from './body/user-info.component';
import { AccountComponent } from './body/account.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LayoutComponent,
    TopNavBarComponent,
    Row_1Component,
    Row_2Component,
    Row_3Component,
    BodyComponent,
    CardComponent,
    FooterComponent,
    MacComponent,
    IpadComponent,
    HomeComponent,
    StoreComponent,
    IphoneComponent,
    WatchComponent,
    TvComponent,
    MusicComponent,
    SupportComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Apple'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
