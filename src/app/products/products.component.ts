import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // backTo() {
  //   this.SignIn = false;
  //   this.isValid = false;
  //   this._heroService.isValid.next(this.isValid);
  //   this._heroService.SignIn.next(this.SignIn)
  // }

}
