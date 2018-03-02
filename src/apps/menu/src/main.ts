import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { singleSpaAngularCliPlatform } from 'single-spa-angular-cli/lib/single-spa-angular-cli-platform';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

singleSpaAngularCliPlatform.mount('menu').subscribe(({ props, attachUnmount }) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
    attachUnmount(module);
    // Do something with props if you want
    // Ex : module.instance.setSomething(...)
  });
});
