import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController, ToastController, App } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController , ModalController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';
import {
  TabsPage
} from '../tabs/tabs';
const heroesUrl = 'http://18.218.43.56:5001/api/'; 
@IonicPage()
@Component({
  selector: 'page-my-events',
  templateUrl: 'my-events.html',
})
export class MyEventsPage {
pet
eventData
eventUserId
visible
EventOwner:boolean;
checkTime
date
time
day
hour
minute
second
pic
EXPIREDEVENTS
popupMessages
post_img:boolean;

  constructor(private transfer: FileTransfer, private file: File,public actionSheetCtrl: ActionSheetController, private camera: Camera, public alertCtrl:AlertController, public loadingCtrl:LoadingController,private translate: TranslateService, public securityProvider:SecurityProvider, public navCtrl: NavController, public navParams: NavParams, platform: Platform, public toastCtrl: ToastController, public app: App, private modalCtrl:ModalController) {
   this.translate.get('popup').subscribe(
  value => {
	this.popupMessages=value;
    })
	this.translate.use(localStorage['language']);
	platform.registerBackButtonAction(() => {
    this.eventList();
    },2);
 this.pet='Menu';
  this.visible='md-add-circle';
 this.post_img=false;
 this.eventData=this.navParams.get('eventData');
 localStorage["event_id"]=this.eventData._id
 	if(this.navParams.get('lastPage')!='notifications'){
 this.refreshEvent();
	}
//this.getAverageScores();
 for(var k=0; k<this.eventData.menu.length; k++){
	 this.eventData.menu[k].mygrade=this.getMyGrade( this.eventData.menu[k],  this.eventData.menu[k].grade);
 }
 //console.log("event_data"+JSON.stringify(this.eventData));
 this.eventUserId=this.eventData.userId;
 if (this.eventUserId==localStorage['user_id']) {
  this.EventOwner=true
 }
 else{
   this.EventOwner=false;
 }
 //console.log("eventData"+JSON.stringify(this.eventData));

  }
  fun(date){
var a=date.split('T')
return a[0];
  }


getAvg(data){
	
var avg = Array.from(data.reduce(
        (acc, obj) => Object.keys(obj).reduce( 
            (acc, key) => typeof obj[key] == "number"
                ? acc.set(key, (acc.get(key) || []).concat(obj[key]))
                : acc,
        acc),
    new Map()), 
        ([name, values]) =>
            ({ name, average: values.reduce( (a,b) => a+b ) / values.length })
    );
	if(avg[0]){
	return avg[0].average;
	}else{
		return '';
	}
	}
	
	eventList(){
		if(this.navParams.get('lastPage')=='notifications'){
		this.navCtrl.setRoot('NotificationPage');	
		}else{
			//alert('here');
		this.navCtrl.setRoot(TabsPage, {index:2});	
		}
		
	}
	
