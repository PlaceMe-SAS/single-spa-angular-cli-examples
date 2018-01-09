import singleSpaAngularMicroFrontend from "../../single-spa-angular-mf/src/single-spa-angular-mf";

const lifecycles = singleSpaAngularMicroFrontend({
    selector: 'app-root',
    baseScriptUrl: 'http://localhost:4200',
    scripts: [
        'inline.bundle.js',
        'polyfills.bundle.js',
        'styles.bundle.js',
        '0.chunk.js',
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
