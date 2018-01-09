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
		unmount: unmount.bind(null, opts)
	};
}

function bootstrap(opts) {
	const domEl = getContainerEl(opts);
	return opts.scripts.reduce((prev, scriptName) => prev.then(loadScriptTag(`${opts.baseScriptUrl}/${scriptName}`, domEl)), Promise.resolve());
}

function mount(opts) {
	return Promise.resolve().then((resolve, reject) => {
		const domEl = getContainerEl(opts);
		const angularRootEl = document.createElement(opts.selector);
		domEl.appendChild(angularRootEl);
		window[opts.selector].mount();
	});
}

function unmount(opts) {
	return Promise.resolve().then(() => {
		window[opts.selector].unmount();
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

async function runPromisesInSequence(promises) {
	for (let promise of promises) {
		await promise();
	}
}

function loadScriptTag(url, domEl) {
	return () => {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.onload = function () {
				resolve();
			};
			script.onerror = err => {
				reject(err);
			};
			script.src = url;
			domEl.appendChild(script);
		});
	};
}