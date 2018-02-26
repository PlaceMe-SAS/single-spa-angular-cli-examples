import singleSpaAngularCli from 'single-spa-angular-cli';

const lifecycles = singleSpaAngularCli({
    name: 'app1',
    selector: 'app1-root',
    baseScriptUrl: '/src/apps/app1/dist',
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