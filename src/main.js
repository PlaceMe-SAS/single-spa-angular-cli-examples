import { declareChildApplication, start } from 'single-spa';
import 'babel-polyfill';
import 'zone.js';

declareChildApplication('menu', () => import('./menu/loader.js'), () => true);
declareChildApplication('home', () => import('./home/loader.js'), hashPrefix('/home'));
declareChildApplication('app1', () => import('./app1/loader.js'), hashPrefix('/app1'));
start();

function hashPrefix(prefix) {
    return function (location) {
        if(location.hash === '' || location.hash === '#'){
            location.assign('#/home');
        }
        return location.hash.indexOf(`#${prefix}`) === 0;
    }
}