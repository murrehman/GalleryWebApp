import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from '../appModels/GalleryItems';
import { HeroService } from '../appServices/hero.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit, OnDestroy {

  constructor(private gallery: GalleryItems, private _activatedRoute: ActivatedRoute, private _heroService: HeroService) { }

  galleryImages: any[] = [];
  selectedItem: any;
  id: any;

  ngOnInit(): void {

    this._heroService.isValid.next(false);
    this._heroService.productsLink.next(false);

    this.galleryImages = this.gallery.galleryImages;

    this._activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']

      this.selectedItem = this.gallery.galleryImages[this.id - 1];
    })


  }

  ngOnDestroy() {
    this._heroService.isValid.next(true);
  }

}
