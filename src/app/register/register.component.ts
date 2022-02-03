import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CusregisterService } from '../cusregister.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 @Input()
    customerDetails: any = {
      cname: '',
      email: '',
      password: '',
      phoneno: '',
      aadharno: '',
      panno: '',
      gender: '',
    };
    submitted = false;
  
    constructor(private service: CusregisterService, public router: Router) {}
  
    ngOnInit(): void {}
  
    onSubmit() {
      this.submitted = true;
      alert('Registration datas are validated successfully!');
    }
  
    addRegistration() {
      console.log('From cus.comp.ts ' + this.customerDetails);
      this.service.createRegistration(this.customerDetails).subscribe((data: {}) => this.router.navigate(['/login']));
    }
  }
  
  
   