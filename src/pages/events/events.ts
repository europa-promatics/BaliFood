import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams, App} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import {AlertController, ViewController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
event;
count=0;
pop_div;
userEvents
PastEvent
upcomingEvent
todayEvent
existing
  constructor(public securityProvider: SecurityProvider,public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService, public app: App, private viewCtrl: ViewController, private modalCtrl:ModalController) {
	  this.translate.use(localStorage['language']);
 this.event='upcoming';
  this.pop_div='false';
  this.existing=this.navParams.get('existing');
  if (this.existing) {
   
  }
  }

  ionViewWillEnter() {

  }
onPop(){
	  this.count++;
  if(this.count%2!=0){
   this.pop_div='true'; 
  }
   else{
     this.pop_div='false'; 
   }
}

doYourStuff()
{
   // alert('cowabonga');
    this.navCtrl.pop();  // remember to put this to add the back button behavior
}
onMutualEvent(){
  this.navCtrl.push('CreateMutualEventPage');
   this.pop_div='false';
}
OnEvents(data){
	//console.log(this.navCtrl.getActive());
  if (this.existing) {
	//  alert('here');
		//  this.navCtrl.push('GetEventMenuPage',{eventData:data});
  this.app.getRootNav().push('GetEventMenuPage',{eventData:data})
  }
  else{
	   //  alert('there');
	  // this.navCtrl.popToRoot (); 
	 let myModal = this.modalCtrl.create('MyEventsPage',{eventData:data});
    myModal.present();
   //  this.app.getRootNav().push('MyEventsPage',{eventData:data})
  // this.navCtrl.push('MyEventsPage',{eventData:data});
  // this.app.getRootNav().push('MyEventsPage',{eventData:data});
  }
  
}

onMyEvent(){
  this.navCtrl.push('CreateMyEventsPage');
   this.pop_div='false';
}

ngOnInit(){
  var a=localStorage['user_id'];
   this.securityProvider.MyEvent(a)
      .subscribe(data => {
        var a=data;
        if (a.success==true) {
           this.userEvents=a.userEvents;
          this.compare()
          this.upcomingCompare()
          this.todayCompare()
        }
      //  console.log("data"+JSON.stringify(data));
      }),
      error => {
       // console.log("err"+JSON.stringify(error));
      }
}
compare(){
  var a=new Date().toISOString();
  var b=this.change(a);
 // console.log("new"+a);
  let data=this.userEvents.filter(arg=>this.change(arg.date)<b);
  if (data.length>0) {
   // console.log("compare_date"+JSON.stringify(data));
    this.PastEvent=data
  }
  else{
     //console.log("compare_date1"+JSON.stringify(data));
  }
}
upcomingCompare(){
   var a=new Date().toISOString();
  
  //console.log("new"+a);
  
  var b=this.change(a);
 
  let data=this.userEvents.filter(arg=>this.change(arg.date)>b);
  if (data.length>0) {
    //console.log("compare_date"+JSON.stringify(data));
    this.upcomingEvent=data
  }
  else{
     //console.log("compare_date1"+JSON.stringify(data));
  }
}
todayCompare(){
    var a=new Date().toISOString();
 // console.log("new"+a);
  var b=a.split('T')
var c=b[0];
  let data=this.userEvents.filter(arg=>this.fun(arg.date)==c);
  if (data.length>0) {
   // console.log("compare_date"+JSON.stringify(data));
    this.todayEvent=data
  }
  else{
     //console.log("compare_date1"+JSON.stringify(data));
  }
 
}

change(date){
	
var a=date.split('T')
var final_date_parts=a[0].split('-');
var final_date=final_date_parts[0]+'/'+final_date_parts[1]+'/'+final_date_parts[2]
//alert(final_date_parts[0]);
return final_date;
}
fun(date){
var a=date.split('T');
return a[0];
}

}
