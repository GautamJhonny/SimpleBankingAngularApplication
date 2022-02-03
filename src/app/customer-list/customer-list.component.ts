import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CusserviceService } from '../cusservice.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  public customers = [] as any;
  constructor(private cservice: CusserviceService, private router: Router) {}
  public selectedId: number = 0;
  ngOnInit(): void {
    this.cservice
      .getCustomersFromService()
      .subscribe((data) => (this.customers = data));
  }

  onDelete(cus: Customer) {
    this.selectedId = cus.cid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.cservice
        .deleteCustomer(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/viewcus']));
    }
  }
}

