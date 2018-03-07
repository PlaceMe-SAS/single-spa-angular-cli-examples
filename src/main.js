import { registerApplication, start } from 'single-spa';
import { router } from 'single-spa-angular-cli';
import 'babel-polyfill';
import 'zone.js';

registerApplication('menu', import('./loaders/menu.js'), router.hashPrefix('/**'));
registerApplication('home', import('./loaders/home.js'), router.hashPrefix('/home', true));
registerApplication('app1', import('./loaders/app1.js'), router.hashPrefix('/app1'));
registerApplication('help', import('./loaders/help.js'), router.hasParameter('help', 'open'));

start();
