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
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
var CreatenewbringformPage = /** @class */ (function () {
    function CreatenewbringformPage(alertCtrl, securityProvider, loadingCtrl, viewCtrl, modalCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Menu = {};
        this.event_id = this.navParams.get('event_id');
        this.menu_id = this.navParams.get('menu_id');
        this.bringitems = [];
        this.Menu.bringItems = [];
        this.Menu.memberName = localStorage['username'];
        this.Menu.memberId = localStorage['user_id'];
    }
    CreatenewbringformPage.prototype.onChangeMet = function () {
        this.Menu.bringitems = this.navParams.get('event_id');
        this.Menu.memberName = this.navParams.get('memberName');
        this.Menu.eventType = this.navParams.get('eventType');
        this.Menu.memberId = localStorage['user_id'];
        this.Menu.menuType = "MutualEvent";
    };
    CreatenewbringformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatenewbringformPage');
    };
    CreatenewbringformPage.prototype.addmore = function () {
        this.bringitems.push(this.bringitem);
        this.items = this.bringitems;
        this.bringitem = '';
    };
    CreatenewbringformPage.prototype.onSaveMenu = function () {
        var _this = this;
        this.Menu.eventId = this.event_id;
        this.Menu.bringItems = this.bringitem;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.securityProvider.bringItem(_this.Menu); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                var a = data;
                if (a.success == true) {
                    var alert_1 = _this.alertCtrl.create({
                        subTitle: 'Item assigned successfully!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    var b = a.updatedEventData;
                    _this.viewCtrl.dismiss(b);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        subTitle: 'Something went wrong!',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    CreatenewbringformPage.prototype.Ownername = function () {
        var _this = this;
        var Modal = this.modalCtrl.create('CreateMenuOwnerPage');
        Modal.onDidDismiss(function (data) {
            if (data) {
                console.log("Owner_data" + JSON.stringify(data));
                var a = data;
                _this.Menu.memberName = a.userName;
                _this.Menu.memberId = a.user_id;
            }
        });
        Modal.present();
    };
    CreatenewbringformPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    CreatenewbringformPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-createnewbringform',
            templateUrl: 'createnewbringform.html',
        }),
        __metadata("design:paramtypes", [AlertController, SecurityProvider, LoadingController, ViewController, ModalController, NavController, NavParams])
    ], CreatenewbringformPage);
    return CreatenewbringformPage;
}());
export { CreatenewbringformPage };
//# sourceMappingURL=createnewbringform.js.map