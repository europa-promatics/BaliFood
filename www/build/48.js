webpackJsonp([48],{

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
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






var AccountPage = (function () {
    function AccountPage(loadingCtrl, modalCtrl, securityProvider, navCtrl, navParams, translate) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.contactListArray = [];
        this.value = 0;
        this.offsetData = 0;
        this.listclass = 'list-view';
        this.list = 'true';
        this.activefreind = '';
        this.activePost = '';
        this.activeinvite = '';
        this.user_id = localStorage['user_id'];
        this.translate.use(localStorage['language']);
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage['contact_data']) {
            this.contacts = JSON.parse(localStorage['contact_data']);
            this.value = this.value;
            this.forContact();
            this.value++;
        }
        //console.log('ionViewDidLoad AccountPage');
        setTimeout(function () {
            _this.ionViewDidLoad();
        }, 1000);
    };
    AccountPage.prototype.forContact = function () {
        if (this.contacts) {
            if (this.value == 1) {
                for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
                    var a = _a[_i];
                    for (var _b = 0, _c = a._objectInstance.phoneNumbers; _b < _c.length; _b++) {
                        var b = _c[_b];
                        var d = b.value;
                        var e = d.replace(" ", "");
                        this.contactListArray.push(e);
                    }
                }
            }
        }
    };
    AccountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.alluser();
        this.allRecipe();
        this.username = this.username;
        this.user_image = this.user_image;
        //    console.log('img' + this.user_image);
        var a = localStorage['user_id'];
        this.securityProvider.MyRecipe(a)
            .subscribe(function (data) {
            //        console.log("cat_data" + JSON.stringify(data));
            _this.Category = data.recipes;
        }),
            /*  setTimeout(() => {
               this.ngOnInit();
             }, 10000); */
            function (error) { };
    };
    AccountPage.prototype.alluser = function () {
        var _this = this;
        if (localStorage['user_id']) {
            var a = localStorage['user_id'];
            var b = localStorage['private'];
            this.securityProvider.AllUserFriend(a, b)
                .subscribe(function (data) {
                var c = data;
                _this.alluserdata = c.allUsers;
                _this.userimg();
                var filterdata = _this.alluserdata.filter(function (arg) { return arg._id == a; });
                console.log("data" + JSON.stringify(filterdata));
                if (filterdata.length > 0) {
                    _this.user_image = filterdata[0].profileImage;
                    _this.username = filterdata[0].username;
                }
            });
        }
    };
    AccountPage.prototype.userimg = function () {
        var a = localStorage['user_id'];
        if (this.alluserdata) {
            // code...
            var filterdata = this.alluserdata.filter(function (arg) { return arg._id == a; });
            // console.log("datafilter" + JSON.stringify(filterdata))
            if (filterdata.length > 0) {
                if (filterdata[0].profileImage) {
                    return filterdata[0].profileImage;
                    ;
                }
                else {
                    return 'assets/imgs/profiler.png';
                }
            }
            else {
                return 'assets/imgs/profiler.png';
            }
        }
    };
    AccountPage.prototype.onIconlist = function () {
        this.listclass = 'grid-view';
        this.list = 'false';
    };
    AccountPage.prototype.onIcongrid = function () {
        this.listclass = 'list-view';
        this.list = 'true';
    };
    AccountPage.prototype.onSetting = function () {
        this.navCtrl.push('SettingsPage');
    };
    AccountPage.prototype.onEditProfile = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EditProfilePage', {
            user_image: this.user_image,
            username: this.username
        });
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log("data" + JSON.stringify(data));
                var a = data;
                delete localStorage['user_image'];
                delete localStorage['username'];
                localStorage['user_image'] = a.user_image;
                localStorage['username'] = a.username;
                console.log("this.user_image" + _this.user_image);
                _this.ngOnInit();
            }
        });
        modal.present();
    };
    AccountPage.prototype.onfriendlink = function () {
        this.activefreind = 'activefreind';
        this.activePost = '';
        this.activeinvite = '';
        this.navCtrl.push('AccountFriendsPage');
    };
    AccountPage.prototype.contactImported = function (contactListArray) {
        var a = {
            user_id: localStorage['user_id'],
            contacts: contactListArray
        };
        this.securityProvider.ContactImport(a)
            .subscribe(function (data) {
            var a = data;
        }),
            function (err) {
                alert("err" + err);
            };
    };
    AccountPage.prototype.onMyPost = function () {
        this.activefreind = '';
        this.activePost = 'activePost';
        this.activeinvite = '';
        this.navCtrl.push('AccountMyPostPage');
    };
    AccountPage.prototype.onInviteFriend = function () {
        this.activefreind = '';
        this.activePost = '';
        this.activeinvite = 'activeinvite';
        this.navCtrl.push('AccountInviteFriendsPage');
    };
    AccountPage.prototype.allRecipe = function () {
        var _this = this;
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
    AccountPage.prototype.getStatusFOrdisabled = function () {
        var _this = this;
        if (this.dataa) {
            var data = this.dataa.filter(function (arg) { return _this.user_id == arg.user_id && arg.categories != "Others"; });
            if (data.length > 0) {
                this.mypost = data;
            }
            else {
                //      console.log("data1" + JSON.stringify(data));
            }
        }
    };
    AccountPage.prototype.onViewDetail = function (recipe_id, recipe_data) {
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
    AccountPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val.trim() == '') {
            if (this.dataa) {
                var data = this.dataa.filter(function (arg) { return _this.user_id == arg.user_id && arg.categories != "Others"; });
                if (data.length > 0) {
                    this.mypost = data;
                }
            }
        }
        else {
            this.mypost = this.mypost.filter(function (p) {
                if (p.recipeTitle) {
                    return (p.recipeTitle.toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            });
        }
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\account\account.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title>{{\'myaccount\' | translate}} </ion-title>\n      <ion-buttons start>\n         <button icon-only ion-button (click)="onSetting()"  class="btn-notify">\n            <ion-icon name="settings" class="setting-icon"></ion-icon>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content>\n   <div class="user-box">\n      <div class="custom-search m-b-10">\n         <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search\' | translate}}"></ion-searchbar>\n      </div>\n      <div class="edit-details" >\n         <div class="img-profile">\n            <img *ngIf="userimg()" src={{userimg()}}>\n            <img *ngIf="!userimg()" src="/assets/imgs/profiler.png">\n			\n         </div>\n         <div class="profile-access">\n            <ul class="p-0" type="none">\n               <li (click)="onfriendlink()" > <u class={{activefreind}}>{{\'friendss\' | translate}}</u>  </li>\n               <li (click)="onMyPost()"> <u class={{activePost}}> {{\'posts\' | translate}} </u> </li>\n               <li (click)="onInviteFriend()"> <u class={{activeinvite}}> {{\'invite\' | translate}} </u> </li>\n            </ul>\n            <button ion-button class="btn custom-btn full-width" (click)="onEditProfile()"> {{\'changeprofile\' | translate}} </button>\n         </div>\n      </div>\n      <div class="drawer">\n         <span class="drawer_name">{{username}}</span>\n         <span class="pull-left color-orange" (click)="onIconlist()" *ngIf="list==\'true\'">\n         <ion-icon name="icon-listed-view" ></ion-icon>\n         </span>\n         <span class="pull-left color-orange" (click)="onIcongrid()" *ngIf="list!=\'true\'">\n         <ion-icon name="icon-tiled-view" ></ion-icon>\n         </span>\n      </div>\n   </div>\n   <div class={{listclass}}>\n      <ul class="p-0 list-ul" type="none" *ngIf="mypost">\n         <li *ngFor="let a of mypost">\n            <a (click)="onViewDetail(a._id,a)">\n               <img src={{a.mainImage}} />\n               <div class="action-box">\n                  <span>\n                     <ion-icon name="thumbs-up"></ion-icon>\n                     {{a.likes.length}} \n                  </span>\n                  <span class="pull-right">\n                     <ion-icon name="eye"></ion-icon>\n                     {{a.views.length}} \n                  </span>\n               </div>\n            </a>\n         </li>\n      </ul>\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=48.js.map