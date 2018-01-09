import { declareChildApplication, start } from 'single-spa';
import 'babel-polyfill';

declareChildApplication('home', () => import('./home/loader.js'), () => true);
//declareChildApplication('angular5-mf', () => import('./angular5-mf/loader.js'), hashPrefix('/angular5-mf'));
start();

function hashPrefix(prefix) {
    return function (location) {
        return location.hash.indexOf(`#${prefix}`) === 0;
    }
}
