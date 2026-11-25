import { Component, HostListener, signal } from '@angular/core';
import { PROFILE } from '../portfolio.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly profile = PROFILE;
  readonly links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly active = signal('');
  /** Page scroll progress, 0 → 1. */
  readonly progress = signal(0);
  /** Circumference of the back-to-top ring (r = 20). */
  readonly ring = 2 * Math.PI * 20;

  @HostListener('window:scroll')
  onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    this.scrolled.set(window.scrollY > 12);
    let current = '';
    for (const l of this.links) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = l.id;
    }
    this.active.set(current);
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  go(id: string) {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
