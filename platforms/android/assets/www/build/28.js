webpackJsonp([28],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportcontactsPageModule", function() { return ImportcontactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__importcontacts__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(740);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImportcontactsPageModule = (function () {
    function ImportcontactsPageModule() {
    }
    ImportcontactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__importcontacts__["a" /* ImportcontactsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__importcontacts__["a" /* ImportcontactsPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */]]
        })
    ], ImportcontactsPageModule);
    return ImportcontactsPageModule;
}());

//# sourceMappingURL=importcontacts.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name SMS
 * @description
 *
 * Requires Cordova plugin: cordova-sms-plugin. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).
 *
 * @usage
 * ```typescript
 * import { SMS } from '@ionic-native/sms';
 *
 * constructor(private sms: SMS) { }
 *
 *
 * ...
 *
 *
 * // Send a text message using default options
 * this.sms.send('416123456', 'Hello world!');
 * ```
 * @interfaces
 * SmsOptions
 * SmsOptionsAndroid
 */
var SMS = (function (_super) {
    __extends(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Sends sms to a number
     * @param phoneNumber {string|Array<string>} Phone number
     * @param message {string} Message
     * @param options {SmsOptions} Options
     * @returns {Promise<any>} Resolves promise when the SMS has been sent
     */
    SMS.prototype.send = function (phoneNumber, message, options) { return; };
    /**
     * This function lets you know if the app has permission to send SMS
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if we have permission
     */
    SMS.prototype.hasPermission = function () { return; };
    SMS.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    SMS.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], SMS.prototype, "send", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], SMS.prototype, "hasPermission", null);
    SMS = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'SMS',
            plugin: 'cordova-sms-plugin',
            pluginRef: 'sms',
            repo: 'https://github.com/cordova-sms/cordova-sms-plugin',
            platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], SMS);
    return SMS;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportcontactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportcontactsPage = (function () {
    function ImportcontactsPage(securityProvider, toastCtrl, sms, navCtrl, navParams) {
        this.securityProvider = securityProvider;
        this.toastCtrl = toastCtrl;
        this.sms = sms;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = this.navParams.get('allContacts');
    }
    ImportcontactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ImportcontactsPage');
        var a = localStorage['user_id'];
        var b = localStorage['private'];
        this.securityProvider.AllUserFriend(a, b)
            .subscribe(function (data) {
            var a = data;
            _this.allUser = a.allUsers;
        }),
            function (error) { };
    };
    ImportcontactsPage.prototype.img = function (phone) {
        if (this.allUser) {
            if (phone) {
                var data = this.allUser.filter(function (arg) { return arg.contactNumber == phone; });
                console.log("data" + JSON.stringify(data));
                if (data.length > 0) {
                    return data[0].profileImage;
                }
                else {
                    return "assets/imgs/profile_img.png";
                }
            }
        }
    };
    ImportcontactsPage.prototype.Send = function (number) {
        var _this = this;
        this.sms.send(number, 'https://www.dropbox.com/s/fhqgms77yvo5qo4/Balifood%4010Jan_18.zip?dl=0').then(function (data) {
            if (data == "OK" || data == 'OK') {
                var toast = _this.toastCtrl.create({
                    message: 'Message sent',
                    duration: 3000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong!',
                    duration: 3000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
        }), function (err) {
            alert("Err" + JSON.stringify(err));
        };
    };
    ImportcontactsPage.prototype.onInviteAll = function () {
        for (var i = 0; i < this.contacts.length; i++) {
            var a = this.contacts[i].phoneNumbers[0].value;
            this.Send(a);
        }
    };
    ImportcontactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-importcontacts',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\importcontacts\importcontacts.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Invite Freinds</ion-title>\n    <ion-buttons end (click)="onInviteAll()">\n         <button ion-button small class="custom-btn">\n         Invite all\n         </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="content">\n	<div class="notification-sec">\n		<ul class="m-0 p-0 user_ul1" type="none" >\n			<li *ngFor="let a of contacts">\n				<div class="img-left"> <img class="circle-img" src="assets/imgs/profiler.png" /> </div>\n				<div class="right-content padding-right">\n					<h4> {{a.displayName}} </h4>\n					<span class="status-import" (click)="Send(a.phoneNumbers[0].value)"> Invite </span>\n				</div>\n			</li>\n		</ul>\n	</div>	\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\importcontacts\importcontacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ImportcontactsPage);
    return ImportcontactsPage;
}());

//# sourceMappingURL=importcontacts.js.map

/***/ })

});
//# sourceMappingURL=28.js.map