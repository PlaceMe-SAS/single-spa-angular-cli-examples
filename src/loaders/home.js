import { loader } from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'home',
    selector: 'home-root',
    outputPath: '/src/apps/home/dist'
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