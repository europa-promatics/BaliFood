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
import { ModalController, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
var CreatenewmenuitemsformPage = /** @class */ (function () {
    function CreatenewmenuitemsformPage(alertCtrl, securityProvider, loadingCtrl, viewCtrl, modalCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Menu = {};
        this.Menuitem = this.navParams.get('Menuitem');
        this.eventType = this.navParams.get('eventType');
        localStorage['eventType'] = this.eventType;
        if (this.Menuitem) {
            this.Menu.event_id = this.Menuitem.event_id;
            this.Menu.owner_name = this.Menuitem.owner_name;
            this.Menu.status = this.Menuitem.status;
            this.Menu.owner_id = this.Menuitem.owner_id;
            this.Menu.recipe_link = this.Menuitem.Recipe_id;
            this.Menu.item_name = this.Menuitem.item_name;
            this.Menu.menuType = this.Menuitem.menuType;
            this.recipe_name = this.Menuitem.recipe_name;
        }
        else {
            this.Menu.event_id = localStorage['event_id'];
            if (this.eventType) {
                this.Menu.status = "Pending";
                this.Menu.owner_name = localStorage['username'];
                this.Menu.owner_id = localStorage['user_id'];
            }
            else {
                this.Menu.owner_id = localStorage['user_id'];
                this.Menu.owner_name = localStorage['username'];
                this.Menu.status = "Confirmed";
            }
        }
    }
    CreatenewmenuitemsformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatenewmenuitemsformPage');
    };
    CreatenewmenuitemsformPage.prototype.Ownername = function () {
        var _this = this;
        var Modal = this.modalCtrl.create('CreateMenuOwnerPage');
        Modal.onDidDismiss(function (data) {
            if (data) {
                console.log("Owner_data" + JSON.stringify(data));
                var a = data;
                if (_this.eventType) {
                    _this.Menu.owner_name = a.userName;
                    _this.Menu.owner_id = a.user_id;
                }
            }
        });
        Modal.present();
    };
    CreatenewmenuitemsformPage.prototype.onRecipeLink = function () {
        var Modal = this.modalCtrl.create('MyRecipesPage', {
            RecipeLink: 'RecipeLink',
            Menu: this.Menu,
            eventType: this.eventType
        });
        Modal.onDidDismiss(function (data) {
            if (data) {
                console.log("recipe_lin_data" + JSON.stringify(data));
                var a = data;
                var b = data.Recipes;
            }
        });
        Modal.present();
    };
    CreatenewmenuitemsformPage.prototype.onSaveMenu = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.securityProvider.AddMenu(_this.Menu); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                var a = data;
                if (a.success == true) {
                    var alert_1 = _this.alertCtrl.create({
                        subTitle: 'Menu Added!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    var b = a.eventData;
                    // this.navCtrl.setRoot(TabsPage)
                    _this.navCtrl.push('CreateNewMenuPage', { menuData: b, eventType: _this.eventType });
                    // this.viewCtrl.dismiss("CreateNewMenuPage",b,b);
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    CreatenewmenuitemsformPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    CreatenewmenuitemsformPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-createnewmenuitemsform',
            templateUrl: 'createnewmenuitemsform.html',
        }),
        __metadata("design:paramtypes", [AlertController, SecurityProvider, LoadingController, ViewController, ModalController, NavController, NavParams])
    ], CreatenewmenuitemsformPage);
    return CreatenewmenuitemsformPage;
}());
export { CreatenewmenuitemsformPage };
//# sourceMappingURL=createnewmenuitemsform.js.map