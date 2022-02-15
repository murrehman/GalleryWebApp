import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  SignIn = new Subject<boolean>();
  Signout = new Subject<boolean>();
  isValid = new Subject<boolean>();
  // contactus = new BehaviorSubject<boolean>(false);
  contactus = new Subject<boolean>();
  productsLink = new Subject<boolean>();
}
