var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { SecurityProvider } from '../providers/security/security';
var MyApp = /** @class */ (function () {
    function MyApp(securityProvider, alertCtrl, platform, statusBar, splashScreen, translate) {
        this.securityProvider = securityProvider;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        translate.setDefaultLang('en');
		
        if (localStorage['authh'] == 1) {
            this.rootPage = TabsPage;
        }
        else {
            this.rootPage = 'FirstPage';
        }
			alert(localStorage['language']);
			if(localStorage['language']){
			translate.use(localStorage['language'])
		}
        platform.ready().then(function () {
		
            //       fcm.onNotification().subscribe(data=>{
            //   if(data.wasTapped){
            //     console.log("Received in background");
            //   } else {
            //     console.log("Received in foreground");
            //   };
            // })
            // this.translate.use('en');
            // platform.registerBackButtonAction((data)=>{ 
            //      if(this.nav.canGoBack()){
            //       this.nav.pop()
            //     }
            //     else{
            //       let alert=this.alertCtrl.create({
            //          title: 'Exit?',
            //  message: 'Do you want to exit the app?',
            //  buttons: [
            //    {
            //      text: 'Cancel',
            //      role: 'cancel',
            //      handler: () => {
            //      alert=null
            //      }
            //    },
            //    {
            //      text: 'Exit',
            //      handler: () => {
            //        platform.exitApp();
            //      }
            //    }
            //  ]
            //       })
            //       alert.present()
            //     }
            //   })
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [SecurityProvider, AlertController, Platform, StatusBar, SplashScreen, TranslateService])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map