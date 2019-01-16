webpackJsonp([31],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__["a" /* FCM */]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(platform, fcm, formBuilder, alertCtrl, securityProvider, navCtrl) {
        this.platform = platform;
        this.fcm = fcm;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.signup = {};
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var nameReg = /^([a-zA-Z0-9._-]){2,30}$/;
        var phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        this.salonregister = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([])],
            useremail: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(emailRegex), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
            pass: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(''), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            cpass: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(''), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        this.fcm.subscribeToTopic('Balifood');
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSignup = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.fcm.getToken().then(function (token) {
                _this.token = token;
                if (_this.token) {
                    var a = _this.signup.contactNumber.replace(/\D/g, '');
                    if (_this.confirmPassword == _this.signup.password) {
                        _this.signup = {
                            username: _this.signup.username,
                            email: _this.signup.email.toLowerCase(),
                            password: _this.signup.password,
                            contactNumber: a,
                            deviceToken: _this.token,
                        };
                        if (_this.remembers == true || _this.remembers == 'true' || _this.remembers == "true") {
                            _this.securityProvider.signupopen(_this.signup)
                                .subscribe(function (data) {
                                var a = data;
                                if (a.success == 'true' || a.success == true || a.success == "true") {
                                    var b = a.userData;
                                    var email = b.email;
                                    var password = b.password;
                                    _this.userRegisterFirstTime = 1;
                                    // this.navCtrl.push('LoginPage');
                                    _this.onlogin(email, password);
                                }
                                else {
                                    var alert_1 = _this.alertCtrl.create({
                                        title: 'Alert!',
                                        subTitle: a.msg,
                                        buttons: ['OK']
                                    });
                                    alert_1.present();
                                }
                                console.log("data" + JSON.stringify(data));
                            }),
                                function (error) {
                                    var alert = _this.alertCtrl.create({
                                        title: 'Alert!',
                                        subTitle: 'Something went wrong!',
                                        buttons: ['OK']
                                    });
                                    alert.present();
                                };
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Alert!',
                                subTitle: 'Please accept terms & conditions',
                                buttons: ['OK']
                            });
                            alert_2.present();
                        }
                    }
                    else {
                        var alert_3 = _this.alertCtrl.create({
                            title: 'Alert!',
                            subTitle: 'Password not matched!',
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                }
            });
        });
    };
    SignupPage.prototype.onTerms = function () {
        this.navCtrl.push('TermsConditionsPage');
    };
    SignupPage.prototype.onlogin = function (email, password) {
        var _this = this;
        var login = {
            email: email,
            password: password,
            deviceToken: this.token,
        };
        this.securityProvider.loginopen(login)
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
            var a = data;
            if (a.success == true) {
                var b = a.userdata;
                var c = b.email;
                localStorage['authh'] = 1;
                localStorage['email'] = c;
                localStorage['user_id'] = b._id;
                localStorage['password'] = b.password;
                localStorage['username'] = b.username;
                localStorage['user_image'] = b.profileImage;
                console.log('email' + c);
                /* this.navCtrl.setRoot(TabsPage, {
                  userRegisterFirstTime: this.userRegisterFirstTime
                }); */
                if (_this.navCtrl.parent != null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { parent: 0, userRegisterFirstTime: _this.userRegisterFirstTime });
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { userRegisterFirstTime: _this.userRegisterFirstTime });
                }
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Please enter email or password !',
                    buttons: ['OK']
                });
                alert_4.present();
                localStorage['authh'] = 0;
                localStorage['email'] = '';
            }
        }),
            function (error) { };
    };
    SignupPage.prototype.getStatusFOrdisabled = function (cpass) {
        if (cpass == this.signup.password) {
            return true;
        }
        else {
            return false;
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\signup\signup.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title>{{\'signup.signup\' | translate}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content>\n   <div class="div-input">\n      <div>\n         <form [formGroup]="salonregister">\n            <ion-item>\n               <ion-label stacked>{{\'signup.name\' | translate}}</ion-label>\n               <ion-input type="text" [(ngModel)]="signup.username" formControlName="name"></ion-input>\n               <ion-icon name="ios-person" item-right ></ion-icon>\n            </ion-item>\n            <p style="color:#ff8b00;padding-left:15px;"  *ngIf="!salonregister.controls.name.valid && (salonregister.controls.name.dirty )">*{{\'iprqd\' | translate}} </p>\n            <ion-item>\n               <ion-label stacked>{{\'loginpage.email\' | translate}}</ion-label>\n               <ion-input type="text" [(ngModel)]="signup.email"  formControlName="useremail"></ion-input>\n               <ion-icon name="mail" item-right ></ion-icon>\n            </ion-item>\n            <p style="color:#ff8b00;padding-left:15px;"  *ngIf="!salonregister.controls.useremail.valid && (salonregister.controls.useremail.dirty )"> *{{\'invalidemail\' | translate}} </p>\n            <ion-item>\n               <ion-label stacked>{{\'signup.password\' | translate}}</ion-label>\n               <ion-input type="password" [(ngModel)]="signup.password" formControlName="pass"></ion-input>\n               <ion-icon name="icon-password" class="icon-color" item-right ></ion-icon>\n            </ion-item>\n            <p style="color:#ff8b00;padding-left:15px;" *ngIf="!salonregister.controls.pass.valid && (salonregister.controls.pass.dirty )" >*{{\'loginpage.passlength\' | translate}}</p>\n            <ion-item>\n               <ion-label stacked>{{\'signup.confirm_password\' | translate}}</ion-label>\n               <ion-input type="password" [(ngModel)]="confirmPassword" formControlName="cpass" ></ion-input>\n               <ion-icon name="icon-password" class="icon-color" item-right ></ion-icon>\n            </ion-item>\n            <p style="color:#ff8b00;padding-left:15px;" *ngIf="getStatusFOrdisabled(confirmPassword)!=true" >* {{\'passwordnotmatched\' | translate}}</p>\n             </form>\n            <ion-item>\n               <ion-label stacked>{{\'signup.contact\' | translate }}</ion-label>\n               <ion-input type="tel" [(ngModel)]="signup.contactNumber" > </ion-input>\n               <ion-icon name="call" class="icon-color" item-right ></ion-icon>\n            </ion-item>\n      </div>\n      <ion-item no-lines>\n         <ion-label >{{\'signup.iaccept\' | translate}}</ion-label>\n         <ion-checkbox color="checkcolor" ng-true-value="\'1\'" ng-false-value="\'0\'"  checked="false"  [(ngModel)]="remembers"></ion-checkbox>\n      </ion-item>\n   </div>\n   <div class="btn-div1" >\n      <button ion-button class="btn-login" (click)="onSignup()" [disabled]="!salonregister.valid ">{{\'signup.signup\' | translate}}</button>\n   </div>\n</ion-content>'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=31.js.map