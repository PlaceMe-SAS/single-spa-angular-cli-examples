import { Router } from "../home/node_modules/@angular/router";
import { Observable } from "../home/node_modules/rxjs/Observable";

declare const window;

export class SingleSpaAngularCliPlatform {

    appName: string;

    mount(appName: string): Observable<any> {
        this.appName = appName;
        return Observable.create(observer => {
            if (this.isSingleSpaApp()) {
                window[this.appName] = {};
                window[this.appName].mount = () => {
                    observer.next(this.unmount.bind(this));
                };
            } else {
                observer.next(this.unmount.bind(this));
            }
        });
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

export const singleSpaAngularCliPlatform = new SingleSpaAngularCliPlatform();