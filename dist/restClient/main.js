(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Auth/Auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/Auth/Auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/utils.service */ "./src/app/shared/service/utils.service.ts");
/* harmony import */ var _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-nav/my-nav.service */ "./src/app/my-nav/my-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { UtilsService } from './../shared/service/utils.service';




var AuthGuard = /** @class */ (function () {
    function AuthGuard(utilsService, homeService, router) {
        this.utilsService = utilsService;
        this.homeService = homeService;
        this.router = router;
    }
    AuthGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        console.log('activedsss');
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        try {
            if (this.utilsService.isAuthenticated()) {
                return true;
            }
            else {
                console.log('here');
                this.homeService.logout();
            }
        }
        catch (error) {
            return false;
        }
        // try {
        //     console.log(route);
        //     if ( route.routeConfig.path === 'work_area') {
        //         if (this.utilsService.isAuthenticated()) {
        //             return true;
        //         } else {
        //             this.homeService.logout();
        //         }
        //     } else {
        //         if (this.utilsService.isAuthenticated()) {
        //             // this.utilsService.signin();
        //         } else {
        //             console.log('this is true');
        //             return true;
        //         }
        //     }
        // } catch (error) {
        //     return false;
        // }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_service_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_3__["MyNavService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Model/User.ts":
/*!*******************************!*\
  !*** ./src/app/Model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cerialize */ "./node_modules/cerialize/index.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "name", {
        /**
         * Getter name
         * @return {string}
         */
        get: function () {
            return this._name;
        },
        /**
         * Setter name
         * @param {string} value
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        /**
         * Getter email
         * @return {string}
         */
        get: function () {
            return this._email;
        },
        /**
         * Setter email
         * @param {string} value
         */
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userName", {
        /**
         * Getter userName
         * @return {string}
         */
        get: function () {
            return this._userName;
        },
        /**
         * Setter userName
         * @param {string} value
         */
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        /**
         * Getter password
         * @return {string}
         */
        get: function () {
            return this._password;
        },
        /**
         * Setter password
         * @param {string} value
         */
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        /**
         * Getter role
         * @return {Array<object>}
         */
        get: function () {
            return this._role;
        },
        /**
         * Setter role
         * @param {Array<object>} value
         */
        set: function (value) {
            this._role = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        /**
         * Getter id
         * @return {string}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {string} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('id'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('id'),
        __metadata("design:type", String)
    ], User.prototype, "_id", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('name'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('name'),
        __metadata("design:type", String)
    ], User.prototype, "_name", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('email'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('email'),
        __metadata("design:type", String)
    ], User.prototype, "_email", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('userName'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('userName'),
        __metadata("design:type", String)
    ], User.prototype, "_userName", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('password'),
        __metadata("design:type", String)
    ], User.prototype, "_password", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('role'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('role'),
        __metadata("design:type", Array)
    ], User.prototype, "_role", void 0);
    return User;
}());



/***/ }),

/***/ "./src/app/Model/UserMaster.ts":
/*!*************************************!*\
  !*** ./src/app/Model/UserMaster.ts ***!
  \*************************************/
/*! exports provided: UserMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMaster", function() { return UserMaster; });
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cerialize */ "./node_modules/cerialize/index.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserMaster = /** @class */ (function () {
    function UserMaster() {
    }
    Object.defineProperty(UserMaster.prototype, "id", {
        /**
         * Getter id
         * @return {string}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {string} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "firstName", {
        /**
         * Getter firstName
         * @return {string}
         */
        get: function () {
            return this._firstName;
        },
        /**
         * Setter firstName
         * @param {string} value
         */
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "lastName", {
        /**
         * Getter lastName
         * @return {string}
         */
        get: function () {
            return this._lastName;
        },
        /**
         * Setter lastName
         * @param {string} value
         */
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "middleName", {
        /**
         * Getter middleName
         * @return {string}
         */
        get: function () {
            return this._middleName;
        },
        /**
         * Setter middleName
         * @param {string} value
         */
        set: function (value) {
            this._middleName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "mobileNo", {
        /**
         * Getter mobileNo
         * @return {string}
         */
        get: function () {
            return this._mobileNo;
        },
        /**
         * Setter mobileNo
         * @param {string} value
         */
        set: function (value) {
            this._mobileNo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "address", {
        /**
         * Getter address
         * @return {string}
         */
        get: function () {
            return this._address;
        },
        /**
         * Setter address
         * @param {string} value
         */
        set: function (value) {
            this._address = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "email", {
        /**
         * Getter email
         * @return {string}
         */
        get: function () {
            return this._email;
        },
        /**
         * Setter email
         * @param {string} value
         */
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "userName", {
        /**
         * Getter userName
         * @return {string}
         */
        get: function () {
            return this._userName;
        },
        /**
         * Setter userName
         * @param {string} value
         */
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "password", {
        /**
         * Getter password
         * @return {string}
         */
        get: function () {
            return this._password;
        },
        /**
         * Setter password
         * @param {string} value
         */
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "confPassword", {
        /**
         * Getter confPassword
         * @return {string}
         */
        get: function () {
            return this._confPassword;
        },
        /**
         * Setter confPassword
         * @param {string} value
         */
        set: function (value) {
            this._confPassword = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMaster.prototype, "role", {
        /**
         * Getter role
         * @return {string}
         */
        get: function () {
            return this._role;
        },
        /**
         * Setter role
         * @param {string} value
         */
        set: function (value) {
            this._role = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('id'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('id'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_id", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('firstName'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('firstName'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_firstName", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('lastName'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('lastName'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_lastName", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('middleName'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('middleName'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_middleName", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('mobileNo'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('mobileNo'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_mobileNo", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('address'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('address'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_address", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('email'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('email'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_email", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('userName'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('userName'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_userName", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('password'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('password'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_password", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('role'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('role'),
        __metadata("design:type", String)
    ], UserMaster.prototype, "_role", void 0);
    return UserMaster;
}());



/***/ }),

/***/ "./src/app/Model/formData.ts":
/*!***********************************!*\
  !*** ./src/app/Model/formData.ts ***!
  \***********************************/
/*! exports provided: FormMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMaster", function() { return FormMaster; });
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cerialize */ "./node_modules/cerialize/index.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormMaster = /** @class */ (function () {
    function FormMaster() {
    }
    Object.defineProperty(FormMaster.prototype, "name", {
        /**
         * Getter name
         * @return {string}
         */
        get: function () {
            return this._name;
        },
        /**
         * Setter name
         * @param {string} value
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMaster.prototype, "email", {
        /**
         * Getter email
         * @return {string}
         */
        get: function () {
            return this._email;
        },
        /**
         * Setter email
         * @param {string} value
         */
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMaster.prototype, "mobileno", {
        /**
         * Getter mobileno
         * @return {string}
         */
        get: function () {
            return this._mobileno;
        },
        /**
         * Setter mobileno
         * @param {string} value
         */
        set: function (value) {
            this._mobileno = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMaster.prototype, "job", {
        /**
         * Getter job
         * @return {string}
         */
        get: function () {
            return this._job;
        },
        /**
         * Setter job
         * @param {string} value
         */
        set: function (value) {
            this._job = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMaster.prototype, "password", {
        /**
         * Getter password
         * @return {string}
         */
        get: function () {
            return this._password;
        },
        /**
         * Setter password
         * @param {string} value
         */
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMaster.prototype, "confpassword", {
        /**
         * Getter confpassword
         * @return {string}
         */
        get: function () {
            return this._confpassword;
        },
        /**
         * Setter confpassword
         * @param {string} value
         */
        set: function (value) {
            this._confpassword = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMaster.prototype, "isAuthenticated", {
        /**
         * Getter isAuthenticated
         * @return {boolean}
         */
        get: function () {
            return this._isAuthenticated;
        },
        /**
         * Setter isAuthenticated
         * @param {boolean} value
         */
        set: function (value) {
            this._isAuthenticated = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('name'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('name'),
        __metadata("design:type", String)
    ], FormMaster.prototype, "_name", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('email'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('email'),
        __metadata("design:type", String)
    ], FormMaster.prototype, "_email", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('mobileno'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('mobileno'),
        __metadata("design:type", String)
    ], FormMaster.prototype, "_mobileno", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('job'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('job'),
        __metadata("design:type", String)
    ], FormMaster.prototype, "_job", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('password'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('password'),
        __metadata("design:type", String)
    ], FormMaster.prototype, "_password", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('confpassword'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('confpassword'),
        __metadata("design:type", String)
    ], FormMaster.prototype, "_confpassword", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('isAuthenticated'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('isAuthenticated'),
        __metadata("design:type", Boolean)
    ], FormMaster.prototype, "_isAuthenticated", void 0);
    return FormMaster;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _router_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router/app-routing.module */ "./src/app/router/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //npm install --save @ng-bootstrap/ng-bootstrap






// import { LayoutModule } from '@angular/cdk/layout';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _router_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                // LayoutModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                // HttpClient,
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] },
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/ResponseWrapperDTO.ts":
/*!*********************************************!*\
  !*** ./src/app/model/ResponseWrapperDTO.ts ***!
  \*********************************************/
/*! exports provided: ResponseWrapperDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseWrapperDTO", function() { return ResponseWrapperDTO; });
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cerialize */ "./node_modules/cerialize/index.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponseWrapperDTO = /** @class */ (function () {
    function ResponseWrapperDTO() {
    }
    Object.defineProperty(ResponseWrapperDTO.prototype, "data", {
        /**
         * Getter data
         * @return {object}
         */
        get: function () {
            return this._data;
        },
        /**
         * Setter data
         * @param {object} value
         */
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseWrapperDTO.prototype, "status", {
        /**
         * Getter status
         * @return {number}
         */
        get: function () {
            return this._status;
        },
        /**
         * Setter status
         * @param {number} value
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseWrapperDTO.prototype, "message", {
        /**
         * Getter message
         * @return {string}
         */
        get: function () {
            return this._message;
        },
        /**
         * Setter message
         * @param {string} value
         */
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseWrapperDTO.prototype, "path", {
        /**
         * Getter path
         * @return {string}
         */
        get: function () {
            return this._path;
        },
        /**
         * Setter path
         * @param {string} value
         */
        set: function (value) {
            this._path = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseWrapperDTO.prototype, "error", {
        /**
         * Getter error
         * @return {string}
         */
        get: function () {
            return this._error;
        },
        /**
         * Setter error
         * @param {string} value
         */
        set: function (value) {
            this._error = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseWrapperDTO.prototype, "isResponseOnPage", {
        /**
         * Getter isResponseOnPage
         * @return {boolean}
         */
        get: function () {
            return this._isResponseOnPage;
        },
        /**
         * Setter isResponseOnPage
         * @param {boolean} value
         */
        set: function (value) {
            this._isResponseOnPage = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('status'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('status'),
        __metadata("design:type", Number)
    ], ResponseWrapperDTO.prototype, "_status", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('message'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('message'),
        __metadata("design:type", String)
    ], ResponseWrapperDTO.prototype, "_message", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('path'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('path'),
        __metadata("design:type", String)
    ], ResponseWrapperDTO.prototype, "_path", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('error'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('error'),
        __metadata("design:type", String)
    ], ResponseWrapperDTO.prototype, "_error", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('data'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('data'),
        __metadata("design:type", Object)
    ], ResponseWrapperDTO.prototype, "_data", void 0);
    __decorate([
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["serializeAs"])('isResponseOnPage'),
        Object(cerialize__WEBPACK_IMPORTED_MODULE_0__["deserializeAs"])('isResponseOnPage'),
        __metadata("design:type", Boolean)
    ], ResponseWrapperDTO.prototype, "_isResponseOnPage", void 0);
    return ResponseWrapperDTO;
}());



/***/ }),

/***/ "./src/app/my-nav/Customer/create-customer/create-customer.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/my-nav/Customer/create-customer/create-customer.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW5hdi9DdXN0b21lci9jcmVhdGUtY3VzdG9tZXIvY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-nav/Customer/create-customer/create-customer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/my-nav/Customer/create-customer/create-customer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-nav/Customer/create-customer/create-customer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/my-nav/Customer/create-customer/create-customer.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-customer.service */ "./src/app/my-nav/Customer/create-customer/create-customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(createCustomerService) {
        this.createCustomerService = createCustomerService;
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/my-nav/Customer/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/my-nav/Customer/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_create_customer_service__WEBPACK_IMPORTED_MODULE_1__["CreateCustomerService"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/Customer/create-customer/create-customer.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/my-nav/Customer/create-customer/create-customer.service.ts ***!
  \****************************************************************************/
/*! exports provided: CreateCustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerService", function() { return CreateCustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateCustomerService = /** @class */ (function () {
    function CreateCustomerService() {
    }
    CreateCustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CreateCustomerService);
    return CreateCustomerService;
}());



/***/ }),

/***/ "./src/app/my-nav/Customer/customer-list/customer-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/my-nav/Customer/customer-list/customer-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW5hdi9DdXN0b21lci9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-nav/Customer/customer-list/customer-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/my-nav/Customer/customer-list/customer-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row page-titles\">\r\n  <div class=\"col-md-5 col-8 align-self-center\">\r\n    <h3 class=\"text-themecolor\">Customer</h3>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a >Home</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">Customers</li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-md-7 col-4 align-self-center\">\r\n    <div class=\"d-flex m-t-10 justify-content-end\">\r\n      <div class=\"d-flex m-r-20 m-l-10 hidden-md-down\">\r\n        <div class=\"chart-text m-r-10\">\r\n          <button class=\"btn btn-info\" [routerLink]=\"['/home/work_area/item/item/create']\">\r\n            <i class=\"ti-plus\"></i> New</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"float-left form-inline\"> \r\n            <!-- viewItemService.paginationRequest. -->\r\n          <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search Items..\" class=\"form-control\">\r\n            <!-- (ngModelChange)=\"viewItemService.getAllItems(undefined , viewItemService.paginationRequest.searchText)\"> -->\r\n        </div>\r\n        <div class=\"float-right\">\r\n            <!-- {{viewItemService.paginationResponse.totalElements}} -->\r\n          <label>Total Count : 10</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body no-padding\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table color-table info-table cursor_pointer\">\r\n            <thead>\r\n              <tr>\r\n                <th>#No</th>\r\n                <!-- (click)=\"viewItemService.getAllItems(th.keyName)\" -->\r\n                <th>\r\n                  First Name\r\n                </th>\r\n                <th>\r\n                  Last Name\r\n                </th>\r\n                <th>\r\n                  Email\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!-- viewItemService.allItem (dblclick)=\"viewItemService.goToItemDetailsPage(item.id)\" -->\r\n              <tr *ngFor=\"let item of customers\" >\r\n                <!-- <td>{{(+viewItemService.paginationResponse.startPos) + i}}</td> -->\r\n                <td>{{item.id}}</td>\r\n                <td>{{item.firstName}}</td>\r\n                <td>{{item.lastName}}</td>\r\n                <td>{{item.email}}</td>\r\n                <!-- <td class=\"anchor-group\">\r\n                  <a class=\"text-info\" (click)=\"viewItemService.goToEdit(item.id)\">\r\n                    <i class=\"ti-pencil-alt\"></i>\r\n                  </a>\r\n                  <a class=\"text-danger\" title=\"Delete\" data-toggle=\"modal\" data-target=\"#deleteItem\" (click)=\"viewItemService.removeItem(item.id)\">\r\n                    <i class=\"ti-trash\"></i>\r\n                  </a>\r\n                </td> -->\r\n              </tr>\r\n              <!-- <tr *ngIf=\"viewItemService.allItem.length <= 0\">\r\n                <td colspan=\"5\">\r\n                  {{utilsService.serverVariableService.STRING_WHEN_NO_RECORDS_FOUND}}\r\n                </td>\r\n              </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"card-footer\" \r\n      *ngIf=\"viewItemService.paginationResponse.totalElements > viewItemService.paginationRequest.minimumPerPage\">\r\n        <div class=\"float-left\">\r\n          <div class=\"record\">\r\n            <div class=\"float-left page_dropdown\" *ngIf=\"viewItemService.paginationResponse.pageArray.length > 0\">\r\n              <techhive-multiselect [data]=\"viewItemService.paginationResponse.pageArray\" [settings]=\"utilsService.serverVariableService.dropdownSettingForPageOfPagination\"\r\n                [(ngModel)]=\"viewItemService.paginationRequest.pageNumber\" (onSelect)=\"viewItemService.changePage()\">\r\n              </techhive-multiselect>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"paginations_list float-right\">\r\n          <ul>\r\n            <li class=\"record\" *ngIf=\"viewItemService.paginationRequest.noOfRecordPerPageArray.length > 0\">\r\n              <techhive-multiselect [data]=\"viewItemService.paginationRequest.noOfRecordPerPageArray\" [settings]=\"utilsService.serverVariableService.dropdownSettingForRecordOfPagination\"\r\n                [(ngModel)]=\"viewItemService.paginationRequest.noOfRecords\" (onSelect)=\"viewItemService.changeNoOfRecord()\">\r\n              </techhive-multiselect>\r\n            </li>\r\n            <li class=\"prev\">\r\n              <button class=\"btn btn-primary\" [disabled]=\"viewItemService.paginationResponse.first\" (click)=\"viewItemService.getPreviousData()\">\r\n                <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </li>\r\n            <li class=\"pagination-number\">\r\n              <a>\r\n                {{+viewItemService.paginationResponse.startPos}}-{{ +viewItemService.paginationResponse.endPos}}\r\n              </a>\r\n            </li>\r\n            <li class=\"next\">\r\n              <button class=\"btn btn-primary\" [disabled]=\"viewItemService.paginationResponse.last\" (click)=\"viewItemService.getNextData()\">\r\n                <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div id=\"deleteItem\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    Modal content\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>{{utilsService.CONFIRM_MSG_FOR_DELETE}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"viewItemService.deleteItem()\" data-dismiss=\"modal\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/my-nav/Customer/customer-list/customer-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/my-nav/Customer/customer-list/customer-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list.service */ "./src/app/my-nav/Customer/customer-list/customer-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(_customerService, _router) {
        this._customerService = _customerService;
        this._router = _router;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/my-nav/Customer/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/my-nav/Customer/customer-list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_list_service__WEBPACK_IMPORTED_MODULE_1__["CustomerListService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/Customer/customer-list/customer-list.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/my-nav/Customer/customer-list/customer-list.service.ts ***!
  \************************************************************************/
/*! exports provided: CustomerListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListService", function() { return CustomerListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http, RequestOptions } from '@angular/http';




var CustomerListService = /** @class */ (function () {
    function CustomerListService(_http) {
        this._http = _http;
    }
    CustomerListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CustomerListService);
    return CustomerListService;
}());



/***/ }),

/***/ "./src/app/my-nav/Customer/customer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/my-nav/Customer/customer.module.ts ***!
  \****************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/my-nav/Customer/customer-list/customer-list.component.ts");
/* harmony import */ var _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-customer/create-customer.component */ "./src/app/my-nav/Customer/create-customer/create-customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routesForItem = [
    { path: '', redirectTo: 'view-customer', pathMatch: 'full' },
    {
        path: 'view-customer', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomerListComponent"]
    },
    {
        path: 'customer/:operation', component: _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_4__["CreateCustomerComponent"]
    },
];
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routesForItem)
            ],
            providers: [],
            declarations: [_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_4__["CreateCustomerComponent"], _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomerListComponent"]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/my-nav/dashbaord/dashbaord.component.css":
/*!**********************************************************!*\
  !*** ./src/app/my-nav/dashbaord/dashbaord.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW5hdi9kYXNoYmFvcmQvZGFzaGJhb3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-nav/dashbaord/dashbaord.component.html":
/*!***********************************************************!*\
  !*** ./src/app/my-nav/dashbaord/dashbaord.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-12 col-md-12\">\r\n        <div class=\"card-body text-center m-t-20 m-b-20\">\r\n          <h1>RadheKrishna Software: </h1>\r\n          <h4> </h4>\r\n        </div>\r\n      </div>\r\n      <!-- Column -->\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex flex-row\">\r\n              <div class=\"round round-lg align-self-center round-info\">\r\n                <i class=\"ti-wallet\"></i>\r\n              </div>\r\n              <div class=\"m-l-10 align-self-center\">\r\n                <h3 class=\"m-b-0 font-light\">\r\n                  <i class=\"fa fa-rupee-sign font17\"></i> 3249</h3>\r\n                <h5 class=\"text-muted m-b-0\">Total Visitors</h5>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Column -->\r\n      <!-- Column -->\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex flex-row\">\r\n              <div class=\"round round-lg align-self-center round-warning\">\r\n                <i class=\"mdi mdi-cellphone-link\"></i>\r\n              </div>\r\n              <div class=\"m-l-10 align-self-center\">\r\n                <h3 class=\"m-b-0 font-lgiht\">2376</h3>\r\n                <h5 class=\"text-muted m-b-0\">Total Users</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Column -->\r\n      <!-- Column -->\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex flex-row\">\r\n              <div class=\"round round-lg align-self-center round-primary\">\r\n                <i class=\"mdi mdi-cart-outline\"></i>\r\n              </div>\r\n              <div class=\"m-l-10 align-self-center\">\r\n                <h3 class=\"m-b-0 font-lgiht\">340</h3>\r\n                <h5 class=\"text-muted m-b-0\">Total Sales</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Column -->\r\n      <!-- Column -->\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex flex-row\">\r\n              <div class=\"round round-lg align-self-center round-danger\">\r\n                <i class=\"mdi mdi-bullseye\"></i>\r\n              </div>\r\n              <div class=\"m-l-10 align-self-center\">\r\n                <h3 class=\"m-b-0 font-lgiht\">\r\n                  <i class=\"fa fa-rupee-sign font17\"></i> 687</h3>\r\n                <h5 class=\"text-muted m-b-0\">Total Orders</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Column -->\r\n    </div>"

/***/ }),

/***/ "./src/app/my-nav/dashbaord/dashbaord.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-nav/dashbaord/dashbaord.component.ts ***!
  \*********************************************************/
/*! exports provided: DashbaordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbaordComponent", function() { return DashbaordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashbaordComponent = /** @class */ (function () {
    function DashbaordComponent() {
    }
    DashbaordComponent.prototype.ngOnInit = function () {
    };
    DashbaordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashbaord',
            template: __webpack_require__(/*! ./dashbaord.component.html */ "./src/app/my-nav/dashbaord/dashbaord.component.html"),
            styles: [__webpack_require__(/*! ./dashbaord.component.css */ "./src/app/my-nav/dashbaord/dashbaord.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashbaordComponent);
    return DashbaordComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW5hdi9teS1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\r\n  <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n      <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n              <b>\r\n                    <!-- {{utilsService.isUnsavedFromDetected}} -->\r\n                  <span class=\"text-white\">RadheKrishna Admin  </span>\r\n              </b>\r\n              <!-- <b><img src=\"assets/images/logo.png\" alt=\"homepage\" /> </b> -->\r\n          </a>\r\n      </div>\r\n      <!-- End Logo -->\r\n      <div class=\"navbar-collapse\">\r\n          <!-- toggle and nav items -->\r\n          <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n              <!-- This is  -->\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark\">\r\n                      <i class=\"mdi mdi-menu\"></i>\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark\">\r\n                      <i class=\"ti-menu\"></i>\r\n                  </a>\r\n              </li>\r\n              <!-- ============================================================== -->\r\n              <!-- Search -->\r\n              <!-- ============================================================== -->\r\n              <li class=\"nav-item hidden-sm-down search-box\">\r\n                  <a class=\"nav-link hidden-sm-down text-muted waves-effect waves-dark\">\r\n                      <i class=\"ti-search\"></i>\r\n                  </a>\r\n                  <form class=\"app-search\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\">\r\n                      <a class=\"srh-btn\">\r\n                          <i class=\"ti-close\"></i>\r\n                      </a>\r\n                  </form>\r\n              </li>\r\n          </ul>\r\n          <!-- User profile and search -->\r\n          <ul class=\"navbar-nav my-lg-0\">\r\n              <!-- Profile -->\r\n              <li class=\"nav-item\">\r\n                    <!-- (click)=\"openSettings()\"   [routerLink]=\"[ '/home/work_area/setting/setting/organization-profile']\" -->\r\n                  <a  class=\"nav-link\" title=\"Settings\">\r\n                      <i class=\"ti-settings\"></i>\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item dropdown\">\r\n                  <a class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                      aria-expanded=\"false\">\r\n                      <img src=\"assets/img/users.png\" alt=\"user\" class=\"profile-pic\" />\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right scale-up\">\r\n                      <ul class=\"dropdown-user\">\r\n                          <li>\r\n                              <div class=\"dw-user-box\">\r\n                                  <div class=\"u-img\">\r\n                                      <img src=\"assets/img/users.png\" alt=\"user\">\r\n                                  </div>\r\n                                  <div class=\"u-text\">\r\n                                      <h4>{{myNavService.user.name?myNavService.user.name:'----'}}</h4>\r\n                                      <p class=\"text-muted\">{{myNavService.user.email?myNavService.user.email:'----'}}</p>\r\n                                      <a class=\"btn btn-rounded btn-danger btn-sm\">View Profile</a>\r\n                                  </div>\r\n                              </div>\r\n                          </li>\r\n                          <li role=\"separator\" class=\"divider\"></li>\r\n                          <li>\r\n                              <a>\r\n                                  <i class=\"ti-settings\"></i> Master Setting</a>\r\n                          </li>\r\n                          <li role=\"separator\" class=\"divider\"></li>\r\n                          <!-- (click)=\"homeService.logout()\" -->\r\n                          <li >\r\n                              <a (click)=\"myNavService.logout()\">\r\n                                  <i class=\"fa fa-power-off\"></i> Logout</a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </li>\r\n\r\n          </ul>\r\n      </div>\r\n  </nav>\r\n</header>\r\n<!-- Top header End -->\r\n\r\n\r\n<!-- Sidebar -->\r\n\r\n<aside class=\"left-sidebar\">\r\n  <!-- Sidebar scroll-->\r\n  <div class=\"scroll-sidebar\">\r\n      <!-- Sidebar navigation--> \r\n      <nav class=\"sidebar-nav\">\r\n            <!-- [hidden]=\"utilsService.showSettingsmenu\" -->\r\n          <ul  id=\"sidebarnav\">\r\n              <li>\r\n                  <a [routerLink]=\"['dashboard']\" [routerLinkActive]=\"['active']\" class=\"waves-effect waves-dark\" [routerLinkActive]=\"['active']\">\r\n                      <i class=\"mdi mdi-chart-bubble\"></i>\r\n                      <span class=\"hide-menu\">Dashboard</span>\r\n                  </a>\r\n              </li>\r\n              <li>\r\n                  <a [routerLink]=\"['customer/view-customer']\" [routerLinkActive]=\"['active']\" class=\"waves-effect waves-dark\" [routerLinkActive]=\"['active']\">\r\n                      <i class=\"mdi mdi-chart-bubble\"></i>\r\n                      <span class=\"hide-menu\"> Customer </span>\r\n                  </a>\r\n              </li>\r\n             \r\n          </ul>\r\n      </nav>\r\n      <!-- End Sidebar navigation -->\r\n  </div>\r\n  <!-- End Sidebar scroll-->\r\n  <!-- Bottom points-->\r\n  <div class=\"sidebar-footer\">\r\n      <a class=\"link width100\">\r\n          Version 1.9\r\n      </a>\r\n  </div>\r\n  <!-- End Bottom points-->\r\n</aside>\r\n\r\n<!-- page wrapper -->\r\n\r\n<!-- page wrapper -->\r\n<div class=\"page-wrapper\">\r\n  <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n      <!-- <div class=\"lazyloader\" [hidden]=\"utilsService.loaderStart <= 0\"> -->\r\n      <!-- <div class=\"lazyloader\" [hidden]=\"utilsService.loaderStart <= 0\">\r\n          <div class=\"loaderinner\">\r\n              <div class=\"loader\"></div>\r\n          </div>\r\n      </div> -->\r\n      <footer class=\"footer\"> © 2018 Developed by TechHive </footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/utils.service */ "./src/app/shared/service/utils.service.ts");
/* harmony import */ var _my_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-nav.service */ "./src/app/my-nav/my-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(utilsService, myNavService) {
        this.utilsService = utilsService;
        this.myNavService = myNavService;
    }
    MyNavComponent.prototype.ngOnInit = function () {
        this.myNavService.getUserProfile();
    };
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"], _my_nav_service__WEBPACK_IMPORTED_MODULE_2__["MyNavService"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.module.ts":
/*!*****************************************!*\
  !*** ./src/app/my-nav/my-nav.module.ts ***!
  \*****************************************/
/*! exports provided: loadCustomerModule, MyNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCustomerModule", function() { return loadCustomerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavModule", function() { return MyNavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _my_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _Auth_Auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Auth/Auth-guard.service */ "./src/app/Auth/Auth-guard.service.ts");
/* harmony import */ var _dashbaord_dashbaord_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashbaord/dashbaord.component */ "./src/app/my-nav/dashbaord/dashbaord.component.ts");
/* harmony import */ var _Customer_customer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Customer/customer.module */ "./src/app/my-nav/Customer/customer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';





function loadCustomerModule() {
    return _Customer_customer_module__WEBPACK_IMPORTED_MODULE_6__["CustomerModule"];
}
var routes = [
    { path: '', redirectTo: 'work_area', pathMatch: 'full' },
    {
        path: 'work_area', component: _my_nav_component__WEBPACK_IMPORTED_MODULE_3__["MyNavComponent"], canActivate: [_Auth_Auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _dashbaord_dashbaord_component__WEBPACK_IMPORTED_MODULE_5__["DashbaordComponent"] },
            { path: 'customer', loadChildren: loadCustomerModule }
        ]
    }
];
var MyNavModule = /** @class */ (function () {
    function MyNavModule() {
    }
    MyNavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _my_nav_component__WEBPACK_IMPORTED_MODULE_3__["MyNavComponent"],
                _dashbaord_dashbaord_component__WEBPACK_IMPORTED_MODULE_5__["DashbaordComponent"],
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MyNavModule);
    return MyNavModule;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.service.ts":
/*!******************************************!*\
  !*** ./src/app/my-nav/my-nav.service.ts ***!
  \******************************************/
/*! exports provided: MyNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavService", function() { return MyNavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/utils.service */ "./src/app/shared/service/utils.service.ts");
/* harmony import */ var _Model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/User */ "./src/app/Model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNavService = /** @class */ (function () {
    function MyNavService(utilsService) {
        this.utilsService = utilsService;
        this.name = "savan";
        this.user = new _Model_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.menuList = [
            { 'menuName': 'Dashboard', 'url': '' },
            { 'menuName': 'About Us', 'url': '' },
            { 'menuName': 'Contact Us', 'url': '' }
        ];
    }
    MyNavService.prototype.getUserProfile = function () {
        // if (this.user.mapOfOtherDetails && this.user.mapOfOtherDetails['nameOfUserType']) {
        // this.profileUrl = '/home/work_area/staff/profile';
        // }
        console.log(this.utilsService.getUserFromLocalStorage());
        this.user = this.utilsService.getUserFromLocalStorage();
        console.log(this.user.name);
    };
    MyNavService.prototype.logout = function () {
        localStorage.removeItem('users');
        localStorage.removeItem('token');
        // localStorage.removeItem('settingMenu');
        localStorage.removeItem('isAuthenticate');
        // this.router.navigate(['/signup/login']);
        this.utilsService.redirectTo('/signup-login/signup/login');
    };
    MyNavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_service_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])
    ], MyNavService);
    return MyNavService;
}());



/***/ }),

/***/ "./src/app/router/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/router/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: loadSignUpModule, loadHomeModule, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSignUpModule", function() { return loadSignUpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomeModule", function() { return loadHomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signin_signup_signin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup-signin/signup-signin.module */ "./src/app/signup-signin/signup-signin.module.ts");
/* harmony import */ var _my_nav_my_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-nav/my-nav.module */ "./src/app/my-nav/my-nav.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function loadSignUpModule() {
    return _signup_signin_signup_signin_module__WEBPACK_IMPORTED_MODULE_3__["SignupSigninModule"];
}
function loadHomeModule() {
    return _my_nav_my_nav_module__WEBPACK_IMPORTED_MODULE_4__["MyNavModule"];
}
var routes = [
    { path: '', redirectTo: 'signup-login', pathMatch: 'full' },
    { path: 'signup-login', loadChildren: loadSignUpModule },
    { path: 'home', loadChildren: loadHomeModule },
    { path: '**', redirectTo: '404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {})
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/pipe/KeysPipe.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/pipe/KeysPipe.ts ***!
  \*****************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value); //.map(key => value[key]);
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "keys", pure: false })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/OrderBy.ts":
/*!****************************************!*\
  !*** ./src/app/shared/pipe/OrderBy.ts ***!
  \****************************************/
/*! exports provided: OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderBy = /** @class */ (function () {
    function OrderBy() {
    }
    OrderBy.prototype.transform = function (obj, _a) {
        var _b = _a[0], fieldName = _b === void 0 ? '+' : _b;
        var isDescendingOrder = false;
        if (fieldName.indexOf('-') >= 0) {
            fieldName = fieldName.substr(1);
            isDescendingOrder = true;
        }
        if (!Array.isArray(obj)) {
            return obj;
        }
        if (!Array.isArray(fieldName) || (Array.isArray(fieldName) && fieldName.length === 1)) {
            // Descending
            if (isDescendingOrder) {
                if ($.isNumeric(obj[0][fieldName])) {
                    return obj.slice().sort(function (a, b) { return b[fieldName] - a[fieldName]; });
                }
                return obj.slice().sort(function (a, b) { return b[fieldName].localeCompare(a[fieldName]); });
            }
            // Ascending
            if ($.isNumeric(obj[0][fieldName])) {
                return obj.slice().sort(function (a, b) { return a[fieldName] - b[fieldName]; });
            }
            return obj.slice().sort(function (a, b) { return a[fieldName].localeCompare(b[fieldName]); });
        }
    };
    OrderBy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'orderBy' })
    ], OrderBy);
    return OrderBy;
}());

// Example: http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/


/***/ }),

/***/ "./src/app/shared/pipe/order-by-date.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipe/order-by-date.pipe.ts ***!
  \***************************************************/
/*! exports provided: OrderByDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByDatePipe", function() { return OrderByDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import * as _ from 'lodash';

var OrderByDatePipe = /** @class */ (function () {
    function OrderByDatePipe() {
    }
    OrderByDatePipe.prototype.transform = function (array, args) {
        if (!array || array === undefined || array.length === 0) {
            return null;
        }
        array.sort(function (a, b) {
            var fd = a.createdDate;
            var ffd = new Date(fd);
            var sd = b.createdDate;
            var fsd = new Date(sd);
            if (args === 'lifo') {
                if (ffd < fsd) {
                    return 1;
                }
                else if (ffd > fsd) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (ffd > fsd) {
                    return 1;
                }
                else if (ffd < fsd) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        });
        return array;
    };
    OrderByDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'OrderByDate'
        }),
        __metadata("design:paramtypes", [])
    ], OrderByDatePipe);
    return OrderByDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/show-noti-time.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipe/show-noti-time.ts ***!
  \***********************************************/
/*! exports provided: ShowNotiTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowNotiTimePipe", function() { return ShowNotiTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import * as _ from 'lodash';

var ShowNotiTimePipe = /** @class */ (function () {
    function ShowNotiTimePipe() {
    }
    ShowNotiTimePipe.prototype.transform = function (Dbdate, args) {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var newDBdate = new Date(Dbdate.toString());
        var dbDay = newDBdate.getDate();
        var dbMonth = newDBdate.getMonth() + 1;
        var dbYear = newDBdate.getFullYear();
        if (date === dbDay && month === dbMonth && year === dbYear) {
            return newDBdate.toLocaleTimeString();
        }
        else {
            return newDBdate.toLocaleString();
        }
    };
    ShowNotiTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ShowNotiTime'
        }),
        __metadata("design:paramtypes", [])
    ], ShowNotiTimePipe);
    return ShowNotiTimePipe;
}());



/***/ }),

/***/ "./src/app/shared/service/server-variable.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/service/server-variable.service.ts ***!
  \***********************************************************/
/*! exports provided: ServerVariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerVariableService", function() { return ServerVariableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerVariableService = /** @class */ (function () {
    /* End  */
    function ServerVariableService() {
        this.API = 'API';
        this.statusOfActionForNEW = 'new';
        this.statusOfActionForAppoinment = 'appoinment';
        this.USER_FOR_LOCAL_STORAGE = 'users';
        this.IMAGE_PREFIX_URL = 'http://192.168.2.230:8088/clinic_management/';
        /*Other API */
        this.loginAPI = 'login';
        this.FAIL_IMAGE_UPLOAD_RESULT = 'FAIL IMAGE UPLOAD';
        this.registerHospitalMasterAPI = 'registerHospitalMaster';
        this.addHospitalMasterAPI = 'addHospitalMaster';
        this.uploadimageAPI = 'uploadimage';
        this.uploadimageFromBase64API = 'uploadimageFromBase64';
        this.uploadUserProfileAPI = 'uploadUserProfile';
        this.registerDoctorAPI = 'registerDoctor';
        this.checkforgotPasswordAPI = 'checkforgotPassword';
        this.forgotPasswordAPI = 'forgotPassword';
        this.addChangePasswordAPI = 'addChangePassword';
        this.getDetailsForAngularDropDownAPI = 'getDetailsForAngularDropDown';
        this.registerUserAPI = 'registerUser';
        this.registerDoctorByParentAPI = 'registerDoctorByParent';
        this.addPatientAPI = 'addPatient';
        this.updatePatientAPI = 'updatePatient';
        this.getAllDropDownForstaffAPI = 'getDataForNewStaff';
        this.getAllDropDownForDoctorAPI = 'getDataForNewDoctor';
        this.getAllDropDownForPatientAPI = 'getDataForNewPatient';
        this.getDropdownDetailForCaseMasterAPI = 'getDropdownDetailForCaseMaster';
        this.getDetailsForAngularDropDownForAddClinicAPI = 'getDetailsForAngularDropDownForAddClinic';
        // API for getCategoryMaster Name;
        this.getCategoryMasterNameAPI = 'getCategoryMasterName';
        // static
        this.getAllHospitalMasterNameAndIdByUserIdAPI = 'getAllHospitalMasterNameAndIdByUserId';
        /*Get all API */
        this.customer = "customer";
        this.arrayOfapiNameToExcludeToken = ['auth/signin', 'auth/signup'];
        this.getAllUserWithUserRoleAPI = 'getAllUserWithUserRole';
        this.getAllCountryMastersAPI = 'getAllCountryMasters';
        this.getAllStateMastersByCountryIdAPI = 'getAllStateMastersByCountryId';
        this.getAllCityMastersByStateIdAPI = 'getAllCityMastersByStateId';
        this.lazzyLoadingForGetAllPatientsAPI = 'lazzyLoadingForGetAllPatients';
        this.getDetailsForAngularDropDownForTimeSlotAPI = 'getDetailsForAngularDropDownForTimeSlot';
        /* Mixed API */
        this.getMaxIdAPI = 'getMaxId';
        this.getDoctorsOfGivenUserIdWithLazzyLoadingAPI = 'getDoctorsOfGivenUserIdWithLazzyLoading';
        this.getUsersByTypeAndIdWithLazzyLoadingAPI = 'getUsersByTypeAndIdWithLazzyLoading';
        this.getStaffsOfGivenUserIdWithLazzyLoadingAPI = 'getStaffsOfGivenUserIdWithLazzyLoading';
        this.addStaffAPI = 'addStaff';
        this.updateStaffAPI = 'updateStaff';
        this.getHospitalMastersByUserIdWithLazzyLoadingAPI = 'getHospitalMastersByUserIdWithLazzyLoading';
        /*Get By Id API */
        this.getDropDownMenuDetailAPI = 'getDropDownMenuDetail';
        this.getAllMenuForUserRoleRightsAPI = 'getAllMenuForUserRoleRights';
        this.getAllStateMastersOfIndiaAPI = 'getAllStateMastersOfIndia';
        /* save API */
        this.saveUserAPI = 'saveUser';
        this.loginCheckAPI = 'loginCheck';
        this.deleteContentByIdAPI = 'deleteContentById';
        /* Search Api  */
        this.serachPatientByNameAndMobileNoAPI = 'serachPatientByNameAndMobileNo';
        /* update  API */
        this.updateForSpecialistMasterAPI = 'updateForSpecialistMaster';
        /* lazzyLoading API */
        this.lazzyLoadingForSpecialistMasterAPI = 'lazzyLoadingForSpecialistMaster';
        /* Delete Record API  */
        this.removeByIdForSpecialistMasterAPI = 'removeByIdForSpecialistMaster';
        /* List table name  */
        this.TABLE_NAME_FOR_USER_MASTER = 'tblUserMaster';
        this.TABLE_NAME_FOR_CITY = 'tblCityMaster';
        this.TABLE_NAME_FOR_STATE = 'tblStateMaster';
        this.TABLE_NAME_FOR_USER_ROLE = 'tblUserRole';
        this.TABLE_NAME_FOR_MENU_DETAILS = 'tblMenuDetails';
        this.TABLE_NAME_FOR_USER_TYPE = 'tblUserType';
        this.TABLE_NAME_FOR_HOSPITAL_MASTER = 'tblHospitalMaster';
        this.TABLE_NAME_FOR_CATEGORY_MASTER = 'tblCategoryMaster';
        this.TABLE_NAME_FOR_SPECIALIST_MASTER = 'tblSpecialistMaster';
        this.TABLE_NAME_FOR_DOCTOR_SERVICE_MASTER = 'tblDoctorServiceMaster';
        this.TABLE_NAME_FOR_HOSPITAL_SERVICE_MASTER = 'tblHospitalServiceMaster';
        this.TABLE_NAME_FOR_CASE = 'tblStateMaster';
        this.TABLE_NAME_FOR_FEES = 'tblFees';
        /*list Of Socket API */
        this.SEND_SOCKET_LOGIN = 'socketLogin';
        this.RESPONSE_SOCKET_LOGIN = 'socketLoginResponse/';
        this.RESPONSE_SOCKET_PROFILE_IMAGE_UPLOAD = 'socketUploadProfileResponse/';
        this.SEND_SOCKET_LOGOUT = 'socketLogout';
        this.RESPONSE_SOCKET_LOGOUT = 'socketLogoutResponse/';
        /** FOR ADD NEW VARIABLE  */
        this.PATIENT_MODEL_ID = 'Patient';
        this.dropdownSettingForPageOfPagination = {
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
        this.dropdownSettingForRecordOfPagination = {
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
    }
    /**
    * Setting OF Techhive multiselect
    * @param singleSelection // this parmas is define dropdown Allow Single Or Multiple.
    * @param NameOfPlaceHolder // this params is define placeholder of dropdown.
    * @param isDisabled // pass TRUE or FALSE for Disabled Dropdowm.
    * @param isAllowClear // pass FALSE if You Don't Want To  CLEAR SELCTION Of Dropdown.
    */
    ServerVariableService.prototype.setSettingForDropDown = function (singleSelection, NameOfPlaceHolder, isDisabled, isAllowClear) {
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
    };
    /* parent-child drop down setting */
    ServerVariableService.prototype.setSettingForDropDownParentChild = function (singleSelection, NameOfPlaceHolder) {
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
    };
    ServerVariableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ServerVariableService);
    return ServerVariableService;
}());



/***/ }),

/***/ "./src/app/shared/service/utils.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/service/utils.service.ts ***!
  \*************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cerialize */ "./node_modules/cerialize/index.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_variable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-variable.service */ "./src/app/shared/service/server-variable.service.ts");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation.service */ "./src/app/shared/service/validation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_ResponseWrapperDTO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/ResponseWrapperDTO */ "./src/app/model/ResponseWrapperDTO.ts");
/* harmony import */ var _Model_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Model/User */ "./src/app/Model/User.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PaginationResponse } from '../../model/PaginationResponse';
// import { PaginationRequest } from '../../model/PaginationRequest';






// import { NotificationsService } from 'angular2-notifications'; //npm install angular2-notifications


// import { OrganizationProfile } from '../../model/master/OrganizationProfile';
// import { ToasterConfig, ToasterService } from 'angular2-toaster'; //npm install angular2-toaster

// import * as pdfMake from 'pdfmake/build/pdfmake.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import * as html2canvas from 'html2canvas';
var UtilsService = /** @class */ (function () {
    function UtilsService(router, 
    // public _service: NotificationsService,
    http, serverVariableService, validationService, 
    // public toasterService: ToasterService,
    location) {
        this.router = router;
        this.http = http;
        this.serverVariableService = serverVariableService;
        this.validationService = validationService;
        this.location = location;
        this.SUCCESS_REPONSE = 'success';
        this.UNAPPLICABLE = 'UNAPPLICABLE';
        this.FAIL_REPONSE = 'fail';
        this.todayDate = new Date();
        this.yesterdayDate = new Date(new Date().getTime() - 60 * 60 * 24 * 1000);
        this.tommorrowDate = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
        this.ml = 2;
        this.USER_PROFILE_PIC_URL = '';
        // USER_PROFILE_PIC_URL = 'http://auroradiam.com:8088/clinic_management/' + this.getUserId() + '.jpg';
        /***
         * links for local PC
         */
        // URL = 'http://192.168.2.57:1337/';
        this.URL = 'http://192.168.43.47:8080/api/';
        // SOCKET_URL = 'http://192.168.2.52:8080/clinicSocketConnections';
        this.ALREADY_AVAILABLE_RESULT = 'Already Available';
        this.INVALID_START_DATE = 'invalid start date';
        this.DELETE_RECORD = 'Successfully record deleted.';
        this.CONFIRM_MSG_FOR_DELETE = 'Are you sure you want to delete this record ?';
        // CONFIRM_MSG_FOR_VALID_NET_WEIGHT = 'Are you sure you want to save this record ?';
        this.LEAVE_THIS_PAGE = 'Are you sure you want to leave this page ?';
        this.loaderStart = 0;
        this.checkGSTnumber = new RegExp('[0-9]{2}[A-Za-z]{5}[0-9]{4}[a-zA-Z][0-9]{1}[a-zA-Z]{1}[a-zA-Z0-9]{1}');
        this.checkForMongoId = new RegExp('^[0-9a-fA-F]{24}$');
        this.postMethod = 'POST';
        this.getMethod = 'GET';
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
    UtilsService.prototype.fileSave = function () {
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
    };
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
    UtilsService.prototype.removeEmptyElementsFromArray = function (test_array) {
        var index = -1;
        var arr_length = test_array ? test_array.length : 0;
        var resIndex = -1;
        var result = [];
        while (++index < arr_length) {
            var id = test_array[index];
            if (id) {
                result[++resIndex] = id;
            }
        }
        return result;
    };
    /*
    *
    * Used to check if object ios empaty or not..!
    * @param obj = 'indecated object which you want to check'
    * return true if empty..!
    */
    UtilsService.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    /**
     * This Method Is Use For Remove Blank And Null Key From Object.
     */
    UtilsService.prototype.customJsonInclude = function (obj) {
        for (var key in obj) {
            if (typeof obj[key] === 'object') {
                if (obj[key] && obj[key].length > 0) {
                    obj[key] = this.removeEmptyElementsFromArray(obj[key]);
                }
                if (this.isEmptyObject(obj[key])) {
                    delete obj[key];
                }
                else {
                    this.customJsonInclude(obj[key]);
                }
            }
            else {
                if (obj[key] === undefined || obj[key] === null) {
                    delete obj[key];
                }
            }
        }
    };
    /**
     * @author : abhay-suchak
     * @param isDisplayToast display tost or not , pass true or false
     * @param url API name
     * @param params params
     * @param callback response of server
     */
    UtilsService.prototype.postMethodAPI = function (isDisplayToast, apiName, params, callback, isToastAndDataBothRequired) {
        var _this = this;
        this.loaderStart++;
        this.customJsonInclude(params);
        console.log(JSON.stringify(params));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
            headers = headers.set('Authorization', 'Bearer ' + this.getToken());
        }
        apiName = this.URL + apiName;
        return this.http.post(apiName, params, { headers: headers }).subscribe(function (response) {
            console.log(response);
            // Read the result field from the JSON response.
            if (_this.loaderStart > 0) {
                _this.loaderStart--;
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
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.message);
            if (err.status === 0) {
                // this.CreateNotification('error', 'Error', 'Server down.');
                // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
            }
            else {
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
        });
    };
    UtilsService.prototype.toHttpParams = function (params) {
        // console.log(params);
        // console.log(Object.getOwnPropertyNames(params));
        return Object.getOwnPropertyNames(params).filter(function (keys) {
            console.log('key ::' + keys + 'param :: ' + params[keys]);
            if (params[keys] === null || params[keys] === undefined) {
                return;
            }
        }).reduce(function (p, key) {
            return p.set(key, params[key]);
        }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]());
    };
    /**
     * @author : abhay-suchak
     * @param API API name
     * @param params params
     * @param callback response of server
     */
    UtilsService.prototype.getMethodAPI = function (apiName, params, callback, noLoaderRequire) {
        var _this = this;
        this.loaderStart++;
        if (noLoaderRequire) {
            this.loaderStart--;
        }
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        Object.keys(params).forEach(function (key) {
            if (key && params[key] && params.hasOwnProperty(key) && !_this.isEmptyObject(params[key])) {
                httpParams = httpParams.append(key, params[key]);
            }
        });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
            headers = headers.set('Authorization', 'Bearer ' + this.getToken());
        }
        apiName = this.URL + apiName;
        return this.http.get(apiName, { params: httpParams, headers: headers }).subscribe(function (response) {
            // Read the result field from the JSON response.
            if (_this.loaderStart > 0) {
                _this.loaderStart--;
            }
            // const serverResponse = Deserialize(response, ResponseWrapperDTO);
            // if (serverResponse.status < 200 || serverResponse.status >= 300) {
            // this.CreateNotification('error', 'Error..!', serverResponse.message);
            // this.setConfigAndDisplayPopUpNotification('error', '', serverResponse.message);
            // } else {
            callback(response);
            // }
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.message);
            if (err.status === 0) {
                // this.CreateNotification('error', 'Error', 'Server down.');
                // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
            }
            else {
                // const errorDTO = Deserialize(err.error, ResponseWrapperDTO);
                // this.CreateNotification('error', 'Error', errorDTO.message ? errorDTO.message : errorDTO.error);
                // this.setConfigAndDisplayPopUpNotification('error', '', errorDTO.message ? errorDTO.message : errorDTO.error);
                callback(err.error);
            }
            _this.loaderStart--;
        });
    };
    /**
     * @author : abhay-suchak
     * @param isDisplayToast
     * @param url
     * @param params
     * @param id
     * @param callback
     */
    UtilsService.prototype.putMethodAPI = function (isDisplayToast, apiName, params, id, callback, isCallbackRequired) {
        var _this = this;
        this.loaderStart++;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
            headers = headers.set('Authorization', 'Bearer ' + this.getToken());
        }
        apiName = this.URL + apiName + '/' + id;
        return this.http.put(apiName, params, { headers: headers }).subscribe(function (response) {
            // Read the result field from the JSON response.
            if (_this.loaderStart > 0) {
                _this.loaderStart--;
            }
            var serverResponse = Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Deserialize"])(response, _model_ResponseWrapperDTO__WEBPACK_IMPORTED_MODULE_7__["ResponseWrapperDTO"]);
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
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.message);
            if (err.status === 0) {
                // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
            }
            else {
                var errorDTO = Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Deserialize"])(err.error, _model_ResponseWrapperDTO__WEBPACK_IMPORTED_MODULE_7__["ResponseWrapperDTO"]);
                if (errorDTO.isResponseOnPage) {
                    window.scroll(0, 0);
                    callback(errorDTO.message, false);
                }
                else {
                    // this.setConfigAndDisplayPopUpNotification('error', '', errorDTO.message ? errorDTO.message : errorDTO.error);
                    console.log(isCallbackRequired);
                    if (isCallbackRequired) {
                        callback(errorDTO.message, true);
                    }
                    // this.CreateNotification('error', 'Error', errorDTO.error);
                }
            }
            _this.loaderStart--;
        });
    };
    /**
     * @author : abhay-suchak
     * @param isDisplayToast
     * @param url
     * @param params
     * @param id
     * @param callback
     */
    UtilsService.prototype.deleteMethodAPI = function (isDisplayToast, apiName, ob, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        if (!this.serverVariableService.arrayOfapiNameToExcludeToken.includes(apiName)) {
            headers = headers.set('Authorization', 'Bearer ' + this.getToken());
        }
        apiName = this.URL + apiName;
        console.log(JSON.stringify(ob));
        Object.keys(ob).forEach(function (key) {
            if (key && ob[key] && ob.hasOwnProperty(key) && !_this.isEmptyObject(ob[key])) {
                console.log('value ::' + ob[key]);
                apiName += '/' + ob[key];
                console.log('API  ::' + apiName);
            }
        });
        return this.http.delete(apiName, { headers: headers }).subscribe(function (response) {
            // Read the result field from the JSON response.
            if (_this.loaderStart > 0) {
                _this.loaderStart--;
            }
            var serverResponse = Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Deserialize"])(response, _model_ResponseWrapperDTO__WEBPACK_IMPORTED_MODULE_7__["ResponseWrapperDTO"]);
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
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.message);
            if (err.status === 0) {
                // this.CreateNotification('error', 'Error', 'Server down.');
                // this.setConfigAndDisplayPopUpNotification('error', '', 'Server down..');
            }
            else {
                var errorDTO = Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Deserialize"])(err.error, _model_ResponseWrapperDTO__WEBPACK_IMPORTED_MODULE_7__["ResponseWrapperDTO"]);
                if (!errorDTO.isResponseOnPage) {
                    // callback(errorDTO.message, false);
                    _this.msgFromDeleteAPIOnConflicts = errorDTO.message;
                    $('#deletConflicts').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                }
                else {
                    // this.CreateNotification('error', 'Error', errorDTO.error);
                    // this.setConfigAndDisplayPopUpNotification('error', '', errorDTO.error ? errorDTO.error : errorDTO.message);
                }
            }
            _this.loaderStart--;
        });
    };
    /**
    * This method is used to check all checkbox of list if isCheckAll is true, otherwise it uncheck all checkboxes of list.
    * @param isCheckAll : indicates true or false.
    * @param detailsArray : indicates list that contains checkboxes.
    */
    UtilsService.prototype.checkAll = function (isCheckAll, detailsArray) {
        detailsArray.forEach(function (ele) {
            // if (ele.hasOwnProperty('selected')) {
            ele.selected = isCheckAll;
            // }
        });
        return isCheckAll;
        // return detailsArray;
    };
    /***
     * This method is used to make isCheckAll true if all checkboxes of list is checked, otherwise it makes isCheckAll to false;
     * @param isSingleChecked : indicates true if user check checkbox of list otherwise indicates false.
     * @param isCheckAll : indicates true of checkbox for all is checked otherwise indicates false.
     * @param detailsArray : indicates list that contains checkboxes.
     */
    UtilsService.prototype.singleCheck = function (isSingleChecked, isCheckAll, detailsArray) {
        if (!isSingleChecked) {
            isCheckAll = false;
            return isCheckAll;
        }
        for (var i in detailsArray) {
            if (!detailsArray[i].selected) {
                isCheckAll = false;
                return isCheckAll;
            }
        }
        isCheckAll = true;
        return isCheckAll;
    };
    /**
     * @author : abhay-suchak
     * @param string
     */
    UtilsService.prototype.capitalizeFirstLetter = function (string) {
        return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
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
    UtilsService.prototype.getMenu = function () {
        return JSON.parse(localStorage.getItem('userMenus'));
    };
    UtilsService.prototype.isNullUndefinedOrBlank = function (obj) {
        if (obj == null || obj === undefined || (obj === '' && obj !== 0)) {
            return true;
        }
        return false;
    };
    UtilsService.prototype.getUserName = function () {
        var user = new _Model_User__WEBPACK_IMPORTED_MODULE_8__["User"]();
        user = JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE));
        if (this.isEmptyObject(user)) {
            return;
        }
        user = Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Deserialize"])(user, _Model_User__WEBPACK_IMPORTED_MODULE_8__["User"]);
        return user ? user.userName.toString() : null;
    };
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
    UtilsService.prototype.getUserFromLocalStorage = function () {
        if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
            return null;
        }
        return Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Deserialize"])(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), _Model_User__WEBPACK_IMPORTED_MODULE_8__["User"]);
    };
    UtilsService.prototype.getUserId = function () {
        if (this.isEmptyObject(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)))) {
            return null;
        }
        var user = new _Model_User__WEBPACK_IMPORTED_MODULE_8__["User"]();
        user = Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Deserialize"])(JSON.parse(localStorage.getItem(this.serverVariableService.USER_FOR_LOCAL_STORAGE)), _Model_User__WEBPACK_IMPORTED_MODULE_8__["User"]);
        return user ? user.id : null;
    };
    UtilsService.prototype.isAuthenticated = function () {
        return localStorage.getItem('isAuthenticate') ? localStorage.getItem('isAuthenticate') : null;
    };
    UtilsService.prototype.getToken = function () {
        return localStorage.getItem('token') ? localStorage.getItem('token') : null;
    };
    UtilsService.prototype.getClientToken = function () {
        return localStorage.getItem('clientToken') ? localStorage.getItem('clientToken') : null;
    };
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
    UtilsService.prototype.redirectTo = function () {
        var route = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            route[_i] = arguments[_i];
        }
        // console.log(route);
        this.router.navigate(route);
    };
    UtilsService.prototype.ConvertModelIdToString = function (arrayOfKeys, array) {
        var newArray = array;
        var newarrayOfKeys = arrayOfKeys;
        for (var keyName in newArray) {
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
    };
    UtilsService.prototype.checkPatternRegularExp = function (pattern, string) {
        var regex1 = RegExp(pattern);
        return regex1.test(string);
    };
    /**
     * @author:Abhay-Suchak
     * For Generate Random String.
     */
    UtilsService.prototype.randomString = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 18; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    /**
     * @author Abhay-Suchak
     * @param x staring which you want to trim
     */
    UtilsService.prototype.trimString = function (x) {
        return x.replace(/^\s+|\s+$/gm, '');
    };
    /**
  * Setting OF Techhive multiselect
  * @param singleSelection // this parmas is define dropdown Allow Single Or Multiple.
  * @param NameOfPlaceHolder // this params is define placeholder of dropdown.
  * @param isDisabled // pass TRUE or FALSE for Disabled Dropdowm.
  * @param isAllowClear // pass FALSE if You Don't Want To  CLEAR SELCTION Of Dropdown.
  */
    UtilsService.prototype.setSettingForDropDown = function (singleSelection, NameOfPlaceHolder, isDisabled, isAllowClear) {
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
    };
    /* parent-child drop down setting */
    UtilsService.prototype.setSettingForDropDownParentChild = function (singleSelection, NameOfPlaceHolder, groupBy) {
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
    };
    UtilsService.prototype.loadScript = function (url) {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    };
    UtilsService.prototype.setDropdownSettingForLazzyDropdown = function (singleSelection, NameOfPlaceHolder, isDisabled, isAllowClear, groupbyString) {
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
    };
    UtilsService.prototype.setSettingForLocalStorage = function (params) {
        localStorage.setItem('settingMenu', params);
    };
    UtilsService.prototype.getSettingForLocalStorage = function () {
        return localStorage.getItem('settingMenu');
    };
    UtilsService.prototype.gotoBackPage = function () {
        this.location.back();
    };
    UtilsService.prototype.appendCurrentTimeToDate = function (dateObj) {
        var date = new Date();
        if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isDate"])(dateObj)) {
            dateObj.setHours(date.getHours());
            dateObj.setMinutes(date.getMinutes());
            dateObj.setSeconds(date.getSeconds());
            return dateObj;
        }
        return dateObj;
    };
    UtilsService.prototype.setDecimalPointValue = function (number) {
        return +number.toFixed(2);
    };
    UtilsService.prototype.isEmptyObjectOrNullUndefiend = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        if (value && value.length > 0) {
            for (var i = 0; i < value.length; i++) {
                if (this.isNullUndefinedOrBlank(value[i]) || this.isEmptyObject(value[i])) {
                    return true;
                }
            }
        }
        return false;
    };
    UtilsService.prototype.removeDublicateSpaceFromString = function (str) {
        return str.replace(/\s+/g, ' ');
    };
    UtilsService.prototype.setZeroBeforeNumericValue = function (num, size) {
        if (!size) {
            size = 4;
        }
        var s = num + '';
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    };
    UtilsService.prototype.isSuccessGetMethodResponse = function (response) {
        if (!this.isNullUndefinedOrBlank(response) && response !== this.FAIL_REPONSE) {
            return true;
        }
        return false;
    };
    UtilsService.prototype.isNumber = function (value) {
        return !isNaN(Number(value.toString()));
    };
    UtilsService.DEFAULT_SORT_COLUMN = 'createdDate';
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _server_variable_service__WEBPACK_IMPORTED_MODULE_4__["ServerVariableService"],
            _validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/shared/service/validation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/service/validation.service.ts ***!
  \******************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
        /* Variables for set Max Length  */
        // AMOUNT START
        this.AMOUNTPOINTLEFT = 7;
        this.AMOUNTPOINTRIGHT = 2;
        // AMOUNT END
        this.HOSPITALNAME = 30;
        this.FIRSTNAME = 30;
        this.LASTNAME = 30;
        this.MIDDLENAME = 30;
        this.FULLNAME = 90;
        this.MOBILENO = 13;
        this.LANDLINENO = 11;
        this.USERNAME = 12;
        this.ADDRESS = 300;
        this.EMAIL = 50;
        this.PASSWORD = 32; // 700 at java side
        this.QUALIFICATION = 30; // 100 at java side
        this.PRACTICESINCE = 30;
        this.AWARDSACHIEVEMENTS = 30; // 500 at java side
        this.PROFESSIONALEXPEREINCE = 30;
        this.AFFILIATEDASSOCIATEDWITH = 30;
        this.PROVIDESERVICESINCE = 4;
        this.STAFFSTRENGTH = 5;
        this.FEES = 7;
        this.MOBILEANDEMAIL = 50;
        this.OTPINPUT = 8;
        this.EMAILORUSERNAME = 50;
        this.AGE = 3;
        this.BLOODGROUP = 5;
        this.REMARK = 300;
        this.PINCODE = 6;
        this.RECOMMENDEDBY = 30;
        this.MEDICALHISTORY = 30;
        this.USERTYPENAME = 30;
        this.USERROLENAME = 30;
        this.MINUTEPERPATIENT = 3;
        this.PANCARDNO = 10;
        this.GSTNO = 15;
        this.ADHARNO = 12;
        this.SEARCHTEXT = 50;
        /* End variable for set Max Length  */
        /* Variable for Min Length*/
        this.MIN_HOSPITALNAME = 30;
        this.MIN_FIRSTNAME = 2;
        this.MIN_LASTNAME = 2;
        this.MIN_MIDDLENAME = 2;
        this.MIN_MOBILENO = 10;
        this.MIN_USERNAME = 4;
        this.MIN_ADDRESS = 50;
        this.MIN_LANDLINENO = 11;
        this.MIN_EMAIL = 50;
        this.MIN_PASSWORD = 6;
        this.MIN_QUALIFICATION = 30;
        this.MIN_PRACTICESINCE = 30;
        this.MIN_AWARDSACHIEVEMENTS = 30;
        this.MIN_PROFESSIONALEXPEREINCE = 30;
        this.MIN_AFFILIATEDASSOCIATEDWITH = 30;
        this.MIN_PROVIDESERVICESINCE = 15;
        this.MIN_STAFFSTRENGTH = 10;
        this.MIN_FEES = 15;
        this.MIN_MOBILEANDEMAIL = 18;
        this.MIN_OTPINPUT = 8;
        this.MIN_EMAILORUSERNAME = 30;
        this.MIN_AGE = 3;
        this.MIN_BLOODGROUP = 5;
        this.MIN_REMARK = 25;
        this.MIN_PINCODE = 6;
        this.MIN_RECOMMENDEDBY = 30;
        this.MIN_MEDICALHISTORY = 30;
        this.MIN_USERTYPENAME = 30;
        this.MIN_USERROLENAME = 30;
        /* End Variable for Min Length*/
        /* pattern use for validation */
        // newpaat = /^([A-Za-z0-9][+-*/%])*$/;
        this.NAME = /^([a-zA-Z][a-zA-Z\s]*)$/; // use in specilstMaster and CategoryMaster
        this.STATE_NAME = /^([a-zA-Z][a-zA-Z\s]*)$/;
        this.CITY_NAME = /^([a-zA-Z][a-zA-Z\s]*)$/;
        this.LANGUAGE_NAME = /^([a-zA-Z][a-zA-Z\s]*)$/;
        this.ONLY_NUMBERS = '^[0-9]*$';
        // ONLY_NUMBERS_AND_DOT = /^[0-9.]{1,15}$/;
        this.ONLY_NUMBERS_AND_DOT = /^[0-9]+(?:\.[0-9]+)?$/;
        this.PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DASH_DIGIT = '^[a-zA-Z0-9- ]*$';
        this.LAB_MASTER_NAME = /.*\S.*/;
        this.ONLY_SPACE_NOT_ALLOW = /.*\S.*/;
        // ONLY_SPACE_NOT_ALLOWsp = '^[0-9a-zA-Z \b]+$';
        this.ONLY_SPACE_AND_SPACIAL_CHARACTER_NOT_ALLOW = /^(?=.*[A-Za-z\d])[A-Za-z\d$@$!%*#?_\-& ]{1,}$/;
        this.PATTERN_FOR_ALPHANUMERIC_DIGIT_SPECIAL_ESCAPE_CHARS = /.*\S.*/;
        this.PATTERN_FOR_ONLY_ALPHABATES = '^[a-zA-Z]*$';
        this.PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DIGIT = '^[a-zA-Z0-9 ]*$';
        this.PATTERN_FOR_ALPHABATES_AND_DIGIT = '^[a-zA-Z0-9]*$';
        this.PATTERN_FOR_ALPHABATES_AND_SPACE = '^([a-zA-Z][a-zA-Z ]*)$';
        this.PATTERN_FOR_ALPHABATES_NUMBER_AND_SPACE = '^([a-zA-Z0-9][a-zA-Z0-9 ]*)';
        this.PATTERN_FOR_EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // PATTERN_FOR_EMAIL = /^([a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/;
        // PATTERN_FOR_EMAIL = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
        this.PATTERN_FOR_EMAIL_OR_PHONE_NO = '^(?:([a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})|([0-9]{10,13}))$';
        this.PATTERN_FOR_EMAIL_OR_USERNAME = '^(?:([a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})|([a-zA-Z0-9]*))$';
        this.PATTERN_FOR_PHONE_NO = '^[0-9]{10,13}$';
        this.PATTERN_FOR_NUMBER = '^[0-9]*$';
        this.PATTERN_FOR_PINCODE = '^[0-9]{6}$';
        this.PATTERN_FOR_LANDLINE_NO = '^[0-9]{11}$';
        this.PATTERN_FOR_ADHARCARD_NO = '^[0-9]{12}$';
        this.PATTERN_FOR_PANCARD_NO = '^[A-Z]{5}[0-9]{4}[A-Z]{1}$';
        this.PATTERN_FOR_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,32}$/;
        // '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$';
        this.PATTERN_FOR_GST_NO = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[Z]{1}[A-Z\d]{1}/;
        /* End pattern use for validation */
        // validation message start
        // SIGN UP START
        this.REQUIRED_PANCARD_NO = 'PAN Card No. is required.';
        this.REQUIRED_GST_NO = 'GST No. is required.';
        this.REQUIRED_AADHAR_NO = 'Aadhaar No. is required.';
        this.INVALID_PANCARD_NO = 'Please enter valid PAN Card No.';
        this.INVALID_GST_NO = 'Please enter valid GST No.';
        this.INVALID_AADHAR_NO = 'Please enter valid Aadhaar No.';
        this.INVALID_DATE_OF_BIRTH = 'Please select valid Date of Birth.';
        // SIGN UP END
        // LOGIN
        this.USERNAME_OR_EMAIL = 'Please enter valid Email or User Name.';
        this.INVALID_LOGIN_PASSWORD = 'Please enter valid Password.';
        // LOGIN END
        /* Use for Masters  */
        this.REQUIRED_CATEGORY_NAME = 'Category Name is required.';
        this.REQUIRED_CITY_NAME = 'City Name is required.';
        this.REQUIRED_STATE_NAME = 'State Name is required.';
        this.REQUIED_LAB_REPORT_NAME = 'Lab Report Name is required.';
        this.REQUIED_TREATMENT_NAME = 'Treatement Name is required.';
        this.REQUIRED_SERVICE_NAME = 'Service Name is required.';
        this.REQUIRED_LANGUAGE_NAME = 'Language Name is required.';
        this.REQUIRED_SPECIALIST_NAME = 'Name is required.';
        this.REQUIRED_ASSIGN_ROLE_NAME = 'Role name is required.';
        this.REQUIRED_ROLE_NAME = 'User Role Name is required.';
        this.REQUIRED_USER_ROLE_FOR_SYSTEM_ACCESS = 'Please select User Role.';
        // validation message start
        this.INVALID_NAME = 'Please enter valid Name.';
        this.INVALID_SERVICE_NAME = 'Please enter valid Service Name.';
        this.INVALID_CATEGORY_NAME = 'Please enter valid Category Name.';
        this.INVALIDE_STATE_NAME = 'Please enter valid State Name.';
        this.INVALIDE_CITY_NAME = 'Please enter valid City Name.';
        this.INVALIDE_USER_ROLE_NAME = 'Please enter valid User Role Name.';
        this.INVALIDE_LANGUAGE_NAME = 'Please enter valid Language Name.';
        this.INVALID_LAB_REPORT_NAME = 'Please enter valid Lab Report Name.';
        this.INVALID_TREATMENT_NAME = 'Please enter valid Treatement Name.';
        this.INVALID_MOBILE_OR_EMAIL = 'Please enter your registered Mobile No./Email Id.';
        this.INVALID_OTP = 'Please enter valid OTP.';
        /* End Masters Message */
        // validation message for add medicine
        this.REQUIRED_MEDICINE_CODE = 'Medicine Code is requied.';
        this.REQUIRED_MEDICINE_NAME = 'Medicine Name is requied.';
        this.REQUIRED_GENERIC_NAME = 'Generic Name is requied.';
        this.REQUIRED_BRAND_NAME = 'Brand Name is requied.';
        this.REQUIRED_EXPIRY_DATE = 'Expiry Date is required.';
        this.REQUIRED_MFG_DATE = 'Manufacture Date is required.';
        this.REQUIRED_QTY = 'Qty is required.';
        this.REQUIRED_PRICE = 'Price is required.';
        this.INVALID_MEDICINE_CODE = 'Medicine Code allow only alphanumeric value.';
        this.INVALID_MEDICINE_NAME = 'Medicine Name allow only alphanumeric value.';
        this.INVALID_GENERIC_NAME = 'Generic Name allow only alphanumeric value.';
        this.INVALID_BRAND_NAME = 'Please enter valid Brand Name.';
        this.INVALID_EXPIRY_DATE = 'Expiry Date is required.';
        this.INVALID_MFG_DATE = 'Manufacture Date is required.';
        this.INVALID_QTY = 'Qty allow only numeric value.';
        this.INVALID_PRICE = 'Price allow only numeric value.';
        // end add medicine
        // validation msg for add clinic
        this.REQUIRED_CLINIC_NAME = 'Clinic Name is required.';
        this.REQUIRED_SERVICES_PROVIDED = 'Plaese select Service Proveded.';
        this.REQUIRED_SERVICES_PROVIDE_SERVICE_SINCE = 'Provide Service Since is required.';
        this.REQUIRED_CLINIC_STAFF_STRENGTH = 'Clinic Staff Strength is required.';
        this.REQUIRED_FEES = 'Fees is required.';
        this.REQUIRED_LandLine_NUMBER = 'LandLine No. is required.';
        this.INVALID_LANDLINE_NUMBER = 'Please enter valid LandLine No.';
        this.REQUIRED_ADDRESS = 'Address is required.';
        this.REQUIRED_CLINIC_ADDRESS = 'Address is required.';
        this.INVALID_CLINIC_NAME = 'Clinic Name allow only alphanumeric value.';
        this.INVALID_ERVICES_PROVIDE_SERVICE_SINCE = 'Provide Service Since allow only numeric value.';
        this.INVALID_CLINIC_STAFF_STRENGTH = 'Clinic Staff Strength allow only numeric value.';
        this.INVALID_FEES = 'Fees allow only numeric value.';
        this.INVALID_ADDRESS = 'Please enter valid Address.';
        // end add clinic
        // use for comman
        this.REQUIRED_FIRST_NAME = 'First Name is required.';
        this.REQUIRED_LAST_NAME = 'Last Name is required.';
        this.REQUIRED_EMAIL = 'Email is required.';
        this.REQUIRED_JOB = 'Please select Job.';
        this.REQUIRED_PASSWORD = 'Password is required.';
        this.REQUIRED_CURRENT_PASSWORD = 'Current Password is required.';
        this.REQUIRED_CONFIRM_PASSWORD = 'Confirm Password is required.';
        this.REQUIRED_NEW_PASSWORD = 'New Password is required.';
        this.REQUIRED_MOBILE_NO = 'Mobile No. is required.';
        this.REQUIRED_USER_NAME = 'User Name is required.';
        this.REQUIRED_MIDDLE_NAME = 'Middle Name is required.';
        this.REQUIRED_PATIENT = 'Patient is required.';
        this.REQUIRED_PATIENT_OR_VISITOR_NAME = 'Patient/Visitor Name is required.';
        // validation msg for add staff
        // validation msg for doctor registration Step 3
        this.REQUIRED_QUALIFICATION = 'Qualification is required.';
        this.REQUIRED_PRACTICESINCE = 'Practice Since is required.';
        this.REQUIRED_AWARDSANDACHIEVEMENTS = 'Awards/Achievements is required.';
        this.REQUIRED_PROFESSIONALEXPERIENCE = 'Prodessional Experience is required.';
        this.REQUIRED_AFFILIATEDANDASSOCIATED = 'Affiliated/Associated is required.';
        this.REQUIRED_MINUTE_PER_PATIENT = 'Minute Per Patient is required.';
        this.INVALID_QUALIFICATION = 'Please enter valid Qualification.';
        this.INVALID_PRACTICESINCE = 'Please enter valid Practice Since.';
        this.INVALID_AWARDSANDACHIEVEMENTS = 'Please enter valid Awards/Achievements.';
        this.INVALID_PROFESSIONALEXPERIENCE = 'Please enter valid Professional Experience.';
        this.INVALID_AFFILIATEDANDASSOCIATED = 'Please enter valid Affiliated/Associated With.';
        this.INVALID_MINUTE_PER_PATIENT = 'Minute Per Patient allow only numeric value.';
        // end  validation msg for doctor registration Step 3
        // validation Message for Timeslot Modal
        this.REQUIRED_HOSPITAL = 'Please select Clinic.';
        this.REQUIRED_USER = 'Please select Doctor.';
        // validation Message for Timeslot Modal
        this.REQUIRED_SYSTEM_ACCESS = 'Please select System Access.';
        this.REQUIRED_CLINIC = 'Please select Clinic.';
        this.REQUIRED_USER_ROLE = 'Please select System Access.';
        this.REQUIRED_TYPE = 'Please select Type.';
        this.REQUIRED_MENU = 'Please select Menu.';
        this.REQUIRED_PREFFERED_LANGUAGE = 'Please select Preffered Language.';
        this.REQUIRED_AGE = 'Age is required.';
        this.REQUIRED_CITY = 'Please select City.';
        this.REQUIRED_STATE = 'Please select State.';
        this.REQUIRED_PINCODE = 'Pin Code is required.';
        this.REQUIRED_CATEGORY = 'Please select Category';
        this.REQUIRED_SPECIALIST = 'Please select Specialist.';
        //  use For common msg for Invalid
        this.INVALID_FIRST_NAME = 'First Name allow only alphabetic value.';
        this.INVALID_LAST_NAME = 'Last Name allow only alphabetic value.';
        this.INVALID_MIDDLE_NAME = 'Middle Name allow only alphabetic value.';
        this.INVALID_USERNAME = 'User Name allow only alphanumerical value.';
        this.INVALID_EMAIL = 'Please enter valid Email.';
        this.INVALID_CURRENT_PASSWORD = 'Please enter valid Current Password.';
        this.INVALID_PASSWORD = 'Should contains atleast 6 characters,one upper case letter,lower case letter,digit and special character like *,@,$.';
        this.INVALID_CONFIRM_PASSOWRD = 'Confirm Password not matched.';
        this.INVALID_MOBILE_NO = 'Please enter valid Mobile No.';
        this.INVALID_ALTERNATIVE_NO = 'Please enter valid Alternate Mobile No.';
        this.INVALID_TELEPHONE_NO = 'Please enter valid Telephone No.';
        this.INVALID_AGE = 'Please enter valid Age.';
        this.INVALID_BLOOD_GROUP = 'Please enter valid Blood Group.';
        this.INVALID_REMARK = 'Please enter valid Remark.';
        this.INVALID_PINCODE = 'Please enter valid Pin Code.';
        this.INVALID_RECOMMENDEDBY = 'Please enter valid Recommended By.';
        this.INVALID_TIMESLOT = 'Please enter valid Timeslot.';
        this.REQUIRED_TIMESLOT = 'Timeslot is required.';
        this.RETYPE_NEW_PASSWORD = 'Please Confirm Password.';
        this.RETYPE_PASSWORD_NOT_MATCHED = 'Confirm Password not matched.';
        this.INVALID_PATIENT_OR_VISITOR_NAME = 'Please enter valid Patient/Visitor Name.';
        // end  use For common msg for Invalid
        // validation msg for view patient FEES start
        this.REQUIRED_FEES_AMOUNT = 'Fees Amount is required.';
        this.REQUIRED_PAYMENT_MODE = 'Please select Payment Mode.';
        this.REQUIRED_DATE = 'Please select valid Date.';
        this.REQUIRED_PAYMENT_DATE = 'Please select valid Payment Date.';
        this.REQUIRED_PAYMENT_AMOUNT = 'Payment Amount is required.';
        this.REQUIRED_PAYMENT_DUE_AMOUNT = 'Payment Due Amount is required.';
        this.INVALID_FEES_AMOUNT = 'Please enter valid Fees Amount.';
        this.INVALID_PAYMENT_AMOUNT = 'Please enter valid Payment Amount.';
        this.INVALID_PAYMENT_AMOUNT_GRETER_AMOUNT = 'Payment Amount should be less then Fees Amount.';
        this.INVALID_PAYMENT_DUE_AMOUNT = 'Please enter valid Payment Due Amount.';
        // validation msg for view patient end
        // validation message end
        /* Use for create case*/
        this.SELECT_PATIENT_NAME = 'Please select Patient Name.';
        this.CASE_DATE = 'Please select Date.';
        this.REQUIRED_PROBLEM_DESCRIPTION_NAME = 'Problem Description is required.';
        this.INVALID_PROBLEM_DESCRIPTION_NAME = 'Please enter valid Problem Description.';
    }
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/utils.service */ "./src/app/shared/service/utils.service.ts");
/* harmony import */ var _service_server_variable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/server-variable.service */ "./src/app/shared/service/server-variable.service.ts");
/* harmony import */ var _service_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/validation.service */ "./src/app/shared/service/validation.service.ts");
/* harmony import */ var _pipe_OrderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe/OrderBy */ "./src/app/shared/pipe/OrderBy.ts");
/* harmony import */ var _pipe_show_noti_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/show-noti-time */ "./src/app/shared/pipe/show-noti-time.ts");
/* harmony import */ var _pipe_order_by_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/order-by-date.pipe */ "./src/app/shared/pipe/order-by-date.pipe.ts");
/* harmony import */ var _Auth_Auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Auth/Auth-guard.service */ "./src/app/Auth/Auth-guard.service.ts");
/* harmony import */ var _pipe_KeysPipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/KeysPipe */ "./src/app/shared/pipe/KeysPipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { SimpleNotificationsModule } from 'angular2-notifications';
// import { NgDatepickerModule } from 'ng2-datepicker';







