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
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { SecurityProvider } from '../../providers/security/security';
import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
var FirstPage = /** @class */ (function () {
    function FirstPage(config, securityProvider, navCtrl, navParams, fb, translate) {
        this.config = config;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.translate = translate;
        this.FB_APP_ID = 313385835840171;
        this.fb.browserInit(this.FB_APP_ID, "v2.11");
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
    FirstPage.prototype.fb_login = function () {
        var _this = this;
        var permissions = new Array();
        permissions = ["public_profile", "email"];
        this.fb.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            _this.fb.api("/me?fields=name,gender,email,id", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                localStorage['user_image'] = "https://graph.facebook.com/" + userId + "/picture?type=large";
                _this.facebook(user.email, user.name, userId, user.picture);
            });
        }, function (error) {
        });
    };
    FirstPage.prototype.facebook = function (user_email, user_name, userId, user_picture) {
        var _this = this;
        var login_fb = {
            email: user_email,
            user_name: user_name,
            userId: userId,
            user_picture: user_picture
        };
        this.securityProvider.login_fb_service(login_fb)
            .subscribe(function (data) {
            var a = data;
            if (a.userdata) {
                var b = a.userdata;
                var c = b.email;
                localStorage['email'] = c;
                localStorage['user_id'] = b._id;
                localStorage['username'] = b.username;
                _this.navCtrl.setRoot(TabsPage);
            }
        }),
            function (error) { };
    };
    FirstPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-first',
            templateUrl: 'first.html',
        }),
        __metadata("design:paramtypes", [Config, SecurityProvider, NavController, NavParams, Facebook, TranslateService])
    ], FirstPage);
    return FirstPage;
}());
export { FirstPage };
//# sourceMappingURL=first.js.map