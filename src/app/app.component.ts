import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { SecurityProvider } from '../providers/security/security';
import { FCM } from '@ionic-native/fcm';
import { Events } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;
 public theme = {'title':'Hebrew Theme', 'value':'hebrew-theme'};
  rootPage;
  Notification
  count=0;
  constructor(public securityProvider:SecurityProvider, public alertCtrl:AlertController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private translate: TranslateService, public events: Events, public fcm: FCM ) {	
    localStorage['theme']=this.theme;
	
    translate.onLangChange.subscribe((data) => {
			if(data.lang=='heb'){
			platform.setDir('rtl', true)
			this.theme = {'title':'Hebrew Theme', 'value':'hebrew-theme'};
			
			}else{
			
				platform.setDir('ltr', true)
				this.theme = {'title':'English Theme', 'value':'english-theme'};
				
			}
		}); 
    platform.ready().then(() => {
		 if(!localStorage['language']){
			this.theme = {'title':'Hebrew Theme', 'value':'hebrew-theme'};
				
			localStorage['theme']=this.theme;
			}
		  if(localStorage['language']=="eng"){
			this.theme = {'title':'English Theme', 'value':'english-theme'};
				
			localStorage['theme']=this.theme;
		   }
		   if(localStorage['language']=="heb"){
			this.theme = {'title':'Hebrew Theme', 'value':'hebrew-theme'};
				
			localStorage['theme']=this.theme;
			}
    
	  translate.setDefaultLang('heb');
			if(localStorage['language']){
			translate.use(localStorage['language'])
	  }
	  platform.setDir('rtl', true)
		if(!localStorage['language']){
			localStorage['language']='heb'
		}
		if(translate.currentLang=='heb'){
			
		platform.setDir('rtl', true)	
		}else{
		platform.setDir('ltr', true)	
		}
	   if(localStorage['authh']==1){
	    if(translate.currentLang=='heb'){
		platform.setDir('rtl', true)	
		}else{
		platform.setDir('ltr', true)	
		}
      this.rootPage = TabsPage; 
    }
    else{
			//platform.setDir('rtl', true)	
       this.rootPage = 'FirstPage';
    }        
 	fcm.onNotification().subscribe(data=>{
		    var a=localStorage['user_id'];
		    this.securityProvider.GetNotification(a)
		  .subscribe(data => {
			var a=data;
			this.Notification=a.notifications.reverse();
			this.count=this.Notification.filter(d=>d.seenStatus==0).length;
			
		  }),
		  error => {}
	 this.events.publish('cart:updated', this.count); 
	if(data.wasTapped){
		//alert('it works');
		this.nav.setRoot(TabsPage, {noti:1});
		console.log("Received in background");
	} else {
		//this.nav.setRoot(TabsPage, {noti:1});
		console.log("Received in foreground");
	};
 }) 
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  showAdmobBannerAds(){
    }      

}
