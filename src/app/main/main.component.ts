import { Component, HostListener, computed, signal } from '@angular/core';
import { FadeInOnScrollDirective } from '../fade-in-on-scroll.directive';
import { InViewDirective } from '../in-view.directive';
import { CountUpDirective } from '../count-up.directive';
import {
  SKILL_LEVELS,
  CERTIFICATES,
  EXPERIENCE,
  LANGUAGES,
  MARQUEE,
  PROFILE,
  PROJECTS,
  Project,
  SKILL_GROUPS,
  STATS,
} from '../portfolio.data';

@Component({
  selector: 'app-main',
  imports: [FadeInOnScrollDirective, InViewDirective, CountUpDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  readonly profile = PROFILE;
  readonly stats = STATS;
  readonly skillGroups = SKILL_GROUPS;
  readonly skillLevels = SKILL_LEVELS;
  readonly marquee = MARQUEE;
  readonly experience = EXPERIENCE;
  readonly certificates = CERTIFICATES;
  readonly languages = LANGUAGES;
  readonly year = new Date().getFullYear();

  /** Index of the expanded experience entry (first one open by default). */
  readonly openExp = signal<number | null>(0);

  readonly filters = ['All', 'Tech Navitas', 'Flip Health', 'Personal project'];
  readonly activeFilter = signal('All');
  readonly projects = computed(() => {
    const f = this.activeFilter();
    return f === 'All' ? PROJECTS : PROJECTS.filter((p) => p.company === f);
  });

  readonly selected = signal<Project | null>(null);

  toggleExp(i: number) {
    this.openExp.update((cur) => (cur === i ? null : i));
  }

  openProject(p: Project) {
    this.selected.set(p);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selected.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.selected()) this.closeProject();
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
