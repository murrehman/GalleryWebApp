import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../appServices/hero.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit, OnDestroy {

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this._heroService.contactus.next(true);
    this._heroService.SignIn.next(false);
    this._heroService.Signout.next(false);
  }

  ngOnDestroy() {
    this._heroService.contactus.next(false);
    this._heroService.SignIn.next(true);
  }

}
