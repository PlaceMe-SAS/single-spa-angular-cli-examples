import { Component, NgZone } from '@angular/core';

declare const location: any;
declare const history: any;

@Component({
  selector: 'menu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ngZone: NgZone) {

  }

  toggleHelp(event: Event): void {
    let helpUrl;
    const match = location.href.match(/help=(open|close)/);
    const isOpen = match && match[1] === 'open';
    if (isOpen) {
      helpUrl = location.href.replace('help=open', 'help=close');
    } else {
      if (match) {
        helpUrl = location.href.replace('help=close', 'help=open');
      } else if (location.href.match(/\?/)) {
        helpUrl = `${location.href}&help=open`;
      } else {
        helpUrl = `${location.href}?help=open`;
      }
    }
    this.navigate(helpUrl, event);
  }

  navigate(path: string, event: Event): void {
    this.ngZone.runOutsideAngular(() => {
      history.pushState(null, null, path);
      event.stopPropagation();
      event.preventDefault();
    });
  }
}
