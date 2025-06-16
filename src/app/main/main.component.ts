import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-main',
  imports: [
    NgFor,
    MatIconModule,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  dropdownOpen:boolean = false
  dropdownNxt:boolean = false
  

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
    { name: 'Squelize', img:'sequelize' },
    { name: 'Terraform', img: 'terraform' },
    { name: 'AWS', img: 'file' },
    { name: 'Apache Tomcat', img: 'icons8-apache-24' },
    // { name: 'Jenkins' }
  ]

  backendSkills:string[] =[
    'express-js','mongo-db','mysql','nodejs','python'
  ]

   @ViewChild('journeySection') journeySection!: ElementRef;

  @ViewChild('contactInfo') contactInfo!:ElementRef

  

  constructor(private _shared:SharedService) { }

  ngOnInit(): void {
    this._shared.cuurrentVal.subscribe((res:any)=>{
    console.log('5678',res);
    if (res== 'Exp'){
      this.journeySection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }else{
      this.contactInfo?.nativeElement.scrollIntoView({behavior:'smooth'})
    }
     
 
    })

  }

  scrollToJourney() {
    console.log('dfghjk');
    this.journeySection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }



}
