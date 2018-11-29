// import { SocketResponse } from './../../model/SocketResponse';
// import { SocketInput } from './../../model/SocketInput';
// import { ResponseErrorDTO } from './../../model/ResponseErrorDTO';
import { Deserialize, Serialize } from 'cerialize';
import { Router } from '@angular/router';
import { Injectable, HostListener } from '@angular/core';
import { ServerVariableService } from './server-variable.service';
import { ValidationService } from './validation.service';
// import { DatepickerOptions } from 'ng2-datepicker';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
// import { NotificationsService } from 'angular2-notifications';
// import { Pagination } from '../../model/Pagination';
// import { StompService } from 'ng2-stomp-service';
import { ResponseWrapperDTO } from '../../Model/ResponseWrapperDTO';
import { ResponseErrorDTO } from '../../Model/ResponseErrorDTO';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormMaster } from '../../Model/formData';

declare var $: any;
@Injectable()
export class UtilsService {
  allowURLwithoutLogin: Array<string> = ['/signup-login/login',
  '/signup-login/forgot-password',
  '/signup-login/doctor-registration',
  '/signup-login/patient-registration',
  '/signup-login/registration'];
  priviousUrl: string;
  dateFormate = 'dd-MM-yyyy';
  caretPos: number;
  // datePickerOptions: DatepickerOptions = {
  //   minYear: 1970,
  //   maxYear: 2030,
  //   displayFormat: 'DD/MM/YYYY',
  //   barTitleFormat: 'MMM , YYYY',
  //   firstCalendarDay: 0 // 0 - Sunday, 1 - Monday
  // };
  todayDate: Date = new Date();
  yesterdayDate: Date = new Date(new Date().getTime() - 60 * 60 * 24 * 1000);
  tommorrowDate: Date = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
  ml = 2;

  SUCCESS_REPONSE = 'SUCCESS';
  UNAPPLICABLE = 'UNAPPLICABLE';
  FAIL_REPONSE = 'FAIL';
  USER_PROFILE_PIC_URL = '';
  // USER_PROFILE_PIC_URL = 'http://auroradiam.com:8088/clinic_management/' + this.getUserId() + '.jpg';
  /***
   * links for local PC
   */
  // URL = 'http://192.168.2.57:1337/';
  URL = 'http://localhost:8080/springbootcrm/';
  // SOCKET_URL = 'http://192.168.2.52:8080/clinicSocketConnections';

  /**
   * link for test1 server
   */
  // URL = 'http://auroradiam.com:8089/clinic_management_java/';
  // SOCKET_URL = 'http://auroradiam.com:8089/clinic_management_java/clinicSocketConnections';



  // URL = 'http://auroradiam.com:8088/clinic_management_java/'; // Server
  // FILE_URL = 'http://auroradiam.com:8088/clinic_management/'; // Server


  ALREADY_AVAILABLE_RESULT = 'Already Available';
  INVALID_START_DATE = 'invalid start date';
  DELETE_RECORD = 'Successfully record deleted.';
  CONFIRM_MSG_FOR_DELETE = 'Are you sure you want to delete this record?';
  LEAVE_THIS_PAGE = 'Are you sure you want to leave this page?';
  loaderStart: number ;
  checkGSTnumber = new RegExp('[0-9]{2}[A-Za-z]{5}[0-9]{4}[a-zA-Z][0-9]{1}[a-zA-Z]{1}[a-zA-Z0-9]{1}');
  checkForMongoId = new RegExp('^[0-9a-fA-F]{24}$');
  postMethod = 'POST';
  getMethod = 'GET';

  constructor(
    public router: Router,
    // public _service: NotificationsService,
    public http: HttpClient,
    public serverVariableService: ServerVariableService,
    public validationService: ValidationService,
    // public stomp: StompService
  ) {
  }


  // this funcation is used for connect socetIO
  connectSocetIoWithSerever() {

    // console.log('GO TO CONNECT');
    // // console.log(this.stomp.status);
    // // if (this.stomp.status != 'CONNECTED') {
    // console.log('CONNECTED.............!');
    // let socketInput = new SocketInput();
    // socketInput.token = this.getToken();
    // socketInput.status = 'login';
    // this.stomp.send('/clinic/loginWithoutToken', Serialize(socketInput, SocketInput));
    // });
  }

