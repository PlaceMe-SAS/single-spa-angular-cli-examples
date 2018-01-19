import { registerApplication, start } from 'single-spa';
import 'babel-polyfill';
import 'zone.js';

import { mainRegisterApplication, singleSpaAngularCliRouter } from './util/utils';

mainRegisterApplication('menu', () => import('./menu/loader.js'), singleSpaAngularCliRouter.hashPrefix('/**')).then(() => {
    registerApplication('home', () => import('./home/loader.js'), singleSpaAngularCliRouter.hashPrefix('/home', true));
    registerApplication('app1', () => import('./app1/loader.js'), singleSpaAngularCliRouter.hashPrefix('/app1'));
});
start();