import { loader } from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'help',
    selector: 'help-root',
    outputPath: '/src/apps/help/dist'
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