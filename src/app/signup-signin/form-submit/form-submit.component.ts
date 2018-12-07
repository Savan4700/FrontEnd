import { Component, OnInit } from '@angular/core';
import { FormSubmitService } from './form-submit.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { UtilsService } from '../../shared/service/utils.service';
declare var $: any;
@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {
  constructor(
    public formSubmitService: FormSubmitService,
    public formBuilder: FormBuilder,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {
    $('.clockpicker').clockpicker({ format: 'mm:ss' });

    this.formSubmitService.form = this.formBuilder.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
      'middlename': [null, Validators.compose([Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
      'lastname': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
      'eMail': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL)])],
      'passWord': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PASSWORD)])],
      'mobileno': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PHONE_NO)])],
      'username': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_DIGIT)])],
      'confirmpassword': [null, Validators.compose([Validators.required])],
      'telephoneno': [null, Validators.compose([Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PHONE_NO)])],
      'address': [null, Validators.compose([Validators.pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
    });
  }
  
}
