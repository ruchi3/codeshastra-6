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
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.css']
})
export class LoginModelComponent implements OnInit {

  errorMsg: string;
  loginEmail: string;
  loginPwd: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // if(!this.auth.getCurrentUser() != null) {
    //   this.router.navigate(['/searchPage']);
    // }
  }

  attemptLogin() {
    // if(this.loginEmail != null && this.loginEmail.trim() != "" && this.loginPwd != null && this.loginPwd.trim() != "") {
    //   this.auth.login(this.loginEmail, this.loginPwd).subscribe(res => {
    //     console.log(res);
    //     this.auth.setCurrentUser(this.loginEmail);
    //     this.router.navigate(['/welcome']);
    //   });
    // } else {
    //   this.errorMsg = "Username and Password cannot be blank strings.";
    // }
  }

}

