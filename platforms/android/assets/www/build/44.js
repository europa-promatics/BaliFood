webpackJsonp([44],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateeventmemberPageModule", function() { return CreateeventmemberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createeventmember__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateeventmemberPageModule = (function () {
    function CreateeventmemberPageModule() {
    }
    CreateeventmemberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createeventmember__["a" /* CreateeventmemberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createeventmember__["a" /* CreateeventmemberPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], CreateeventmemberPageModule);
    return CreateeventmemberPageModule;
}());

//# sourceMappingURL=createeventmember.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateeventmemberPage; });
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




var CreateeventmemberPage = (function () {
    function CreateeventmemberPage(alertCtrl, securityProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.member_id = [];
        this.event_id = this.navParams.get('event_id');
        this.data = [{
                id: 1,
                name: 'rohit smith',
                color: 'color-red',
                img: 'assets/imgs/profile_img.png'
            },
            {
                id: 2,
                name: 'john smith',
                color: 'color-green',
                img: 'assets/imgs/balifood.jpg'
            },
            {
                id: 3,
                name: 'ravi jain',
                color: 'color-red',
                img: 'assets/imgs/Bebek-and-Ayam-Betutu.jpg'
            },
            {
                id: 4,
                name: 'mohit',
                color: 'color-green',
                img: 'assets/imgs/profile_img.png'
            },
            {
                id: 5,
                name: 'sahil thukral',
                color: 'color-red',
                img: 'assets/imgs/korean.jpg'
            },
            {
                id: 6,
                name: 'john smith',
                color: 'color-green',
                img: 'assets/imgs/profile_img.png'
            },
            {
                id: 7,
                name: 'ashish garg',
                color: 'color-red',
                img: 'assets/imgs/profiler.png'
            },
            {
                id: 8,
                name: 'rahul sohal',
                color: 'color-green',
                img: 'assets/imgs/profile_img.png'
            }
        ];
        this.a = this.data;
    }
    CreateeventmemberPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CreateeventmemberPage');
        console.log('ionViewDidLoad ImportcontactsPage');
        var a = localStorage['user_id'];
        var b = localStorage['private'];
        this.securityProvider.AllUserFriend(a, b)
            .subscribe(function (data) {
            var a = data;
            _this.allUser = _this.getOrderData(a.allUsers);
            _this.allUser2 = _this.getOrderData(a.allUsers);
            _this.onCheck();
        }),
            function (error) { };
    };
    CreateeventmemberPage.prototype.getOrderData = function (data) {
        var a = data.sort(function (x, z) { return (x.username.toLowerCase() < z.username.toLowerCase() ? -1 : 1); });
        return a;
    };
    CreateeventmemberPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.allUser = this.allUser.filter(function (p) {
                if (p.username) {
                    return (p.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            });
        }
        else {
            this.allUser = this.allUser2;
        }
    };
    CreateeventmemberPage.prototype.onCheckmember = function (index, a) {
        this.allUser[index].checkStatus = !this.allUser[index].checkStatus;
        this.onCheck();
    };
    CreateeventmemberPage.prototype.onremovemember = function (index) {
        this.allUser[index].checkStatus = !this.allUser[index].checkStatus;
        this.onCheck();
    };
    CreateeventmemberPage.prototype.onCheck = function () {
        if (this.allUser) {
            var data = this.allUser.filter(function (arg) { return arg.checkStatus == true; });
            if (data.length > 0) {
                this.extradata = data;
                console.log("da" + JSON.stringify(data));
            }
            else {
                this.extradata = [];
            }
        }
    };
    CreateeventmemberPage.prototype.onAddMembers = function () {
        var _this = this;
        console.log('member' + JSON.stringify(this.extradata));
        for (var _i = 0, _a = this.extradata; _i < _a.length; _i++) {
            var a_1 = _a[_i];
            var b = a_1._id;
            if (a_1.profileImage) {
                var p = a_1.profileImage;
            }
            else {
                var p = null;
            }
            var e = a_1.email;
            var u = a_1.username;
            this.member_id.push({ member_id: b, profileImage: p, email: e, username: u });
        }
        var a = {
            event_id: this.event_id,
            members: this.member_id
        };
        console.log(JSON.stringify("member_data" + a));
        this.securityProvider.addMembers(a)
            .subscribe(function (data) {
            var a = data;
            if (a.success == true) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: _this.member_id.length + ' members add to event',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.pop();
            }
        }),
            function (error) { };
    };
    CreateeventmemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createeventmember',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\createeventmember\createeventmember.html"*/'\n\n<ion-header>\n   <ion-navbar>\n      <ion-title>Add Members</ion-title>\n      <ion-buttons end >\n         <button ion-button icon-only (click)="onAddMembers()">\n            <ion-icon name="md-checkmark-circle" class="camera"></ion-icon>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="content">\n   <div class="search-div">\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n   </div>\n   <div class="event_details-sec">\n      <ul class="user_list">\n         <li  *ngFor="let a of extradata;let i=index">\n            <div >\n               <div class="user_img" >\n                  <img src={{a.profileImage}}  *ngIf="a.profileImage"/>\n                  <img src="assets/imgs/profiler.png"  *ngIf="!a.profileImage"/>\n                  <span class="">\n                     <ion-icon name="md-close" (click)="onremovemember(i)"></ion-icon>\n                  </span>\n               </div>\n               <div class="user_name">{{a.username}} </div>\n            </div>\n         </li>\n      </ul>\n   </div>\n   <ul class="m-0 p-0 user_ul" type="none">\n      <li *ngFor="let a of allUser;let i=index" (click)="onCheckmember(i,a)">\n      <div class="img-left"  >\n         <img class="circle-img" src={{a.profileImage}} *ngIf="a.profileImage"/> \n         <img class="circle-img" src="assets/imgs/profiler.png" *ngIf="!a.profileImage"/> \n         <span class="icon-btm" *ngIf="a.checkStatus==true">\n            <ion-icon name="md-checkmark" ></ion-icon>\n         </span>\n      </div>\n      <div class="right-content padding-right">\n         <h4>{{a.username}} </h4>\n      </div>\n      </li>\n   </ul>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\createeventmember\createeventmember.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CreateeventmemberPage);
    return CreateeventmemberPage;
}());

//# sourceMappingURL=createeventmember.js.map

/***/ })

});
//# sourceMappingURL=44.js.map