import { loader } from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'app1',
    selector: 'app1-root',
    outputPath: '/src/apps/app1/dist'
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