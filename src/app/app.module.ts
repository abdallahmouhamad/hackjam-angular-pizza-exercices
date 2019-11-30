import {BrowserModule} from '@angular/platform-browser';
import {NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { BasketService } from './basket.service';
import { PizzaService } from './pizza.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BasketComponent,
    PizzalistComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [
    HeaderComponent,
    HomeComponent,
    BasketComponent,
    PizzalistComponent,
    NgbModalModule
  ],
  providers: [BasketService, PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
