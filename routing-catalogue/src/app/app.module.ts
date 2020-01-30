import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddCatalogueComponent } from './add-catalogue/add-catalogue.component';
import { ShowCatalogueComponent } from './show-catalogue/show-catalogue.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCatalogueComponent,
    ShowCatalogueComponent,
    PagenotfoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
