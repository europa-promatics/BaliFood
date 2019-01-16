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
var MyEventsPage = /** @class */ (function () {
    function MyEventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = 'Menu';
        this.eventData = this.navParams.get('eventData');
        console.log("eventData" + JSON.stringify(this.eventData));
    }
    MyEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyEventsPage');
    };
    MyEventsPage.prototype.change = function (date) {
        var a = date.split('T');
        return a[0];
    };
    MyEventsPage.prototype.onEditEvents = function () {
        this.navCtrl.push('EditEventPage', { eventData: this.eventData });
    };
    MyEventsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-my-events',
            templateUrl: 'my-events.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MyEventsPage);
    return MyEventsPage;
}());
export { MyEventsPage };
//# sourceMappingURL=my-events.js.map