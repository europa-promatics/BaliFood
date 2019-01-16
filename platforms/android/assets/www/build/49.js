webpackJsonp([49],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountMyPostPageModule", function() { return AccountMyPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_my_post__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccountMyPostPageModule = (function () {
    function AccountMyPostPageModule() {
    }
    AccountMyPostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_my_post__["a" /* AccountMyPostPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_my_post__["a" /* AccountMyPostPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], AccountMyPostPageModule);
    return AccountMyPostPageModule;
}());

//# sourceMappingURL=account-my-post.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountMyPostPage; });
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



var AccountMyPostPage = (function () {
    function AccountMyPostPage(securityProvider, navCtrl, navParams) {
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offsetData = 0;
        this.listclass = 'list-view';
        this.list = 'true';
        this.user_id = localStorage['user_id'];
        this.user_email = localStorage['email'];
    }
    AccountMyPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountMyPostPage');
    };
    AccountMyPostPage.prototype.ngOnInit = function () {
        var _this = this;
        // alert(localStorage["private"]);
        this.securityProvider.MainRecipe(this.offsetData)
            .subscribe(function (data) {
            if (localStorage["private"] == 0) {
                _this.dataa = data.Recipes;
            }
            else {
                _this.dataa = data.recipesData;
            }
            _this.getStatusFOrdisabled();
        }),
            function (error) { };
    };
    AccountMyPostPage.prototype.onIconlist = function () {
        this.listclass = 'grid-view';
        this.list = 'false';
    };
    AccountMyPostPage.prototype.onIcongrid = function () {
        this.listclass = 'list-view';
        this.list = 'true';
    };
    AccountMyPostPage.prototype.getStatusFOrdisabled = function () {
        var _this = this;
        var data = this.dataa.filter(function (arg) { return _this.user_id == arg.user_id && arg.categories != "Others"; });
        if (data.length > 0) {
            this.mydata = data;
            console.log("mydata" + JSON.stringify(this.mydata));
        }
        else {
            console.log("data1" + JSON.stringify(data));
        }
    };
    AccountMyPostPage.prototype.onViewDetail = function (recipe_id, recipe_data) {
        var _this = this;
        this.navCtrl.push('ViewRecipesPage', {
            recipe_data: recipe_data
        });
        console.log("recipe_data" + JSON.stringify(recipe_data));
        var a = {
            recipe_id: recipe_id,
            user_id: localStorage['user_id']
        };
        this.securityProvider.View_detail(a)
            .subscribe(function (data) {
            console.log('View_data' + JSON.stringify(data));
            _this.ngOnInit();
        }),
            function (error) { };
    };
    AccountMyPostPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    AccountMyPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-my-post',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\account-my-post\account-my-post.html"*/'\n\n<ion-header>\n   <ion-navbar hideBackButton>\n      <ion-title> {{\'mypost\'  | translate}} </ion-title>\n	  	<ion-buttons left>\n        <button ion-button (click)="goback()">\n           <ion-icon *ngIf="translate.currentLang==\'heb\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;"></ion-icon>\n           <ion-icon *ngIf="translate.currentLang==\'en\'" class="backArrow" name="ios-arrow-back" style=" color: #ff8b00;margin: 0 6px;min-width: 44px; -webkit-box-shadow: none;box-shadow: none;font-size: 1.75em;transform: rotate(180deg);"></ion-icon>\n        \n		</button>\n		</ion-buttons>\n      <ion-buttons end>\n         <button icon-only ion-button   class="btn-notify" (click)="onIconlist()" *ngIf="list==\'true\'" >\n         <ion-icon name="icon-listed-view" ></ion-icon>\n         </button>\n         <button icon-only ion-button   class="btn-notify" (click)="onIcongrid()" *ngIf="list!=\'true\'">\n         <ion-icon name="icon-tiled-view"  ></ion-icon>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content>\n   <div class={{listclass}}>\n      <ul class="p-0 list-ul" type="none">\n         <li *ngFor="let a of mydata">\n            <a (click)="onViewDetail(a._id,a)">\n               <img src={{a.mainImage}} />\n               <div class="action-box">\n                  <span> {{a.recipeTitle}} </span>\n               </div>\n               <div class="action-box">\n                  <span>\n                     <ion-icon name="thumbs-up"></ion-icon>\n                     {{a.likes.length}}\n                  </span>\n                  <span class="pull-right">\n                     <ion-icon name="eye"></ion-icon>\n                     {{a.views.length}} \n                  </span>\n               </div>\n            </a>\n         </li>\n      </ul>\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\account-my-post\account-my-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], AccountMyPostPage);
    return AccountMyPostPage;
}());

//# sourceMappingURL=account-my-post.js.map

/***/ })

});
//# sourceMappingURL=49.js.map