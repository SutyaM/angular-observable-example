import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Observer1Component } from './observer1/observer1.component';
import { Observer2Component } from './observer2/observer2.component';

@NgModule({
  declarations: [
    AppComponent,
    Observer1Component,
    Observer2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
