import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { SingleSpaModule } from 'single-spa-angular-cli/angular';

import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    Route1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    SingleSpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
