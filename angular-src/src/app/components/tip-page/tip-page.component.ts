import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { TipService } from '../../services/tip.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-tip-page',
  templateUrl: './tip-page.component.html',
  styleUrls: ['./tip-page.component.css']
})
export class TipPageComponent implements OnInit {

  private _tipForm: NgForm; // holds the form object
  public content: string; // hold the variable that is two-way binded to the textarea
  public loggedInUser; // will grab login info from the login service
  user: Object;

  constructor(private _tipService: TipService, private _loginService: LoginService, private _authService: AuthService) { }

  ngOnInit() {
    // get login info as soon as page is loaded

    this._authService.getProfile().subscribe(profile => {
      this.loggedInUser = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });

    // this was jr's back end call
    // this._loginService.getLoggedInUser()
    // .subscribe( user => {
    //     this.loggedInUser = user;
    // });
  } // end oninit

    // submits a tip into the array 'tips' of the document that matches up with the current logged in users id
  public submitTipIntoArray() {

    // immediately stops the function if someone submits without logging in.
    if (!this.loggedInUser) {
      return;
    }

    // create an object that will conform to the ITip interface we set earlier.
    const newTip = {
        date: new Date(),
        content: this.content
    };

    // console.log('Submitting!!', newTip);
    this._tipService.pushTip(newTip, this.loggedInUser.username)
    .subscribe( data => {
        console.log( 'We good?');
        this.content = ''; // reset textarea after submitting
    });
  } // end submitTip()

}
