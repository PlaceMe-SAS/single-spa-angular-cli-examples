import 'requirejs/require.js';
import singleSpaAngularMicroFrontend from '../../single-spa-angular-mf/src/single-spa-angular-mf.js';

const ngMfLifecycles = singleSpaAngularMicroFrontend({
  selector: 'angular-mf-app-root'
});

export const bootstrap = [
  ngMfLifecycles.bootstrap
];

export const mount = [
  ngMfLifecycles.mount,
  (opts) => {
    return new Promise((resolve, reject) => {
      require(['./dist/main.bundle.js'], resolve, reject);
    });
  }
];

export const unmount = [
  ngMfLifecycles.unmount
];