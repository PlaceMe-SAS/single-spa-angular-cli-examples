import { Component, OnInit } from '@angular/core';

declare const location: any;

@Component({
  selector: 'help-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  url: string;

  ngOnInit(): void {
    this.url = location.pathname;
  }

}
