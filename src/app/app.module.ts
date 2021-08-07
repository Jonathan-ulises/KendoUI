import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendoModule } from './kendo-component/kendo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from "@angular/common/http";


import { FormsModule } from "@angular/forms";
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KendoModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DialogsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
