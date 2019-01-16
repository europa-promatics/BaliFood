webpackJsonp([45],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWhatToBringPageModule", function() { return CreateWhatToBringPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_what_to_bring__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateWhatToBringPageModule = (function () {
    function CreateWhatToBringPageModule() {
    }
    CreateWhatToBringPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_what_to_bring__["a" /* CreateWhatToBringPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_what_to_bring__["a" /* CreateWhatToBringPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], CreateWhatToBringPageModule);
    return CreateWhatToBringPageModule;
}());

//# sourceMappingURL=create-what-to-bring.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWhatToBringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateWhatToBringPage = (function () {
    function CreateWhatToBringPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Menu_event = [];
        this.Menu = {};
        this.event_id = this.navParams.get('event_id');
        this.eventType = this.navParams.get('eventType');
        this.menu_id = this.navParams.get('menu_id');
    }
    CreateWhatToBringPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateWhatToBringPage');
    };
    CreateWhatToBringPage.prototype.onEvent = function () {
        // this.navCtrl.push('EventsPage');
        this.navCtrl.pop();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-what-to-bring',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\create-what-to-bring\create-what-to-bring.html"*/'\n\n<ion-header>\n   <ion-navbar>\n      <ion-title>{{\'create_what_to_bring\' | translate}}</ion-title>\n      <ion-buttons end (click)="onEvent()">\n         <button ion-button icon-only >\n            {{\'done\' | translate}}\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="content" padding>\n   <div class="btn-div">\n      <button ion-button block (click)="onAdd()">\n         {{\'add_new_item\' | translate}}\n         <ion-icon name="add"></ion-icon>\n      </button>\n   </div>\n   <div *ngIf="Menu_event">\n      <ion-card *ngFor="let Menu of Menu_event">\n         <ion-card-content>\n                <ion-item >\n               <ion-label>{{\'owner_name\' | translate}}</ion-label>\n               <ion-input type="text" placeholder="{{\'owner\' | translate}}" [ngModel]="Menu.memberName" disabled></ion-input>\n			     <ion-icon name="md-create" item-right (click)="onEditItems(Menu)" ></ion-icon>\n                 <ion-icon name="trash" item-right (click)="presentConfirm(Menu._id, Menu)" ></ion-icon>\n               <!--  <ion-icon name="md-create" item-right (click)="OnEditItems()"></ion-icon> -->\n            </ion-item>\n             <ion-item>\n               <ion-label>{{\'what_to_bring\' | translate}}:</ion-label>\n               <ion-input type="text" placeholder="{{\'item_name\' | translate}}" [(ngModel)]="Menu.bringItems" disabled></ion-input>\n              \n            </ion-item>\n            <ion-item>\n               <ion-label>{{\'status\' | translate}}:</ion-label>\n               <ion-input type="text" placeholder="{{\'status\' | translate}}" [(ngModel)]="Menu.status" disabled></ion-input>\n              \n            </ion-item>\n           \n           <!--  <ion-item>\n               <ion-label>Status:</ion-label>\n               <ion-select [(ngModel)]="Menu.status" disabled>\n               <ion-option value="Pending">Pending</ion-option>\n               <ion-option value="Confirmed">Confirmed</ion-option>\n               <ion-option value="Rejected">Rejected</ion-option>\n               </ion-select>\n            </ion-item> -->\n         </ion-card-content>\n      </ion-card>\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\create-what-to-bring\create-what-to-bring.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CreateWhatToBringPage);
    return CreateWhatToBringPage;
}());

//# sourceMappingURL=create-what-to-bring.js.map

/***/ })

});
//# sourceMappingURL=45.js.map