import { CommonModule, NgFor, NgIf, NgStyle, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FadeInOnScrollDirective } from '../fade-in-on-scroll.directive';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';





@Component({
  selector: 'app-main',
  imports: [
    NgFor,
    MatIconModule,
    NgIf,
    FadeInOnScrollDirective,
    MatDialogModule,
    CommonModule

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  dropdownOpen: boolean = false
  dropdownNxt: boolean = false

  projects: any = []
  constructor(
    private _shared: SharedService,

    private dialog: MatDialog
  ) {

  }

  skillSet: any[] = [
    { name: 'Html5', img: 'html' },
    { name: 'Css', img: 'css-3' },
    { name: 'Javascript', img: 'java-script-logo' },
    { name: 'TypeScript', img: 'html' },
    { name: 'Angular', img: 'angularjs' },
    { name: 'React', img: 'atom' },
    { name: 'Bootstrap', img: 'bootstrap' },
    { name: 'Tailwind CSS', img: 'icons8-tailwind-css-50' },
    { name: 'Node Js', img: 'developer' },
    { name: 'Angular Material', img: 'icons8-angularjs-50' },
    { name: 'Express Js', img: 'icons8-express-js-48' },
    { name: 'Mysql', img: 'mysql' },
    { name: 'Squelize', img: 'sequelize' },
    { name: 'Terraform', img: 'terraform' },
    { name: 'AWS', img: 'file' },
    { name: 'Apache Tomcat', img: 'icons8-apache-24' },
  ]



  backendSkills: string[] = [
    'express-js', 'mongo-db', 'mysql', 'nodejs', 'python'
  ]

  @ViewChild('journeySection') journeySection!: ElementRef;

  @ViewChild('contactInfo') contactInfo!: ElementRef

  currentIndex = 0;






  ngOnInit(): void {
    this._shared.cuurrentVal.subscribe((res: any) => {
      if (res == 'Exp') {
        this.journeySection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        this.contactInfo?.nativeElement.scrollIntoView({ behavior: 'smooth' })
      }
    })

    this.projects = this._shared.getProjects()
  }

  scrollToJourney(loc: string) {
    if (loc == 'Exp') {
      console.log('xejee');
      this.journeySection?.nativeElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      this.contactInfo.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

  }


  get visibleProjects() {
    return this.projects.slice(this.currentIndex, this.currentIndex + 1);
  }

  direction: 'next' | 'prev' = 'next';


  nextProject() {
    if (this.currentIndex < this.projects.length - 1) {
      this.direction = 'next'
      this.currentIndex += 1;
    }





  }


  previousProject() {
    if (this.currentIndex > 0) {
      this.direction = 'prev'
      this.currentIndex -= 1;
    }
  }









}
