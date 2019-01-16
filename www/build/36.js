webpackJsonp([36],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgesearchPageModule", function() { return FridgesearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fridgesearch__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FridgesearchPageModule = (function () {
    function FridgesearchPageModule() {
    }
    FridgesearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fridgesearch__["a" /* FridgesearchPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fridgesearch__["a" /* FridgesearchPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], FridgesearchPageModule);
    return FridgesearchPageModule;
}());

//# sourceMappingURL=fridgesearch.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FridgesearchPage; });
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



var FridgesearchPage = (function () {
    function FridgesearchPage(alertCtrl, securityProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offsetData = 0;
    }
    FridgesearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FridgesearchPage');
    };
    FridgesearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.securityProvider.MainRecipe(this.offsetData)
            .subscribe(function (data) {
            _this.recipedata = data.Recipes;
            _this.recipedata2 = data.Recipes;
            for (var i = 0; i < _this.recipedata.length; i++) {
                var a = _this.recipedata[i];
            }
        }),
            function (error) {
                if (error) {
                }
            };
    };
    FridgesearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.recipedata = this.recipedata.filter(function (p) {
                if (p.recipeTitle) {
                    return (p.recipeTitle.toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            });
        }
        else {
            this.recipedata = this.recipedata2;
        }
    };
    FridgesearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fridgesearch',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\fridgesearch\fridgesearch.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fridge</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<div class="search-div">\n     <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n</div>\n    <div class="grid-view" >\n        <ul class="p-0 list-ul" type="none" >\n            <li *ngFor="let a of recipedata">\n                <a >\n                    <img src="assets/imgs/korean.jpg" />\n                    <div class="action-box">\n                        <div class="div-title item-title">\n                          <b>{{a.recipeTitle}}</b> \n                    \n                        </div>\n                        <div class="div-title"> {{a.description}}</div>\n                        <div >\n                           <span class="pull-left color">\n                              <i class="fa fa-eye color" ></i>views\n                             </span>\n                              <span class="pull-right color">\n                            \n                              <i class="fa fa-thumbs-up color"></i>likes\n                             </span>\n                        </div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n\n   <!--  <div  *ngIf="list==\'true\' && myfavRecipe" >\n        <div class="list-item" >\n            <div class="div-list">\n                <div class="img-div pull-left" >\n                    <img src="assets/imgs/korean.jpg"></div>\n                <div class="img-text">\n                    <div class="extra-div">recipeTitle\n                        </div>\n                    <div class="extra-div1" >description</div>\n                </div>\n                <div class="div-icon">\n                    <span class="pull-left color">\n                        <i class="fa fa-eye color" ></i>views\n                    </span>\n                    <span class="pull-right color">\n                       \n                         <i class="fa fa-thumbs-up color"></i>likes\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</ion-content>\n\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\fridgesearch\fridgesearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], FridgesearchPage);
    return FridgesearchPage;
}());

//# sourceMappingURL=fridgesearch.js.map

/***/ })

});
//# sourceMappingURL=36.js.map