// import { NguiAutoCompleteModule } from '@ngui/auto-complete';



// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
// import { TechhiveMultiSelectModule } from 'techhive-multiselect-dropdown/angular2-multiselect-dropdown';


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
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    /**
     * This static forRoot block (provides and configures services) is
     * used in case of when we want use some services in one or more components.
     */
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                _service_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"], _service_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"], _service_server_variable_service__WEBPACK_IMPORTED_MODULE_5__["ServerVariableService"], _Auth_Auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
            ]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _pipe_OrderBy__WEBPACK_IMPORTED_MODULE_7__["OrderBy"],
                _pipe_show_noti_time__WEBPACK_IMPORTED_MODULE_8__["ShowNotiTimePipe"],
                _pipe_order_by_date_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderByDatePipe"],
                // DateInputsModule,
                // TechhiveMultiSelectModule,
                // DropDownsModule,
                _pipe_KeysPipe__WEBPACK_IMPORTED_MODULE_11__["KeysPipe"],
            ],
            declarations: [_pipe_OrderBy__WEBPACK_IMPORTED_MODULE_7__["OrderBy"], _pipe_show_noti_time__WEBPACK_IMPORTED_MODULE_8__["ShowNotiTimePipe"], _pipe_order_by_date_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderByDatePipe"], _pipe_KeysPipe__WEBPACK_IMPORTED_MODULE_11__["KeysPipe"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/signup-signin/form-submit/form-submit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/signup-signin/form-submit/form-submit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider-text {\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.divider-text span {\r\n    padding: 7px;\r\n    font-size: 12px;\r\n    position: relative;   \r\n    z-index: 2;\r\n}\r\n.divider-text:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    border-bottom: 1px solid #ddd;\r\n    top: 55%;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n.btn-facebook {\r\n    background-color: #405D9D;\r\n    color: #fff;\r\n}\r\n.btn-twitter {\r\n    background-color: #42AEEC;\r\n    color: #fff;\r\n}\r\n.height-inherit{\r\n    height: -webkit-fill-available;\r\n}\r\n.regi_img {\r\n    max-width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLXNpZ25pbi9mb3JtLXN1Ym1pdC9mb3JtLXN1Ym1pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksK0JBQStCO0NBQ2xDO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtc2lnbmluL2Zvcm0tc3VibWl0L2Zvcm0tc3VibWl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5kaXZpZGVyLXRleHQgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgXHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB0b3A6IDU1JTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDVEOUQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyQUVFQztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5oZWlnaHQtaW5oZXJpdHtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4ucmVnaV9pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup-signin/form-submit/form-submit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/signup-signin/form-submit/form-submit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding: 0px !important\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"flex box-shadow mt-120 \">\r\n        <div class=\"regi_infograph\">\r\n          <img src=\"assets/img/radhekrishna.jpeg\" class=\"regi_img\">\r\n          <p class=\"text-center\">Have an account?\r\n            <a [routerLink]=\"['/signup-login/signup/login']\">Log In</a>\r\n          </p>\r\n        </div>\r\n        <div class=\"forms_regi\">\r\n          <h4>Profile</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group required\">\r\n                <label>First Name</label>\r\n                <input [(ngModel)]=\"formSubmitService.registerUser.firstName\" [formControl]=\"formSubmitService.form.controls['firstname']\"\r\n                  type=\"text\" tabindex=\"1\" maxlength=\"{{utilsService.validationService.FIRSTNAME}}\" class=\"form-control\">\r\n                <h6 *ngIf=\"formSubmitService.form.controls['firstname'].hasError('required') && formSubmitService.form.controls['firstname'].touched\">{{utilsService.validationService.REQUIRED_FIRST_NAME}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['firstname'].hasError('required') && !formSubmitService.form.controls['firstname'].valid && formSubmitService.form.controls['firstname'].touched\">{{utilsService.validationService.INVALID_FIRST_NAME}}</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Middle Name</label>\r\n                <input [(ngModel)]=\"formSubmitService.registerUser.middleName\" [formControl]=\"formSubmitService.form.controls['middlename']\"\r\n                  type=\"text\" tabindex=\"2\" maxlength=\"{{utilsService.validationService.MIDDLENAME}}\" class=\"form-control\">\r\n                <h6 *ngIf=\"formSubmitService.form.controls['middlename'].hasError('required') && formSubmitService.form.controls['middlename'].touched\">{{utilsService.validationService.REQUIRED_MIDDLE_NAME}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['middlename'].hasError('required') && !formSubmitService.form.controls['middlename'].valid && formSubmitService.form.controls['middlename'].touched\">{{utilsService.validationService.INVALID_MIDDLE_NAME}}</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group required\">\r\n                <label>Last Name</label>\r\n                <input [(ngModel)]=\"formSubmitService.registerUser.lastName\" [formControl]=\"formSubmitService.form.controls['lastname']\"\r\n                  type=\"text\" tabindex=\"3\" maxlength=\"{{utilsService.validationService.LASTNAME}}\" class=\"form-control\">\r\n                <h6 *ngIf=\"formSubmitService.form.controls['lastname'].hasError('required') && formSubmitService.form.controls['lastname'].touched\">{{utilsService.validationService.REQUIRED_LAST_NAME}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['lastname'].hasError('required') && !formSubmitService.form.controls['lastname'].valid && formSubmitService.form.controls['lastname'].touched\">{{utilsService.validationService.INVALID_LAST_NAME}}</h6>\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group required \">\r\n                    <label>Mobile No.</label>\r\n                    <input [(ngModel)]=\"formSubmitService.registerUser.mobileNo\" [formControl]=\"formSubmitService.form.controls['mobileno']\"\r\n                      tabindex=\"8\" type=\"text\" maxlength=\"{{utilsService.validationService.MOBILENO}}\" class=\"form-control\">\r\n                    <h6 *ngIf=\"formSubmitService.form.controls['mobileno'].hasError('required') && formSubmitService.form.controls['mobileno'].touched\">{{utilsService.validationService.REQUIRED_MOBILE_NO}}</h6>\r\n                    <h6 *ngIf=\"!formSubmitService.form.controls['mobileno'].hasError('required') && !formSubmitService.form.controls['mobileno'].valid && formSubmitService.form.controls['mobileno'].touched\">{{utilsService.validationService.INVALID_MOBILE_NO}}</h6>\r\n                  </div>\r\n            </div>\r\n            \r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group required\">\r\n                <label>Address</label>\r\n                <textarea [(ngModel)]=\"formSubmitService.registerUser.address\" [formControl]=\"formSubmitService.form.controls['address']\"\r\n                   tabindex=\"3\" maxlength=\"{{utilsService.validationService.ADDRESS}}\" class=\"form-control\"></textarea>\r\n                <h6 *ngIf=\"formSubmitService.form.controls['address'].hasError('required') && formSubmitService.form.controls['address'].touched\">{{utilsService.validationService.REQUIRED_ADDRESS}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['address'].hasError('required') && !formSubmitService.form.controls['address'].valid && formSubmitService.form.controls['address'].touched\">{{utilsService.validationService.INVALID_ADDRESS}}</h6>\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n          </div>\r\n          <h4>Credential</h4>\r\n          <div class=\"row\">\r\n            \r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group required mt-10\">\r\n                <label>Email</label>\r\n                <input maxlength=\"{{utilsService.validationService.EMAIL}}\" [(ngModel)]=\"formSubmitService.registerUser.email\" [formControl]=\"formSubmitService.form.controls['eMail']\"\r\n                  type=\"email\" tabindex=\"4\" class=\"form-control\">\r\n                <h6 *ngIf=\"formSubmitService.form.controls['eMail'].hasError('required') && formSubmitService.form.controls['eMail'].touched\">{{utilsService.validationService.REQUIRED_EMAIL}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['eMail'].hasError('required') && !formSubmitService.form.controls['eMail'].valid && formSubmitService.form.controls['eMail'].touched\">{{utilsService.validationService.INVALID_EMAIL}}</h6>\r\n              </div>\r\n              <div class=\"form-group required mt-10\">\r\n                <label>Password</label>\r\n                <input maxlength=\"{{utilsService.validationService.PASSWORD}}\" [(ngModel)]=\"formSubmitService.registerUser.password\"\r\n                  tabindex=\"6\" [formControl]=\"formSubmitService.form.controls['passWord']\" type=\"password\" class=\"form-control\">\r\n                <h6 *ngIf=\"formSubmitService.form.controls['passWord'].hasError('required') && formSubmitService.form.controls['passWord'].touched\">{{utilsService.validationService.REQUIRED_PASSWORD}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['passWord'].hasError('required') && !formSubmitService.form.controls['passWord'].valid && formSubmitService.form.controls['passWord'].touched\">{{utilsService.validationService.INVALID_PASSWORD}}</h6>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group required mt-10\">\r\n                <label>User Name</label>\r\n                <input [(ngModel)]=\"formSubmitService.registerUser.userName\" [formControl]=\"formSubmitService.form.controls['username']\"\r\n                  type=\"text\" tabindex=\"5\" maxlength=\"{{utilsService.validationService.USERNAME}}\" class=\"form-control\">\r\n                <h6 *ngIf=\"formSubmitService.form.controls['username'].hasError('required') && formSubmitService.form.controls['username'].touched\">{{utilsService.validationService.REQUIRED_USER_NAME}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['username'].hasError('required') && !formSubmitService.form.controls['username'].valid && formSubmitService.form.controls['username'].touched\">{{utilsService.validationService.INVALID_USERNAME}}</h6>\r\n              </div>\r\n              <div class=\"form-group required mt-10\">\r\n                <label>Confirm Password</label>\r\n                <input maxlength=\"{{utilsService.validationService.PASSWORD}}\" [(ngModel)]=\"formSubmitService.confirmPassword\" [formControl]=\"formSubmitService.form.controls['confirmpassword']\"\r\n                  tabindex=\"7\" type=\"password\" class=\"form-control\">\r\n                <h6 *ngIf=\"formSubmitService.form.controls['confirmpassword'].hasError('required') && formSubmitService.form.controls['confirmpassword'].touched\">{{utilsService.validationService.REQUIRED_CONFIRM_PASSWORD}}</h6>\r\n                <h6 *ngIf=\"!formSubmitService.form.controls['confirmpassword'].hasError('required') && (formSubmitService.registerUser.password != formSubmitService.confirmPassword) && formSubmitService.form.controls['confirmpassword'].touched\">{{utilsService.validationService.INVALID_CONFIRM_PASSOWRD}}</h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- action button -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 form_footer mt-20\">\r\n              \r\n              <div class=\"float-right\">\r\n                <!-- <button class=\"btn btn-primary\" (click)=\"goNext(1)\"> Next </button> -->\r\n                <!-- [disabled]=\"(!formSubmitService.form.valid || formSubmitService.registerUser.password != formSubmitService.confirmPassword)\" -->\r\n                <button class=\"btn btn-success\" tabindex=\"10\" \r\n                  (click)=\"formSubmitService.checkData()\">\r\n                  Register </button>{{formSubmitService.mayNav.name}}\r\n\r\n                <!-- <button class=\"btn btn-primary\"  (click)=\"formSubmitService.register()\"> Next </button> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--End action button -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"form-group\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"formSubmitService.checkData()\"> Create Account  </button>\r\n      </div>      \r\n   -->"

/***/ }),

