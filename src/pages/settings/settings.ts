import { Component } from "@angular/core";
import { FCM } from "@ionic-native/fcm";
import { Events } from 'ionic-angular';
import {
  IonicPage,
  NavController,
  NavParams,
  Config,
  AlertController,
  ActionSheetController,
  Platform,
  LoadingController
} from "ionic-angular";
import { SocialSharing } from "@ionic-native/social-sharing";
import { ToastController } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { TranslateService } from "@ngx-translate/core";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import {
  Contacts,
  Contact,
  ContactField,
  ContactName
} from "@ionic-native/contacts";
import { Observable } from "rxjs/Rx";
import { SecurityProvider } from "../../providers/security/security";

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  local;
  nav;
  allContacts;
  lang: boolean;
  contactvalue: boolean;
  contactListArray = [];
  contactNames = [];
  pepperoni
  toggleFlag=0
  popupMessages
  constructor(
    public loadingCtrl: LoadingController,
    public securityProvider: SecurityProvider,
    private contacts: Contacts,
    private fb: Facebook,
    public platform: Platform,
    private translate: TranslateService,
    private toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public config: Config,
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
	public fcm : FCM,
	public events: Events
  ) {

	
	 // document.etElementsByClassName("back-button")[0].style = "color:red";
	   this.translate.get('popup').subscribe(
  value => {
	this.popupMessages=value;
  })
  console.log('Here');
  console.log(this.popupMessages);
    this.lang = true;
    this.contactvalue = false;
    this.translate.use(localStorage["language"]);
	this.pepperoni=false;
	//alert(localStorage['private']);
	if(localStorage['private']==1){
		this.pepperoni=true;
	}
	   this.toggleFlag=1;
	   
	   	this.translate.onLangChange.subscribe((data) => {
			console.info(`Language change to `+JSON.stringify(data));
			if(data.lang=='heb'){
			this.platform.setDir('rtl', true)
				localStorage['theme']={'title':'Hebrew Theme', 'value':'hebrew-theme'};
				this.events.publish('language:updated', "heb"); 
			}else{
			
				this.platform.setDir('ltr', true)
				localStorage['theme']={'title':'English Theme', 'value':'english-theme'};
				this.events.publish('language:updated', "en"); 
			}
		});
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }

  onContact() {
    this.navCtrl.push("ContactusPage");
  }
  onFaq() {
    this.navCtrl.push("FaqPage");
  }
  onAbout() {
    this.navCtrl.push("AboutusPage");
  }

  onLogout() { 
    //alert(this.translate.currentLang);
	var current_lang=this.translate.currentLang;
	//alert(current_lang)
	
   
	if(current_lang=="en"){
		 let confirm = this.alertCtrl.create({
      message: "Are you sure you want to logout?",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Agree clicked");
            this.onconfirm();
          }
        }
      ]
    });
	 confirm.present();
	}
	if(current_lang=="heb"){
		 let confirm = this.alertCtrl.create({
      message: "האם ברצונך לצאת מהמערכת?",
      buttons: [
        {
          text: "לא",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "כן",
          handler: () => {
            console.log("Agree clicked");
            this.onconfirm();
          }
        }
      ]
    });
	 confirm.present();
	}
   
  }
  onconfirm() {
    localStorage.clear();
	localStorage['language']=this.translate.currentLang;
    this.config.set("pageTransition", "ios-transition");
    this.config.set("tabsHideOnSubPages", false);
    this.navCtrl.push("FirstPage", { logout: "logout" });
    //this.navCtrl.parent.select(0);
    this.fb
      .logout()
      .then(res => {})
      .catch(e => {});
  }
  onTerm() {
    this.navCtrl.push("TermsConditionsPage");
  }
  onAboutUs() {
    this.navCtrl.push("AboutusPage");
  }

  
   titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

  onTogglePrivacy(flag){
	
	  var settingMessage;
	   this.translate.get('settingtext').subscribe(res=>{settingMessage=res});
	  if(flag==true){
		  let alert = this.alertCtrl.create({
    title: this.popupMessages.make_private,
   //message:settingMessage,
    buttons: [
      {
        text: this.popupMessages.Disagree,
        role: 'cancel',
        handler: () => {
          this.pepperoni=false;
		  localStorage['private']=0;
        }
      },
      {
        text: this.popupMessages.Agree,
        handler: () => {
        let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.togglePrivacy(localStorage['user_id']))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true || a.success == 'true') {
			  var message=this.popupMessages.public_now;
			  if(a.message=='your account is private now'){
				  message=this.popupMessages.private_now;
			  }
            let alert = this.alertCtrl.create({
              subTitle:message,
              buttons: [this.popupMessages.ok]
            });
            alert.present();
			if(a.message=='your account is private now'){
				localStorage['private']=1;
				this.pepperoni=true;
				this.toggleFlag=0;
			}else{
				this.pepperoni=false;
			}
         
          }

        }),
        error =>
        loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: 'Something went wrong!',
            buttons: ['OK']
          });
          alert.present();
        })
      );
        }
      }
    ]
  });
  alert.present();
		  
	  }else{

	let alert = this.alertCtrl.create({
    title: this.popupMessages.make_public,
    message:this.popupMessages.posts_public_now,
    buttons: [
      {
        text: this.popupMessages.Disagree,
        role: 'cancel',
        handler: () => {
           this.pepperoni=false;
		  localStorage['private']=0;
        }
      },
      {
        text: this.popupMessages.Agree,
        handler: () => {
      let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.togglePrivacy(localStorage['user_id']))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
		  var message="";
          if (a.success == true || a.success == 'true') {
			  if(a.message=='your account is public now'){
				  message=this.popupMessages.public_now
			  }else{
				  message=this.popupMessages.private_now
			  }
            let alert = this.alertCtrl.create({
              subTitle:message,
              buttons: [this.popupMessages.ok]
            });
            alert.present();
			if(a.message=='your account is public now'){
				localStorage['private']=0;
				this.pepperoni=false;
			}else{
				this.pepperoni=true;
			}
         
          }

        }),
        error =>
        loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: 'Something went wrong!',
            buttons: ['OK']
          });
          alert.present();
        })
      );
        }
      }
    ]
  });
  alert.present();
	  
	  }
  }
  onLanguageChange(language) {
    let actionSheet = this.actionSheetCtrl.create({
      title: this.popupMessages.Choose_Language,
      cssClass: "action-sheets-groups-page",
      buttons: [
        {
          text: "English",
          role: "destructive",
          icon: "md-globe",
          handler: () => {
            this.translate.use("en");
            localStorage["language"] = "en";
			  let loading = this.loadingCtrl.create({
        content: "Please wait"
      });
			 Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.toggleLanguageStatus(localStorage['user_id'], 0))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true || a.success == 'true') {
			 
			  
          /*   let alert = this.alertCtrl.create({
              subTitle:msg,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */ 
			let toast1 = this.toastCtrl.create({
				message: "updated",
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  //toast1.present();
			
         
          }

        }),
        error =>
        loading.dismiss().then(() => {
          /* let alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: 'Something went wrong!',
            buttons: ['OK']
          });
          alert.present(); */
		  let toast1 = this.toastCtrl.create({
				message: "Something went wrong!",
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		 // toast1.present();
        })
      );
          }
        },
        {
          text: "עברית",
          icon: "md-globe",
          handler: () => {
            this.translate.use("heb");
            localStorage["language"] = "heb";
            console.log("Facebook clicked");
			  let loading = this.loadingCtrl.create({
        content: "אנא המתן"
      });
			    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.toggleLanguageStatus(localStorage['user_id'], 1))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true || a.success == 'true') {
			 
			  
          /*   let alert = this.alertCtrl.create({
              subTitle:msg,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */ 
			let toast1 = this.toastCtrl.create({
				message: "updated",
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  //toast1.present();
			
         
          }

        }),
        error =>
        loading.dismiss().then(() => {
          /* let alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: 'Something went wrong!',
            buttons: ['OK']
          });
          alert.present(); */
		  let toast1 = this.toastCtrl.create({
				message: "Something went wrong!",
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		 // toast1.present();
        })
      );
          }
        },
        {
          text: this.popupMessages.cancel,
          role: "cancel",
          icon: "close",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }
  share() {
    var message = "Shared by baliFood App";
    var subject = "Balifood";
    var file =
      "http://titan.promaticstechnologies.com/Y1MM/img/shiftimage/2452shiftimag1.jpg";
    var url =
      "https://www.dropbox.com/s/796mk502mbpee64/android-debug.apk?dl=0";
    this.socialSharing
      .share(message, subject, file, url)
      .then(data => {})
      .catch(error => {});
  }
  onShareWith() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Share with",
      cssClass: "action-sheets-groups-page",
      buttons: [
        {
          text: "Instagram",
          role: "destructive",
          icon: "logo-instagram",
          handler: () => {
            this.onInsta();
            console.log("Instagram clicked");
          }
        },
        {
          text: "Facebook",
          icon: "logo-facebook",
          handler: () => {
            this.onFb();
            console.log("Facebook clicked");
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          icon: "close",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }
  onFb() {
    let toast = this.toastCtrl.create({
      message:
        "Message has been copied to clipboard you can paste on Facebook!",
      duration: 2000,
      position: "bottom"
    });
    toast.present(toast);
    var message = "Shared by baliFood App";
    var subject = "Balifood";
    var image =
      "http://titan.promaticstechnologies.com/Y1MM/img/shiftimage/2452shiftimag1.jpg";
    var url = "www.balifoodapplink.com";
    this.socialSharing
      .shareViaFacebook(
        message,
        null,
        "https://www.dropbox.com/s/796mk502mbpee64/android-debug.apk?dl=0"
      )
      .then(() => {})
      .catch(() => {});
  }

  onInsta() {
    let toast = this.toastCtrl.create({
      message:
        "Message has been copied to clipboard you can paste on instagram!",
      duration: 2000,
      position: "bottom"
    });
    toast.present(toast);
    var message = "Shared by baliFood App";
    var subject = "Balifood";
    var image =
      "http://titan.promaticstechnologies.com/Y1MM/img/shiftimage/2452shiftimag1.jpg";
    var url = "www.balifoodapplink.com";
    this.socialSharing
      .shareViaInstagram(message + " " + url, image)
      .then(() => {})
      .catch(() => {});
  }

  onContactimport() {
        let loader = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait,
		duration: 5000
      });
    loader.present();
    this.onUpdateContacts();
    this.contacts.find(["displayName", "name", "phoneNumbers"]).then(data => {
      var a = data;
      this.allContacts = data;
      //alert(JSON.stringify(this.allContacts));
      if (data) {
        //  alert(JSON.stringify(data));
        console.log("contact imported");
        localStorage["contact_data"] = data;
        //alert(JSON.stringify(this.allContacts));
        let toast = this.toastCtrl.create({
          message: this.popupMessages.import_success,
          duration: 2000,
          position: "bottom"
        });
        toast.present(toast);
        for (let a of this.allContacts) {
          if (a._objectInstance.phoneNumbers != null) {
            for (let b of a._objectInstance.phoneNumbers) {
              var d = b.value;
              // alert(d);
              // var e=d.replace(/\s/g, "");
              // var f=e.substring(e.length - 10, e.length)
              var f = d.replace(/\D/g, "");

            this.contactListArray.push({ number: f, name: a.name.givenName });
              //this.contactListArray.push({ number: f, name: a.displayName });

              //alert(this.contactListArray[0]);
             this.contactNames.push({ number: f, name: a.name.givenName });
             // this.contactNames.push({ number: f, name: a.displayName });

              this.contactvalue = true;
            }
          }
        }
        loader.dismiss();
        // alert("hjello");
        //alert(this.contactListArray.toString());
        //alert('hello');
        // alert(JSON.stringify(this.contactListArray));
        //alert(JSON.stringify(this.contactNames));
        //alert(JSON.stringify(this.contactNames));

        localStorage["contact_array"] = JSON.stringify(this.contactListArray);
        localStorage["contactNames"] = JSON.stringify(this.contactNames);
      }
    });
  }

  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }
  onUpdateContacts() {
    if (this.contactvalue) {
      var unique = Array.from(
        this.removeDuplicates(this.contactListArray, "number")
      );
      var a = {
        user_id: localStorage["user_id"],
        contacts: unique
      };
      this.securityProvider.ContactImport(a).subscribe(data => {
        //alert("data"+JSON.stringify(data));
      }),
        err => {
          alert("err" + err);
        };
    } else {
      setTimeout(() => {
        this.onUpdateContacts();
      }, 1000);
    }
  }
  onNotification() {
	  console.log(localStorage['notistatus'])
	  var enable_noti=false;
      var disable_noti=false;
	  if(localStorage['notistatus']==1){
		  enable_noti=true;
	  }else{
		  disable_noti=true;
	  }
	  
	  var notification_title="הגדרות התראה";
	  var enable="הפעל הודעות";
	  var disable="השבת הודעות";
	  var cancel="לא מסכים"
	  var agree="מסכים";
	  var current_lang=this.translate.currentLang;
	  if(current_lang=="en"){
		  notification_title="Notification Settings";
		  enable="Enable";
		  disable="Disable";
		  cancel="Cancel";
		  agree="Agree";
	  }
	 let prompt = this.alertCtrl.create({
    title: notification_title,
    inputs : [
    {
        type:'radio',
        label:enable,
        value:'1',
		checked: enable_noti 
    },
    {
        type:'radio',
        label:disable,
        value:'0',
		checked: disable_noti
    }],
    buttons : [
    {
        text: cancel,
        handler: data => {
        console.log("cancel clicked");
        }
    },
    {
        text: agree,
        handler: popData => {
			var msg;
			if(popData==1){
				msg=this.popupMessages.enabled_now
				localStorage['notistatus']=1;
			}
			
			if(popData==0){
				msg=this.popupMessages.disabled_now
				localStorage['notistatus']=0;
			}
			
			let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.toggleNotifications(localStorage['user_id'], popData))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true || a.success == 'true') {
			  var message=this.popupMessages.public_now;
			  
          /*   let alert = this.alertCtrl.create({
              subTitle:msg,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */ 
			let toast1 = this.toastCtrl.create({
				message: msg,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
			
         
          }

        }),
        error =>
        loading.dismiss().then(() => {
          /* let alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: 'Something went wrong!',
            buttons: ['OK']
          });
          alert.present(); */
		  let toast1 = this.toastCtrl.create({
				message: "Something went wrong!",
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
        })
      );
        }
    }]});
    prompt.present();
	
  }
goback() {
    this.navCtrl.pop();
}
  onApplication() {}
  onChangePassword() {
    this.navCtrl.push("ChangePasswordPage");
  }
}
