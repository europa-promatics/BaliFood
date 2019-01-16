var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecurityProvider } from '../../providers/security/security';
var NotificationPage = /** @class */ (function () {
    function NotificationPage(securityProvider, navCtrl, navParams) {
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ngOnInit = function () {
        var _this = this;
        var a = localStorage['user_id'];
        this.securityProvider.GetNotification(a)
            .subscribe(function (data) {
            var a = data;
            _this.Notification = a.friendRequests;
        }),
            setTimeout(function () {
                _this.ngOnInit();
            }, 10000);
        (function (error) { });
    };
    NotificationPage.prototype.onAcceptRequest = function (requester, status) {
        ////status=1/accept, status=2/reject/////////
        var a = {
            requester: requester,
            recipient: localStorage['user_id'],
            status: status
        };
        this.securityProvider.acceptOrRejectRequest(a)
            .subscribe(function (data) {
            var a = data;
            console.log("a" + JSON.stringify(a));
        }),
            function (error) {
                console.log("err" + JSON.stringify(error));
            };
    };
    NotificationPage.prototype.allimg = function (img) {
        if (img) {
            return img;
        }
        else {
            return 'assets/imgs/profile_img.png';
        }
    };
    NotificationPage.prototype.change = function (data) {
        var a = data.filter(function (arg) { return arg == localStorage['user_id']; });
        if (a.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    NotificationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-notification',
            templateUrl: 'notification.html',
        }),
        __metadata("design:paramtypes", [SecurityProvider, NavController, NavParams])
    ], NotificationPage);
    return NotificationPage;
}());
export { NotificationPage };
//# sourceMappingURL=notification.js.map