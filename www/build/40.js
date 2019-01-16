webpackJsonp([40],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FaqPageModule = (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqPage = (function () {
    function FaqPage(securityProvider, navCtrl, navParams, translate) {
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.count = 0;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage.prototype.ngOnInit = function () {
        var _this = this;
        this.securityProvider.FaqOpen()
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
            _this.dataa = data.data;
        }),
            function (error) { };
    };
    FaqPage.prototype.question = function (i) {
        this.count++;
        if (this.count % 2 != 0) {
            this.answer = i;
        }
        else {
            this.answer = 'p';
        }
    };
    FaqPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\faq\faq.html"*/'\n<ion-header>\n   <ion-navbar hideBackButton>\n      	<ion-buttons left>\n        <button ion-button (click)="goback()">\n           <ion-icon *ngIf="translate.currentLang==\'heb\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;"></ion-icon>\n           <ion-icon *ngIf="translate.currentLang==\'en\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;transform: rotate(180deg);"></ion-icon>\n        \n		</button>\n		</ion-buttons>\n      <ion-title>Faq</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding class="content">\n   <div class="full-faq" *ngFor="let a of dataa;let i=index">\n      <div class="full-ques" (click)="question(i)">\n         <div class="ques" >\n            <span class="pull-left">{{a.question}}</span>\n            <span class="pull-right">\n               <ion-icon name="ios-arrow-up" *ngIf="answer!=i"></ion-icon>\n               <ion-icon name="ios-arrow-down" *ngIf="answer==i"></ion-icon>\n            </span>\n         </div>\n      </div>\n      <div class="answer"  *ngIf="answer==i">{{a.answer}}</div>\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ })

});
//# sourceMappingURL=40.js.map