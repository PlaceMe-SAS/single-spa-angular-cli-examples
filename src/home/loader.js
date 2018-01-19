import singleSpaAngularCli from 'single-spa-angular-cli';

const lifecycles = singleSpaAngularCli({
    selector: 'home-root',
    baseScriptUrl: '/apps/home',
    scripts: [
        'inline.bundle.js',
        'polyfills.bundle.js',
        'styles.bundle.js',
        'vendor.bundle.js',
        'route2-routing.module.chunk.js',
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
