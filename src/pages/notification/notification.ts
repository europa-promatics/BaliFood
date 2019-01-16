import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateService } from "@ngx-translate/core";
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
Notification
eventData
noticountflag=0;
lang
count
friendRequestsNotification
mergeNotify=[]
  constructor(public securityProvider: SecurityProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, private translate: TranslateService, public events: Events) {
  }

   ngOnInit() {
	   this.noticountflag=-1;
     this.mergeNotify=[]
	 if(localStorage['user_id']) {
    this.GetNotification();
    this.friendNotification();

	  
      setTimeout(() => {
     this.ngOnInit();
    }, 5000);
	 }
    this.lang=localStorage["language"];

   }

   GetNotification(){
        var a=localStorage['user_id'];
      this.securityProvider.GetNotification(a)
      .subscribe(data => {
        var a=data;
		//alert(JSON.stringify(a));
        this.Notification=a.notifications.reverse();
		//console.log(this.Notification);
		
this.count=this.Notification.filter(d=>d.seenStatus==0).length;
	 this.events.publish('cart:updated', this.count);
        // for(let a of Notification){
        //  this.mergeNotify.push(a);
         
        // }
		
		
       
      }),
      error => {}
   }   
   
   private updateCount(){
	 
        var a=localStorage['user_id'];
      this.securityProvider.onUpdateCount(a)
      .subscribe(data => {
		  this.noticountflag=data;
      }),
      error => {}
	 
   }

   friendNotification(){
     var a=localStorage['user_id'];
      this.securityProvider.GetFreindNotification(a)
      .subscribe(data => {
        var a=data;
		if(a.friendRequests){
        this.friendRequestsNotification=a.friendRequests;
		}
      }),
      error => {}
   }

   getOrderData(array){
 array.sort(function(a,b){return b.createdDate - a.createdDate})
 return array
}

   onAcceptRequest(requester,status){
   	////status=1/accept, status=2/reject/////////
   	var a={
requester:requester,
recipient:localStorage['user_id'],
status:status
   	}
   	 this.securityProvider.acceptOrRejectFriendRequest(a)
      .subscribe(data => {
      	var a=data;
console.log("a"+JSON.stringify(a));
this.ngOnInit();
      }),

      error => {
        console.log("err"+JSON.stringify(error));
      }
   }

   onAcceptRequestInvitation(eventId,notification_id,status){
     if (status==1) {
       var s='Confirmed';
     }
     else{
   var s='Cancelled';
     }
     var a={
eventId:eventId,
member_id:localStorage['user_id'],
status:s,
notificationId:notification_id
     }
      this.securityProvider.acceptOrRejectRequest(a)
      .subscribe(data => {
        var a=data;
console.log("a"+JSON.stringify(a));
this.ngOnInit();
      }),

      error => {
        console.log("err"+JSON.stringify(error));
      }
   }

   onAcceptRequestInvitationForBringItems(eventId,notification_id,status,whatToBringId){
      if (status==1) {
       var s='Confirmed';
     }
     else{
   var s='Cancelled';
     }
     var a={
eventId:eventId,
whatToBringId:whatToBringId,
status:s,
notificationId:notification_id,
member_id:localStorage['user_id'],
username:localStorage['username']
     }
      this.securityProvider.onAcceptRequestInvitationForBringItems(a)
      .subscribe(data => {
        var a=data;
console.log("a"+JSON.stringify(a));
this.ngOnInit();
      }),

      error => {
        console.log("err"+JSON.stringify(error));
      }
   }

   allimg(img){
     if(img){
       return img;
     }
     else{
       return 'assets/imgs/profile_img.png';
     }
   }
   funDate(date){
    if (date) {
       var a=date.split(" ");
     return a[1]+" "+ a[2]+" "+a[3];
    }
   }
change(data){
let a=data.filter(arg=>arg==localStorage['user_id'])
if (a.length>0) {
  return true;
}
else{
  return false;
}
}

goToEvent(eventid){
	let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.thisEvent(eventid))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a=data;
		  localStorage['event_id']=eventid;
          if (a.success==true) {
          this.eventData=a.eventData;
		  this.navCtrl.push('MyEventsPage',{eventData:a.eventData, lastPage:'notifications'});
          }
         
        }),
        error =>
        loading.dismiss().then(() => {})
      );
	
}

millisecondsToStr (milliseconds) {
  
   milliseconds =  new Date(milliseconds).getTime();
   //alert(new Date(milliseconds));
  var mstoday = new Date().getTime();
  milliseconds=mstoday-milliseconds;

    function numberEnding (number) {
        return (number > 1) ? 's' : '';
    }

    var temp = Math.floor(milliseconds / 1000);
    var years = Math.floor(temp / 31536000);
    if (years) {
        return years + ' year' + numberEnding(years)+" ago";
    }
    //TODO: Months! Maybe weeks? 
    var days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
		if(localStorage['language']!='heb'){
        return days + ' day' + numberEnding(days)+" ago";
		}else{
		return "לפני "+days+" ימים";
		}
    }
    var hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
		if(localStorage['language']!='heb'){
        return hours + ' hour' + numberEnding(hours)+" ago";
		}else{
		return "לפני "+hours+" שעות";
		}
    }
    var minutes = Math.floor((temp %= 3600) / 60);
	//alert(minutes);
    if (minutes) {
		if(localStorage['language']!='heb'){
        return minutes + ' minute' + numberEnding(minutes)+" ago";
		}else{
			return "לפני "+minutes+" דק";
		}
    }
    var seconds = temp % 60;
    if (seconds) {
		if(localStorage['language']!='heb'){
        return seconds + ' second' + numberEnding(seconds)+" ago";
		}else{
		return seconds + ' לפני שניות'
		}
    }
	if(localStorage['language']!='heb'){
    return 'less than a second ago'; //'just now' //or other string you like;
	}else{
	return 'לפני פחות משנייה';
	}
}


}
