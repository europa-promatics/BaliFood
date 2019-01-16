import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { ToastController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
@IonicPage()
@Component({
  selector: 'page-importcontacts',
  templateUrl: 'importcontacts.html',
})
export class ImportcontactsPage {
contacts;
allUser;
  constructor(public securityProvider: SecurityProvider,private toastCtrl: ToastController,private sms: SMS,public navCtrl: NavController, public navParams: NavParams) {
  this.contacts=this.navParams.get('allContacts');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportcontactsPage');
    var a=localStorage['user_id'];
	var b=localStorage['private'];
      this.securityProvider.AllUserFriend(a, b)
      .subscribe(data => {
        var a=data;
       this.allUser=a.allUsers;
      }),
      error => {}
  }
img(phone){
if (this.allUser) {
 if(phone){
  let data=this.allUser.filter(arg=>arg.contactNumber==phone)
  console.log("data"+JSON.stringify(data))
  if (data.length>0) {
    return data[0].profileImage;
  }else{
    return "assets/imgs/profile_img.png";
  }

}
}
}

Send(number){
	this.sms.send(number, 'https://www.dropbox.com/s/fhqgms77yvo5qo4/Balifood%4010Jan_18.zip?dl=0').then(data=>{
		if(data=="OK" || data=='OK'){
          let toast = this.toastCtrl.create({
    message: 'Message sent',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
		}
		else{
          let toast = this.toastCtrl.create({
    message: 'Something went wrong!',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
		}
	}),(err)=>{
 alert("Err"+JSON.stringify(err));
}
}

onInviteAll(){
  for (var i = 0; i < this.contacts.length; i++) {
    var a=this.contacts[i].phoneNumbers[0].value;
    this.Send(a);
  }
}


}
