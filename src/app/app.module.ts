import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { Row_1Component } from './body/row_1/row_1.component';
import { Row_2Component } from './body/row_2/row_2.component';
import { Row_3Component } from './body/row_3/row_3.component';

import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopNavBarComponent,
    Row_1Component,
    Row_2Component,
    Row_3Component,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
