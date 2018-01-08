import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Route2Component } from './route2.component';

const routes: Routes = [
  { path: '', component: Route2Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Route2RoutingModule { }