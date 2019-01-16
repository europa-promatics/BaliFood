webpackJsonp([46],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMenuOwnerPageModule", function() { return CreateMenuOwnerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_menu_owner__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CreateMenuOwnerPageModule = (function () {
    function CreateMenuOwnerPageModule() {
    }
    CreateMenuOwnerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_menu_owner__["a" /* CreateMenuOwnerPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_menu_owner__["a" /* CreateMenuOwnerPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], CreateMenuOwnerPageModule);
    return CreateMenuOwnerPageModule;
}());

//# sourceMappingURL=create-menu-owner.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMenuOwnerPage; });
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



var CreateMenuOwnerPage = (function () {
    function CreateMenuOwnerPage(viewCtrl, modalCtrl, securityProvider, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateMenuOwnerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CreateMenuOwnerPage');
        var a = localStorage['user_id'];
        var b = localStorage['private'];
        this.securityProvider.AllUserFriend(a, b)
            .subscribe(function (data) {
            //alert(JSON.stringify(data));
            var a = data;
            _this.allUser = a.allUsers;
            _this.allUser2 = a.allUsers;
        }),
            function (error) { };
    };
    CreateMenuOwnerPage.prototype.ngOnInit = function () {
        var _this = this;
        var a = localStorage['user_id'];
        this.securityProvider.MyEvent(a)
            .subscribe(function (data) {
            var a = data;
            _this.Events = a.userEvents;
            console.log("data" + JSON.stringify(data));
            _this.matchEvent();
        }),
            function (error) {
                console.log("err" + JSON.stringify(error));
            };
    };
    CreateMenuOwnerPage.prototype.matchEvent = function () {
        var a = localStorage['event_id'];
        var data = this.Events.filter(function (arg) { return arg._id == a; });
        if (data.length > 0) {
            var a = data[0];
            this.eventMember = this.getOrderData(a.members);
        }
        else {
            console.log("no event data" + JSON.stringify(data));
        }
    };
    CreateMenuOwnerPage.prototype.getOrderData = function (data) {
        var a = data.sort(function (x, z) { return (x.username.toLowerCase() < z.username.toLowerCase() ? -1 : 1); });
        return a;
    };
    CreateMenuOwnerPage.prototype.getItems = function (ev) {
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
    CreateMenuOwnerPage.prototype.onCheckmember = function (index, data) {
        this.checkStatus = index;
        this.userName = data.username;
        this.user_id = data.member_id;
        console.log("check_data" + JSON.stringify(data));
    };
    CreateMenuOwnerPage.prototype.onDone = function () {
        var a = {
            userName: this.userName,
            user_id: this.user_id
        };
        this.viewCtrl.dismiss(a);
    };
    CreateMenuOwnerPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    CreateMenuOwnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-menu-owner',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\create-menu-owner\create-menu-owner.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-buttons start (click)="onClose()">\n         <button ion-button icon-only >\n            <ion-icon name="close" class="camera"></ion-icon>\n         </button>\n      </ion-buttons>\n      <ion-searchbar (ionInput)="getItems($event)" class="search-bar" ></ion-searchbar>\n      <ion-buttons end (click)="onDone()">\n         <button ion-button icon-only >\n            <ion-icon name="md-checkmark-circle" class="camera"></ion-icon>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="content">\n   <ul class="m-0 p-0 user_ul" type="none" *ngIf="allUser">\n      <li *ngFor="let a of eventMember;let i=index" (click)="onCheckmember(i,a)">\n      <div class="img-left" >\n         <img class="circle-img" src={{a.profileImage}} *ngIf="a.profileImage"/> \n         <img class="circle-img" src="assets/imgs/profiler.png" *ngIf="!a.profileImage"/> \n         <span class="icon-btm" *ngIf="checkStatus==i">\n            <ion-icon name="md-checkmark" ></ion-icon>\n         </span>\n      </div>\n      <div class="right-content padding-right">\n         <h4>{{a.username}} </h4>\n      </div>\n      </li>\n   </ul>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\create-menu-owner\create-menu-owner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CreateMenuOwnerPage);
    return CreateMenuOwnerPage;
}());

//# sourceMappingURL=create-menu-owner.js.map

/***/ })

});
//# sourceMappingURL=46.js.map