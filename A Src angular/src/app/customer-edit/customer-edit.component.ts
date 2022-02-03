import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CusserviceService } from '../cusservice.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  
  public customerData: any = {};
  submitted = false;

  public cid: any = this.aroute.snapshot.params['cid'];
  public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('customer datas are validated successfully!');
  }
  constructor(
    private service: CusserviceService,
    public router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('from ng oninit' + this.cid);
    this.service
      .getCustomer(this.cid)
      .subscribe((data) => (this.customerData = data));
  }

  updateCustomer() {
    console.log(' Customer Data ----->' + this.customerData);
    this.service
      .updateCustomer(this.customerData)
      .subscribe((data: {}) => this.router.navigate(['/viewcus']));
  }
}

