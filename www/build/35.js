webpackJsonp([35],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelpopoverPageModule", function() { return LevelpopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levelpopover__ = __webpack_require__(819);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LevelpopoverPageModule = (function () {
    function LevelpopoverPageModule() {
    }
    LevelpopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__levelpopover__["a" /* LevelpopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__levelpopover__["a" /* LevelpopoverPage */]),
            ],
        })
    ], LevelpopoverPageModule);
    return LevelpopoverPageModule;
}());

//# sourceMappingURL=levelpopover.module.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelpopoverPage; });
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
 * Generated class for the LevelpopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LevelpopoverPage = (function () {
    function LevelpopoverPage(navCtrl, navParams, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.relationship = '';
    }
    LevelpopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LevelpopoverPage');
    };
    LevelpopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss('NewRecipesPage');
    };
    LevelpopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-levelpopover',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\levelpopover\levelpopover.html"*/' <ion-list>\n      <ion-list-header>Ionic</ion-list-header>\n      <button ion-item (click)="close()">Learn Ionic</button>\n      <button ion-item (click)="close()">Documentation</button>\n      <button ion-item (click)="close()">Showcase</button>\n      <button ion-item (click)="close()">GitHub Repo</button>\n    </ion-list>'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\levelpopover\levelpopover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], LevelpopoverPage);
    return LevelpopoverPage;
}());

//# sourceMappingURL=levelpopover.js.map

/***/ })

});
//# sourceMappingURL=35.js.map