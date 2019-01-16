webpackJsonp([41],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var EventsPageModule = (function () {
    function EventsPageModule() {
    }
    EventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({ loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    } }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */]]
        })
    ], EventsPageModule);
    return EventsPageModule;
}());

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsPage = (function () {
    function EventsPage(securityProvider, navCtrl, navParams, translate, app, viewCtrl, modalCtrl) {
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.count = 0;
        this.translate.use(localStorage['language']);
        this.event = 'upcoming';
        this.pop_div = 'false';
        this.existing = this.navParams.get('existing');
        if (this.existing) {
        }
    }
    EventsPage.prototype.ionViewWillEnter = function () {
    };
    EventsPage.prototype.onPop = function () {
        this.count++;
        if (this.count % 2 != 0) {
            this.pop_div = 'true';
        }
        else {
            this.pop_div = 'false';
        }
    };
    EventsPage.prototype.doYourStuff = function () {
        // alert('cowabonga');
        this.navCtrl.pop(); // remember to put this to add the back button behavior
    };
    EventsPage.prototype.onMutualEvent = function () {
        this.navCtrl.push('CreateMutualEventPage');
        this.pop_div = 'false';
    };
    EventsPage.prototype.OnEvents = function (data) {
        //console.log(this.navCtrl.getActive());
        if (this.existing) {
            //  alert('here');
            //  this.navCtrl.push('GetEventMenuPage',{eventData:data});
            this.app.getRootNav().push('GetEventMenuPage', { eventData: data });
        }
        else {
            //  alert('there');
            // this.navCtrl.popToRoot (); 
            var myModal = this.modalCtrl.create('MyEventsPage', { eventData: data });
            myModal.present();
            //  this.app.getRootNav().push('MyEventsPage',{eventData:data})
            // this.navCtrl.push('MyEventsPage',{eventData:data});
            // this.app.getRootNav().push('MyEventsPage',{eventData:data});
        }
    };
    EventsPage.prototype.onMyEvent = function () {
        this.navCtrl.push('CreateMyEventsPage');
        this.pop_div = 'false';
    };
    EventsPage.prototype.ngOnInit = function () {
        var _this = this;
        var a = localStorage['user_id'];
        this.securityProvider.MyEvent(a)
            .subscribe(function (data) {
            var a = data;
            if (a.success == true) {
                _this.userEvents = a.userEvents;
                _this.compare();
                _this.upcomingCompare();
                _this.todayCompare();
            }
            //  console.log("data"+JSON.stringify(data));
        }),
            function (error) {
                // console.log("err"+JSON.stringify(error));
            };
    };
    EventsPage.prototype.compare = function () {
        var _this = this;
        var a = new Date().toISOString();
        var b = this.change(a);
        // console.log("new"+a);
        var data = this.userEvents.filter(function (arg) { return _this.change(arg.date) < b; });
        if (data.length > 0) {
            // console.log("compare_date"+JSON.stringify(data));
            this.PastEvent = data;
        }
        else {
            //console.log("compare_date1"+JSON.stringify(data));
        }
    };
    EventsPage.prototype.upcomingCompare = function () {
        var _this = this;
        var a = new Date().toISOString();
        //console.log("new"+a);
        var b = this.change(a);
        var data = this.userEvents.filter(function (arg) { return _this.change(arg.date) > b; });
        if (data.length > 0) {
            //console.log("compare_date"+JSON.stringify(data));
            this.upcomingEvent = data;
        }
        else {
            //console.log("compare_date1"+JSON.stringify(data));
        }
    };
    EventsPage.prototype.todayCompare = function () {
        var _this = this;
        var a = new Date().toISOString();
        // console.log("new"+a);
        var b = a.split('T');
        var c = b[0];
        var data = this.userEvents.filter(function (arg) { return _this.fun(arg.date) == c; });
        if (data.length > 0) {
            // console.log("compare_date"+JSON.stringify(data));
            this.todayEvent = data;
        }
        else {
            //console.log("compare_date1"+JSON.stringify(data));
        }
    };
    EventsPage.prototype.change = function (date) {
        var a = date.split('T');
        var final_date_parts = a[0].split('-');
        var final_date = final_date_parts[0] + '/' + final_date_parts[1] + '/' + final_date_parts[2];
        //alert(final_date_parts[0]);
        return final_date;
    };
    EventsPage.prototype.fun = function (date) {
        var a = date.split('T');
        return a[0];
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\events\events.html"*/'<ion-header class="rtl">\n    <ion-navbar align-title="left">\n        <ion-title class="text-right"> {{\'events\' | translate}} </ion-title>  \n		<!--ion-buttons left>\n        <!--button ion-button (click)="goback()">\n           <ion-icon class="customIcon" name="ios-arrow-back"></ion-icon>\n        </button>\n    </ion-buttons-->\n	\n        <ion-buttons end>\n		\n            <button icon-only ion-button  class="btn-notify" (click)="onPop()">\n                <ion-icon name="md-add" class="plus-icon"></ion-icon>\n           </button>\n        </ion-buttons>\n    </ion-navbar>\n    <div class="events-pop" *ngIf="pop_div==\'true\'" style=" position: absolute;\n    top: 30;\n    right: 242px;\n    background: #fff;\n    text-align: center;\n    z-index: 1;\n    width: 150px;">\n    <div class="pop-div" (click)="onMyEvent()">\n   {{\'myevents\' | translate}}\n</div>\n    <div class="pop-div" (click)="onMutualEvent()">\n    {{\'mutualevents\' | translate}}\n     </div>\n</div>\n</ion-header>\n\n<ion-content class="content rtl">\n\n        <div class="event-sec" >\n        <div class="event-box" *ngFor="let a of todayEvent" (click)="OnEvents(a)">\n            <h4>{{a.event_name}}</h4>\n            <div class="icon-div">\n                <span class="icon"> <ion-icon name="ios-calendar-outline" ></ion-icon>  </span> \n                <div class="icon-text"> {{change(a.date)}} </div>\n            </div>\n            <div class="icon-div">\n                <span class="icon"> <ion-icon name="md-time" ></ion-icon>  </span> \n                <div class="icon-text"> {{a.time}} </div>\n            </div>\n            <div class="icon-div">\n                <span class="icon"> <ion-icon name="ios-pin-outline" ></ion-icon>  </span> \n                <div class="icon-text"> {{a.address}} </div>\n            </div>\n        </div>\n    </div>  \n\n    <div class="custom-tab">\n        <ion-segment [(ngModel)]="event">\n		   <ion-segment-button value="upcoming">\n                {{\'upcoming\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="past">\n                {{\'past\' | translate}}\n            </ion-segment-button>\n            \n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="event">\n        <ion-list *ngSwitchCase="\'past\'">\n            <ul class="event_ul m-0 p-0" type="none">\n                <li *ngFor="let a of PastEvent" (click)="OnEvents(a)">\n                    <div class="event-box">\n                        <h4> {{a.event_name}}</h4>\n                        <div class="icon-div">\n                            <span class="icon"> <ion-icon name="ios-calendar-outline" ></ion-icon>  </span> \n                            <div class="icon-text"> {{change(a.date)}} </div>\n                        </div>\n                        <div class="icon-div">\n                            <span class="icon"> <ion-icon name="md-time" ></ion-icon>  </span> \n                            <div class="icon-text"> {{a.time}} </div>\n                        </div>\n                        <div class="icon-div">\n                            <span class="icon"> <ion-icon name="ios-pin-outline" ></ion-icon>  </span> \n                            <div class="icon-text"> {{a.address}}</div>\n                        </div>\n                    </div>\n                </li>\n         \n\n            </ul>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'upcoming\'">\n            <ul class="event_ul m-0 p-0" type="none">\n                <li *ngFor="let a of upcomingEvent" (click)="OnEvents(a)">\n                    <div class="event-box">\n                        <h4>{{a.event_name}}</h4>\n                        <div class="icon-div">\n                            <span class="icon"> <ion-icon name="ios-calendar-outline" ></ion-icon>  </span> \n                            <div class="icon-text"> {{change(a.date)}}</div>\n                        </div>\n                        <div class="icon-div">\n                            <span class="icon"> <ion-icon name="md-time" ></ion-icon>  </span> \n                            <div class="icon-text"> {{a.time}}</div>\n                        </div>\n                        <div class="icon-div">\n                            <span class="icon"> <ion-icon name="ios-pin-outline" ></ion-icon>  </span> \n                            <div class="icon-text"> {{a.address}}</div>\n                        </div>\n                    </div>\n                </li>\n                \n\n            </ul>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\events\events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=41.js.map