import 'requirejs/require.js';

export function bootstrap() {
  return new Promise((resolve, reject) => {
    domElementGetter();
    require(['./dist/main.bundle.js'], resolve, reject);
  });
}

export function mount() {
  return Promise.resolve().then(() => {
    domElementGetter().style.display = 'block';
  });
}

export function unmount() {
  return Promise.resolve().then(() => {
    domElementGetter().style.display = 'none';
  });
}

function domElementGetter() {
  let el = document.getElementById( 'angular5-micro-frontend' );
  if (!el) {
    el = document.createElement( 'app-root' );
    el.id = 'angular5-micro-frontend';
    document.body.appendChild( el );
  }

  return el;
}
