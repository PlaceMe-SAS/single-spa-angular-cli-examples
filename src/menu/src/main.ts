import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngularCliPlatform } from '../../util/single-spa-angular-cli-platform';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

singleSpaAngularCliPlatform.mount('menu-root').subscribe((attachUnmount) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(attachUnmount);
});
