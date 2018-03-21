import { Injectable, NgZone } from '@angular/core';

declare const location: any;
declare const history: any;

@Injectable()
export class SingleSpaRouterService {

  constructor(private ngZone: NgZone) { }

  navigate(path: string, event?: Event): void {
    this.ngZone.runOutsideAngular(() => {
      history.pushState(null, null, path);
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
    });
  }

}
