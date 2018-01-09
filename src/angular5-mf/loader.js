import singleSpaAngularMicroFrontend from "../../single-spa-angular-mf/src/single-spa-angular-mf";

const lifecycles = singleSpaAngularMicroFrontend({
    selector: 'app-root',
    baseScriptUrl: 'http://localhost:4200',
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
