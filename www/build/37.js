webpackJsonp([37],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ForgetPasswordPageModule = (function () {
    function ForgetPasswordPageModule() {
    }
    ForgetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({}),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], ForgetPasswordPageModule);
    return ForgetPasswordPageModule;
}());

//# sourceMappingURL=forget-password.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetPasswordPage = (function () {
    function ForgetPasswordPage(alertCtrl, formBuilder, securityProvider, navCtrl, navParams, toastCtrl, translate) {
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.resend_btn = 'false';
        this.login = {};
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.salonregister = formBuilder.group({
            useremail: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(emailRegex), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])]
        });
    }
    ForgetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPasswordPage');
    };
    ForgetPasswordPage.prototype.onSend = function () {
        var _this = this;
        this.securityProvider.forgot(this.login)
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
            var a = data;
            if (a.success == true) {
                _this.resend_btn = 'true';
                /*     let alert = this.alertCtrl.create({
                subTitle: a.msg,
                buttons: ['OK']
              });
              alert.present(); */
                var toast1 = _this.toastCtrl.create({
                    message: a.msg,
                    duration: 3000,
                    position: 'top'
                });
                if (_this.translate.currentLang == 'heb') {
                    toast1 = _this.toastCtrl.create({
                        message: "סיסמה נשלחה לאימייל הרשום במערכת",
                        duration: 3000,
                        position: 'top'
                    });
                }
                toast1.onDidDismiss(function () {
                    console.log('over');
                });
                toast1.present();
            }
            else {
                /*   this.resend_btn='false';
                 let alert = this.alertCtrl.create({
            subTitle: a.message,
            buttons: ['OK']
          });
          alert.present(); */
                var toast1 = _this.toastCtrl.create({
                    message: "משתמש לא נמצא",
                    duration: 3000,
                    position: 'top'
                });
                toast1.onDidDismiss(function () {
                    console.log('over');
                });
                toast1.present();
            }
        }),
            function (error) { };
    };
    ForgetPasswordPage.prototype.onLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\forget-password\forget-password.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'forgotpassword.forgot\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content" >\n<div class="logo-div">\n	<div class="text">{{\'forgotpassword.enterYour\' | translate}}</div>\n</div>\n\n<div class="div-input">\n<form [formGroup]="salonregister">\n	 <ion-item>\n    <ion-label stacked>{{\'loginpage.email\' | translate}}</ion-label>\n    <ion-input type="text" [(ngModel)]="login.email"  formControlName="useremail"></ion-input>\n     <ion-icon name="mail" item-right ></ion-icon>\n  </ion-item>\n   <p style="color:#ff8b00;padding-left:15px;"  *ngIf="!salonregister.controls.useremail.valid && (salonregister.controls.useremail.dirty )"> *{{\'loginpage.invalidemail\' | translate}} </p>\n</form>\n\n</div>\n\n<div class="btn-div1">\n	<button ion-button class="btn-login" (click)="onSend()" *ngIf="resend_btn!=\'true\'" [disabled]="!salonregister.valid">{{\'forgotpassword.send\'| translate}}</button>\n  <button ion-button class="btn-login" (click)="onSend()" *ngIf="resend_btn==\'true\'" >{{\'forgotpassword.resend\'| translate}}</button>\n  <button ion-button clear (click)="onLogin()" class="maincolor">{{\'loginpage.login\'| translate}}</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ })

});
//# sourceMappingURL=37.js.map