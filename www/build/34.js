webpackJsonp([34],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrecipesideiconPageModule", function() { return MyrecipesideiconPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myrecipesideicon__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyrecipesideiconPageModule = (function () {
    function MyrecipesideiconPageModule() {
    }
    MyrecipesideiconPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myrecipesideicon__["a" /* MyrecipesideiconPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myrecipesideicon__["a" /* MyrecipesideiconPage */]),
            ],
        })
    ], MyrecipesideiconPageModule);
    return MyrecipesideiconPageModule;
}());

//# sourceMappingURL=myrecipesideicon.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrecipesideiconPage; });
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


/**
 * Generated class for the MyrecipesideiconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyrecipesideiconPage = (function () {
    function MyrecipesideiconPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyrecipesideiconPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyrecipesideiconPage');
    };
    MyrecipesideiconPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MyrecipesideiconPage.prototype.myrecipe = function () {
        this.navCtrl.push('NewRecipesPage');
    };
    MyrecipesideiconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myrecipesideicon',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\myrecipesideicon\myrecipesideicon.html"*/'\n  <button ion-button icon-only (click)="close()">\n  <ion-icon name="ios-camera">\n</ion-icon>\n</button>\n     <button ion-button icon-only (click)="close()">\n     <ion-icon name="ios-globe">\n     </ion-icon>\n     </button>\n     <button ion-button icon-only (click)="close()"><ion-icon name="ios-clipboard-outline"></ion-icon></button>\n     <button ion-button icon-only (click)="myrecipe()"><ion-icon name="ios-albums-outline"></ion-icon></button>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\myrecipesideicon\myrecipesideicon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], MyrecipesideiconPage);
    return MyrecipesideiconPage;
}());

//# sourceMappingURL=myrecipesideicon.js.map

/***/ })

});
//# sourceMappingURL=34.js.map