import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../../shared/service/utils.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public loginService: LoginService,public formBuilder: FormBuilder, public utilsService:UtilsService) {}

  ngOnInit() {
    this.loginService.resetVariable();
    this.loginService.form = this.formBuilder.group({
      // 'username': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL_OR_USERNAME)])],
      'username': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHANUMERIC_DIGIT_SPECIAL_ESCAPE_CHARS)])],
      'password': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PASSWORD)])]
    });
  }
}

