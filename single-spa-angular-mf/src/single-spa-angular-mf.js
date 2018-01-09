
const defaultOpts = {
	// required opts
	selector: null,
	baseScriptUrl: null,
	scripts: []
};

export default function singleSpaAngularMicroFrontend(userOpts) {
	if (typeof userOpts !== 'object') {
		throw new Error(`single-spa-angular-mf requires a configuration object`);
	}

	const opts = {
		...defaultOpts,
		...userOpts,
	};

	if (typeof opts.selector !== 'string') {
		throw new Error(`single-spa-angular-mf must be passed opts.selector string`);
	}

	if (typeof opts.baseScriptUrl !== 'string') {
		throw new Error(`single-spa-angular-mf must be passed opts.baseScriptUrl string`);
	}

	if (typeof opts.scripts.length > 0) {
		throw new Error(`single-spa-angular-mf must be passed opts.scripts array not empty`);
	}

	return {
		bootstrap: bootstrap.bind(null, opts),
		mount: mount.bind(null, opts),
		unmount: unmount.bind(null, opts),
	};
}

function bootstrap(opts) {
	return Promise.resolve().then(() => {
		const domEl = getContainerEl(opts);
		opts.scripts.map(name => {
			const el = document.createElement('script');
			el.setAttribute('src', `${opts.baseScriptUrl}/${name}`);
			return el;
		}).forEach(el => {
			domEl.appendChild(el);
		});
	});
}

function mount(opts) {
	return new Promise((resolve, reject) => {
		const domEl = getContainerEl(opts);
		const angularRootEl = document.createElement(opts.selector);
		domEl.appendChild(angularRootEl);
		setTimeout(() => {
			window[opts.selector].mount();
			resolve();
		}, 100);
	});
}

function unmount(opts) {
	return Promise.resolve().then(() => {
		if(window[opts.selector]){
			window[opts.selector].unmount();	
		}
	});
}

function getContainerEl(opts) {
	let el = document.querySelector(`#angular-sp-${opts.selector}`);
	if (!el) {
		el = document.createElement('div');
		el.setAttribute('id', `angular-sp-${opts.selector}`);
		document.body.appendChild(el);
	}
	return el;
}
