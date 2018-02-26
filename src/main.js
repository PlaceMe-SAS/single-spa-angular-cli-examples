import { registerApplication, start } from 'single-spa';
import { mainRegisterApplication, singleSpaAngularCliRouter } from 'single-spa-angular-cli/lib/utils';
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