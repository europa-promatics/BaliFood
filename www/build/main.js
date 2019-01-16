webpackJsonp([51],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_security_security__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage(events, securityProvider, navCtrl, navParams, detectorRef) {
        //  alert(JSON.stringify(localStorage));
        var _this = this;
        this.events = events;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detectorRef = detectorRef;
        this.tab1Root = 'MainPage';
        this.tab2Root = 'NotificationPage';
        this.tab3Root = 'EventsPage';
        this.tab4Root = 'MyRecipesPage';
        this.tab5Root = 'AccountPage';
        this.userRegisterFirstTime = this.navParams.get('userRegisterFirstTime');
        if (this.userRegisterFirstTime) {
            localStorage['notistatus'] = 1;
        }
        if (this.navParams.get('index')) {
            this.index = 2;
        }
        else {
            if (this.navParams.get('noti')) {
                this.index = 1;
            }
            else {
                this.index = 0;
            }
            if (this.navParams.get('parent') == 0) {
                //tabRef.select(1);
                this.navCtrl.parent.select(0);
            }
        }
        events.subscribe('cart:updated', function (_badgeValue) {
            _this.counts = _badgeValue;
            // alert(_badgeValue);
        });
    }
    TabsPage.prototype.tabChange = function (ev) {
        ev.setRoot(ev.root);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\tabs\tabs.html"*/'\n<ion-tabs class="chat" #myTabs tabsHideOnSubPages="true"  [selectedIndex]="index"  (ionChange)="tabChange($event)">\n  <ion-tab [root]="tab1Root"  tabIcon="icon-home" ></ion-tab>\n  <ion-tab [root]="tab2Root" [tabBadge]="counts" tabIcon="fa-bell-o" >{{Notifi}}</ion-tab>\n  <ion-tab [root]="tab3Root"  tabIcon="icon-event"></ion-tab>\n  <ion-tab [root]="tab4Root"  tabIcon="room_service" ></ion-tab>\n  <ion-tab [root]="tab5Root"  tabIcon="account_box" ></ion-tab>\n</ion-tabs>\n\n\n\n\n<!-- <ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Feeds" tabIcon="fa-home" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Notification" tabIcon="fa-bell-o"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Events" tabIcon="fa-calendar-o"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="My Recipe" tabIcon="room_service"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Account" tabIcon="account_box"></ion-tab>\n</ion-tabs> -->\n '/*ion-inline-end:"E:\Balifood\Balifood\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		407,
		50
	],
	"../pages/account-friends/account-friends.module": [
		408,
		27
	],
	"../pages/account-invite-friends/account-invite-friends.module": [
		409,
		10
	],
	"../pages/account-my-post/account-my-post.module": [
		410,
		49
	],
	"../pages/account/account.module": [
		411,
		48
	],
	"../pages/change-password/change-password.module": [
		412,
		26
	],
	"../pages/contactus/contactus.module": [
		413,
		47
	],
	"../pages/creat-recipe-camera/creat-recipe-camera.module": [
		414,
		8
	],
	"../pages/create-event-location/create-event-location.module": [
		415,
		29
	],
	"../pages/create-menu-owner/create-menu-owner.module": [
		416,
		46
	],
	"../pages/create-mutual-event/create-mutual-event.module": [
		418,
		17
	],
	"../pages/create-my-events/create-my-events.module": [
		417,
		16
	],
	"../pages/create-new-menu/create-new-menu.module": [
		419,
		25
	],
	"../pages/create-what-to-bring/create-what-to-bring.module": [
		420,
		45
	],
	"../pages/createeventmember/createeventmember.module": [
		421,
		44
	],
	"../pages/createnewbringform/createnewbringform.module": [
		422,
		24
	],
	"../pages/createnewmenuitemsform/createnewmenuitemsform.module": [
		423,
		23
	],
	"../pages/edit-event-member/edit-event-member.module": [
		424,
		43
	],
	"../pages/edit-event-menu-item-form/edit-event-menu-item-form.module": [
		425,
		22
	],
	"../pages/edit-event-menu/edit-event-menu.module": [
		426,
		21
	],
	"../pages/edit-event-what-to-bring-form/edit-event-what-to-bring-form.module": [
		427,
		20
	],
	"../pages/edit-event-what-to-bring/edit-event-what-to-bring.module": [
		428,
		19
	],
	"../pages/edit-event/edit-event.module": [
		429,
		15
	],
	"../pages/edit-profile/edit-profile.module": [
		430,
		14
	],
	"../pages/event-chat/event-chat.module": [
		431,
		0
	],
	"../pages/event-photos/event-photos.module": [
		432,
		42
	],
	"../pages/events/events.module": [
		436,
		41
	],
	"../pages/faq/faq.module": [
		433,
		40
	],
	"../pages/favoritelist/favoritelist.module": [
		434,
		39
	],
	"../pages/first/first.module": [
		435,
		38
	],
	"../pages/forget-password/forget-password.module": [
		437,
		37
	],
	"../pages/fridgesearch/fridgesearch.module": [
		438,
		36
	],
	"../pages/import-recipe-image/import-recipe-image.module": [
		439,
		3
	],
	"../pages/import-recipe-url/import-recipe-url.module": [
		441,
		2
	],
	"../pages/importcontacts/importcontacts.module": [
		440,
		28
	],
	"../pages/levelpopover/levelpopover.module": [
		442,
		35
	],
	"../pages/login/login.module": [
		443,
		11
	],
	"../pages/main/main.module": [
		444,
		5
	],
	"../pages/my-events/my-events.module": [
		445,
		6
	],
	"../pages/my-recipe-inside/my-recipe-inside.module": [
		446,
		13
	],
	"../pages/my-recipes/my-recipes.module": [
		454,
		12
	],
	"../pages/myrecipesideicon/myrecipesideicon.module": [
		447,
		34
	],
	"../pages/new-recipes/new-recipes.module": [
		448,
		1
	],
	"../pages/notification-setting/notification-setting.module": [
		449,
		33
	],
	"../pages/notification/notification.module": [
		450,
		18
	],
	"../pages/save-recipe-detail/save-recipe-detail.module": [
		451,
		9
	],
	"../pages/saverecipelist/saverecipelist.module": [
		452,
		32
	],
	"../pages/settings/settings.module": [
		453,
		7
	],
	"../pages/signup/signup.module": [
		455,
		31
	],
	"../pages/terms-conditions/terms-conditions.module": [
		457,
		30
	],
	"../pages/view-recipes/view-recipes.module": [
		456,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_fcm__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
///import { SecurityProvider } from '../providers/security/security';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonIcon: 'ios-arrow-back',
                    backButtonText: '',
                    pageTransition: 'md-transition',
                    activator: 'ripple',
                    mode: 'md',
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-friends/account-friends.module#AccountFriendsPageModule', name: 'AccountFriendsPage', segment: 'account-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-invite-friends/account-invite-friends.module#AccountInviteFriendsPageModule', name: 'AccountInviteFriendsPage', segment: 'account-invite-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-my-post/account-my-post.module#AccountMyPostPageModule', name: 'AccountMyPostPage', segment: 'account-my-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/creat-recipe-camera/creat-recipe-camera.module#CreatRecipeCameraPageModule', name: 'CreatRecipeCameraPage', segment: 'creat-recipe-camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-event-location/create-event-location.module#CreateEventLocationPageModule', name: 'CreateEventLocationPage', segment: 'create-event-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-menu-owner/create-menu-owner.module#CreateMenuOwnerPageModule', name: 'CreateMenuOwnerPage', segment: 'create-menu-owner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-my-events/create-my-events.module#CreateMyEventsPageModule', name: 'CreateMyEventsPage', segment: 'create-my-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-mutual-event/create-mutual-event.module#CreateMutualEventPageModule', name: 'CreateMutualEventPage', segment: 'create-mutual-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-menu/create-new-menu.module#CreateNewMenuPageModule', name: 'CreateNewMenuPage', segment: 'create-new-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-what-to-bring/create-what-to-bring.module#CreateWhatToBringPageModule', name: 'CreateWhatToBringPage', segment: 'create-what-to-bring', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createeventmember/createeventmember.module#CreateeventmemberPageModule', name: 'CreateeventmemberPage', segment: 'createeventmember', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createnewbringform/createnewbringform.module#CreatenewbringformPageModule', name: 'CreatenewbringformPage', segment: 'createnewbringform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createnewmenuitemsform/createnewmenuitemsform.module#CreatenewmenuitemsformPageModule', name: 'CreatenewmenuitemsformPage', segment: 'createnewmenuitemsform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event-member/edit-event-member.module#EditEventMemberPageModule', name: 'EditEventMemberPage', segment: 'edit-event-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event-menu-item-form/edit-event-menu-item-form.module#EditEventMenuItemFormPageModule', name: 'EditEventMenuItemFormPage', segment: 'edit-event-menu-item-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event-menu/edit-event-menu.module#EditEventMenuPageModule', name: 'EditEventMenuPage', segment: 'edit-event-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event-what-to-bring-form/edit-event-what-to-bring-form.module#EditEventWhatToBringFormPageModule', name: 'EditEventWhatToBringFormPage', segment: 'edit-event-what-to-bring-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event-what-to-bring/edit-event-what-to-bring.module#EditEventWhatToBringPageModule', name: 'EditEventWhatToBringPage', segment: 'edit-event-what-to-bring', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-chat/event-chat.module#EventChatPageModule', name: 'EventChatPage', segment: 'event-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-photos/event-photos.module#EventPhotosPageModule', name: 'EventPhotosPage', segment: 'event-photos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritelist/favoritelist.module#FavoritelistPageModule', name: 'FavoritelistPage', segment: 'favoritelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fridgesearch/fridgesearch.module#FridgesearchPageModule', name: 'FridgesearchPage', segment: 'fridgesearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/import-recipe-image/import-recipe-image.module#ImportRecipeImagePageModule', name: 'ImportRecipeImagePage', segment: 'import-recipe-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/importcontacts/importcontacts.module#ImportcontactsPageModule', name: 'ImportcontactsPage', segment: 'importcontacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/import-recipe-url/import-recipe-url.module#ImportRecipeUrlPageModule', name: 'ImportRecipeUrlPage', segment: 'import-recipe-url', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/levelpopover/levelpopover.module#LevelpopoverPageModule', name: 'LevelpopoverPage', segment: 'levelpopover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-events/my-events.module#MyEventsPageModule', name: 'MyEventsPage', segment: 'my-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-recipe-inside/my-recipe-inside.module#MyRecipeInsidePageModule', name: 'MyRecipeInsidePage', segment: 'my-recipe-inside', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrecipesideicon/myrecipesideicon.module#MyrecipesideiconPageModule', name: 'MyrecipesideiconPage', segment: 'myrecipesideicon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-recipes/new-recipes.module#NewRecipesPageModule', name: 'NewRecipesPage', segment: 'new-recipes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-setting/notification-setting.module#NotificationSettingPageModule', name: 'NotificationSettingPage', segment: 'notification-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-recipe-detail/save-recipe-detail.module#SaveRecipeDetailPageModule', name: 'SaveRecipeDetailPage', segment: 'save-recipe-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saverecipelist/saverecipelist.module#SaverecipelistPageModule', name: 'SaverecipelistPage', segment: 'saverecipelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-recipes/my-recipes.module#MyRecipesPageModule', name: 'MyRecipesPage', segment: 'my-recipes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-recipes/view-recipes.module#ViewRecipesPageModule', name: 'ViewRecipesPage', segment: 'view-recipes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-conditions/terms-conditions.module#TermsConditionsPageModule', name: 'TermsConditionsPage', segment: 'terms-conditions', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_security_security__["a" /* SecurityProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_fcm__["a" /* FCM */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(securityProvider, alertCtrl, platform, statusBar, splashScreen, translate, events, fcm) {
        var _this = this;
        this.securityProvider = securityProvider;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.events = events;
        this.fcm = fcm;
        this.theme = { 'title': 'Hebrew Theme', 'value': 'hebrew-theme' };
        this.count = 0;
        localStorage['theme'] = this.theme;
        translate.onLangChange.subscribe(function (data) {
            if (data.lang == 'heb') {
                platform.setDir('rtl', true);
                _this.theme = { 'title': 'Hebrew Theme', 'value': 'hebrew-theme' };
            }
            else {
                platform.setDir('ltr', true);
                _this.theme = { 'title': 'English Theme', 'value': 'english-theme' };
            }
        });
        platform.ready().then(function () {
            if (!localStorage['language']) {
                _this.theme = { 'title': 'Hebrew Theme', 'value': 'hebrew-theme' };
                localStorage['theme'] = _this.theme;
            }
            if (localStorage['language'] == "eng") {
                _this.theme = { 'title': 'English Theme', 'value': 'english-theme' };
                localStorage['theme'] = _this.theme;
            }
            if (localStorage['language'] == "heb") {
                _this.theme = { 'title': 'Hebrew Theme', 'value': 'hebrew-theme' };
                localStorage['theme'] = _this.theme;
            }
            translate.setDefaultLang('heb');
            if (localStorage['language']) {
                translate.use(localStorage['language']);
            }
            platform.setDir('rtl', true);
            if (!localStorage['language']) {
                localStorage['language'] = 'heb';
            }
            if (translate.currentLang == 'heb') {
                platform.setDir('rtl', true);
            }
            else {
                platform.setDir('ltr', true);
            }
            if (localStorage['authh'] == 1) {
                if (translate.currentLang == 'heb') {
                    platform.setDir('rtl', true);
                }
                else {
                    platform.setDir('ltr', true);
                }
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                //platform.setDir('rtl', true)	
                _this.rootPage = 'FirstPage';
            }
            fcm.onNotification().subscribe(function (data) {
                var a = localStorage['user_id'];
                _this.securityProvider.GetNotification(a)
                    .subscribe(function (data) {
                    var a = data;
                    _this.Notification = a.notifications.reverse();
                    _this.count = _this.Notification.filter(function (d) { return d.seenStatus == 0; }).length;
                }),
                    function (error) { };
                _this.events.publish('cart:updated', _this.count);
                if (data.wasTapped) {
                    //alert('it works');
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], { noti: 1 });
                    console.log("Received in background");
                }
                else {
                    //this.nav.setRoot(TabsPage, {noti:1});
                    console.log("Received in foreground");
                }
                ;
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.showAdmobBannerAds = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Balifood\Balifood\src\app\app.html"*/'<ion-nav [root]="rootPage" [class]="theme.value"></ion-nav>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notification\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div class="main">\n	<Marquee>This page is under development.</Marquee>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div class="main">\n  <Marquee>This page is under development.</Marquee>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var heroesUrl = 'http://18.218.43.56:5001/api/';
// URL to web api
var SecurityProvider = (function () {
    function SecurityProvider(http) {
        this.http = http;
    }
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    SecurityProvider.prototype.signupopen = function (data) {
        var _this = this;
        var url = heroesUrl + "userSignup";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.loginopen = function (a) {
        var _this = this;
        var url = heroesUrl + "userLogin";
        return this.http.post(url, a, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.checkUserPhone = function (a) {
        var _this = this;
        var url = heroesUrl + "checkPhone/" + a;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.MainRecipe = function (offset) {
        var _this = this;
        var url;
        if (localStorage["private"] == 1) {
            url = heroesUrl + "getRecipesByFriends/" + localStorage['user_id'] + "/" + offset;
        }
        else {
            url = heroesUrl + "allRecipes/" + localStorage['user_id'] + "/" + offset;
        }
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.FrontRecipe = function (offset) {
        var _this = this;
        var url;
        if (localStorage["private"] == 1) {
            url = heroesUrl + "getRecipesByFriends/" + localStorage['user_id'] + "/" + offset;
        }
        else {
            url = heroesUrl + "mainRecipes/" + localStorage['user_id'] + "/" + offset;
        }
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.addRecipes = function (data) {
        var _this = this;
        var url = heroesUrl + "addRecipes";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.Likes = function (data) {
        var _this = this;
        var url = heroesUrl + "like_recipe";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.EventChats = function (id) {
        var _this = this;
        var url = heroesUrl + "getEventChat/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.View_detail = function (data) {
        var _this = this;
        var url = heroesUrl + "view_recipe";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.categoryWiseRecipes = function () {
        var _this = this;
        var url = heroesUrl + "categoryWiseRecipes";
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.login_fb_service = function (data) {
        var _this = this;
        var url = heroesUrl + "facebook_User_Login";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.category = function () {
        var _this = this;
        var url = heroesUrl + "get_categories";
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.MyRecipe = function (id) {
        var _this = this;
        var url = heroesUrl + "categoryWiseMyRecipes/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.togglePrivacy = function (id) {
        var _this = this;
        var url = heroesUrl + "editPrivacyStatus/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.toggleNotifications = function (id, status) {
        var _this = this;
        var url = heroesUrl + "notificationStatus/" + id + '/' + status;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.toggleLanguageStatus = function (id, status) {
        var _this = this;
        var url = heroesUrl + "languageStatus/" + id + '/' + status;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.MyRecipes = function (id) {
        var _this = this;
        var url = heroesUrl + "get_my_recipe/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.contactopen = function (data) {
        var _this = this;
        var url = heroesUrl + "contactUs";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.FaqOpen = function () {
        var _this = this;
        var url = heroesUrl + "get_faq";
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.AddtoMyRecipe = function (data) {
        var _this = this;
        var url = heroesUrl + "add_my_recipe";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.Addcomment = function (data) {
        var _this = this;
        var url = heroesUrl + "addComment";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.forgot = function (data) {
        var _this = this;
        var url = heroesUrl + "userForgotPassword";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.postRecipe = function (data) {
        var _this = this;
        var url = heroesUrl + "editRecipeStatus/" + data;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.EditRecipes = function (data, id) {
        var _this = this;
        var url = heroesUrl + "editRecipeApp/" + id;
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.deleteRecipe = function (id) {
        var _this = this;
        var url = heroesUrl + "deleteRecipe/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.addFav = function (data) {
        var _this = this;
        var url = heroesUrl + "add_to_favourites";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.FavRecipes = function (id) {
        var _this = this;
        var url = heroesUrl + "get_favourites/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.get_status = function (id) {
        var _this = this;
        var url = heroesUrl + "getFavrecipesAndMyRecipes/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.EditComment = function (data) {
        var _this = this;
        var url = heroesUrl + "editComment";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.DeleteComment = function (data) {
        var _this = this;
        var url = heroesUrl + "deleteComment";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.attachedRecipe = function (data) {
        var _this = this;
        var url = heroesUrl + "attachRecipeImage";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.AboutUsBalifood = function () {
        var _this = this;
        var url = heroesUrl + "aboutUs";
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.ChangeProfile = function (data, id) {
        var _this = this;
        var url = heroesUrl + "profileUpdate/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.UserActiveStatus = function (id) {
        var _this = this;
        var url = heroesUrl + "accountActivationDeactivation/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.AllUserFriend = function (id, account) {
        var _this = this;
        var url = heroesUrl + "getAllUsrers/" + id + "/" + account;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.AddToFriend = function (data) {
        var _this = this;
        var url = heroesUrl + "sendRequest/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.GetNotification = function (id) {
        var _this = this;
        var url = heroesUrl + "getAllNotifications/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.GetFreindNotification = function (id) {
        var _this = this;
        var url = heroesUrl + "getFriendRequests/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.acceptOrRejectFriendRequest = function (data) {
        var _this = this;
        var url = heroesUrl + "acceptOrRejectRequest/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.acceptOrRejectRequest = function (data) {
        var _this = this;
        var url = heroesUrl + "acceptEventInvitation/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.Changepassword = function (data) {
        var _this = this;
        var url = heroesUrl + "changePassword/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.AddUrl = function (data) {
        var _this = this;
        var url = heroesUrl + "fetchDataFromUrl/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.CreateEvent = function (data) {
        var _this = this;
        var url = heroesUrl + "createEvent/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.AddMenu = function (data) {
        var _this = this;
        var url = heroesUrl + "addMenu/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.addMembers = function (data) {
        var _this = this;
        var url = heroesUrl + "addMembers/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.MyEvent = function (id) {
        var _this = this;
        var url = heroesUrl + "allEvents/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.ContactImport = function (data) {
        var _this = this;
        var url = heroesUrl + "contactSync/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.bringItem = function (data) {
        var _this = this;
        var url = heroesUrl + "addWhatToBring/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.thisEvent = function (id) {
        var _this = this;
        var url = heroesUrl + "getEvent/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.FetchContact = function (id) {
        var _this = this;
        var url = heroesUrl + "fetchContactList/";
        return this.http.post(url, id, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.UpdateEvent = function (data) {
        var _this = this;
        var url = heroesUrl + "editEvent/" + data.event_id;
        delete data.event_id;
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.updateMenu = function (data) {
        var _this = this;
        var url = heroesUrl + "editEventMenu/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.ondeleteEvent = function (id) {
        var _this = this;
        var url = heroesUrl + "deleteEvent/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.EditbringItem = function (data) {
        var _this = this;
        var url = heroesUrl + "editWhatToBring/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.onDeleteMemberFromEvent = function (data) {
        var _this = this;
        var url = heroesUrl + "removeMember/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.onAcceptRequestInvitationForBringItems = function (data) {
        var _this = this;
        var url = heroesUrl + "whatToBringConfirmation/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.onDeleteitem = function (data) {
        var _this = this;
        var url = heroesUrl + "removeWhatToBring/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.onUpdateCount = function (id) {
        var _this = this;
        var url = heroesUrl + "updateSeenStatus/" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.onDeletemenu = function (data) {
        var _this = this;
        var url = heroesUrl + "removeMenu/";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    SecurityProvider.prototype.addGrades = function (data) {
        var _this = this;
        var url = heroesUrl + "addMenuGrades";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (heroes) { return _this.log("saloonUpdate"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('saloonUpdate', [])));
    };
    // SaloonUpdate(data): Observable<any> {
    //   const url = `${ENV.mainApi}/saloonUpdate`;
    //   return this.http.post<any>(url,data,httpOptions)
    //   .pipe(
    //       tap(heroes => this.log(`saloonUpdate`)),
    //       catchError(this.handleError('saloonUpdate', []))
    //   );
    // }
    /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    SecurityProvider.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    SecurityProvider.prototype.log = function (message) {
        // this.messageService.add('HeroService: ' + message);
        //console.log(message)
    };
    SecurityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SecurityProvider);
    return SecurityProvider;
}());

//# sourceMappingURL=security.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map