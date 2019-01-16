webpackJsonp([47],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContactusPageModule = (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());

//# sourceMappingURL=contactus.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
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





var ContactusPage = (function () {
    function ContactusPage(formBuilder, alertCtrl, securityProvider, navCtrl, navParams, toastCtrl, translate) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.contact = {};
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.salonregister = formBuilder.group({
            useremail: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(emailRegex), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])],
            message: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(''), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.onSave = function () {
        var _this = this;
        this.securityProvider.contactopen(this.contact)
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
            var a = data;
            if (a.success == true || a.success == 'true' || a.success == "true") {
                /*  let alert = this.alertCtrl.create({
                   title: 'Thanks for contact us.!',
                   subTitle: 'We will contact you shortly !',
                   buttons: ['OK']
                 });
                 alert.present(); */
                var toast1 = _this.toastCtrl.create({
                    message: "Thanks for contact us.",
                    duration: 3000,
                    position: 'top'
                });
                toast1.onDidDismiss(function () {
                    console.log('over');
                });
                toast1.present();
                _this.navCtrl.push('SettingsPage');
            }
            else {
                console.log('eror');
            }
        }),
            function (error) { };
    };
    ContactusPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\contactus\contactus.html"*/'\n<ion-header>\n   <ion-navbar hideBackButton>\n  	<ion-buttons left>\n        <button ion-button (click)="goback()">\n           <ion-icon *ngIf="translate.currentLang==\'heb\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;"></ion-icon>\n           <ion-icon *ngIf="translate.currentLang==\'en\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;transform: rotate(180deg);"></ion-icon>\n        \n		</button>\n		</ion-buttons>\n      <ion-title style="width:50%; float:right;">{{\'contactus\' | translate}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <div class="logo-div">\n      <img src="assets/imgs/balifooddd.png" class="logo">\n   </div>\n   <form [formGroup]="salonregister">\n      <div class="div-input">\n         <ion-item>\n            <ion-label stacked>{{\'loginpage.email\' | translate}}</ion-label>\n            <ion-input type="text" [(ngModel)]="contact.email" formControlName="useremail"></ion-input>\n            <ion-icon name="mail" item-right ></ion-icon>\n         </ion-item>\n         <p style="color:#ff8b00;padding-left:15px;"  *ngIf="!salonregister.controls.useremail.valid && (salonregister.controls.useremail.dirty )"> *{{\'invalidemailaddress\' | translate}}. </p>\n         <ion-item class="custom-contact">\n            <ion-label stacked>{{\'yourmessage\' | translate}}</ion-label>\n            <ion-textarea type="text" [(ngModel)]="contact.message" class="text-class" formControlName="message"></ion-textarea>\n         </ion-item>\n         <p style="color:#ff8b00;padding-left:15px;"  *ngIf="!salonregister.controls.message.valid && (salonregister.controls.message.dirty )"> *{{\'iprqd\' | translate}} </p>\n      </div>\n   </form>\n   <div class="btn-div1">\n      <button ion-button class="btn-login" (click)="onSave()" [disabled]="!salonregister.valid">{{\'sendusmessage\' | translate}}</button>\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ })

});
//# sourceMappingURL=47.js.map