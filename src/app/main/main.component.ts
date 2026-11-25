import { Component, HostListener, OnDestroy, computed, signal } from '@angular/core';
import { FadeInOnScrollDirective } from '../fade-in-on-scroll.directive';
import { InViewDirective } from '../in-view.directive';
import { CountUpDirective } from '../count-up.directive';
import {
  CERTIFICATES,
  EXPERIENCE,
  LANGUAGES,
  MARQUEE_WORDS,
  PROFILE,
  PROJECTS,
  Project,
  SKILL_TIERS,
  STATS,
  STRENGTHS,
} from '../portfolio.data';

/** Length of the gauge's half-circle arc (r = 80). */
const ARC = Math.PI * 80;

@Component({
  selector: 'app-main',
  imports: [FadeInOnScrollDirective, InViewDirective, CountUpDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnDestroy {
  readonly profile = PROFILE;
  readonly stats = STATS;
  readonly marquee = MARQUEE_WORDS;
  readonly tiers = SKILL_TIERS;
  readonly strengths = STRENGTHS;
  readonly experience = EXPERIENCE;
  readonly certificates = CERTIFICATES;
  readonly languages = LANGUAGES;
  readonly year = new Date().getFullYear();

  /* ---------- Experience accordion ---------- */
  readonly openExp = signal<number | null>(0);
  toggleExp(i: number) {
    this.openExp.update((cur) => (cur === i ? null : i));
  }

  /* ---------- Projects ---------- */
  readonly filters = ['All', 'Tech Navitas', 'Flip Health', 'Personal project'];
  readonly activeFilter = signal('All');
  readonly projects = computed(() => {
    const f = this.activeFilter();
    return f === 'All' ? PROJECTS : PROJECTS.filter((p) => p.company === f);
  });
  readonly selected = signal<Project | null>(null);

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

  /* ---------- Skill gauge ---------- */
  readonly arc = ARC;
  readonly skill = signal(SKILL_TIERS[0].items[0]);
  readonly skillTier = computed(
    () => SKILL_TIERS.find((t) => t.items.includes(this.skill()))?.tier ?? '',
  );
  /** What the gauge currently shows (0–100); animates toward the selected level. */
  readonly gauge = signal(0);
  private gaugeVisible = false;
  private frame = 0;

  onGaugeVisible() {
    this.gaugeVisible = true;
    this.animateGauge(this.skill().level);
  }

  pickSkill(s: { name: string; level: number }) {
    this.skill.set(s);
    if (this.gaugeVisible) this.animateGauge(s.level);
  }

  private animateGauge(target: number) {
    cancelAnimationFrame(this.frame);
    const from = this.gauge();
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      this.gauge.set(Math.round(from + (target - from) * eased));
      if (t < 1) this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }

  ngOnDestroy() {
    if (this.frame) cancelAnimationFrame(this.frame);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
