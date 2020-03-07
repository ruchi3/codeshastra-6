import { ApiCallerService } from './../services/api-caller.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login-model',
//   templateUrl: './login-model.component.html',
//   styleUrls: ['./login-model.component.css']
// })
// export class LoginModelComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [ ApiCallerService ],
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.css']
})
export class LoginModelComponent implements OnInit {

  errorMsg: string;
  loginEmail: string;
  loginPwd: string;

  constructor(private router: Router, private _api: ApiCallerService) { }

  ngOnInit() {
  }

  attemptLogin() {
    if(this.loginEmail != null && this.loginEmail.trim() != "" && this.loginPwd != null && this.loginPwd.trim() != "") {
      this._api.doPostRequest("/login",{"username": this.loginEmail, "password": this.loginPwd}).subscribe(res => {
        console.log(res);
        window.localStorage.setItem("CURRENT_USER", this.loginEmail);
        this.router.navigate(['/welcome']);
      });
    } else {
      this.errorMsg = "Username and Password cannot be blank strings.";
    }
  }

}
