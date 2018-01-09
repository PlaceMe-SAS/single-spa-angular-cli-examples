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

## This project is an Angular 5 portal as microfrontend lazy loaded

## How to get the examples running locally
```bash
git clone git@github.com:PlaceMe-SAS/single-spa-examples.git
cd single-spa-examples
npm install
npm run start
open http://localhost:8080
```

### Serve your angular project
```bash
npm install -g @angular/cli
cd src/home
npm install
ng serve
open http://localhost:4200
```

### For production apps mode
```bash
ng build --prod
```
And replace the target url of your child app

repeat for all angular cli projects

## Add an angular cli apps
```bash
cd src
ng new <your app name>
cd <your app name>
ng serve
```