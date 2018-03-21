import { Component, NgZone } from '@angular/core';

declare const location: any;

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ngZone: NgZone) {

  }

  getHelpUrl(): string {
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
    return helpUrl;
  }

}
