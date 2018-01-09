import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngularPlatform } from '../../util/single-spa-angular-platform';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const window;

if (environment.production) {
  enableProdMode();
}

singleSpaAngularPlatform.mount('home-root', (unmount) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(unmount);
});
