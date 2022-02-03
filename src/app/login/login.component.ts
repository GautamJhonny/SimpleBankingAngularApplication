import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { AuthService } from '../auth.service';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private service: AdminloginService) { }
  @Input()
  loginForm: any = {
    email: '',
    password: '',
  };
  ngOnInit(): void {

  }
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    console.log(user);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login Successfully');
      alert("Welcome back :)\nClick ok to proceed!");
       this.router.navigate(['/dashboard']);

    }
    else {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login not Successfully');
        alert("User not found :(\nTry again!");
      loginForm.reset();
    }
  }

  addLogin() {
    console.log('From cus.comp.ts ' + this.loginForm);
    this.service.createLogin(this.loginForm).subscribe((data: {}) => this.router.navigate(['/dashboard']));
  }

  
}
