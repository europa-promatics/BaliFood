webpackJsonp([30],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function() { return TermsConditionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_conditions__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsConditionsPageModule = (function () {
    function TermsConditionsPageModule() {
    }
    TermsConditionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms_conditions__["a" /* TermsConditionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_conditions__["a" /* TermsConditionsPage */]),
            ],
        })
    ], TermsConditionsPageModule);
    return TermsConditionsPageModule;
}());

//# sourceMappingURL=terms-conditions.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsConditionsPage = (function () {
    function TermsConditionsPage(navCtrl, navParams, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
    }
    TermsConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsConditionsPage');
    };
    TermsConditionsPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    TermsConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-conditions',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\terms-conditions\terms-conditions.html"*/'<!--\n  Generated template for the TermsConditionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n  	<ion-buttons left>\n        <button ion-button (click)="goback()">\n           <ion-icon *ngIf="translate.currentLang==\'heb\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;"></ion-icon>\n           <ion-icon *ngIf="translate.currentLang==\'en\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;transform: rotate(180deg);"></ion-icon>\n        \n		</button>\n		</ion-buttons>\n    <ion-title>Terms &amp; Conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n<div style="text-align:left">\n	<ol type="number">\n		<li>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n		</li>\n		<li>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n		</li>\n		<li>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n		</li>\n		<li>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n		</li>\n\n	</ol>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\terms-conditions\terms-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TermsConditionsPage);
    return TermsConditionsPage;
}());

//# sourceMappingURL=terms-conditions.js.map

/***/ })

});
//# sourceMappingURL=30.js.map