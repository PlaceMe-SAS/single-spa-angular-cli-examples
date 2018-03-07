import { loader } from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'menu',
    selector: 'menu-root',
    outputPath: '/src/apps/menu/dist'
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