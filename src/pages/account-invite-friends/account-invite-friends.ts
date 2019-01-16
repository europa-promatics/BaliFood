import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { ToastController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateService } from "@ngx-translate/core";


@IonicPage()
@Component({
  selector: 'page-account-invite-friends',
  templateUrl: 'account-invite-friends.html',
})


export class AccountInviteFriendsPage {
  contacts
  index
  ContactFriends
  contactData
  allUser
  con
  currentLang
  contactData2
  popupMessages
  listcontacts
  constructor(public loadingCtrl: LoadingController, public securityProvider: SecurityProvider, private toastCtrl: ToastController, private sms: SMS, public navCtrl: NavController, public navParams: NavParams,private translate: TranslateService) {
	   this.translate.get('popup').subscribe(
		  value => {
			this.popupMessages=value;
		  })
		this.currentLang=this.translate.currentLang;
		//alert(this.currentLang);
     // this.contacts = JSON.parse(localStorage['contact_data']);
    // this.con = JSON.parse(localStorage['contact_data']);
  }


  ngOnInit() {
    
	this.listcontacts=localStorage['contactNames'];
	//alert(this.listcontacts);
	this.getContact();
    var a = localStorage['user_id'];
	var b=localStorage['private'];
    this.securityProvider.AllUserFriend(a,b)
      .subscribe(data => {
        var a = data;
        this.allUser = a.allUsers;

      }),
      error => {
        console.log("err" + JSON.stringify(error));
      }
  }
  
  
    checkPhone(phone) {
	console.log(phone);
    this.securityProvider.checkUserPhone(phone)
      .subscribe(data => {
        var a = data.success;
		if(a==true){
			
		}else{
			;
		}

      }),
      error => {
        console.log("err" + JSON.stringify(error));
		
      }
  }
  
  

    getContact() {
    var a = {
      user_id: localStorage['user_id']
    }
    let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.FetchContact(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          this.ContactFriends = a.contacts;
          let dataa = this.ContactFriends.filter(arg => arg.status != true);
          if (dataa.length > 0) {
            this.contactData = dataa;
            this.contactData2 = dataa;
			}
        }),
        error =>
        loading.dismiss().then(() => {})
      );
  }


  getItems(ev: any) {
    var val = ev.target.value;

    if (val && val.trim() != '') {

      this.contactData = this.contactData.filter((p) => {
        if (p.number.name) {
          return (p.number.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      })
    } else {
      this.contactData = this.contactData2;
    }
  }
  getStatus(cont) {
    let data = this.ContactFriends.filter(arg => arg.number != cont)
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountInviteFriendsPage');
  }
  Sendreq(number, i, num) {
	//alert(number);
// this.checkPhone(number);
 //num.number.isInvited=true;
     this.sms.send(number, 'https://www.dropbox.com/s/fhqgms77yvo5qo4/Balifood%4010Jan_18.zip?dl=0').then(data => {
      if (data == "OK" || data == 'OK') {
		  this.checkPhone(number);
		  num.number.isInvited=true;
        this.index = i;
        let toast = this.toastCtrl.create({
          message: 'Message sent',
          duration: 3000,
          position: 'top'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      } else {
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
    }), (err) => {
      alert("Err" + JSON.stringify(err));
    } 
  }

  onInviteAll() {
    for (var i = 0; i < this.contacts.length; i++) {
      var a = this.contacts[i].phoneNumbers[0].value;
      this.Sendreq1(a);
    }
  }  

  Sendreq1(number) {

    this.sms.send(number, 'https://www.dropbox.com/s/fhqgms77yvo5qo4/Balifood%4010Jan_18.zip?dl=0').then(data => {
      if (data == "OK" || data == 'OK') {
        let toast = this.toastCtrl.create({
          message: 'Message sent',
          duration: 3000,
          position: 'top'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      } else {
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
    }), (err) => {
      alert("Err" + JSON.stringify(err));
    }
  }
goback() {
    this.navCtrl.pop();
}

}

