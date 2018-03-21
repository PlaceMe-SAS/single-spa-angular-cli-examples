import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule } from '@angular/material';

import { SingleSpaRouterModule } from './shared/router/single-spa-router.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    SingleSpaRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
