webpackJsonp([39],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritelistPageModule", function() { return FavoritelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favoritelist__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FavoritelistPageModule = (function () {
    function FavoritelistPageModule() {
    }
    FavoritelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favoritelist__["a" /* FavoritelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favoritelist__["a" /* FavoritelistPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], FavoritelistPageModule);
    return FavoritelistPageModule;
}());

//# sourceMappingURL=favoritelist.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritelistPage; });
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


var FavoritelistPage = (function () {
    function FavoritelistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.count = 0;
        this.list = 'true';
        this.pop_div = 'false';
        this.post = this.navParams.get('post');
        this.savedetail = this.navParams.get('savedetail');
        this.savedetail2 = this.navParams.get('savedetail');
    }
    FavoritelistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaverecipelistPage');
    };
    FavoritelistPage.prototype.onNewRecipe = function () {
        this.pop_div = 'false';
        this.navCtrl.push('NewRecipesPage');
    };
    FavoritelistPage.prototype.onIconlist = function () {
        this.list = 'false';
    };
    FavoritelistPage.prototype.onIcongrid = function () {
        this.list = 'true';
    };
    FavoritelistPage.prototype.onViewDetail = function (recipe_id, recipe_data) {
        this.pop_div = 'false';
        this.navCtrl.push('SaveRecipeDetailPage', { recipe_data: recipe_data, post: this.post });
    };
    FavoritelistPage.prototype.getString = function (object) {
        return JSON.stringify(object);
    };
    FavoritelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritelist',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\favoritelist\favoritelist.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n<ion-title>{{\'favorite_recipes\' | translate}}</ion-title>\n\n    <ion-buttons end>\n       <button ion-button icon-only (click)="onIconlist()"  *ngIf="list==\'true\'">\n         <ion-icon name="icon-listed-view" class="icon-color"> </ion-icon>\n      \n</button>\n <button ion-button icon-only (click)="onIcongrid()" *ngIf="list!=\'true\'">\n        <ion-icon name="icon-tiled-view" class="icon-color"> </ion-icon>\n</button>\n</ion-buttons>\n  \n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content class="content">\n<!--div>{{getString(savedetail)}}</div-->\n    <div class="grid-view" *ngIf="list!=\'true\'">\n        <ul class="p-0 list-ul" type="none" *ngIf="savedetail">\n            <li *ngFor="let a of savedetail" (click)="onViewDetail(a._id,a.recipe_detail)">\n                <a>\n                    <img src={{a.recipe_detail.mainImage}} />\n                    <div class="action-box">\n                        <div class="div-title" *ngIf="a.recipe_detail"> <b>{{a.recipe_detail.recipeTitle}}</b> </div>\n                        <div class="div-title" *ngIf="a.recipe_detail.description"> {{a.recipe_detail.description}}</div>\n                        <div>\n                           <span class="pull-left color" *ngIf="a.readonly.views">\n                              <i class="fa fa-eye color" ></i>{{a.recipe_detail.views.length}}\n                             </span>\n                              <span class="pull-right color" *ngIf="a.recipe_detail.likes">\n                            \n                              <i class="fa fa-thumbs-up color"></i>{{a.recipe_detail.likes.length}}\n                             </span>\n                        </div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n<!--div>\n{{getString(savedetail)}}\n</div-->\n    <div  *ngIf="list==\'true\'" >\n        <div *ngIf="savedetail">\n        	<div class="list-item" *ngFor="let a of savedetail" (click)="onViewDetail(a._id,a.recipe_detail)">\n            <div class="div-list">\n                <div class="img-div pull-left" *ngIf="a.recipe_detail">\n                    <img src={{a.recipe_detail.mainImage}}></div>\n                <div class="img-text" *ngIf="a.recipe_detail">\n                    <div class="extra-div">{{a.recipe_detail.recipeTitle}}</div>\n                    <div class="extra-div1">{{a.recipe_detail.description}}</div>\n                </div>\n                <div class="div-icon" *ngIf="a.recipe_detail">\n                    <span class="pull-left color">\n                        <i class="fa fa-eye color" ></i>{{a.recipe_detail.views.length}}\n                    </span>\n                    <span class="pull-right color">\n                       \n                         <i class="fa fa-thumbs-up color"></i>{{a.recipe_detail.likes.length}}\n                    </span>\n                </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\favoritelist\favoritelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], FavoritelistPage);
    return FavoritelistPage;
}());

//# sourceMappingURL=favoritelist.js.map

/***/ })

});
//# sourceMappingURL=39.js.map