import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { CusserviceService } from '../cusservice.service';

@Component({
  selector: 'app-cusnamelist',
  templateUrl: './cusnamelist.component.html',
  styleUrls: ['./cusnamelist.component.css'],
})
export class CusnamelistComponent implements OnInit {
  public customers = [] as any;
  constructor(private cservice: CusserviceService, private router: Router) {}

  ngOnInit(): void {
    this.cservice
      .getCustomersFromService()
      .subscribe((data) => (this.customers = data));
  }
}
