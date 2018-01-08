let domEl;

export function bootstrap(props) {
	return Promise
		.resolve()
		.then(() => {
			domEl = document.createElement('div');
			document.body.appendChild(domEl);
		});
}

export function mount(props) {
	return Promise
		.resolve()
		.then(() => {
            const container = document.createElement('app-root');
            domEl.appendChild(container);
            [
                'inline.bundle.js',
                //'polyfills.bundle.js',
                'styles.bundle.js',
                'vendor.bundle.js',
                'route2-routing.module.chunk.js',
                'main.bundle.js'
            ].map(name => {
                const el = document.createElement('script');
                el.setAttribute('src', `src/web-component-app/dist/${name}`);
                return el;
            }).forEach(el => {
                domEl.appendChild(el);
            });
            if(window.load) {
                window.load();
            }
		});
}

export function unmount(props) {
	return Promise
		.resolve()
		.then(() => {
            if(window.destroy) {
                window.destroy();
            }
		})
}