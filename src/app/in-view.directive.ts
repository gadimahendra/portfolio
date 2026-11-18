import { Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

/** Adds the `in-view` class to the host the first time it enters the viewport. */
@Directive({ selector: '[appInView]' })
export class InViewDirective implements OnDestroy {
  private observer?: IntersectionObserver;

  constructor() {
    const node: HTMLElement = inject(ElementRef).nativeElement;
    afterNextRender(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add('in-view');
            this.observer?.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
