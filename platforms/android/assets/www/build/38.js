webpackJsonp([38],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageModule", function() { return FirstPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FirstPageModule = (function () {
    function FirstPageModule() {
    }
    FirstPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__first__["a" /* FirstPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__first__["a" /* FirstPage */]), __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]]
        })
    ], FirstPageModule);
    return FirstPageModule;
}());

//# sourceMappingURL=first.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirstPage = (function () {
    function FirstPage(config, securityProvider, navCtrl, navParams, fb, translate, loadingCtrl, alertCtrl, platform) {
        this.config = config;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.FB_APP_ID = 209490229604239;
        this.fb.browserInit(this.FB_APP_ID, "v2.11");
        this.showBanner();
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    FirstPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    FirstPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    FirstPage.prototype.showBanner = function () {
        //this.fb_login();
    };
    FirstPage.prototype.fb_logout = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (data) {
            if (data.status == 'connected') {
                _this.fb.logout();
            }
        });
    };
    FirstPage.prototype.fb_login = function () {
        var _this = this;
        this.fb_logout();
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        var permissions = new Array();
        permissions = ["public_profile", "email", "user_friends"];
        this.fb.login(permissions)
            .then(function (response) {
            loading.dismiss();
            var userId = response.authResponse.userID;
            var params = new Array();
            _this.fb.api("/me?fields=name,gender,email,id,friends", params)
                .then(function (user) {
                var alert = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: JSON.stringify(user),
                    buttons: ['OK']
                });
                //alert.present();
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                _this.facebook(user.email, user.name, userId, user.picture);
            });
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Alert!',
                subTitle: JSON.stringify(error),
                buttons: ['OK']
            });
            alert.present();
        });
    };
    FirstPage.prototype.facebook = function (user_email, user_name, userId, user_picture) {
        var _this = this;
        // alert('here');
        var login_fb = {
            email: user_email,
            user_name: user_name,
            userId: userId,
            user_picture: user_picture
        };
        this.securityProvider.login_fb_service(login_fb)
            .subscribe(function (data) {
            var a = data;
            console.log(a);
            if (a.userdata) {
                var b = a.userdata;
                var c = b.email;
                localStorage['email'] = c;
                localStorage['user_id'] = b._id;
                localStorage['username'] = b.username;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
        }),
            function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: JSON.stringify(error),
                    buttons: ['OK']
                });
                alert.present();
            };
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\first\first.html"*/'\n<ion-content class="content">\n   <div class="main-img">\n      <img src="assets/imgs/balifood1.jpg">\n   </div>\n   <div class="flex-box">\n      <div class="logo-div">\n         <img src="assets/imgs/balifooddd.png" class="logo">\n      </div>\n      <div class="logo1">\n         <div class="pull-left">\n            <img src="assets/imgs/plate.png">\n         </div>\n         <div class="pull-right">\n            <div></div>\n            <div class="text">{{\'dummyText.lorem\' | translate}} </div>\n            <!--div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </div-->\n         </div>\n      </div>\n      <div class="btn-div">\n         <button ion-button small class="btn1" (click)="login()">{{\'homepage.login\' | translate}}</button>\n         <!--button ion-button small class="btn1" (click)="login()">LOGIN</button-->\n         <button ion-button small class="btn2" (click)="signup()">{{"homepage.signup" | translate}}</button>\n         <!--button ion-button small class="btn2" (click)="signup()">SIGN UP</button-->\n      </div>\n      <div class="btn-div1">\n         <button ion-button block class="btn-fb" icon-left (click)="fb_login()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            {{\'homepage.facebook\' | translate }}\n         </button>\n		 \n		 <!--button ion-button block class="btn-fb" icon-left (click)="fb_login()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            CONNECT WITH FACEBOOK\n         </button-->\n      </div>\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\first\first.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ })

});
//# sourceMappingURL=38.js.map