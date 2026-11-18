import { Directive, ElementRef, Input, OnDestroy, afterNextRender, inject } from '@angular/core';

/**
 * Counts the host's number up from 0 to `appCountUp` once it scrolls into view.
 * The template should contain the final text so SSR / no-JS still shows the real value.
 */
@Directive({ selector: '[appCountUp]' })
export class CountUpDirective implements OnDestroy {
  @Input({ required: true }) appCountUp!: number;
  @Input() suffix = '';
  @Input() duration = 1800;
  @Input() delay = 0;

  private observer?: IntersectionObserver;
  private frame = 0;
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    const node: HTMLElement = inject(ElementRef).nativeElement;
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      node.textContent = '0' + this.suffix;
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          this.observer?.disconnect();
          this.timer = setTimeout(() => this.run(node), this.delay);
        },
        { threshold: 0.4 },
      );
      this.observer.observe(node);
    });
  }

  private run(node: HTMLElement) {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      node.textContent = Math.round(eased * this.appCountUp) + this.suffix;
      if (t < 1) this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.frame) cancelAnimationFrame(this.frame);
    if (this.timer) clearTimeout(this.timer);
  }
}
