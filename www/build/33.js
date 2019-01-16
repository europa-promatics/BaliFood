webpackJsonp([33],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingPageModule", function() { return NotificationSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_setting__ = __webpack_require__(826);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationSettingPageModule = (function () {
    function NotificationSettingPageModule() {
    }
    NotificationSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_setting__["a" /* NotificationSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_setting__["a" /* NotificationSettingPage */]),
            ],
        })
    ], NotificationSettingPageModule);
    return NotificationSettingPageModule;
}());

//# sourceMappingURL=notification-setting.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationSettingPage = (function () {
    function NotificationSettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationSettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationSettingPage');
    };
    NotificationSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-setting',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\notification-setting\notification-setting.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n<ion-item >\n  <ion-label> Menu Item Ownership</ion-label>\n  <ion-toggle  checked="true"></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-label> What to bring item Ownership</ion-label>\n  <ion-toggle ></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-label> New Message Recieved</ion-label>\n  <ion-toggle  ></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-label>Event Arrival</ion-label>\n  <ion-toggle  ></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-label> Event Invitation Recieved</ion-label>\n  <ion-toggle  ></ion-toggle>\n</ion-item>\n<ion-item>\n  <ion-label> Comments On Post</ion-label>\n  <ion-toggle  ></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-label> Import Your Recipe Done</ion-label>\n  <ion-toggle  ></ion-toggle>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\notification-setting\notification-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], NotificationSettingPage);
    return NotificationSettingPage;
}());

//# sourceMappingURL=notification-setting.js.map

/***/ })

});
//# sourceMappingURL=33.js.map