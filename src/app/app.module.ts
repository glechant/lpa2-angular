import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ApiModule } from './api';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    BurgerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
