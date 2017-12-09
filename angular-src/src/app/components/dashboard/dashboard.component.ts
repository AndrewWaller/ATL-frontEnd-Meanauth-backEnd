import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  public canViewTips = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  public viewTips(currentUserName) {
    const inputPass = prompt('Input your password:');
    const tempUser = {
      username: currentUserName,
      password: inputPass
    };

    this.authService.authenticateUser(tempUser).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        /*this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});*/
        alert('Password Correct');
        this.canViewTips = true;
      } else {
        /*this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});*/
        alert('Password Incorrect');
      }
    });

  } // end viewtips

}
