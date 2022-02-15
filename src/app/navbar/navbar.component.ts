import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../appServices/hero.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private _heroService: HeroService) {
    this._heroService.SignIn.subscribe(signInB => {
      this.SignIn = signInB;
    })
    this._heroService.Signout.subscribe(signOutB => {
      this.Signout = signOutB;
    })
    this._heroService.isValid.subscribe(navbar => {
      this.isValid = navbar;
    })
    this._heroService.contactus.subscribe(contactdetails => {
      this.contactus = contactdetails;
    })
    this._heroService.productsLink.subscribe(backtoproducts => {
      this.productsLink = backtoproducts;
    })
  }

  ngOnInit() {
    this._heroService.contactus.next(false);
  }

  SignIn = true;
  Signout = false;
  contactus = false;
  isValid = true;
  productsLink!: boolean;

  onClick() {

    this.router.navigateByUrl('/login')

  }

  // onClickContact() {
  //   this.contactus = true;
  //   this.SignIn = false;
  //   this.Signout = false;
  // }

  onClickSignOut() {
    this.SignIn = true;
    this.Signout = false;
    // this._heroService.SignIn.next(this.SignIn);
    // this._heroService.Signout.next(this.Signout);
  }

  // restore() {
  //   this.isValid = true;
  // }

}
