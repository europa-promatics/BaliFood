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
import { ModalController } from 'ionic-angular';
var CreateWhatToBringPage = /** @class */ (function () {
    function CreateWhatToBringPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Menu_event = [];
        this.Menu = {};
        this.event_id = this.navParams.get('event_id');
        this.eventType = this.navParams.get('CreatenewbringformPage');
        this.menu_id = this.navParams.get('menu_id');
    }
    CreateWhatToBringPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateWhatToBringPage');
    };
    CreateWhatToBringPage.prototype.onAdd = function () {
        var _this = this;
        var Modal = this.modalCtrl.create('CreatenewbringformPage', {
            event_id: this.event_id,
            eventType: this.eventType,
            menu_id: this.menu_id
        });
        Modal.onDidDismiss(function (data) {
            if (data) {
                //alert("event_bringitem" + JSON.stringify(data));
                _this.Menu_event = data.whatToBring;
            }
        });
        Modal.present();
    };
    CreateWhatToBringPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-create-what-to-bring',
            templateUrl: 'create-what-to-bring.html',
        }),
        __metadata("design:paramtypes", [ModalController, NavController, NavParams])
    ], CreateWhatToBringPage);
    return CreateWhatToBringPage;
}());
export { CreateWhatToBringPage };
//# sourceMappingURL=create-what-to-bring.js.map