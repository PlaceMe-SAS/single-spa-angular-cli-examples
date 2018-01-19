import singleSpaAngularCli from 'single-spa-angular-cli';

const lifecycles = singleSpaAngularCli({
    selector: 'menu-root',
    baseScriptUrl: '/apps/menu',
    scripts: [
        'inline.bundle.js',
        'polyfills.bundle.js',
        'styles.bundle.js',
        'vendor.bundle.js',
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
