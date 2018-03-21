import { Directive, HostListener, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

import { SingleSpaRouterService } from './single-spa-router.service';

@Directive({
  selector: '[singleSpaRouterLink]'
})
export class SingleSpaRouterLinkDirective implements OnChanges {

  @Input() public singleSpaRouterLink: string;

  constructor(
    private elementRef: ElementRef,
    private singleSpaRouterService: SingleSpaRouterService
  ) { }

  @HostListener('click', ['$event']) onClick($event: Event) {
    this.singleSpaRouterService.navigate(this.singleSpaRouterLink, $event);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.elementRef.nativeElement.setAttribute('href', this.singleSpaRouterLink);
  }

}