/***/ "./src/app/signup-signin/form-submit/form-submit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/signup-signin/form-submit/form-submit.component.ts ***!
  \********************************************************************/
/*! exports provided: FormSubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmitComponent", function() { return FormSubmitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_submit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-submit.service */ "./src/app/signup-signin/form-submit/form-submit.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/utils.service */ "./src/app/shared/service/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormSubmitComponent = /** @class */ (function () {
    function FormSubmitComponent(formSubmitService, formBuilder, utilsService) {
        this.formSubmitService = formSubmitService;
        this.formBuilder = formBuilder;
        this.utilsService = utilsService;
    }
    FormSubmitComponent.prototype.ngOnInit = function () {
        $('.clockpicker').clockpicker({ format: 'mm:ss' });
        this.formSubmitService.form = this.formBuilder.group({
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
            'middlename': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
            'eMail': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL)])],
            'passWord': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_PASSWORD)])],
            'mobileno': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_PHONE_NO)])],
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_DIGIT)])],
            'confirmpassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'telephoneno': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_PHONE_NO)])],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
        });
    };
    FormSubmitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-submit',
            template: __webpack_require__(/*! ./form-submit.component.html */ "./src/app/signup-signin/form-submit/form-submit.component.html"),
            styles: [__webpack_require__(/*! ./form-submit.component.css */ "./src/app/signup-signin/form-submit/form-submit.component.css")]
        }),
        __metadata("design:paramtypes", [_form_submit_service__WEBPACK_IMPORTED_MODULE_1__["FormSubmitService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], FormSubmitComponent);
    return FormSubmitComponent;
}());



/***/ }),

