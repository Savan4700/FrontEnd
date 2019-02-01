import { Component, OnInit } from '@angular/core';
import { LokSabhaCreateService } from './lok-sabha-create.service';
import { UtilsService } from '../../../shared/service/utils.service';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lok-sabha-create',
  templateUrl: './lok-sabha-create.component.html',
  styleUrls: ['./lok-sabha-create.component.css']
})
export class LokSabhaCreateComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute,
    public lokSabhaCreateService: LokSabhaCreateService, public utilsService: UtilsService) { }

  ngOnInit() {
    this.lokSabhaCreateService.resetVariable();
    this.lokSabhaCreateService.form = this.formBuilder.group({
      'code': [null, Validators.compose([Validators.required,
        Validators.pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
      'name': [null, Validators.compose([Validators.required,
        Validators.pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
      'description': [null, Validators.compose([Validators.required,
        Validators.pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
   });

   this.route.params.subscribe(params => {
    this.lokSabhaCreateService.opertaion = params['operation'];
    if (this.lokSabhaCreateService.opertaion !== 'create') {
      this.lokSabhaCreateService.textForAddorUpdate = 'Edit';
      this.lokSabhaCreateService.getbyId();
    } else {
      this.lokSabhaCreateService.textForAddorUpdate = 'New';
    }
  });
  }

}
