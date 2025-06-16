import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-navbar',
  imports: [
    MatSlideToggleModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent implements OnInit {

  constructor(private _service:SharedService){}

  ngOnInit(): void {
   
  }

  @Output() scrollTo: EventEmitter<void> = new EventEmitter<void>();


  navigateTo(): void {
    console.log('Cliced')
    this.scrollTo.emit(); 
  }

  navigateToexp(key:string){
    console.log('exp');
    this._service.scrollToValue(key)
  }

  

}
