import { Injectable } from '@angular/core';
import { Deserialize, Serialize } from 'cerialize';
import { FormMaster } from '../../Model/formData';
import { UtilsService } from '../../shared/service/utils.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserMaster } from '../../Model/UserMaster';
import { MyNavService } from '../../my-nav/my-nav.service';
@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  formData = new FormMaster();
  form: FormGroup;
  registerUser = new UserMaster();

  // registerUser = {
  //   "name":"savan1",
  //   "username":"savan1",
  //   "email":"savan121@gmail.com",
  //   "role":["user","pm"],
  //   "password":"987654320"
  // };
  constructor(public utilsService: UtilsService, public router: Router,public mayNav:MyNavService) {
    console.log()
  }

  checkData() {
    this.registerUser.role = 'Admin';
    console.log(this.registerUser);
    if (!this.form.valid || (this.formData.password !== this.formData.confpassword)) {
      // this.utilsService.CreateNotification('error', ' Please fill all valid details.', '');
      console.log('fill up all feild');
      return;
    }
    const userDetail = Serialize(this.registerUser, UserMaster);

    this.utilsService.postMethodAPI(
      true,
      "auth/signup",
      userDetail,
      response => {
        console.log(response);
        // if (!this.utilsService.isNullUndefinedOrBlank(response)) {
        //   console.log('success');
        //   this.formData = new FormMaster();
        //   this.form.reset();
        //   this.router.navigate(['/signup-login/signup/login']);
        // } else {
        //   console.log('failed');
        // }
      }
    );
  }
}
