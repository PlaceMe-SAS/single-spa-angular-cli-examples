import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { SingleSpaRouterModule } from './shared/router/single-spa-router.module';

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
    SingleSpaRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
