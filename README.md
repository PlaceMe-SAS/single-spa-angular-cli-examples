# single-spa-examples for single-spa-angular-cli

## Single SPA
[single-spa demo](https://single-spa.surge.sh)
[single-spa](https://github.com/joeldenning/single-spa) 
[simple-single-spa-webpack-example](https://github.com/joeldenning/simple-single-spa-webpack-example)

# Single SPA for Angular CLI

## View the demo!
A [demo is live](http://single-spa.surge.sh) on surge.sh.

## This project is an Angular 5 portal as microfrontend lazy loaded thanks to the CLI

The npm project is based on [single-spa-angular-cli](https://www.npmjs.com/package/single-spa-angular-cli)

## View the Single SPA Angular CLI portal demo
A [demo is live](http://single-spa-angular-cli.placeme.io) on placeme.io (comming soon).

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

## How to perform CI tasks
```bash
npm run ng:lint
npm run ng:test
```
That's all!

## Want to debug your app ?
### Serve your angular app project for developement mode
```bash
cd apps/home
ng serve --port=4201
```
open http://localhost:4201

### Configure a proxy to use the cli dev mode app
```js
// webpack.config.js

const devApplications = {
  //menu: 'http://localhost:4200',
  home: 'http://localhost:4201',
  //app1: 'http://localhost:4202',
  //help: 'http://localhost:4203'
};
    ...
```

## Want to build Apps
### Build single application
```bash
cd apps/home
ng build --prod  -op ../../build/home
```

### Build all applications
```bash
npm run ng:build
npm run build (comming soon)
```

## Add an Angular CLI apps
### Create Angular CLI standard app
```bash
cd apps
ng new app1 --prefix=app1
cd app1
ng serve --port=4202
```
open http://localhost:4202

### Remove Zone.js from the cli app bundle
```js
// app1/src/polyfills.ts

// Comment zone.js, it is globaly imported by the portal
// import 'zone.js/dist/zone';  // Included with Angular CLI.
```

### Add Zone.js only for the cli app
```html
<!-- app1/src/index.html -->

  <app1-root></app1-root>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.19/zone.js"></script>
</body>
```

### Configure your Angular Cli App to be loaded by single spa
```js
// apps/app1/src/main.ts

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformSingleSpa } from 'single-spa-angular-cli';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformSingleSpa.mount('app1').subscribe(({ props, attachUnmount }) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
    attachUnmount(module);
    // Do something with props if you want
    // Ex : module.instance.setSomething(...)
  });
});
```

### Configure your angular cli applications
```js
// portal/applications.config.json

[
    {
        "name": "menu",
        "selector": "menu-root",
        "baseHref": "/menu",
        "matchRoute": "/**"
    },
    {
        "name": "home",
        "selector": "home-root",
        "baseHref": "/home",
        "matchRoute": "/home/",
        "isDefaultApp": true
    },
    {
        "name": "app1",
        "selector": "app1-root",
        "baseHref": "/app1",
        "matchRoute": "/app1/"
    },
    {
        "name": "help",
        "selector": "help-root",
        "baseHref": "/help",
        "matchRoute": "help=open"
    }
]
```
