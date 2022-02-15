import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../appServices/hero.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit, OnDestroy {

  constructor(private _heroService: HeroService) { }

  ngOnInit(): void {
    this._heroService.isValid.next(false);
    this._heroService.productsLink.next(true);
  }

  ngOnDestroy() {
    this._heroService.isValid.next(true);
  }

}
