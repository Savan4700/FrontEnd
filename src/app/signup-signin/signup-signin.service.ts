import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupSigninService {
  FormVariable = {};
  constructor() {}

  modelChanged(event) {
    console.log(event);
  }
}
