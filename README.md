# single-spa-examples
https://single-spa.surge.sh

This is an example of examples on how to use [single-spa](https://github.com/joeldenning/single-spa) in a variety of contexts. If you're looking for a simpler example that's just a webpack starter for single-spa, try out [simple-single-spa-webpack-example](https://github.com/joeldenning/simple-single-spa-webpack-example). Right now there are examples with the following technologies:

- React
- AngularJS
- Angular
- react-router
- angular-ui-router
- Webpack
- Babel
- Vue
- Svelte
- Ember
- Inferno
- Preact

## View the demo!
A [demo is live](http://single-spa.surge.sh) on surge.sh.

## This project is an Angular 5 portal as microfrontend lazy loaded thanks to the CLI

The npm project is based on [single-spa-angular-cli](https://www.npmjs.com/package/single-spa-angular-cli)

## How to get the examples running locally
```bash
git clone git@github.com:PlaceMe-SAS/single-spa-angular-cli-examples.git
cd single-spa-angular-cli-examples
npm install -g @angular/cli
npm install
npm run ng:build
npm start
```
That's all!

### Serve your angular app project for developement mode
```bash
cd src/apps/menu
npm install
ng serve --port=4200
```
open http://localhost:4200

### For production apps mode by application
```bash
cd src/apps/menu
ng build --prod --output-hashing=media
```

### For production apps mode for all apps
```bash
npm run ng:build
```

## Add an angular cli apps
```bash
cd src/apps
ng new app1 --prefix=app1
cd app1
ng serve --port=4202
```
open http://localhost:4202
or change your loader to fetch dev scripts and styles served by the cli

```js
// src/loaders/app1.js

import singleSpaAngularCli from 'single-spa-angular-cli';

const lifecycles = singleSpaAngularCli({
    name: 'app1',
    selector: 'app1-root',
    baseScriptUrl: '/src/apps/app1/dist',
    css: [
        'styles.bundle.css',
    ],
    scripts: [
        'inline.bundle.js',
        'polyfills.bundle.js',
        'vendor.bundle.js',
        'main.bundle.js'
    ]
});

export const bootstrap = [
    lifecycles.bootstrap
];

export const mount = [
    lifecycles.mount
];

export const unmount = [
    lifecycles.unmount
];

export const unload = [
    lifecycles.unload
];

```

```js
// src/app1/src/polyfills.ts

// Comment zone.js, it is globaly imported by the portal
// import 'zone.js/dist/zone';  // Included with Angular CLI.
```

```html
// src/app1/src/index.html

  <app1-root></app1-root>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.19/zone.js"></script>
</body>
```

```js
// src/main.js

import { registerApplication, start } from 'single-spa';
import { singleSpaAngularCliRouter } from 'single-spa-angular-cli/lib/utils';
import 'babel-polyfill';
import 'zone.js';

const LOADER = {
    menu: import('./loaders/menu.js'),
    home: import('./loaders/home.js'),
    app1: import('./loaders/app1.js'),
    help: import('./loaders/help.js')
};

registerApplication('menu', () => LOADER.menu, singleSpaAngularCliRouter.hashPrefix('/**', true));
registerApplication('home', () => LOADER.home, singleSpaAngularCliRouter.hashPrefix('/home', true));
registerApplication('app1', () => LOADER.app1, singleSpaAngularCliRouter.hashPrefix('/app1'));
registerApplication('help', () => LOADER.help, singleSpaAngularCliRouter.hashPrefix('/app1'));
start();
```

```html
<!-- index.html -->
<body data-single-spa>
```

```js
// src/apps/app1/src/main.ts

import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { singleSpaAngularCliPlatform } from 'single-spa-angular-cli/lib/single-spa-angular-cli-platform';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Router is not mandatory, only if you use a router for your app1
singleSpaAngularCliPlatform.mount('app1-root', Router).subscribe((attachUnmount) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(attachUnmount);
});
```
