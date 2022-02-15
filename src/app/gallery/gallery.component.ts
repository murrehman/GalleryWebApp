import { Component, OnInit } from '@angular/core';
import { GalleryItems } from '../appModels/GalleryItems';
import { HeroService } from '../appServices/hero.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  constructor(private _heroService: HeroService, private gallery: GalleryItems) { }
  galleryImages: any[] = [];

  ngOnInit(): void {
    this.galleryImages = this.gallery.galleryImages;
  }

  // backTo() {
  //   this.SignIn = false;
  //   this.isValid = false;
  //   this._heroService.isValid.next(this.isValid);
  //   this._heroService.SignIn.next(this.SignIn)
  // }

}