  // sendSoketForLogin(socketInput) {
  //   this.stomp.send('/clinic/' + this.serverVariableService.SEND_SOCKET_LOGIN, Serialize(socketInput, SocketInput));
  // }


  /**
   * This Method Is Use From Remove Empty Element From Array
   * @param test_array  your selected array pass as args.
   */
  removeEmptyElementsFromArray(test_array) {
    let index = -1;
    const arr_length = test_array ? test_array.length : 0;
    let resIndex = -1;
    const result = [];

    while (++index < arr_length) {
      const id = test_array[index];
      if (id) {
        result[++resIndex] = id;
      }
    }
    return result;
  }


  /*
  *
  * Used to check if object ios empaty or not..!
  * @param obj = 'indecated object which you want to check'
  * return true if empty..!
  */
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  /**
   * This Method Is Use For Remove Blank And Null Key From Object.
   */
  customJsonInclude(obj) {
    const newObj: Object = new Object(obj);
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        if (obj[key] && obj[key].length > 0) {
          obj[key] = this.removeEmptyElementsFromArray(obj[key]);
        }
        if (this.isEmptyObject(obj[key])) {
          delete obj[key];
        } else {
          this.customJsonInclude(obj[key]);
        }
      } else {
        if (obj[key] === undefined || obj[key] === null) {
          delete obj[key];
        }
      }
    }
  }

  /**
   * @author : savan-tandel
   * @param isDisplayToast display tost or not , pass true or false
   * @param url API name
   * @param params params
   * @param callback response of server
   */
  postMethodAPI(isDisplayToast, url, params, callback: (response) => void) {
    url = this.URL + url;
    this.loaderStart++;
    this.customJsonInclude(params);
    // return this.http.post(url, params, {}).subscribe(response => {
      return this.http.post(url, params, {}).subscribe(response => {
      if (this.loaderStart > 0) {
        this.loaderStart--;
      }
      let serverResponse = new ResponseWrapperDTO();
      serverResponse = Deserialize(response, ResponseWrapperDTO);
      if (serverResponse instanceof ResponseWrapperDTO === false) {
        callback(this.FAIL_REPONSE);
      }
      if (serverResponse.status) {
        callback(serverResponse.data);
        if (isDisplayToast) {
          if (serverResponse.status) {
            this.CreateNotification('success', 'Success..!', serverResponse.msg);
          } else {
            this.CreateNotification('error', 'Error..!', serverResponse.msg);
          }
        }
      } else {
        let serverError = new ResponseErrorDTO();
        serverError = Deserialize(response, ResponseErrorDTO);
        if (this.isEmptyObject(serverError)) {
          this.CreateNotification('error', 'Fail', serverResponse.msg);
        } else {
          this.CreateNotification('error', 'Fail', serverError.errors['error']);
        }

        callback(serverError.data);
      }
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          // console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          this.loaderStart--;
          this.CreateNotification('error', 'Server down.', '');
        }
      }
    );
  }

  /**
   * @author : Savan-tandel
   * @param isDisplayToast display tost or not , pass true or false
   * @param url API name
   * @param params params
   * @param callback response of server
   */
  getMethodAPI(isDisplayToast, apiName, params, callback: (response) => void) {
    apiName = this.URL + apiName;
    return this.http.get(apiName, { params: params }).subscribe(response => {
      // Read the result field from the JSON response.
      if (this.loaderStart > 0) {
        this.loaderStart--;
      }
      let serverResponse = new ResponseWrapperDTO();
      serverResponse = Deserialize(response, ResponseWrapperDTO);
      if (serverResponse instanceof ResponseWrapperDTO === false) {
        callback(this.FAIL_REPONSE);
      }
      if (serverResponse.status) {
        callback(serverResponse.data);

        if (isDisplayToast) {
          if (serverResponse.status) {
            this.CreateNotification('success', 'Success..!', serverResponse.msg);
          } else {
            this.CreateNotification('error', 'Error..!', serverResponse.msg);
          }
        }
      } else {
        let serverError = new ResponseErrorDTO();
        serverError = Deserialize(response, ResponseErrorDTO);
        // this.URL =
        if (this.isEmptyObject(serverError)) {
          this.CreateNotification('error', 'Fail', serverResponse.msg);
        } else {
          this.CreateNotification('error', 'Fail', serverError.errors['error']);
        }
        callback(serverError.data);
      }
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          /* A client-side or network error occurred. Handle it accordingly.
           console.log('An error occurred:', err.error.message); */
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          this.loaderStart--;
          this.CreateNotification('error', 'Server down.', '');
        }
      }
    );
  }

  /**
   * @author : abhay-suchak
   * @param isDisplayToast
   * @param url
   * @param params
   * @param id
   * @param callback
   */
  // putMethodAPI(isDisplayToast, url, params, id, callback: (response) => void) {
  //   url = this.URL + url + '/' + id;
  //   this.loaderStart++;
  //   const headers = new Headers();
  //   // let httpParams = new URLSearchParams();
  //   // httpParams.set('id', id);
  //   return this.http.put(url, params).map(res => res.json()).subscribe(
  //     response => {
  //       if (this.loaderStart > 0) {
  //         this.loaderStart--;
  //       }
  //       let serverResponse = new ResponseWrapperDTO();
  //       serverResponse = Deserialize(response, ResponseWrapperDTO);
  //       if (serverResponse instanceof ResponseWrapperDTO === false) {
  //         callback(this.FAIL_REPONSE);
  //       }
  //       if (serverResponse.status) {
  //         callback(serverResponse.data);

  //         if (isDisplayToast) {
  //           if (serverResponse.status) {
  //             this.CreateNotification('success', 'Success..!', serverResponse.msg);
  //           } else {
  //             this.CreateNotification('error', 'Error..!', serverResponse.msg);
  //           }
  //         }
  //       } else {
  //         let serverError = new ResponseErrorDTO();
  //         serverError = Deserialize(response, ResponseErrorDTO);
  //         // this.URL =
  //         if (this.isEmptyObject(serverError)) {
  //           this.CreateNotification('error', 'Fail', serverResponse.msg);
  //         } else {
  //           this.CreateNotification('error', 'Fail', serverError.errors['error']);
  //         }
  //         callback(serverError.data);
  //       }
  //     },
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {
  //         /* A client-side or network error occurred. Handle it accordingly.
  //          console.log('An error occurred:', err.error.message); */
  //       } else {
  //         // The backend returned an unsuccessful response code.
  //         // The response body may contain clues as to what went wrong,
  //         console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
  //         this.loaderStart--;
  //         this.CreateNotification('error', 'Server down.', '');
  //       }
  //     }
  //   );
  // }

  /**
   * This Is Used For API Call.
   * @param methodName Method Name Like , : GET , POST , DELETE :)
   * @param url Your Selected API Name.
   * @param params Parmas For POST method.
   * @param callback Server Response.
   */
  // makeAPICall(isDisplayToast, methodName, url, params, callback: (response) => void) {
  //   url = this.URL + url;
  //   this.loaderStart++;
  //   // Make the HTTP request:

  //   if (methodName === this.getMethod) {
  //     let httpParams = new URLSearchParams();
  //     for (let key in params) {
  //       if (key && params.hasOwnProperty(key)) {
  //         httpParams.set(key, params[key]);
  //       }
  //     }

  //     let options = new RequestOptions({ params: httpParams });;
  //     console.log(this.loaderStart)
  //     return this.http.get(url, options).map(res => res.json()).subscribe(response => {
  //       // Read the result field from the JSON response.
  //       if (this.loaderStart > 0) {
  //         this.loaderStart--;
  //       }
  //       let serverResponse = new ResponseWrapperDTO();
  //       serverResponse = Deserialize(response, ResponseWrapperDTO);
  //       if (serverResponse instanceof ResponseWrapperDTO === false) {
  //         callback(this.FAIL_REPONSE);
  //       }
  //       if (serverResponse.status) {
  //         callback(serverResponse.data);

  //         if (isDisplayToast) {
  //           if (serverResponse.status) {
  //             this.CreateNotification('success', 'Success..!', serverResponse.msg);
  //           } else {
  //             this.CreateNotification('error', 'Error..!', serverResponse.msg);
  //           }
  //         }
  //       } else {
  //         let serverError = new ResponseErrorDTO();
  //         serverError = Deserialize(response, ResponseErrorDTO);
  //         // this.URL =
  //         if (this.isEmptyObject(serverError)) {
  //           this.CreateNotification('error', 'Fail', serverResponse.msg);
  //         } else {
  //           this.CreateNotification('error', 'Fail', serverError.errors['error']);
  //         }
  //         callback(serverError.data);
  //       }
  //     },
  //       (err: HttpErrorResponse) => {
  //         if (err.error instanceof Error) {
  //           /* A client-side or network error occurred. Handle it accordingly.
  //            console.log('An error occurred:', err.error.message); */
  //         } else {
  //           // The backend returned an unsuccessful response code.
  //           // The response body may contain clues as to what went wrong,
  //           console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
  //           this.loaderStart--;
  //           this.CreateNotification('error', 'Server down.', '');
  //         }
  //       }
  //     );
  //   } else if (methodName === this.postMethod) {
  //     this.customJsonInclude(params);
  //     return this.http.post(url, params, {
  //       // params: new HttpParams().set('id', '3'),
  //     }).map(res => res.json()).subscribe(response => {
  //       if (this.loaderStart > 0) {
  //         this.loaderStart--;
  //       }
  //       let serverResponse = new ResponseWrapperDTO();
  //       serverResponse = Deserialize(response, ResponseWrapperDTO);
  //       if (serverResponse instanceof ResponseWrapperDTO === false) {
  //         callback(this.FAIL_REPONSE);
  //       }
  //       if (serverResponse.status) {
  //         callback(serverResponse.data);
  //         if (isDisplayToast) {
  //           if (serverResponse.status) {
  //             this.CreateNotification('success', 'Success..!', serverResponse.msg);
  //           } else {
  //             this.CreateNotification('error', 'Error..!', serverResponse.msg);
  //           }
  //         }
  //       } else {
  //         let serverError = new ResponseErrorDTO();
  //         serverError = Deserialize(response, ResponseErrorDTO);
  //         if (this.isEmptyObject(serverError)) {
  //           this.CreateNotification('error', 'Fail', serverResponse.msg);
  //         } else {
  //           this.CreateNotification('error', 'Fail', serverError.errors['error']);
  //         }
  //         callback(serverError.data);
  //       }
  //     },
  //       (err: HttpErrorResponse) => {
  //         if (err.error instanceof Error) {
  //           // A client-side or network error occurred. Handle it accordingly.
  //           // console.log('An error occurred:', err.error.message);
  //         } else {
  //           // The backend returned an unsuccessful response code.
  //           // The response body may contain clues as to what went wrong,
  //           console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
  //         }
  //       }
  //     );
  //   }
  // }

  /**
   * @author
   * @param methodName
   * @param url
   * @param params
   * @param callback
   */
  // makeAPICallForFileUpload(methodName, url, params, callback: (response) => void) {

  //   url = this.URL + url;
  //   const headers = new Headers();
  //   const options = new RequestOptions({ headers: headers });
  //   /* API call using Post Method.*/
  //   if (methodName === this.postMethod) {
  //     return this.http.post(url, params, options).map(res => res.json()).subscribe(
  //       response => {
  //         callback(response);
  //       },
  //       error => {
  //         // this.error = error;
  //       }
  //     );
  //   }

    /* API call using Get Method.*/
  //   if (methodName === this.getMethod) {
  //     // return this.http.get(this.endpoint_url).map(res => res.json());
  //   }
  // }


  /**
  * This method is used to check all checkbox of list if isCheckAll is true, otherwise it uncheck all checkboxes of list.
  * @param isCheckAll : indicates true or false.
  * @param detailsArray : indicates list that contains checkboxes.
  */
  checkAll(isCheckAll, detailsArray) {
    // for (const i in detailsArray){
    //   console.log(detailsArray[i][isCheckAll]);
    //   detailsArray[i][isCheckAll] = isCheckAll;
    // }
    return isCheckAll;
  }
  /***
   * This method is used to make isCheckAll true if all checkboxes of list is checked, otherwise it makes isCheckAll to false;
   * @param isSingleChecked : indicates true if user check checkbox of list otherwise indicates false.
   * @param isCheckAll : indicates true of checkbox for all is checked otherwise indicates false.
   * @param detailsArray : indicates list that contains checkboxes.
   */
  singleCheck(isSingleChecked, isCheckAll, detailsArray) {

    if (!isSingleChecked) {
      isCheckAll = false;
      return isCheckAll;
    }

    for (const i in detailsArray) {
      if (!detailsArray[i].selected) {
        isCheckAll = false;
        return isCheckAll;
      }
    }
    isCheckAll = true;
    return isCheckAll;
  }
  /**
   * @author : abhay-suchak
   * @param string
   */
  capitalizeFirstLetter(string) {
    return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  }
  /**
   * This Method Is Used To Generate Notification.
   * @param type which Type Of Notification You Used.
   * @param message Message - Display As '..BIG FONT...'.
   * @param content Message - Display As '..SMALL FONT...'.
   */
  CreateNotification(type, message, content) {
    let timeOut = 0;
    if (type === 'success') {
      timeOut = 5000;
    }
    // this._service.create(
    //   message,
    //   content,
    //   type,

    //   {
    //     timeOut: timeOut,
    //     showProgressBar: true,
    //     pauseOnHover: true,
    //     clickToClose: true,
    //     maxLength: 1000

    //   }
    // );
  }

  resetAllNotification() {
    // this._service.remove();
  }

  getMenu() {
    return JSON.parse(localStorage.getItem('userMenus'));
  }


  getDropdownArrayUtilsFunction(arrayOfTableName, callback: (response) => void) {
    // const params = {
    //   'jsonOfObject': arrayOfTableName
    // };
    // this.postMethodAPI(false, this.serverVariableService.getDetailsForAngularDropDownAPI, params, (response) => {
    //   if (response !== this.FAIL_REPONSE) {
    //     callback(response);
    //   } else {
    //     callback([]);
    //   }
    // });
  }

  isNullUndefinedOrBlank(obj) {
    if (obj === null || obj === undefined || (obj === '' && obj !== 0)) {
      return true;
    }
    return false;
  }

  getUserName() {

    // let user = new User();
    // user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
    // if (this.isEmptyObject(user)) {
    //   return;
    // }
    // user = Deserialize(user, User);
    // return user ? user.userName.toString() : null;
  }

  getUserFromLocalStorage() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    // return Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);
  }

  getUserId() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    // let user = new User();
    // user = Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);
    // return user ? user.id : null;
  }
  getUserRegistraionStep() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    // let user = new User();
    // user = Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);
    // return user ? user.registrationStep : 0;
  }
  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }
  getClientToken() {
    return localStorage.getItem('clientToken') ? localStorage.getItem('clientToken') : null;
  }
  isAuthenticated() {
    // if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
    //   return null;
    // }
    // let user = new FormMaster();
    // user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
    // console.log(user);
    // return user ? user.isAuthenticated : false;
    return true;
  }

  isAllowSettingForUser() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    // let user = new User();
    // user = Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);

    // if (user && !this.isEmptyObject(user.mapOfOtherDetails)) {
    //   return user.mapOfOtherDetails['isAllowSettingMenu']
    // }
    return false;
  }
  getStateMasterId() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    // let user = new User();
    // user = Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);

    // if (user && !this.isEmptyObject(user.mapOfOtherDetails)) {
    //   return user.mapOfOtherDetails['idOfStateMaster']
    // }
    return false;
  }
  getCityMasterId() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    // let user = new User();
    // user = Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);

    // if (user && !this.isEmptyObject(user.mapOfOtherDetails)) {
    //   return user.mapOfOtherDetails['idOfCityMaster']
    // }
    return false;
  }

  // .......... Start Pagination Related Methods ...............

  public getPreviousData(pagination) {
    pagination.startPos -= +pagination.perPage;
    pagination.selectPage = pagination.startPos.toString();
  }
  public getNextData(pagination) {
    pagination.startPos += +pagination.perPage;
    pagination.selectPage = pagination.startPos.toString();
  }

  public goToPageFun(pagination) {
    pagination.startPos = +pagination.selectPage;
  }

  public setPaginationVariablesBeforeAPICall(pagination) {
    if (pagination.startPos < 0) {
      pagination.startPos = 0;
    }

    pagination.noOfRecordsPerPage = Number(pagination.perPage);
    pagination.lastAchive = false;
  }

  public setPaginationVariablesAfterAPICall(pagination, Response) {
    if (Response.length === 0) {
      pagination.totalRecords = 0;
    }

    if (Response.length > 0 && Response[0].totalNoOfRecords) {
      pagination.totalRecords = Response[0].totalNoOfRecords;
    }
    if ((pagination.totalRecords <= (pagination.startPos + +pagination.perPage))) {
      pagination.lastAchive = true;
    }
    pagination.selectPage = pagination.startPos.toString();
    pagination.goToPageArray = this.fillgoToPageDropDownArray(pagination.totalRecords, pagination.perPage);
  }

  // public setSortByKeyAndOrder(pagination: Pagination, key: string) {
  //   // pagination.classNamesForUpDown = {};
  //   let className = '';
  //   if (pagination.sortColumn && pagination.sortColumn === key) {
  //     if (pagination.sortOrder === 'a') {
  //       pagination.sortOrder = 'd'
  //       className = 'fa fa-sort-down';
  //     } else {
  //       pagination.sortOrder = 'a';
  //       className = 'fa fa-sort-up';
  //     }
  //   } else {
  //     pagination.sortColumn = key;
  //     pagination.sortOrder = 'a';
  //     className = 'fa fa-sort-up';
  //   }
  //   pagination.classForUpDown = className;
  //   console.log(pagination.classNamesForUpDown)
  // }



  public getQueryString(ob) {
    // var i = 0;
    // var param: string = '';
    // for (let key in ob) {
    //   if (ob[key]) {
    //     param += ((i === 0) ? '?' : '&') + key + '=' + ob[key];
    //     i++;
    //   }
    // }
    // return (param) ? param : undefined;
  }
  public selectPerPage(pagination) {
    pagination.startPos = 0;
    pagination.selectPage = pagination.startPos.toString();
  }

  public searchStoneByButton(pagination) {
    pagination.startPos = 0;
    pagination.selectPage = pagination.startPos.toString();
  }

  public fillgoToPageDropDownArray(totalNoOfRecords, recordsPerPage) {
    const count = Math.ceil(totalNoOfRecords / +recordsPerPage);
    let idPerPage = 0;
    if (count > 0) {
      const goToPageArray = [];
      for (let i = 1; i <= count; i++) {
        goToPageArray.push({
          'name': 'Page ' + i,
          'id': idPerPage.toString()
        });
        idPerPage += +recordsPerPage;
      }
      return goToPageArray;
    }
  }
  // .......... End Pagination Related Methods ...............
  redirectTo(route) {
    this.router.navigate([route]);
  }

  ConvertModelIdToString(arrayOfKeys, array) {
    const newArray = array;
    const newarrayOfKeys = arrayOfKeys;
    for (const keyName in newArray) {
      if (arrayOfKeys.length > 0) {
        if (newarrayOfKeys.includes(keyName)) {
          if (typeof (newArray[keyName]) === 'object' && this.isEmptyObject(newArray[keyName])) {
            newArray[keyName] = undefined;
          }
          if (!this.isNullUndefinedOrBlank(newArray[keyName])) {
            newArray[keyName] = newArray[keyName].toString();
          }
          delete arrayOfKeys[newArray[keyName]];
        }
        if (arrayOfKeys.length > 0 && typeof (newArray[keyName]) === 'object') {
          this.ConvertModelIdToString(arrayOfKeys, newArray[keyName]);
        }
      }
    }
    return newArray;
  }

  getTextboxValue(getText, eventKeyCode, maximum, decimalPoint) {
    const name = getText.value;
    let setLength;
    let setLen;
    if (name.indexOf('-') !== -1) {
      setLength = maximum + 1;
    } else {
      if (getText.selectionStart || getText.selectionStart === '0') {
        this.caretPos = getText.selectionStart;
        if (this.caretPos === 0 && name.indexOf('-') === -1 && eventKeyCode === 45) {
          setLength = maximum + 1;
        } else {
          setLength = maximum;
        }
      }
    }
    const decimal = decimalPoint + 1;
    if (eventKeyCode === 46) {
      if (name.indexOf('.') === -1) {
        getText.maxLength = name.length + decimal;
      } else {
        getText.maxLength = setLength;
        if (setLength !== name.length) {
          getText.maxLength = name.length;
        }
      }
    } else {
      if (name.indexOf('.') === -1) {
        getText.maxLength = setLength;
      } else {
        const lengthOfFristIndex = name.split('.')[0].length;
        const lengthOfLatsIndex = name.split('.')[1].length;
        getText.maxLength = setLength;
        getText.maxLength = lengthOfFristIndex + decimal;
        if (getText.selectionStart || getText.selectionStart === '0') {
          this.caretPos = getText.selectionStart;
          if (this.caretPos <= lengthOfFristIndex && lengthOfFristIndex <= setLength) {
            if (lengthOfFristIndex === setLength) {
              setLen = lengthOfFristIndex + lengthOfLatsIndex + 1;
              getText.maxLength = setLen;
            } else {
              setLen = (name.length - 1) + (setLength - lengthOfFristIndex) + (decimal - lengthOfLatsIndex);
              getText.maxLength = setLen;
            }
          }
        }
      }
    }
  }

  checkgetText(textValue, maxLength, decimalPoint) {
    // let getText;
    // getText = textValue.value;
    // getText && getText.indexOf('-') !== -1 ? maxLength = maxLength + 1 : '';
    // getText && getText.indexOf('.') !== -1 &&
    // getText.split('.')[1].length > decimalPoint ? textValue.value = getText.slice(0, getText.indexOf('.') + 1 + decimalPoint) : '';
    // getText && getText.indexOf('.') === -1 && getText.length > maxLength ? textValue.value = getText.slice(0, maxLength) : '' ;
    // if (getText && getText.split('.')[0].length === 0 && getText.split('.')[1].length !== 0) {
    //   textValue.value = (0 + getText);
    // }
  }

  /**
  * check is string is mongoId or Not
  * return true if mongoID
  */
  isMongoId(checkId) {
    return this.checkForMongoId.test(checkId);
  }

  logoutLink() {
    this.router.navigate(['/signup-login/signup/login']);

  }
  logout() {
    // let socketInput = new SocketInput();
    // socketInput.token = this.getClientToken();
    // this.stomp.send('/clinic/' + this.serverVariableService.SEND_SOCKET_LOGOUT, Serialize(socketInput, SocketInput));
    // localStorage.removeItem('userMenus');
    localStorage.removeItem('users');
    // localStorage.removeItem('token');
    // this.router.navigate(['/signup-login/signup/login']);
  }
  signin() {
    this.router.navigate(['/home/work_area/dash']);
  }

  checkPatternRegularExp(pattern, string) {
    const regex1 = RegExp(pattern);
    return regex1.test(string);
  }



  // paymentModeArray = [
  //   {
  //     id: 'Cash',
  //     name: 'Cash'
  //   },
  //   {
  //     id: 'Credit Card',
  //     name: 'Credit Card'
  //   }
  // ];

  /**
   * @author:Abhay-Suchak
   * For Generate Random String.
   */
  randomString() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 18; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  /**
   * @author:Abhay-Suchak
   * Redirect After Login
   */
  forRedirectAfterLogin() {
    if (this.getUserRegistraionStep() === 3) {
      this.resetAllNotification();
      this.redirectTo('/home');
    } else if (this.getUserRegistraionStep() === 2) {
      // this.doctorRegistrationService.getDropdownArray();
      this.redirectTo('/signup-login/doctor-registration');
    } else if (this.getUserRegistraionStep() === 1) {
      // this.doctorRegistrationService.getAllState();
      this.redirectTo('/signup-login/doctor-registration');
    }
  }

  /**
   * @author Abhay-Suchak
   * @param x staring which you want to trim
   */
  trimString(x) {
    return x.replace(/^\s+|\s+$/gm, '');
  }

  callByReferenceArray(array) {
    console.log(array);

    array.forEach((element, index) => {
      element.name = 'MP : ' + index;
    });
  }

  /**
   * this function is used to set PROFILE PIC URL.
   * @author Abhay-Suchak
   * @param url base 64 URL
   */
  setProfilePicUrl(url) {
    this.USER_PROFILE_PIC_URL = url;
  }


}
