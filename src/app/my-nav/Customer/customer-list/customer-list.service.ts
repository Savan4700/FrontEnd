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

  private customer:Customer;

  constructor(private _http:Http) { }


}
