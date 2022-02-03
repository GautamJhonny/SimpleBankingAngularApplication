import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CusserviceService } from '../cusservice.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
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

  constructor(private service: CusserviceService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    alert('Customer datas are validated successfully!');
  }

  addCustomer() {
    console.log('From cus.comp.ts ' + this.customerDetails);
    this.service.createCustomer(this.customerDetails).subscribe((data: {}) => this.router.navigate(['/viewcus']));
  }
}


 