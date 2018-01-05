
const defaultOpts = {
	// required opts
	selector: null
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

	return {
		bootstrap: bootstrap.bind(null, opts),
		mount: mount.bind(null, opts),
		unmount: unmount.bind(null, opts),
	};
}

function bootstrap(opts) {
	return Promise.resolve().then(() => {
		getContainerEl(opts);
	});
}

function mount(opts) {
	return Promise.resolve().then(() => {
		getContainerEl(opts).style.display = 'block';
	});
}

function unmount(opts) {
	return Promise.resolve().then(() => {
		getContainerEl(opts).style.display = 'none';
	});
}

function getContainerEl(opts) {
	let el = document.querySelector(opts.selector);
	if (!el) {
		el = document.createElement(opts.selector);
		document.body.appendChild(el);
	}
	return el;
}
