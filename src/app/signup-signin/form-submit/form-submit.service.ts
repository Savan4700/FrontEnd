import { Injectable } from '@angular/core';
import { Deserialize, Serialize } from 'cerialize';
import { FormMaster } from '../../Model/formData';
import { UtilsService } from '../../shared/service/utils.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  formData = new FormMaster();
  form: FormGroup;
  registerUser = {};
  constructor(public utilsService: UtilsService, public router: Router) {}

  checkData() {
    console.log(this.registerUser);
    if (!this.form.valid || (this.formData.password !== this.formData.confpassword)) {
      // this.utilsService.CreateNotification('error', ' Please fill all valid details.', '');
      return;
    }
    // const formDatass = Serialize(this.formData, FormMaster);

    this.utilsService.postMethodAPI(
      true,
      this.utilsService.serverVariableService.saveUserAPI,
      this.registerUser,
      response => {
        console.log(response);
        if (!this.utilsService.isNullUndefinedOrBlank(response)) {
          console.log('success');
          this.formData = new FormMaster();
          this.form.reset();
          this.router.navigate(['/signup-login/signup/login']);
        } else {
          console.log('failed');
        }
      }
    );
  }
}
