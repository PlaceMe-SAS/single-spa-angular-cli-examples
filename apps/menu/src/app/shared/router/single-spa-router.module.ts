import { NgModule } from '@angular/core';

import { SingleSpaRouterLinkDirective } from './single-spa-router-link.directive';
import { SingleSpaRouterService } from './single-spa-router.service';

@NgModule({
  declarations: [
    SingleSpaRouterLinkDirective
  ],
  exports: [
    SingleSpaRouterLinkDirective
  ],
  providers: [
    SingleSpaRouterService
  ]
})
export class SingleSpaRouterModule { }
