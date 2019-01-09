import { Injectable } from '@angular/core';
import { Deserialize, Serialize } from 'cerialize';
import { UtilsService } from '../../shared/service/utils.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserMaster } from '../../Model/UserMaster';
import { MyNavService } from '../../my-nav/my-nav.service';
import { User } from '../../Model/User';
// import { User } from '../../Model/Customer';
@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  form: FormGroup;
  registerUser = new User();
  submited: boolean;
  errorFromJava: boolean;

  constructor(public utilsService: UtilsService, public router: Router, public mayNav: MyNavService) {
    // console.log()
  }
  resetVariable() {
    this.registerUser = new User();
    this.submited = false;
    this.errorFromJava = false;
  }
  checkData() {
    this.registerUser.role = ['ADMIN', 'USER'];
    console.log(this.registerUser);
    this.errorFromJava = false;
    console.log(this.form.valid);
    console.log(this.registerUser.password !== this.registerUser.confPassword);
    if (!this.form.valid || (this.registerUser.password !== this.registerUser.confPassword)) {
      // this.utilsService.CreateNotification('error', ' Please fill all valid details.', '');
      console.log('fill up all feild');
      return;
    }
    const userDetail = Serialize(this.registerUser, User);
    console.log(userDetail);
    this.submited = true;
    this.utilsService.postMethodAPI(
      true,
      'auth/signup',
      userDetail,
      response => {
        this.submited = false;
        console.log(response);
        if (!this.utilsService.isNullUndefinedOrBlank(response) && response !== 'serverdown') {
          //   console.log('success');
          // this.formData = new FormMaster();
          this.form.reset();
          this.resetVariable();
          this.router.navigate(['/signup-login/signup/login']);
          // } else {
          //   console.log('failed');
        } else {
          this.errorFromJava = true;
        }
      }
    );
  }
}
