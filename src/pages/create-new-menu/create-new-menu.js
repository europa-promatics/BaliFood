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
var CreateNewMenuPage = /** @class */ (function () {
    function CreateNewMenuPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Menu_event = [];
        this.Menu = {};
        this.event_id = this.navParams.get('event_id');
        this.eventType = this.navParams.get('eventType');
        this.menuData = this.navParams.get('menuData');
        if (this.menuData) {
            this.Menu_event = this.menuData.menu;
        }
    }
    CreateNewMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewMenuPage');
    };
    CreateNewMenuPage.prototype.onAdd = function () {
        var _this = this;
        var Modal = this.modalCtrl.create('CreatenewmenuitemsformPage', {
            event_id: this.event_id,
            eventType: this.eventType
        });
        Modal.onDidDismiss(function (data) {
            if (data) {
                console.log("event_menu" + JSON.stringify(data));
                _this.Menu_event = data.menu;
                localStorage['menu_id'] = data.owner_id;
            }
        });
        Modal.present();
    };
    CreateNewMenuPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-create-new-menu',
            templateUrl: 'create-new-menu.html',
        }),
        __metadata("design:paramtypes", [ModalController, NavController, NavParams])
    ], CreateNewMenuPage);
    return CreateNewMenuPage;
}());
export { CreateNewMenuPage };
//# sourceMappingURL=create-new-menu.js.map