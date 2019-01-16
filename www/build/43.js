webpackJsonp([43],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventMemberPageModule", function() { return EditEventMemberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_event_member__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditEventMemberPageModule = (function () {
    function EditEventMemberPageModule() {
    }
    EditEventMemberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_event_member__["a" /* EditEventMemberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_event_member__["a" /* EditEventMemberPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], EditEventMemberPageModule);
    return EditEventMemberPageModule;
}());

//# sourceMappingURL=edit-event-member.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventMemberPage; });
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




/**
 * Generated class for the EditEventMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditEventMemberPage = (function () {
    function EditEventMemberPage(alertCtrl, securityProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.member_id = [];
        this.new_members = [];
        this.member = [];
        this.eventData = this.navParams.get("eventData");
        console.log("members" + JSON.stringify(this.eventData));
        this.member_id = this.eventData.members;
        this.event_id = this.eventData._id;
        this.extradata = this.eventData.members;
        this.eventMembers = this.eventData.members;
    }
    EditEventMemberPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //alert(JSON.stringify( this.extradata));
        console.log("ionViewDidLoad CreateeventmemberPage");
        console.log("ionViewDidLoad ImportcontactsPage");
        var a = localStorage["user_id"];
        var b = localStorage['private'];
        this.securityProvider.AllUserFriend(a, b).subscribe(function (data) {
            var a = data;
            _this.allUser = _this.getOrderData(a.allUsers);
            _this.allUser2 = _this.getOrderData(a.allUsers);
            for (var i = 0; i < _this.allUser.length; i++) {
                if (_this.extradata.some(function (element) {
                    return element.member_id.includes(_this.allUser[i]._id);
                })) {
                    _this.allUser[i].checkStatus = true;
                }
            }
            // this.onCheck();
        }),
            function (error) { };
    };
    /*   checkExisting(value){
  
        return this.extradata.some(element => element.member_id.includes(value));
            
        
    } */
    EditEventMemberPage.prototype.checkExisting = function (index, value) {
        // alert(index);
        if (this.extradata.some(function (element) { return element.member_id.includes(value); })) {
            this.allUser[index].checkStatus = !this.allUser[index].checkStatus;
        }
    };
    EditEventMemberPage.prototype.getOrderData = function (data) {
        var a = data.sort(function (x, z) {
            return x.username < z.username ? -1 : 1;
        });
        return a;
    };
    EditEventMemberPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != "") {
            this.allUser = this.allUser.filter(function (p) {
                if (p.username) {
                    return p.username.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
            });
        }
        else {
            this.allUser = this.allUser2;
        }
    };
    EditEventMemberPage.prototype.onCheckmember = function (index, a) {
        this.allUser[index].checkStatus = !this.allUser[index].checkStatus;
        this.onCheck();
    };
    EditEventMemberPage.prototype.onremovemember = function (user) {
        user.checkStatus = false;
        var index = this.findWithAttr(this.allUser, "_id", user.member_id);
        if (index == -1) {
            index = this.findWithAttr(this.allUser, "member_id", user.member_id);
        }
        //alert(index);
        this.allUser[index].checkStatus = false;
        //alert(JSON.stringify(this.allUser[index]));
        this.onCheck();
        this.onRemove(user);
    };
    EditEventMemberPage.prototype.findWithAttr = function (array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    };
    EditEventMemberPage.prototype.onCheck = function () {
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
    EditEventMemberPage.prototype.onRemove = function (user) {
        //alert(JSON.stringify(this.allUser));
        if (this.extradata) {
            var data = this.extradata.filter(function (arg) { return arg._id != user._id; });
            if (data.length > 0) {
                //alert('here');
                this.eventMembers = data;
                //alert(this.extradata);
                console.log("da" + JSON.stringify(data));
            }
            else {
                this.extradata = [];
            }
        }
    };
    EditEventMemberPage.prototype.onAddMembers = function () {
        var _this = this;
        console.log("member" + JSON.stringify(this.extradata));
        for (var _i = 0, _a = this.extradata; _i < _a.length; _i++) {
            var a_1 = _a[_i];
            var b = a_1._id;
            var p;
            var k;
            if (a_1.profileImage) {
                p = a_1.profileImage;
            }
            else {
                p = null;
            }
            var index = this.findWithAttr(this.eventMembers, "email", a_1.email);
            // alert(index);
            var e = a_1.email;
            var u = a_1.username;
            if (index != -1) {
                if (this.eventMembers[index].status) {
                    if (this.eventMembers[index].status == "active") {
                        k = "pending";
                    }
                    else {
                        k = this.eventMembers[index].status;
                    }
                }
                else {
                    k = "pending";
                }
            }
            else {
                k = "pending";
            }
            this.new_members.push({
                member_id: b,
                profileImage: p,
                email: e,
                username: u,
                status: k
            });
        }
        var a = {
            event_id: this.event_id,
            members: this.new_members
        };
        console.log(JSON.stringify("member_data" + a));
        this.securityProvider.addMembers(a).subscribe(function (data) {
            var a = data;
            _this.navCtrl.pop();
        }),
            function (error) { };
    };
    EditEventMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-edit-event-member",template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\edit-event-member\edit-event-member.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title>{{\'addmembers\' | translate}}</ion-title>\n      <ion-buttons end >\n         <button ion-button icon-only (click)="onAddMembers()">\n            <ion-icon name="md-checkmark-circle" class="camera"></ion-icon>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="content" >\n   <div class="search-div">\n      <ion-searchbar   (ionInput)="getItems($event)" placeholder="{{\'search\' | translate}}"></ion-searchbar>\n   </div>\n   <div class="event_details-sec">\n      <ul class="user_list">\n         <li  *ngFor="let a of extradata;let i=index">\n            <div >\n               <div class="user_img" >\n                  <img src={{a.profileImage}}  *ngIf="a.profileImage"/>\n                  <img src="assets/imgs/profiler.png"  *ngIf="!a.profileImage"/>\n                  <span class="">\n                     <ion-icon name="md-close" (click)="onremovemember(a)"></ion-icon>\n                  </span>\n               </div>\n               <div class="user_name">{{a.username}} </div>\n            </div>\n         </li>\n      </ul>\n   </div>\n   <ul class="m-0 p-0 user_ul" type="none">\n      <li *ngFor="let a of allUser;let i=index;"   (click)="onCheckmember(i,a)">\n	 \n      <div class="img-left">\n         <img class="circle-img" src={{a.profileImage}} *ngIf="a.profileImage"/> \n         <img class="circle-img" src="assets/imgs/profiler.png" *ngIf="!a.profileImage"/> \n         <span class="icon-btm" *ngIf="a.checkStatus==true">\n            <ion-icon name="md-checkmark" ></ion-icon>\n         </span>\n		  \n		\n      </div>\n      <div class="right-content padding-right">\n         <h4>{{a.username}}</h4>\n      </div>\n      </li>\n   </ul>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\edit-event-member\edit-event-member.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], EditEventMemberPage);
    return EditEventMemberPage;
}());

//# sourceMappingURL=edit-event-member.js.map

/***/ })

});
//# sourceMappingURL=43.js.map