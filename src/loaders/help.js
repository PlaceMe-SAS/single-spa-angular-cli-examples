import { loader } from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'help',
    selector: 'help-root',
    baseScriptUrl: '/src/apps/help/dist',
    styles: [
        'styles.bundle.css',
    ],
    scripts: [
        'inline.bundle.js',
        'polyfills.bundle.js',
        'main.bundle.js'
    ]
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