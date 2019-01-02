import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerListService } from './customer-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customers:Customer[];

  constructor(private _customerService:CustomerListService, private _router:Router) { }

  ngOnInit() {
  }

}
