import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentProductsComponent } from './components/recent-products/recent-products.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxPaginationModule} from 'ngx-pagination'
import {ScrollingModule} from '@angular/cdk/scrolling'

import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { FilterproductPipe } from './pipes/filterproduct.pipe'

@NgModule({
  declarations: [
    AppComponent,
    RecentProductsComponent,
    FilterProductsComponent,
    ManageProductsComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    FilterproductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
