import singleSpaAngularCli from 'single-spa-angular-cli';

const lifecycles = singleSpaAngularCli({
    name: 'home',
    selector: 'home-root',
    baseScriptUrl: '/src/apps/home/dist',
    styles: [
        'styles.bundle.css',
    ],
    scripts: [
        'inline.bundle.js',
        'polyfills.bundle.js',
        'main.bundle.js',
        '0.chunk.js'
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