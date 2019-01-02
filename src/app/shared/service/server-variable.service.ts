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
  registerHospitalMasterAPI = 'registerHospitalMaster';
  addHospitalMasterAPI = 'addHospitalMaster';
  uploadimageAPI = 'uploadimage';
  uploadimageFromBase64API = 'uploadimageFromBase64';
  uploadUserProfileAPI = 'uploadUserProfile';
  registerDoctorAPI = 'registerDoctor';
  checkforgotPasswordAPI = 'checkforgotPassword';
  forgotPasswordAPI = 'forgotPassword';
  addChangePasswordAPI = 'addChangePassword';
  getDetailsForAngularDropDownAPI = 'getDetailsForAngularDropDown';
  registerUserAPI = 'registerUser';
  registerDoctorByParentAPI = 'registerDoctorByParent';
  addPatientAPI = 'addPatient';
  updatePatientAPI = 'updatePatient';
  getAllDropDownForstaffAPI = 'getDataForNewStaff';
  getAllDropDownForDoctorAPI = 'getDataForNewDoctor';
  getAllDropDownForPatientAPI = 'getDataForNewPatient';
  getDropdownDetailForCaseMasterAPI = 'getDropdownDetailForCaseMaster';
  getDetailsForAngularDropDownForAddClinicAPI = 'getDetailsForAngularDropDownForAddClinic';
  // API for getCategoryMaster Name;
  getCategoryMasterNameAPI = 'getCategoryMasterName';

  // static
  getAllHospitalMasterNameAndIdByUserIdAPI = 'getAllHospitalMasterNameAndIdByUserId';

  /*Get all API */
  customer = "customer"
  arrayOfapiNameToExcludeToken = ['auth/signin','auth/signup'];
  getAllUserWithUserRoleAPI = 'getAllUserWithUserRole';
  getAllCountryMastersAPI = 'getAllCountryMasters';
  getAllStateMastersByCountryIdAPI = 'getAllStateMastersByCountryId';
  getAllCityMastersByStateIdAPI = 'getAllCityMastersByStateId';
  lazzyLoadingForGetAllPatientsAPI = 'lazzyLoadingForGetAllPatients';
  getDetailsForAngularDropDownForTimeSlotAPI = 'getDetailsForAngularDropDownForTimeSlot';


  /* Mixed API */
  getMaxIdAPI = 'getMaxId';
  getDoctorsOfGivenUserIdWithLazzyLoadingAPI = 'getDoctorsOfGivenUserIdWithLazzyLoading';
  getUsersByTypeAndIdWithLazzyLoadingAPI = 'getUsersByTypeAndIdWithLazzyLoading';
  getStaffsOfGivenUserIdWithLazzyLoadingAPI = 'getStaffsOfGivenUserIdWithLazzyLoading';
  addStaffAPI = 'addStaff';
  updateStaffAPI = 'updateStaff';
  getHospitalMastersByUserIdWithLazzyLoadingAPI = 'getHospitalMastersByUserIdWithLazzyLoading';

  /*Get By Id API */
  getDropDownMenuDetailAPI = 'getDropDownMenuDetail';
  getAllMenuForUserRoleRightsAPI = 'getAllMenuForUserRoleRights';
  getAllStateMastersOfIndiaAPI = 'getAllStateMastersOfIndia';
  /* save API */
  saveUserAPI = 'saveUser';
  loginCheckAPI = 'loginCheck';
  deleteContentByIdAPI = 'deleteContentById';

  /* Search Api  */
  serachPatientByNameAndMobileNoAPI = 'serachPatientByNameAndMobileNo';

  /* update  API */
  updateForSpecialistMasterAPI = 'updateForSpecialistMaster';

  /* lazzyLoading API */
  lazzyLoadingForSpecialistMasterAPI = 'lazzyLoadingForSpecialistMaster';


  /* Delete Record API  */
  removeByIdForSpecialistMasterAPI = 'removeByIdForSpecialistMaster';

  /* List table name  */
  TABLE_NAME_FOR_USER_MASTER = 'tblUserMaster';
  TABLE_NAME_FOR_CITY = 'tblCityMaster';
  TABLE_NAME_FOR_STATE = 'tblStateMaster';
  TABLE_NAME_FOR_USER_ROLE = 'tblUserRole';
  TABLE_NAME_FOR_MENU_DETAILS = 'tblMenuDetails';
  TABLE_NAME_FOR_USER_TYPE = 'tblUserType';
  TABLE_NAME_FOR_HOSPITAL_MASTER = 'tblHospitalMaster';
  TABLE_NAME_FOR_CATEGORY_MASTER = 'tblCategoryMaster';
  TABLE_NAME_FOR_SPECIALIST_MASTER = 'tblSpecialistMaster';
  TABLE_NAME_FOR_DOCTOR_SERVICE_MASTER = 'tblDoctorServiceMaster';
  TABLE_NAME_FOR_HOSPITAL_SERVICE_MASTER = 'tblHospitalServiceMaster';
  TABLE_NAME_FOR_CASE = 'tblStateMaster';
  TABLE_NAME_FOR_FEES = 'tblFees';


  /*list Of Socket API */

  SEND_SOCKET_LOGIN = 'socketLogin';
  RESPONSE_SOCKET_LOGIN = 'socketLoginResponse/';
  RESPONSE_SOCKET_PROFILE_IMAGE_UPLOAD = 'socketUploadProfileResponse/';
  SEND_SOCKET_LOGOUT = 'socketLogout';
  RESPONSE_SOCKET_LOGOUT = 'socketLogoutResponse/';


  /** FOR ADD NEW VARIABLE  */

  PATIENT_MODEL_ID = 'Patient';
  ADD_NEW_PATIENT: boolean ;
  VARIABLE_FOR_PATIENT: String;

  dropdownSettingForPageOfPagination = {
    singleSelection: true,
    text: 'Select Page',
    selectAllText: 'Select All Page',
    unSelectAllText: 'UnSelect All Page',
    enableSearchFilter: true,
    classes: 'myclass custom-class',
    maxHeight: '100',
    lazyloading: true,
    allowClear: false
  };
  dropdownSettingForRecordOfPagination = {
    singleSelection: true,
    text: 'Select Record',
    selectAllText: 'Select All Record',
    unSelectAllText: 'UnSelect All Record',
    enableSearchFilter: true,
    classes: 'myclass custom-class',
    maxHeight: '100',
    lazyloading: true,
    allowClear: false
  };
  /**
  * Setting OF Techhive multiselect
  * @param singleSelection // this parmas is define dropdown Allow Single Or Multiple.
  * @param NameOfPlaceHolder // this params is define placeholder of dropdown.
  * @param isDisabled // pass TRUE or FALSE for Disabled Dropdowm.
  * @param isAllowClear // pass FALSE if You Don't Want To  CLEAR SELCTION Of Dropdown.
  */
  setSettingForDropDown(singleSelection, NameOfPlaceHolder, isDisabled?: boolean, isAllowClear?: boolean) {
    return {
      singleSelection: singleSelection,
      text: 'Select ' + NameOfPlaceHolder,
      selectAllText: 'Select All ' + NameOfPlaceHolder,
      unSelectAllText: 'UnSelect All ' + NameOfPlaceHolder,
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      maxHeight: '100px',
      disabled: isDisabled,
      allowClear: isAllowClear
    };
  }

  /* parent-child drop down setting */
  setSettingForDropDownParentChild(singleSelection, NameOfPlaceHolder) {
    return {
      singleSelection: singleSelection,
      text: 'Select ' + NameOfPlaceHolder,
      selectAllText: 'Select All ' + NameOfPlaceHolder,
      unSelectAllText: 'UnSelect All ' + NameOfPlaceHolder,
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      maxHeight: '100px',
      groupBy: 'type'
    };
  }
  /* End  */
  constructor() { }
}

