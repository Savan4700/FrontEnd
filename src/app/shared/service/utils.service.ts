import { isDate } from 'util';
// import { PaginationResponse } from '../../model/PaginationResponse';
// import { PaginationRequest } from '../../model/PaginationRequest';
import { Deserialize, Serialize } from 'cerialize';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServerVariableService } from './server-variable.service';
import { ValidationService } from './validation.service';
import { HttpErrorResponse, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { NotificationsService } from 'angular2-notifications'; //npm install angular2-notifications
import { ResponseWrapperDTO } from '../../model/ResponseWrapperDTO';
import { User } from '../../Model/User'
// import { OrganizationProfile } from '../../model/master/OrganizationProfile';
// import { ToasterConfig, ToasterService } from 'angular2-toaster'; //npm install angular2-toaster
import { Location } from '@angular/common';
// import * as jsPDF from 'jspdf';
// import 'jspdf-autotable';
declare var $: any;
// import * as pdfMake from 'pdfmake/build/pdfmake.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import * as html2canvas from 'html2canvas';
@Injectable()
export class UtilsService {

  static DEFAULT_SORT_COLUMN = 'createdDate';

  priviousUrl: string;
  currentUrl: string;
  showSettingsmenu: boolean;
  SUCCESS_REPONSE = 'success';
  UNAPPLICABLE = 'UNAPPLICABLE';
  FAIL_REPONSE = 'fail';
  todayDate: Date = new Date();
  yesterdayDate: Date = new Date(new Date().getTime() - 60 * 60 * 24 * 1000);
  tommorrowDate: Date = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
  ml = 2;

  USER_PROFILE_PIC_URL = '';
  // USER_PROFILE_PIC_URL = 'http://auroradiam.com:8088/clinic_management/' + this.getUserId() + '.jpg';
  /***
   * links for local PC
   */
  // URL = 'http://192.168.2.57:1337/';
  URL = 'http://192.168.43.47:8080/api/';
  // SOCKET_URL = 'http://192.168.2.52:8080/clinicSocketConnections';

 
  ALREADY_AVAILABLE_RESULT = 'Already Available';
  INVALID_START_DATE = 'invalid start date';
  DELETE_RECORD = 'Successfully record deleted.';
  CONFIRM_MSG_FOR_DELETE = 'Are you sure you want to delete this record ?';
  // CONFIRM_MSG_FOR_VALID_NET_WEIGHT = 'Are you sure you want to save this record ?';
  LEAVE_THIS_PAGE = 'Are you sure you want to leave this page ?';
  loaderStart = 0;
  checkGSTnumber = new RegExp('[0-9]{2}[A-Za-z]{5}[0-9]{4}[a-zA-Z][0-9]{1}[a-zA-Z]{1}[a-zA-Z0-9]{1}');
  checkForMongoId = new RegExp('^[0-9a-fA-F]{24}$');
  postMethod = 'POST';
  getMethod = 'GET';
  msgFromDeleteAPIOnConflicts: string;


  // doc.save('table.pdf');

  // public config: ToasterConfig =
  //   new ToasterConfig({
  //     showCloseButton: true,
  //     tapToDismiss: false,
  //     timeout: 1000,
  //     animation: 'fade out',
  //     limit: 1,
  //     positionClass: 'toast-top-center',
  //     newestOnTop: true,
  //     mouseoverTimerStop: true
  //   });

  previousUrl: string;

  constructor(
    public router: Router,
    // public _service: NotificationsService,
    public http: HttpClient,
    public serverVariableService: ServerVariableService,
    public validationService: ValidationService,
    // public toasterService: ToasterService,
    public location: Location,
  ) {
    // Only pt supported (not mm or in)
    // const doc = new jsPDF('p', 'pt');
    // doc.autoTable(columns, rows, {
    //   styles: { fillColor: [100, 255, 255] },
    //   columnStyles: {
    //     id: { fillColor: 255 }
    //   },
    //   margin: { top: 60 },
    //   addPageContent: function (data) {
    //     doc.text('Header', 40, 30);
    //   }
    // });
  }

  fileSave() {
    // const doc = new jsPDF('l', 'pt', 'a4');
    // doc.text("From HTML", 40, 50);
    // doc.text( 40, 50);
    // const res = doc.autoTableHtmlToJson(document.getElementById('tableForPDF'));
    // doc.autoTable(res.columns, res.data, {
    //   startY: 60
    // });
    // return doc;

    // doc.autoTable(columns, rows, {
    //  theme: "grid",
    //  margin: 10,
    //  styles: {
    //    font: "courier",
    //    fontSize: 12,
    //    // overflow: "linebreak",
    //    rowHeight: 8,
    //    cellPadding: 1,
    //    halign: "left"
    //  }
    // });
    // doc.save();
  }


  // downloadPdfByElementId(elementId: string) {
  //   html2canvas(document.getElementById(elementId))
  //     .then((canvas) => {
  //       const data = canvas.toDataURL();
  //       const docDefinition = {
  //         content: [{
  //           image: data,
  //           fit: [520, 100000]
  //         }]
  //       };
  //       pdfMake.createPdf(docDefinition).download();
  //     })
  //     .catch(err => {
  //       console.log('error canvas', err);
  //     });
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
   * @author : abhay-suchak
   * @param isDisplayToast display tost or not , pass true or false
   * @param url API name
   * @param params params
   * @param callback response of server
   */
  postMethodAPI(isDisplayToast, apiName, params, callback: (response: any, isRoute: boolean) => void, isToastAndDataBothRequired?: boolean) {
    this.loaderStart++;
    this.customJsonInclude(params);
    console.log(JSON.stringify(params));
    let headers = new HttpHeaders();
    if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
      headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    }

    apiName = this.URL + apiName;
    return this.http.post(apiName, params, { headers: headers }).subscribe(response => {
      console.log(response);
      // Read the result field from the JSON response.
      if (this.loaderStart > 0) {
        this.loaderStart--;
      }
      // const serverResponse = Deserialize(response, ResponseWrapperDTO);
      // if (!(serverResponse.status < 200 || serverResponse.status >= 300)) {
      //   console.log('IF.. success response');
      //   if (isDisplayToast) {
      //     console.log('isdisplay message');
          // this.setConfigAndDisplayPopUpNotification('success', '', serverResponse.message);
          // if (isToastAndDataBothRequired) {
          //   callback(serverResponse.data, true);
          //   return;
          // }
          // callback(undefined, true);
          // callback(serverResponse.data, true);
          // return;
        // }
        // console.log('serverResponse.data' + serverResponse.data);
        // if (serverResponse.data && typeof serverResponse.data !== 'string') {
        //   console.log('string..');
        // }
        callback(response, true);
      // }
    },
      (err: HttpErrorResponse) => {
        console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
        if (err.status === 0) {
          // this.CreateNotification('error', 'Error', 'Server down.');
          // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
        } else {
          // const errorDTO = Deserialize(err.error, ResponseWrapperDTO);
          // // if (errorDTO.message === ServerVariableService.UNAUTHORIZED_ERROR_MESSAGE) {
          //   // this.homeService.logout();
          // // }
          // if (errorDTO.isResponseOnPage) {
            callback(err.error, false);
        //     window.scroll(0, 0);
        //   } else {
        //     // this.setConfigAndDisplayPopUpNotification('error', '', errorDTO.message ? errorDTO.message : errorDTO.error);
        //   }
        }
        // this.loaderStart--;
      }
    );
  }

  toHttpParams(params) {
    // console.log(params);
    // console.log(Object.getOwnPropertyNames(params));
    return Object.getOwnPropertyNames(params).filter(keys => {
      console.log('key ::' + keys + 'param :: ' + params[keys]);
      if (params[keys] === null || params[keys] === undefined) {
        return;
      }
    }).reduce((p, key) =>
      p.set(key, params[key]), new HttpParams()
    );
  }

  /**
   * @author : abhay-suchak
   * @param API API name
   * @param params params
   * @param callback response of server
   */
  getMethodAPI(apiName, params, callback: (response) => void, noLoaderRequire?: boolean) {
    this.loaderStart++;
    if (noLoaderRequire) {
      this.loaderStart--;
    }
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (key && params[key] && params.hasOwnProperty(key) && !this.isEmptyObject(params[key])) {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    let headers = new HttpHeaders();
    if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
      headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    }
    apiName = this.URL + apiName;
    return this.http.get(apiName, { params: httpParams, headers: headers }).subscribe(response => {
      // Read the result field from the JSON response.
      if (this.loaderStart > 0) {
        this.loaderStart--;
      }
      // const serverResponse = Deserialize(response, ResponseWrapperDTO);

      // if (serverResponse.status < 200 || serverResponse.status >= 300) {
        // this.CreateNotification('error', 'Error..!', serverResponse.message);
        // this.setConfigAndDisplayPopUpNotification('error', '', serverResponse.message);
      // } else {
        callback(response);
      // }
    },
      (err: HttpErrorResponse) => {
        console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
        if (err.status === 0) {
          // this.CreateNotification('error', 'Error', 'Server down.');
          // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
        } else {
          // const errorDTO = Deserialize(err.error, ResponseWrapperDTO);
          // this.CreateNotification('error', 'Error', errorDTO.message ? errorDTO.message : errorDTO.error);
          // this.setConfigAndDisplayPopUpNotification('error', '', errorDTO.message ? errorDTO.message : errorDTO.error);
          callback(err.error);
        }
        this.loaderStart--;
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
  putMethodAPI(isDisplayToast, apiName, params, id, callback: (responseData: any, isRoute: boolean) => void, isCallbackRequired?: boolean) {

    this.loaderStart++;
    let headers = new HttpHeaders();
    if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
      headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    }
    apiName = this.URL + apiName + '/' + id;
    return this.http.put(apiName, params, { headers: headers }).subscribe(
      response => {
        // Read the result field from the JSON response.
        if (this.loaderStart > 0) {
          this.loaderStart--;
        }
        const serverResponse = Deserialize(response, ResponseWrapperDTO);
        if (!(serverResponse.status < 200 || serverResponse.status >= 300)) {
          if (isDisplayToast) {
            // this.setConfigAndDisplayPopUpNotification('success', '', serverResponse.message);
            callback(undefined, true);
          }
          if (serverResponse.data && typeof serverResponse.data !== 'string') {
            console.log(serverResponse.data);
            callback(serverResponse.data, true);
          }
        }
      },
      (err: HttpErrorResponse) => {
        console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
        if (err.status === 0) {
          // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
        } else {
          const errorDTO = Deserialize(err.error, ResponseWrapperDTO);
          if (errorDTO.isResponseOnPage) {
            window.scroll(0, 0);
            callback(errorDTO.message, false);
          } else {
            // this.setConfigAndDisplayPopUpNotification('error', '', errorDTO.message ? errorDTO.message : errorDTO.error);
            console.log(isCallbackRequired);
            if (isCallbackRequired) {
              callback(errorDTO.message, true);
            }
            // this.CreateNotification('error', 'Error', errorDTO.error);
          }
        }
        this.loaderStart--;
      });
  }
  /**
   * @author : abhay-suchak
   * @param isDisplayToast
   * @param url
   * @param params
   * @param id
   * @param callback
   */
  deleteMethodAPI(isDisplayToast, apiName, ob, callback: (response: any, isRoute: boolean) => void) {
    let headers = new HttpHeaders();
    if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
      headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    }
    apiName = this.URL + apiName;
    console.log(JSON.stringify(ob));
    Object.keys(ob).forEach(key => {
      if (key && ob[key] && ob.hasOwnProperty(key) && !this.isEmptyObject(ob[key])) {
        console.log('value ::' + ob[key]);
        apiName += '/' + ob[key];
        console.log('API  ::' + apiName);
      }
    });
    return this.http.delete(apiName, { headers: headers }).subscribe(
      response => {
        // Read the result field from the JSON response.
        if (this.loaderStart > 0) {
          this.loaderStart--;
        }

        const serverResponse = Deserialize(response, ResponseWrapperDTO);
        if (!(serverResponse.status < 200 || serverResponse.status >= 300)) {
          if (isDisplayToast) {
            // this.setConfigAndDisplayPopUpNotification('success', '', serverResponse.message);
            // this.CreateNotification('success', 'Success..!', serverResponse.message);
            callback(undefined, true);
          }
          if (serverResponse.data && typeof serverResponse.data !== 'string') {
            callback(serverResponse.data, true);
          }
        }
      },
      (err: HttpErrorResponse) => {
        console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
        if (err.status === 0) {
          // this.CreateNotification('error', 'Error', 'Server down.');
          // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
        } else {
          const errorDTO = Deserialize(err.error, ResponseWrapperDTO);
          if (!errorDTO.isResponseOnPage) {
            // callback(errorDTO.message, false);
            this.msgFromDeleteAPIOnConflicts = errorDTO.message;
            $('#deletConflicts').modal({
              backdrop: 'static',
              keyboard: false
            });
          } else {
            // this.CreateNotification('error', 'Error', errorDTO.error);
            // this.setConfigAndDisplayPopUpNotification('error', '', errorDTO.error ? errorDTO.error : errorDTO.message);
          }
        }
        this.loaderStart--;
      });
  }

  /**
  * This method is used to check all checkbox of list if isCheckAll is true, otherwise it uncheck all checkboxes of list.
  * @param isCheckAll : indicates true or false.
  * @param detailsArray : indicates list that contains checkboxes.
  */
  checkAll(isCheckAll, detailsArray) {
    detailsArray.forEach(ele => {
      // if (ele.hasOwnProperty('selected')) {
      ele.selected = isCheckAll;
      // }
    });
    return isCheckAll;
    // return detailsArray;
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


  // setConfigAndDisplayPopUpNotification(type, title, message) {
  //   this.config.timeout = 0;
  //   if (type === 'success') {
  //     this.config.timeout = 2000;
  //   }
  //   this.toasterService.pop(type, title, message);
  // }

  /**
   * This Method Is Used To Generate Notification.
   * @param type which Type Of Notification You Used.
   * @param message Message - Display As '..BIG FONT...'.
   * @param content Message - Display As '..SMALL FONT...'.
   */
  // CreateNotification(type, message, content) {
  //   let timeOut = 0;
  //   if (type === 'success') {
  //     timeOut = 5000;
  //   }
  //   this._service.create(
  //     message,
  //     content,
  //     type,
  //     {
  //       timeOut: timeOut,
  //       showProgressBar: true,
  //       pauseOnHover: true,
  //       clickToClose: true,
  //       maxLength: 1000

  //     }
  //   );
  // }

  // resetAllNotification() {
  //   this._service.remove();
  // }

  getMenu() {
    return JSON.parse(localStorage.getItem('userMenus'));
  }


  isNullUndefinedOrBlank(obj) {
    if (obj == null || obj === undefined || (obj === '' && obj !== 0)) {
      return true;
    }
    return false;
  }

  getUserName() {

    let user = new User();
    user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
    if (this.isEmptyObject(user)) {
      return;
    }
    user = Deserialize(user, User);
    return user ? user.username.toString() : null;
  }

  // getOrganizationId() {
  //   let user = new UserMaster();
  //   user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
  //   if (this.isEmptyObject(user)) {
  //     return;
  //   }
  //   const org = Deserialize(user.organizationProfile, OrganizationProfile);
  //   return org ? org.id : null;
  // }
  // getOrganizationName() {
  //   let user = new UserMaster();
  //   user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
  //   if (this.isEmptyObject(user)) {
  //     return;
  //   }
  //   const org: OrganizationProfile = Deserialize(user.organizationProfile, OrganizationProfile);
  //   return org ? org.name : null;
  // }

  // getOrganizationCountryId() {
  //   let user = new UserMaster();
  //   user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
  //   if (this.isEmptyObject(user)) {
  //     return;
  //   }
  //   const org = Deserialize(user.organizationProfile, OrganizationProfile);
  //   return org.idOfCountryMaster ? org.idOfCountryMaster : null;
  // }

  // getOrganizationStateId() {
  //   let user = new UserMaster();
  //   user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
  //   if (this.isEmptyObject(user)) {
  //     return;
  //   }
  //   const org = Deserialize(user.organizationProfile, OrganizationProfile);
  //   return org.idOfStateMaster ? org.idOfStateMaster : null;
  // }

  getUserFromLocalStorage() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    return Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);
  }

  getUserId() {
    if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
      return null;
    }
    let user = new User();
    user = Deserialize(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), User);
    return user ? user.id : null;
  }
  isAuthenticated() {
    return localStorage.getItem('isAuthenticate') ? localStorage.getItem('isAuthenticate') : null;
  }
  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }
  getClientToken() {
    return localStorage.getItem('clientToken') ? localStorage.getItem('clientToken') : null;
  }


  // .......... Start Pagination Related Methods ...............

  // public getPreviousData(pagination: PaginationRequest) {
  //   pagination.pageNumber = (+(pagination.pageNumber) - 1).toString();
  // }
  // public getNextData(pagination: PaginationRequest) {
  //   pagination.pageNumber = (+(pagination.pageNumber) + 1).toString();
  // }

  // public changeNoOfRecord(pagination: PaginationRequest) {
  //   pagination.pageNumber = String(1);
  // }

  // public setSortByKeyAndOrder(pagination: PaginationRequest, key: string) {
  //   let className = '';
  //   if (pagination.sortColumn && pagination.sortColumn === key) {
  //     if (pagination.sortOrder === 'a') {
  //       pagination.sortOrder = 'd';
  //       className = 'shorting ti-arrow-up';
  //     } else {
  //       pagination.sortOrder = 'a';
  //       className = 'shorting ti-arrow-down';
  //     }
  //   } else {
  //     pagination.sortColumn = key;
  //     pagination.sortOrder = 'a';
  //     className = 'shorting ti-arrow-down';
  //   }
  //   pagination.classForUpDown = className;
  // }

  // setPaginationSetting(pagination: PaginationResponse) {
  //   if (pagination) {
  //     pagination.startPos = +pagination.pageable['offset'] + 1;
  //     pagination.endPos = +pagination.pageable['offset'] + +pagination.size;
  //     if (pagination.totalPages) {
  //       for (let i = 1; i <= pagination.totalPages; i++) {
  //         pagination.pageArray.push(
  //           {
  //             'id': i.toString(),
  //             'name': 'Page ' + i
  //           }
  //         );
  //       }
  //     }
  //   }
  //   return pagination;
  // }

  // setPaginationOnDeleteAndUpdateRecords(last: boolean, numberOfElements: number, paginationRequest: PaginationRequest) {
  //   if (last && numberOfElements === 1) {
  //     paginationRequest.pageNumber = '1';
  //   }
  //   return paginationRequest;
  // }
  // .......... End Pagination Related Methods ...............

  redirectTo(...route) {
    // console.log(route);
    this.router.navigate(route);
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





  checkPatternRegularExp(pattern, string) {
    const regex1 = RegExp(pattern);
    return regex1.test(string);
  }


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
   * @author Abhay-Suchak
   * @param x staring which you want to trim
   */
  trimString(x) {
    return x.replace(/^\s+|\s+$/gm, '');
  }

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
      showCheckbox: singleSelection ? false : true
      // allowClear: isAllowClear
    };
  }

  /* parent-child drop down setting */
  setSettingForDropDownParentChild(singleSelection, NameOfPlaceHolder, groupBy?: string) {
    return {
      singleSelection: singleSelection,
      text: 'Select ' + NameOfPlaceHolder,
      selectAllText: 'Select All ' + NameOfPlaceHolder,
      unSelectAllText: 'UnSelect All ' + NameOfPlaceHolder,
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      maxHeight: '100px',
      groupBy: groupBy,
      showCheckbox: singleSelection ? false : true
    };
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  setDropdownSettingForLazzyDropdown(singleSelection, NameOfPlaceHolder, isDisabled?: boolean, isAllowClear?: boolean, groupbyString?: string) {
    return {
      singleSelection: singleSelection,
      text: 'Select ' + NameOfPlaceHolder,
      selectAllText: 'Select All ' + NameOfPlaceHolder,
      unSelectAllText: 'UnSelect All ' + NameOfPlaceHolder,
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      maxHeight: '100px',
      disabled: isDisabled,
      allowClear: (isAllowClear ? isAllowClear : true),
      lazzyLoading: true,
      groupBy: groupbyString,
      badgeShowLimit: 3,
      showCheckbox: singleSelection ? false : true
    };
  }
  setSettingForLocalStorage(params) {
    localStorage.setItem('settingMenu', params);
  }
  getSettingForLocalStorage() {
    return localStorage.getItem('settingMenu');
  }

  gotoBackPage() {
    this.location.back();
  }

  appendCurrentTimeToDate(dateObj) {
    const date = new Date();
    if (isDate(dateObj)) {
      dateObj.setHours(date.getHours());
      dateObj.setMinutes(date.getMinutes());
      dateObj.setSeconds(date.getSeconds());
      return dateObj;
    }
    return dateObj;
  }
  setDecimalPointValue(number: number): number {
    return +number.toFixed(2);
  }
  isEmptyObjectOrNullUndefiend(...value) {
    if (value && value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        if (this.isNullUndefinedOrBlank(value[i]) || this.isEmptyObject(value[i])) {
          return true;
        }
      }
    }
    return false;
  }


  removeDublicateSpaceFromString(str?: string) {
    return str.replace(/\s+/g, ' ');
  }

  setZeroBeforeNumericValue(num: string, size?: number): string {
    if (!size) {
      size = 4;
    }
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }

  isSuccessGetMethodResponse(response) {
    if (!this.isNullUndefinedOrBlank(response) && response !== this.FAIL_REPONSE) {
      return true;
    }
    return false;
  }

  isNumber(value: string | number): boolean {
    return !isNaN(Number(value.toString()));
  }

}