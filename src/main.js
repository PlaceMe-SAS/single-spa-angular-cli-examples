import { registerApplication, start } from 'single-spa';
import { singleSpaAngularCliRouter } from 'single-spa-angular-cli/lib/utils';
import 'babel-polyfill';
import 'zone.js';

registerApplication('menu', import('./loaders/menu.js'), singleSpaAngularCliRouter.hashPrefix('/**'));
registerApplication('home', import('./loaders/home.js'), singleSpaAngularCliRouter.hashPrefix('/home', true));
registerApplication('app1', import('./loaders/app1.js'), singleSpaAngularCliRouter.hashPrefix('/app1'));
registerApplication('help', import('./loaders/help.js'), singleSpaAngularCliRouter.hasParameter('help', 'open'));

start();
