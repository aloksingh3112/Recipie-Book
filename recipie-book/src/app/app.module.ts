import { FormsModule } from '@angular/forms';
import { InputComponent } from './Recepie-Input/input.component';
import { OutputComponent } from './Recepie-Output/output.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    InputComponent
  
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
