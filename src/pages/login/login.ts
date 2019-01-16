import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import {
  NavController,
  IonicPage,
  LoadingController,
  AlertController,
  Config,
  Platform,
  ToastController
} from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { SecurityProvider } from "../../providers/security/security";
import { TabsPage } from "../tabs/tabs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FCM } from "@ionic-native/fcm";
import { Device } from "@ionic-native/device";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email;
  password;
  login;
  type;
  loginform: FormGroup;
  logout;
  popupMessages;
  token;
  constructor(
    public platform: Platform,
    private device: Device,
    private fcm: FCM,
    public loadingCtrl: LoadingController,
    public config: Config,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public securityProvider: SecurityProvider,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private translate: TranslateService,
	public toastCtrl: ToastController
  ) {
	 this.translate.get('popup').subscribe(
  value => {
    // value is our translated string
	this.popupMessages=value;
  }
)
    this.login = {};
    this.email = "";
    this.password = "";
    this.type = "text";

    this.logout = this.navParams.get("logout");
    if (this.logout) {
      //alert(this.logout);
      this.navCtrl.push("LoginPage");
    }
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.loginform = formBuilder.group({
      emailaddress: [
        "",
        Validators.compose([
          Validators.maxLength(50),
          Validators.pattern(emailRegex),
          Validators.required
        ])
      ],

      pass: [
        "",
        Validators.compose([
          Validators.maxLength(12),
          Validators.minLength(3),
          Validators.pattern(""),
          Validators.required
        ])
      ]
    });
  }
  signup() {
    this.navCtrl.push("SignupPage");
  }
  ionViewDidLoad() {
    this.fcm.subscribeToTopic("Balifood");
    console.log("ionViewDidLoad LoginPage");
  }
  ngOnInit() {
    // alert('Device UUID is: ' + this.device.uuid);
    // alert('platform is: ' + this.device.platform);
  }
  onHide() {
    this.type = "password";
  }
  onShow() {
    this.type = "text";
  }
    onloginWeb() {
      //	this.platform.ready().then(() => {
     //	this.fcm.getToken().then(token => {
	//this.token = token;
     this.token = "1234";
     if (this.token) {
      this.login = {
        email: this.email.toLowerCase(),
        password: this.password,
        deviceToken: this.token
      };
      let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
      Observable.fromPromise(loading.present())
        .flatMap(data => this.securityProvider.loginopen(this.login))
        .subscribe(
          data =>
            loading.dismiss().then(() => {
              var a = data;
              if (a.success == true) {
                var b = a.userdata;
                var c = b.email;
                localStorage["authh"] = 1;
                localStorage["email"] = c; 
                localStorage["user_id"] = b._id;
                localStorage["password"] = b.password;
                localStorage["username"] = b.username;
                localStorage["user_image"] = b.profileImage;
				localStorage["private"]=b.privateAccountStatus;
				localStorage['notistatus']=b.notificationStatus;
                console.log("email" + c);
				if(this.navCtrl.parent !=null){
                this.navCtrl.setRoot(TabsPage, {parent:0});
				}else{
					this.navCtrl.setRoot(TabsPage);
				}
              } else {
                if (a.message=='email not registered with us') {
                  /* let alert = this.alertCtrl.create({
                    title: this.popupMessages.alert,
                    subTitle: this.popupMessages.emailNotRegistered,
                    buttons: [this.popupMessages.ok]
                  });
                  alert.present(); */
				  let toast1 = this.toastCtrl.create({
					message: this.popupMessages.emailNotRegistered,
					duration: 3000,
					position: 'top'
				  })
				  toast1.onDidDismiss(() => {
					console.log('over')
				  })
				  toast1.present();
                } 
			  if(a.message=='incorrect Password'){
				   /*    let alert = this.alertCtrl.create({
                    title: this.popupMessages.alert,
                    subTitle: this.popupMessages.incorrect_Password,
                    buttons: [this.popupMessages.ok]
                  });
                  alert.present(); */
				   let toast1 = this.toastCtrl.create({
					message: this.popupMessages.incorrect_Password,
					duration: 3000,
					position: 'top'
				  })
				  toast1.onDidDismiss(() => {
					console.log('over')
				  })
				  toast1.present();
			  }
			  
			  if(a.message!='email not registered with us' && a.message!='incorrect Password'){
                     /*  let alert = this.alertCtrl.create({
                    title: this.popupMessages.alert,
                    subTitle: this.popupMessages.Something_went_wrong,
                    buttons: [this.popupMessages.ok]
                  });
                  alert.present(); */
				   let toast1 = this.toastCtrl.create({
					message: this.popupMessages.Something_went_wrong,
					duration: 3000,
					position: 'top'
				  })
				  toast1.onDidDismiss(() => {
					console.log('over')
				  })
				  toast1.present();
                }
                localStorage["authh"] = 0;
                localStorage["email"] = "";
              }
            }),
          error =>
            loading.dismiss().then(() => {
              let alert = this.alertCtrl.create({
                title: "Alert!",
                subTitle: "Something went wrong!",
                buttons: ["OK"]
              });
              alert.present();
            })
        ); 
    } else {
      alert("token not generated");
   }
 // }, err=>{
 //alert(JSON.stringify(err));
// });
//});
  }  
  onlogin() {
	this.platform.ready().then(() => {
	this.fcm.getToken().then(token => {
	this.token = token;
     if (this.token) {
      this.login = {
        email: this.email.toLowerCase(),
        password: this.password,
        deviceToken: this.token
      };
      let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
      Observable.fromPromise(loading.present())
        .flatMap(data => this.securityProvider.loginopen(this.login))
        .subscribe(
          data =>
            loading.dismiss().then(() => {
              var a = data;
              if (a.success == true) {
                var b = a.userdata;
                var c = b.email;
                localStorage["authh"] = 1;
                localStorage["email"] = c; 
                localStorage["user_id"] = b._id;
                localStorage["password"] = b.password;
                localStorage["username"] = b.username;
                localStorage["user_image"] = b.profileImage;
				localStorage["private"]=b.privateAccountStatus;
                localStorage['notistatus']=b.notificationStatus;
				console.log("email" + c);
				if(this.navCtrl.parent !=null){
                this.navCtrl.setRoot(TabsPage, {parent:0});
				}else{
					this.navCtrl.setRoot(TabsPage);
				}
              } else {
                if (a.message=='email not registered with us') {
                  /* let alert = this.alertCtrl.create({
                    title: this.popupMessages.alert,
                    subTitle: this.popupMessages.emailNotRegistered,
                    buttons: [this.popupMessages.ok]
                  });
                  alert.present(); */
				  let toast1 = this.toastCtrl.create({
					message: this.popupMessages.emailNotRegistered,
					duration: 3000,
					position: 'top'
				  })
				  toast1.onDidDismiss(() => {
					console.log('over')
				  })
				  toast1.present();
                } 
			  if(a.message=='incorrect Password'){
				   /*    let alert = this.alertCtrl.create({
                    title: this.popupMessages.alert,
                    subTitle: this.popupMessages.incorrect_Password,
                    buttons: [this.popupMessages.ok]
                  });
                  alert.present(); */
				   let toast1 = this.toastCtrl.create({
					message: this.popupMessages.incorrect_Password,
					duration: 3000,
					position: 'top'
				  })
				  toast1.onDidDismiss(() => {
					console.log('over')
				  })
				  toast1.present();
			  }
			  
			  if(a.message!='email not registered with us' && a.message!='incorrect Password'){
                     /*  let alert = this.alertCtrl.create({
                    title: this.popupMessages.alert,
                    subTitle: this.popupMessages.Something_went_wrong,
                    buttons: [this.popupMessages.ok]
                  });
                  alert.present(); */
				   let toast1 = this.toastCtrl.create({
					message: this.popupMessages.Something_went_wrong,
					duration: 3000,
					position: 'top'
				  })
				  toast1.onDidDismiss(() => {
					console.log('over')
				  })
				  toast1.present();
                }
                localStorage["authh"] = 0;
                localStorage["email"] = "";
              }
            }),
          error =>
            loading.dismiss().then(() => {
              let alert = this.alertCtrl.create({
                title: "Alert!",
                subTitle: "Something went wrong!",
                buttons: ["OK"]
              });
              alert.present();
            })
        ); 
    } else {
      alert("token not generated");
   }
  }, err=>{
 alert(JSON.stringify(err));
 });
});
  }  

  onForgot() {
    this.navCtrl.push("ForgetPasswordPage");
  }
}