	refreshEvent(){
		
	  let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.thisEvent(localStorage['event_id']))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a=data;
          if (a.success==true) {
          this.eventData=a.eventData;
          }
         
        }),
        error =>
        loading.dismiss().then(() => {})
      );
	}
  addGrade(value, menu){
	 // alert(value);
	  menu.grades=value;
	  var a={
  eventId:this.eventData._id,
  menuId:menu._id,
  userId:localStorage['user_id'],
  grade:value
}
  let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.addGrades(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a=data;
          if (a.success==true) {
             let alert = this.alertCtrl.create({
              subTitle: this.popupMessages.grades_added,
              buttons: [this.popupMessages.ok]
            });
          //  alert.present();
			menu.grades=value;
			this.refreshEvent();
           // this.navCtrl.pop();
          }
         
        }),
        error =>
        loading.dismiss().then(() => {})
      );
  }
  camelize(str) {
return str;
  // return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}

findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

setMyGrades(value, a){
	return a.grades=value;
}
getMyGrade(a, arr){

if(this.findObjectByKey(arr,'userId',localStorage['user_id'])==null){
a.grades=0;
return "0";
}else{
	a.grades=this.findObjectByKey(arr,'userId',localStorage['user_id']).grade;
	 return this.findObjectByKey(arr,'userId',localStorage['user_id']).grade;
}

}
toggle(a){
	
	if(a.visible){
		a.visible=false;
		this.addGrade(a.grades, a);
		//this.setMyGrades(a.grades, a);
		
	}else{
		a.visible=true;
		//this.addGrade(a.grades);
	}
}
  ionViewDidLoad() {
    this.date=this.eventData.date
     var countDownDate = new Date(this.date).getTime();
       var now = new Date().getTime();
    var distance = countDownDate - now;
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.checkTime=days+"-"+hours+"-"+minutes+"-"+seconds+"-";

    var t=this.checkTime.split("-");
      this.day=t[0];
      this.hour=t[1];
      this.minute=t[2];
      this.second=t[3];
    if (distance < 0) {
        this.EXPIREDEVENTS = "EXPIRED";
    }else{
		/* 	this.localNotifications.schedule({
    id: this.eventData._id,
    title: this.eventData.event_name,
    text: 'arrived ? upload photos, yummi ? take pictures',
    data: { eventData: this.eventData.event_name },
    trigger:{at: new Date(new Date(this.date).getTime())}
   }); */
	}
    //console.log('ionViewDidLoad MyEventsPage');
    setTimeout(() => {
		//alert(this.navCtrl.getActive().name);
     this.ionViewDidLoad();
    }, 1000);
  }
  
    onViewDetail(recipe_id, recipe_data) {
    this.navCtrl.push('ViewRecipesPage', {
      recipe_data: recipe_data
    });
    console.log("recipe_data" + JSON.stringify(recipe_data));
    var a = {
      recipe_id: recipe_id,
      user_id: localStorage['user_id']
    }

    this.securityProvider.View_detail(a)
      .subscribe(data => {
        console.log('View_data' + JSON.stringify(data));
        

      }),
      error => {}
  }
 
change(date){
var a=date.split('T')
var final_date_parts=a[0].split('-');
var final_date=final_date_parts[2]+'/'+final_date_parts[1]+'/'+final_date_parts[0]
return final_date;
}
onEditEvents(){
	this.navCtrl.push('EditEventPage',{eventData:this.eventData});
}
onDeleteMember(member_id){
var a={
  eventId:this.eventData._id,
  memberId:member_id
}
 let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.onDeleteMemberFromEvent(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a=data;
          if (a.success==true) {
            /*  let alert = this.alertCtrl.create({
              subTitle: this.popupMessages.Member_deleted,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */
			let toast1 = this.toastCtrl.create({
				message: this.popupMessages.Member_deleted,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
            this.navCtrl.pop();
          }
         
        }),
        error =>
        loading.dismiss().then(() => {})
      );
}
  ondeleteEvent() {
  	let confirm = this.alertCtrl.create({
      message: this.popupMessages.event_conf,
      buttons: [
        {
          text: this.popupMessages.no,
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text:this.popupMessages.yes,
          handler: () => {
            console.log('Agree clicked');
            this.confirmEvents();
          }
        }
      ]
    });
    confirm.present();

  }
  confirmEvents(){
	  console.log(this.eventData);
      var event_id= this.eventData._id
 let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.ondeleteEvent(event_id))
      .subscribe(data =>
        loading.dismiss().then(() => {
        	var a=data;
        	if (a.success==true) {
        	/* 	 let alert = this.alertCtrl.create({
				      subTitle: this.popupMessages.event_del,
				      buttons: [this.popupMessages.ok]
				    });
				    alert.present(); */
					let toast1 = this.toastCtrl.create({
				message: this.popupMessages.event_del,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
				    this.navCtrl.push('EventsPage');
        	}
         
        }),
        error =>
        loading.dismiss().then(() => {})
      );
  }

    public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: this.popupMessages.Select_Image,
      buttons: [{
          text: this.popupMessages.Load_library,
          handler: () => {
            this.fromgallery();
          }
        },
        {
          text: this.popupMessages.use_camera,
          handler: () => {
            this.fromcamera();
          }
        },
        {
          text: this.popupMessages.cancel,
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  fromgallery() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      allowEdit:false
    }).then((imageData) => {
      let base64Image = imageData;
      this.pic = imageData;
      // this.post_img=true
      this.onPostImage(this.pic)
    }, (err) => {
      console.log('gallery not working');
    })
  }


  fromcamera() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      allowEdit:false
    }).then((imageData) => {
      let base64Image = imageData;
      this.pic = imageData;
       // this.post_img=true
       this.onPostImage(this.pic)
    }, (err) => {
      console.log('camera not working');
    })
  }

  onPostImage(image){
    var a=Math.random();
      let fileTransfer: FileTransferObject = this.transfer.create();
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: 'image'+a,
        chunkedMode: false,
        headers: {}
      }
      fileTransfer.upload(image, heroesUrl + 'addEventImages/' + this.eventData._id, options)
        .then((data) => {
          var a = data;
         /* let alert = this.alertCtrl.create({
              subTitle: this.popupMessages.image_post,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */
			let toast1 = this.toastCtrl.create({
				message: this.popupMessages.image_post,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
           this.post_img=false;
        }, (err) => {

        })
    }
    onPostImageCancel(){
      this.post_img=false;
    }
	
	filterMygrade(grades){
       var grade=grades.filter(item => item.userId == localStorage['user_id']);
	  // alert(grade[0].grade);
	  if(grade[0]){
		return grade[0].grade
	  }else{
		  return null;
	  }		
	}
    onPhoto(){
      this.navCtrl.push('EventPhotosPage',{event_id:this.eventData._id})
    }
	
	 onChat(){
		// this.app.getRootNav().push('EventChatPage',{event:this.eventData, classes: 'chat'})
      //this.navCtrl.push('EventChatPage',{event:this.eventData, classes: 'chat'})
    let myModal = this.modalCtrl.create('EventChatPage',{event:this.eventData, classes: 'chat'});
    myModal.present();
	}
  
}
