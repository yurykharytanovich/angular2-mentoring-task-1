import {Directive, ElementRef, Renderer, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[borderFresh]'
})
export class BorderFreshDirective implements OnInit{

  @Input() borderFresh: Date;

  constructor(
      public el: ElementRef,
      public rendered: Renderer
  ) { }

  ngOnInit() {
      const courseTime = this.borderFresh.getTime();
      const nowTime = Date.now();
      const twoWeeks = 2 * 7 * 24 * 3600 * 1000;

      if ( courseTime > nowTime ) {
          this.rendered.setElementStyle(this.el.nativeElement, 'border', '3px solid blue');
      } else if (courseTime > nowTime - twoWeeks) {
          this.rendered.setElementStyle(this.el.nativeElement, 'border', '3px solid green');
      }
  }
}
