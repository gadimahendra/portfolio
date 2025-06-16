import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    MainComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private el:ElementRef){}
  onClickHome(event:any){
    console.log('evet',event);
     const section = document.getElementById('home-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
    
  }
}
