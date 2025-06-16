import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  behaviourSubject:any = new BehaviorSubject<any>('')

  cuurrentVal = this.behaviourSubject.asObservable()


  constructor() { }

  scrollToValue(val:any){
    console.log('consol sub',val);
    this.behaviourSubject.next(val)
  }

}
