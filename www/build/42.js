webpackJsonp([42],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPhotosPageModule", function() { return EventPhotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_photos__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EventPhotosPageModule = (function () {
    function EventPhotosPageModule() {
    }
    EventPhotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_photos__["a" /* EventPhotosPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_photos__["a" /* EventPhotosPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], EventPhotosPageModule);
    return EventPhotosPageModule;
}());

//# sourceMappingURL=event-photos.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_security_security__ = __webpack_require__(69);
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
 * Generated class for the EventPhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPhotosPage = (function () {
    function EventPhotosPage(securityProvider, navCtrl, navParams) {
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event_id = this.navParams.get('event_id');
    }
    EventPhotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPhotosPage');
    };
    EventPhotosPage.prototype.ngOnInit = function () {
        var _this = this;
        var a = localStorage['user_id'];
        this.securityProvider.MyEvent(a)
            .subscribe(function (data) {
            var a = data;
            var evn = a.userEvents.filter(function (arg) { return _this.change(arg._id) == _this.event_id; });
            if (evn.length > 0) {
                _this.eventPhotos = evn;
                // alert(JSON.stringify(evn));
            }
            console.log("data" + JSON.stringify(data));
        }),
            function (error) {
                console.log("err" + JSON.stringify(error));
            };
    };
    EventPhotosPage.prototype.change = function (id) {
        if (id) {
            return id;
        }
    };
    EventPhotosPage.prototype.objToString = function (obj) {
        return JSON.stringify(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], EventPhotosPage.prototype, "slides", void 0);
    EventPhotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-photos',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\event-photos\event-photos.html"*/'<!--\n  Generated template for the EventPhotosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'photos\'| translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="direction:ltr">\n<ion-slides pager *ngFor="let a of eventPhotos" >\n\n  <ion-slide *ngFor="let b of a.eventImages">\n  	<img src={{b}}>\n  </ion-slide>\n\n</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\event-photos\event-photos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], EventPhotosPage);
    return EventPhotosPage;
}());

//# sourceMappingURL=event-photos.js.map

/***/ })

});
//# sourceMappingURL=42.js.map