import { Injectable } from '@angular/core';
@Injectable()
export class ServerVariableService {


  API = 'API';
  statusOfActionForNEW = 'new';
  statusOfActionForAppoinment = 'appoinment';

  USER_FOR_LOCAL_STORAGE = 'users';

  IMAGE_PREFIX_URL = 'http://192.168.2.230:8088/clinic_management/';

  /*Other API */
  loginAPI = 'login';
  FAIL_IMAGE_UPLOAD_RESULT = 'FAIL IMAGE UPLOAD';

  arrayOfapiNameToExcludeToken = ['auth/signin', 'auth/signup'];
  getAllUserWithUserRoleAPI = 'getAllUserWithUserRole';
  getAllCountryMastersAPI = 'getAllCountryMasters';
  getAllStateMastersByCountryIdAPI = 'getAllStateMastersByCountryId';
  getAllCityMastersByStateIdAPI = 'getAllCityMastersByStateId';
  lazzyLoadingForGetAllPatientsAPI = 'lazzyLoadingForGetAllPatients';
  getDetailsForAngularDropDownForTimeSlotAPI = 'getDetailsForAngularDropDownForTimeSlot';

  STRING_WHEN_NO_RECORDS_FOUND = 'Records not found.';


  constructor() { }
}

