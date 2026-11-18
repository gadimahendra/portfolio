import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Reveals the host element once, the first time it scrolls into view. */
@Directive({
  selector: '[appFadeInOnScroll]',
})
export class FadeInOnScrollDirective implements OnInit, OnDestroy {
  @Input() from: 'left' | 'right' | 'bottom' = 'bottom';

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const node = this.el.nativeElement;
    const offset = this.from === 'left' ? 'translateX(-28px)' : this.from === 'right' ? 'translateX(28px)' : 'translateY(28px)';

    this.renderer.setStyle(node, 'opacity', '0');
    this.renderer.setStyle(node, 'transform', offset);
    this.renderer.setStyle(node, 'transition', 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.setStyle(node, 'opacity', '1');
            this.renderer.setStyle(node, 'transform', 'none');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
