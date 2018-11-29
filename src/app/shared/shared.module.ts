// import { SimpleNotificationsModule } from 'angular2-notifications';
// import { NgDatepickerModule } from 'ng2-datepicker';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilsService } from './service/utils.service';
import { ServerVariableService } from './service/server-variable.service';
import { ValidationService } from './service/validation.service';
// import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { OrderBy } from './pipe/OrderBy';
import { ShowNotiTimePipe } from './pipe/show-noti-time';
import { OrderByDatePipe } from './pipe/order-by-date.pipe';
// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
// import { TechhiveMultiSelectModule } from 'techhive-multiselect-dropdown/angular2-multiselect-dropdown';
import { AuthGuard } from '../Auth/Auth-guard.service';
import { KeysPipe } from './pipe/KeysPipe';
// import { ImageCropperModule } from 'ngx-image-cropper';
// import { StompService } from 'ng2-stomp-service';
// import { AddPatientComponent } from '../home/patients/add-patient/add-patient.component';
// import { CaseCreationService } from '../home/case-creation/case-creation.service';
// import { AppointmentsService } from '../home/appointments/appointments.service';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
//    MatGridListModule, MatMenuModule, MatCardModule } from '@angular/material';

/**
 * you need to make the FormsModule accesible for other modules using this module.
 * For that you need to add the FormsModule component to the module exports array:
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // NgDatepickerModule,
    // SimpleNotificationsModule.forRoot(),
    // NguiAutoCompleteModule,
    // ReactiveFormsModule,
    // DateInputsModule,
    // TechhiveMultiSelectModule,
    // DropDownsModule,
    // ImageCropperModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // MatToolbarModule,
    // MatCardModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatGridListModule,
    // MatMenuModule,
    // NgbCarouselModule,
    // NgDatepickerModule,
    // SimpleNotificationsModule,
    // NguiAutoCompleteModule,
    ReactiveFormsModule,
    OrderBy,
    ShowNotiTimePipe,
    OrderByDatePipe,
    // DateInputsModule,
    // TechhiveMultiSelectModule,
    // DropDownsModule,
    KeysPipe,
    // ImageCropperModule,
    // AddPatientComponent
  ],
  declarations: [OrderBy, ShowNotiTimePipe, OrderByDatePipe, KeysPipe,
    //  AddPatientComponent
    ]
})
export class SharedModule {
  /**
   * This static forRoot block (provides and configures services) is
   * used in case of when we want use some services in one or more components.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UtilsService, ValidationService, ServerVariableService, AuthGuard,
        // StompService ,
        //  CaseCreationService, AppointmentsService
        ]
    };
  }
}
