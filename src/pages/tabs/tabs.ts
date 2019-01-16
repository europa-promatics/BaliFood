import { Component ,ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController,ViewController,AlertController,LoadingController ,Tabs, NavParams} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { Events } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild('myTabs') tabRef: Tabs;
  tab1Root = 'MainPage';
  tab2Root = 'NotificationPage';
  tab3Root = 'EventsPage';
  tab4Root='MyRecipesPage';
  tab5Root='AccountPage';
  index
  counts
  Notification
  userRegisterFirstTime
  Notifi
  constructor(public events: Events, public securityProvider:SecurityProvider, public navCtrl: NavController, public navParams: NavParams, public detectorRef: ChangeDetectorRef) {
	//  alert(JSON.stringify(localStorage));
	
     this.userRegisterFirstTime=this.navParams.get('userRegisterFirstTime');
	 if(this.userRegisterFirstTime){
		 localStorage['notistatus']=1;
	 }
	 if(this.navParams.get('index')){
		 this.index=2;
	 }else{
			 if(this.navParams.get('noti')){
			  this.index=1;
			 }else{
			  this.index=0;
			 }
			  if(this.navParams.get('parent')==0){
		     //tabRef.select(1);
			 this.navCtrl.parent.select(0);
	 }
		 }
		 events.subscribe('cart:updated', _badgeValue => {
				  this.counts = _badgeValue;
				 // alert(_badgeValue);
			  
			});
	}
	tabChange(ev){
    ev.setRoot(ev.root);
} 
	
}
