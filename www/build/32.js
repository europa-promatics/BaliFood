webpackJsonp([32],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaverecipelistPageModule", function() { return SaverecipelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saverecipelist__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SaverecipelistPageModule = (function () {
    function SaverecipelistPageModule() {
    }
    SaverecipelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__saverecipelist__["a" /* SaverecipelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__saverecipelist__["a" /* SaverecipelistPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], SaverecipelistPageModule);
    return SaverecipelistPageModule;
}());

//# sourceMappingURL=saverecipelist.module.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaverecipelistPage; });
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



var SaverecipelistPage = (function () {
    function SaverecipelistPage(navCtrl, navParams, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.count = 0;
        this.translate.use(localStorage['language']);
        this.list = 'true';
        this.pop_div = 'false';
        this.post = this.navParams.get('post');
        var a = this.navParams.get('savedetail');
        console.log("g" + JSON.stringify(this.savedetail));
        var data = a.filter(function (arg) { return arg.recipe_detail != null; });
        if (data.length > 0) {
            this.savedetail = data;
            this.savedetail2 = data;
        }
    }
    SaverecipelistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaverecipelistPage');
    };
    SaverecipelistPage.prototype.onNewRecipe = function () {
        this.pop_div = 'false';
        this.navCtrl.push('NewRecipesPage');
    };
    SaverecipelistPage.prototype.onIconlist = function () {
        this.list = 'false';
    };
    SaverecipelistPage.prototype.onIcongrid = function () {
        this.list = 'true';
    };
    SaverecipelistPage.prototype.onViewDetail = function (recipe_id, recipe_data) {
        this.pop_div = 'false';
        this.navCtrl.push('SaveRecipeDetailPage', { recipe_data: recipe_data, post: this.post });
    };
    SaverecipelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saverecipelist',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\saverecipelist\saverecipelist.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n<ion-title>{{\'saved_recipes\' | translate}}</ion-title>\n\n    <ion-buttons end>\n       <button ion-button icon-only (click)="onIconlist()"  *ngIf="list==\'true\'">\n       <ion-icon name="icon-listed-view" class="icon-color"> </ion-icon>\n      \n</button>\n <button ion-button icon-only (click)="onIcongrid()" *ngIf="list!=\'true\'">\n        <ion-icon name="icon-tiled-view" class="icon-color"> </ion-icon>\n</button>\n</ion-buttons>\n  \n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content class="content">\n    <div class="grid-view" *ngIf="list!=\'true\'">\n        <ul class="p-0 list-ul" type="none" *ngIf="savedetail">\n            <li *ngFor="let a of savedetail" (click)="onViewDetail(a._id,a.recipe_detail)">\n                <a >\n                    <img src={{a.recipe_detail.mainImage}} />\n                    <div class="action-box">\n                        <div class="div-title"> <b>{{a.recipe_detail.recipeTitle}}</b> </div>\n                        <div class="div-title"> {{a.recipe_detail.description}}</div>\n                        <div>\n                           <span class=" color">\n                              <i class="fa fa-eye color" ></i>{{a.recipe_detail.views.length}}\n                             </span>\n                              <span class=" color">\n                            \n                              <i class="fa fa-thumbs-up color"></i>{{a.recipe_detail.likes.length}}\n                             </span>\n                        </div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n\n    <div  *ngIf="list==\'true\'" >\n        <div *ngIf="savedetail">\n        	<div class="list-item" *ngFor="let a of savedetail" (click)="onViewDetail(a._id,a.recipe_detail)">\n            <div class="div-list">\n                <div class="img-div pull-left">\n                    <img src={{a.recipe_detail.mainImage}}></div>\n                <div class="img-text">\n                    <div class="extra-div">{{a.recipe_detail.recipeTitle}}</div>\n                    <div class="extra-div1">{{a.recipe_detail.description}}</div>\n                </div>\n                <div class="div-icon">\n                    <span class="color">\n                        <i class="fa fa-eye color" ></i>{{a.recipe_detail.views.length}}\n                    </span>\n                    <span class="color">\n                       \n                         <i class="fa fa-thumbs-up color"></i>{{a.recipe_detail.likes.length}}\n                    </span>\n                </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\saverecipelist\saverecipelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], SaverecipelistPage);
    return SaverecipelistPage;
}());

//# sourceMappingURL=saverecipelist.js.map

/***/ })

});
//# sourceMappingURL=32.js.map