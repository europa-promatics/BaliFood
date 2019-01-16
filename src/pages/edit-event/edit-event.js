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
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { SecurityProvider } from '../../providers/security/security';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditEventPage = /** @class */ (function () {
    function EditEventPage(alertCtrl, loadingCtrl, modalCtrl, securityProvider, actionSheetCtrl, camera, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.securityProvider = securityProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventData = this.navParams.get('eventData');
        this.menuPopUp = false;
        this.Event = {};
        this.Event.event_name =
            this.pic = 'assets/imgs/add-profiler.png';
        this.datee = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
        var a = this.datee.split('-');
        this.min_date = a[0] + '-' + a[1] + '-' + a[2];
    }
    EditEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEventPage');
    };
    EditEventPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-event',
            templateUrl: 'edit-event.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, ModalController, SecurityProvider, ActionSheetController, Camera, NavController, NavParams])
    ], EditEventPage);
    return EditEventPage;
}());
export { EditEventPage };
//# sourceMappingURL=edit-event.js.map