/***/ "./src/app/signup-signin/form-submit/form-submit.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/signup-signin/form-submit/form-submit.service.ts ***!
  \******************************************************************/
/*! exports provided: FormSubmitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmitService", function() { return FormSubmitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cerialize */ "./node_modules/cerialize/index.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Model_formData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Model/formData */ "./src/app/Model/formData.ts");
/* harmony import */ var _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/utils.service */ "./src/app/shared/service/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Model_UserMaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Model/UserMaster */ "./src/app/Model/UserMaster.ts");
/* harmony import */ var _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../my-nav/my-nav.service */ "./src/app/my-nav/my-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormSubmitService = /** @class */ (function () {
    // registerUser = {
    //   "name":"savan1",
    //   "username":"savan1",
    //   "email":"savan121@gmail.com",
    //   "role":["user","pm"],
    //   "password":"987654320"
    // };
    function FormSubmitService(utilsService, router, mayNav) {
        this.utilsService = utilsService;
        this.router = router;
        this.mayNav = mayNav;
        this.formData = new _Model_formData__WEBPACK_IMPORTED_MODULE_2__["FormMaster"]();
        this.registerUser = new _Model_UserMaster__WEBPACK_IMPORTED_MODULE_5__["UserMaster"]();
        console.log();
    }
    FormSubmitService.prototype.checkData = function () {
        this.registerUser.role = 'Admin';
        console.log(this.registerUser);
        if (!this.form.valid || (this.formData.password !== this.formData.confpassword)) {
            // this.utilsService.CreateNotification('error', ' Please fill all valid details.', '');
            console.log('fill up all feild');
            return;
        }
        var userDetail = Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["Serialize"])(this.registerUser, _Model_UserMaster__WEBPACK_IMPORTED_MODULE_5__["UserMaster"]);
        this.utilsService.postMethodAPI(true, "auth/signup", userDetail, function (response) {
            console.log(response);
            // if (!this.utilsService.isNullUndefinedOrBlank(response)) {
            //   console.log('success');
            //   this.formData = new FormMaster();
            //   this.form.reset();
            //   this.router.navigate(['/signup-login/signup/login']);
            // } else {
            //   console.log('failed');
            // }
        });
    };
    FormSubmitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_6__["MyNavService"]])
    ], FormSubmitService);
    return FormSubmitService;
}());



