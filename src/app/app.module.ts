import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    CartPageComponent,
    ProductCardComponent,
    NavigationBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
