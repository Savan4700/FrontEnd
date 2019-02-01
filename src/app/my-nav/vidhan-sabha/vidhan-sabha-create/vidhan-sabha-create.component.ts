import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VidhanSabhaCreateService } from './vidhan-sabha-create.service';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-vidhan-sabha-create',
  templateUrl: './vidhan-sabha-create.component.html',
  styleUrls: ['./vidhan-sabha-create.component.css']
})
export class VidhanSabhaCreateComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute,
    public vidhanSabhaCreateService: VidhanSabhaCreateService, public utilsService: UtilsService) { }

  ngOnInit() {
    this.vidhanSabhaCreateService.resetVariable();
    this.vidhanSabhaCreateService.form = this.formBuilder.group({
      'code': [null, Validators.compose([Validators.required,
      Validators.pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
      'name': [null, Validators.compose([Validators.required,
      Validators.pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
      'loksabha': [null, Validators.compose([Validators.required])],
    });

    this.route.params.subscribe(params => {
      this.vidhanSabhaCreateService.opertaion = params['operation'];
      if (this.vidhanSabhaCreateService.opertaion !== 'create') {
        this.vidhanSabhaCreateService.textForAddorUpdate = 'Edit';
        this.vidhanSabhaCreateService.getbyId();
      } else {
        this.vidhanSabhaCreateService.textForAddorUpdate = 'New';
      }
    });
  }
}
