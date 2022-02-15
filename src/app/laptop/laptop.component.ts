import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../appServices/hero.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit, OnDestroy {

  constructor(private _heroService: HeroService) { }

  ngOnInit(): void {
    this._heroService.isValid.next(false);
    this._heroService.productsLink.next(true);
  }

  ngOnDestroy() {
    this._heroService.isValid.next(true);
  }

}
