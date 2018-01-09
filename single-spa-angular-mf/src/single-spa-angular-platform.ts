import { Router } from "../../src/angular5-mf/node_modules/@angular/router";

declare const window;

const isSingleSpaApp = () => {
    return document.getElementById;
};

class SingleSpaAngularPlatform {

    appName: string;

    mount(appName: string, callback: Function): void {
        this.appName = appName;
        window[this.appName] = {};
        window[this.appName].mount = () => {
            callback(this.unmount.bind(this));
        };
    }

    unmount(module: any) {
        window[this.appName].unmount = () => {
            if (module) {
                module.destroy();
                module.injector.get(Router).dispose();
            }
        };
    }
}

export const singleSpaAngularPlatform = new SingleSpaAngularPlatform();
