import { Injectable } from '@angular/core';
import { Customer } from 'src/app/customer';
//import { Http, RequestOptions } from '@angular/http';
import{ Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  private baseUrl:string='http://localhost:8080/springbootcrm/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private customer:Customer;

  constructor(private _http:Http) { }


  setter(customer:Customer) {
    this.customer = customer;
  }

  getter(){
    return this.customer;
  }

  getCustomers() {
    return this._http.get(this.baseUrl+'/customers', this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getCustomer(id:Number) {
    return this._http.get(this.baseUrl+'/customer/'+id, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteCustomer(id:Number) {
    return this._http.delete(this.baseUrl+'/customer/'+id, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createCustomer(customer:Customer) {
    return this._http.post(this.baseUrl+'/customer', JSON.stringify(customer), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateCustomer(customer:Customer) {
    return this._http.put(this.baseUrl+'/customer', JSON.stringify(customer), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response) {
    return Observable.throw(error || "SERVER ERROR");
  }
}