/***/ }),

/***/ "./src/app/signup-signin/login/login.component.css":
/*!*********************************************************!*\
  !*** ./src/app/signup-signin/login/login.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider-text {\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.divider-text span {\r\n    padding: 7px;\r\n    font-size: 12px;\r\n    position: relative;   \r\n    z-index: 2;\r\n}\r\n.divider-text:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    border-bottom: 1px solid #ddd;\r\n    top: 55%;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n.btn-facebook {\r\n    background-color: #405D9D;\r\n    color: #fff;\r\n}\r\n.btn-twitter {\r\n    background-color: #42AEEC;\r\n    color: #fff;\r\n}\r\n.width-37pass{\r\n    width: 37px;\r\n}\r\n.height-inherit{\r\n    height: -webkit-fill-available;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLXNpZ25pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSwrQkFBK0I7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtc2lnbmluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5kaXZpZGVyLXRleHQgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgXHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB0b3A6IDU1JTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDVEOUQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyQUVFQztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi53aWR0aC0zN3Bhc3N7XHJcbiAgICB3aWR0aDogMzdweDtcclxufVxyXG5cclxuLmhlaWdodC1pbmhlcml0e1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup-signin/login/login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/signup-signin/login/login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\">\r\n    <div class=\"login-register\" style=\"background-image:url(assets/images/bg2.jpg);\">\r\n        <div class=\"login-box\">\r\n            <div class=\"card-body\">\r\n                <div class=\"form_box form-horizontal form-material\">\r\n                    <div class=\"form-group \">\r\n                        <div class=\"col-xs-12\">\r\n                            <input class=\"form-control\" type=\"text\" tabindex=\"1\" placeholder=\"Username\" maxlength=\"{{utilsService.validationService.MAX_50}}\"\r\n                                [(ngModel)]=\"loginService.loginParamOb.username\" [formControl]=\"loginService.form.controls['username']\">\r\n                            <small class=\"text-danger\">\r\n                                <h6 *ngIf=\"(loginService.form.controls['username'].hasError('required') || !loginService.form.controls['username'].valid) && loginService.form.controls['username'].touched\">\r\n                                    {{utilsService.validationService.USERNAME_OR_EMAIL}}\r\n                                </h6>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-xs-12\">\r\n                            <input class=\"form-control\" type=\"password\" tabindex=\"2\" required=\"\" placeholder=\"Password\"\r\n                                maxlength=\"{{utilsService.validationService.MAX_32}}\" [(ngModel)]=\"loginService.loginParamOb.password\"\r\n                                [formControl]=\"loginService.form.controls['password']\">\r\n                            <small class=\"text-danger\">\r\n                                <!-- <h6 *ngIf=\"(loginService.form.controls['password'].hasError('required') || !loginService.form.controls['password'].valid) && loginService.form.controls['password'].touched\">{{utilsService.validationService.INVALID_LOGIN_PASSWORD}}</h6> -->\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group form-check clearfix\">\r\n                        <div class=\"float-right\">\r\n                            <a [routerLink]=\"['/signup-login/forgot-password']\">Forgot Password ?</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group text-center m-t-20\">\r\n                            <div class=\"col-xs-12\">\r\n                                <button tabindex=\"3\"  (click)=\"loginService.checkLoginForm()\" class=\"btn btn-success  btn-block \"\r\n                                    type=\"submit\">Log In</button>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"form-group mt-20 clearfix\">\r\n                        <div class=\"float-right\">\r\n                            <p class=\"text-center\">Dont't have an account?\r\n                                <a [routerLink]=\"['/signup-login/signup/form']\">Sign Up</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/signup-signin/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/signup-signin/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/signup-signin/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/utils.service */ "./src/app/shared/service/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, formBuilder, utilsService) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.utilsService = utilsService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.form = this.formBuilder.group({
            // 'username': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL_OR_USERNAME)])],
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_ALPHANUMERIC_DIGIT_SPECIAL_ESCAPE_CHARS)])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.utilsService.validationService.PATTERN_FOR_PASSWORD)])]
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/signup-signin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/signup-signin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup-signin/login/login.service.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-signin/login/login.service.ts ***!
  \******************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/utils.service */ "./src/app/shared/service/utils.service.ts");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cerialize */ "./node_modules/cerialize/index.js");
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Model/User */ "./src/app/Model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(utilsService, router) {
        this.utilsService = utilsService;
        this.router = router;
        this.loginParamOb = {
            username: "",
            password: ""
        };
    }
    LoginService.prototype.checkLoginForm = function () {
        var _this = this;
        console.log(this.loginParamOb);
        this.utilsService.postMethodAPI(true, 'auth/signin', this.loginParamOb, function (response) {
            console.log(response);
            if (!_this.utilsService.isNullUndefinedOrBlank(response)) {
                _this.setLocalStorage(response).then(function () {
                    _this.utilsService.redirectTo('/home/work_area/dashboard');
                    // this.stompWebsocketService.sendLoginMsg(JSON.stringify({ 'sendUserName': 'test', 'msg': 'login Message' }));
                });
            }
        });
    };
    LoginService.prototype.setLocalStorage = function (res) {
        var promise = new Promise(function (resolve, reject) {
            try {
                localStorage.setItem('users', Object(cerialize__WEBPACK_IMPORTED_MODULE_2__["Deserialize"])(JSON.stringify(res.loginResponse), _Model_User__WEBPACK_IMPORTED_MODULE_4__["User"]));
                localStorage.setItem('token', res.accessToken);
                localStorage.setItem('isAuthenticate', 'true');
                resolve();
            }
            catch (error) {
                reject();
            }
        });
        return promise;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_service_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/signup-signin/signup-signin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/signup-signin/signup-signin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1zaWduaW4vc2lnbnVwLXNpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/signup-signin/signup-signin.component.html":
/*!************************************************************!*\
  !*** ./src/app/signup-signin/signup-signin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/signup-signin/signup-signin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/signup-signin/signup-signin.component.ts ***!
  \**********************************************************/
/*! exports provided: SignupSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSigninComponent", function() { return SignupSigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_signin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-signin.service */ "./src/app/signup-signin/signup-signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupSigninComponent = /** @class */ (function () {
    function SignupSigninComponent(signupSigninService) {
        this.signupSigninService = signupSigninService;
    }
    SignupSigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-signin',
            template: __webpack_require__(/*! ./signup-signin.component.html */ "./src/app/signup-signin/signup-signin.component.html"),
            styles: [__webpack_require__(/*! ./signup-signin.component.css */ "./src/app/signup-signin/signup-signin.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_signin_service__WEBPACK_IMPORTED_MODULE_1__["SignupSigninService"]])
    ], SignupSigninComponent);
    return SignupSigninComponent;
}());



