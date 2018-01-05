import 'requirejs/require.js';
import singleSpaAngularMicroFrontend from '../../single-spa-angular-mf/src/single-spa-angular-mf.js';

const ngMfLifecycles = singleSpaAngularMicroFrontend({
  selector: 'angular-mf-app-root'
})

export const bootstrap = [
  ngMfLifecycles.bootstrap,
  (opts) => {
    return new Promise((resolve, reject) => {
      require(['./dist/main.bundle.js'], resolve, reject);
    });
  }
];

export const mount = [
  ngMfLifecycles.mount,
];

export const unmount = [
  ngMfLifecycles.unmount,
];