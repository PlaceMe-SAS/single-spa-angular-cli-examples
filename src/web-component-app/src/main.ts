import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const window;

if (environment.production) {
  enableProdMode();
}

let appModule: NgModuleRef<AppModule> = null;

window.load = () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(function (appModule) {
    window.destroy = () => {
      if (appModule) {
        appModule.destroy();
        appModule.injector.get(Router).dispose();
      }
    }
  });
};
