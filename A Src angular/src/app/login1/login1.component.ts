import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Auth1Service } from '../auth1.service';
import { CusloginService } from '../cuslogin.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  constructor(private auth1Service: Auth1Service, private router: Router, private service: CusloginService) { }
  @Input()
  login1Form: any = {
    email: '',
    password: '',
  };
  ngOnInit(): void {

  }
  onLogin(login1Form: NgForm) {
    console.log(login1Form.value);
    const user = this.auth1Service['auth1User'](login1Form.value);
    console.log(user);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User Login Successfully');
      alert("Welcome back :)\nClick ok to proceed!");
       this.router.navigate(['/transaction'])

    }
    
  }

  addLogin() {
    console.log('From cus.comp.ts ' + this.login1Form);
    this.service.createLogin(this.login1Form).subscribe((data: {}) => this.router.navigate(['/transaction']));
  }

  
}
