import { Directive, ElementRef, HostListener, Input, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true
})
export class FadeInOnScrollDirective {

  @Input() from: 'left' | 'right' | 'bottom' = 'bottom';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const initialTransform =
      this.from === 'left'
        ? 'translateX(-50px)'
        : this.from === 'right'
          ? 'translateX(50px)'
          : 'translateY(50px)';

    const finalTransform =
      this.from === 'left' || this.from === 'right'
        ? 'translateX(0)'
        : 'translateY(0)';

    // Initial state
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', initialTransform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.8s ease-out');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate in
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', finalTransform);
        } else {
          // Reset when leaving viewport
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
          this.renderer.setStyle(this.el.nativeElement, 'transform', initialTransform);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }


}
