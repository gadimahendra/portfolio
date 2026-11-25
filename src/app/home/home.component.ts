import { Component, ElementRef, NgZone, ViewChild, afterNextRender, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainComponent } from '../main/main.component';
import { PROFILE } from '../portfolio.data';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly profile = PROFILE;
  @ViewChild('spot') spot?: ElementRef<HTMLDivElement>;

  constructor() {
    const zone = inject(NgZone);
    // Soft light that follows the cursor. Runs outside Angular so it never triggers change detection.
    afterNextRender(() => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      zone.runOutsideAngular(() => {
        window.addEventListener(
          'pointermove',
          (e) => {
            const el = this.spot?.nativeElement;
            if (!el) return;
            el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
            el.style.opacity = '1';
          },
          { passive: true },
        );
      });
    });
  }
}
