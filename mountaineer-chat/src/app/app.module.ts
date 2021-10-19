import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountScreenComponent } from './account/account-screen.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
