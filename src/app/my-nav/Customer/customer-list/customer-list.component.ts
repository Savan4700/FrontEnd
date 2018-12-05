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
    this._customerService.getCustomers().subscribe((customers) => {
      console.log(customers);
      this.customers = customers;
    },(error)=> {
      console.log(error);
    })
  }

  deleteCustomer(customer) {
    this._customerService.deleteCustomer(customer.id).subscribe((data)=>{
      this.customers.splice(this.customers.indexOf(customer), 1);
    },(error)=>{
      console.log(error);
    });
  }

  updateCustomer(customer) {
    this._customerService.setter(customer);
    this._router.navigate(['/op']);
  }

  newCustomer() {
    let customer = new Customer();
    this._customerService.setter(customer);
    this._router.navigate(['/op']);
  }

}
