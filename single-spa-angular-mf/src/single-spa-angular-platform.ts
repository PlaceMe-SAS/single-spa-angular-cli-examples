import { Router } from "../../src/home/node_modules/@angular/router";

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
                    module.injector.get(Router).dispose();
                }
            };
        }
    }

    private isSingleSpaApp (): boolean {
        return document.querySelector('body').hasAttribute('data-single-spa');
    }
}

export const singleSpaAngularPlatform = new SingleSpaAngularPlatform();
