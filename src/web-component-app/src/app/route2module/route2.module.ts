import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';

@NgModule({
  imports: [
    BrowserModule,
    Route2RoutingModule
  ],
  declarations: [
    Route2Component
  ],
  entryComponents: [Route2Component],
  exports: []
})
export class Route2Module { }