/***/ }),

/***/ "./src/app/signup-signin/signup-signin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/signup-signin/signup-signin.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupSigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSigninModule", function() { return SignupSigninModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/signup-signin/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _signup_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-signin.component */ "./src/app/signup-signin/signup-signin.component.ts");
/* harmony import */ var _form_submit_form_submit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-submit/form-submit.component */ "./src/app/signup-signin/form-submit/form-submit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routesForSingUp = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: _signup_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignupSigninComponent"], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
            { path: 'form', component: _form_submit_form_submit_component__WEBPACK_IMPORTED_MODULE_5__["FormSubmitComponent"] },
        ] }
];
var SignupSigninModule = /** @class */ (function () {
    function SignupSigninModule() {
    }
    SignupSigninModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routesForSingUp)
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                _signup_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignupSigninComponent"],
                _form_submit_form_submit_component__WEBPACK_IMPORTED_MODULE_5__["FormSubmitComponent"]
            ],
            providers: []
        })
    ], SignupSigninModule);
    return SignupSigninModule;
}());



/***/ }),

/***/ "./src/app/signup-signin/signup-signin.service.ts":
/*!********************************************************!*\
  !*** ./src/app/signup-signin/signup-signin.service.ts ***!
  \********************************************************/
/*! exports provided: SignupSigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSigninService", function() { return SignupSigninService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupSigninService = /** @class */ (function () {
    function SignupSigninService() {
        this.FormVariable = {};
    }
    SignupSigninService.prototype.modelChanged = function (event) {
        console.log(event);
    };
    SignupSigninService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SignupSigninService);
    return SignupSigninService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map