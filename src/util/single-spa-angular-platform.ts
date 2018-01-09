import { Router } from "../home/node_modules/@angular/router";

declare const window;

class SingleSpaAngularPlatform {

    appName: string;

    mount(appName: string, callback: Function): void {
        if (this.isSingleSpaApp()) {
            this.appName = appName;
            window[this.appName] = {};
            window[this.appName].mount = () => {
                callback(this.unmount.bind(this));
            };
        } else {
            setTimeout(() => {
                callback();
            }, 1);
        }

    }

    unmount(module: any) {
        if (this.isSingleSpaApp()) {
            window[this.appName].unmount = () => {
                if (module) {
                    module.destroy();
                    try {
                        module.injector.get(Router).dispose();
                    } catch (err) { }
                }
            };
        }
    }

    private isSingleSpaApp(): boolean {
        return document.querySelector('body').hasAttribute('data-single-spa');
    }
}

export const singleSpaAngularPlatform = new SingleSpaAngularPlatform();
