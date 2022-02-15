import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../appServices/hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SignIn: any;
  Signout: any;

  constructor(private router: Router, private _heroService: HeroService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.SignIn = false;
    this.Signout = true;
    this.router.navigateByUrl('/home')
    this._heroService.SignIn.next(this.SignIn);
    this._heroService.Signout.next(this.Signout);
  }



}
