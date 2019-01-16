import { Component } from '@angular/core';
import { NavController,NavParams, IonicPage ,LoadingController, AlertController,Config, ToastController} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})


export class ChangePasswordPage {
  Current_password
  New_Password
  Confirm_Password
  constructor(public loadingCtrl: LoadingController, public config: Config, public navParams: NavParams, public securityProvider: SecurityProvider, public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, private translate: TranslateService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }
  getcurrentPassword(password) {
    if (password) {
      var a = localStorage['password'];
      if (password == a) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  getMatchPassword(password, confPassword) {
    if (confPassword) {
      if (password == confPassword) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  matchdata() {
    if (this.Current_password && this.New_Password && this.Confirm_Password) {
		if(this.New_Password==this.Confirm_Password){
			return true;
		}else{
			return false;
		}
      //return true;
    } else {
      return false;
    }
  }
  onChangePassword() {
	  if(localStorage["password"]!=this.Current_password){
		  let toast1 = this.toastCtrl.create({
				message: "Your existing password does not match!",
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
            this.navCtrl.pop();
          }
	  else{
    var a = {
      userId: localStorage['user_id'],
      newPassword: this.New_Password,
    }
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.Changepassword(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true || a.success == 'true') {
          /*   let alert = this.alertCtrl.create({
              subTitle: a.message,
              buttons: ['OK']
            });
            alert.present(); */
			let toast1 = this.toastCtrl.create({
				message: a.message,
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
 goback() {
    this.navCtrl.pop();
}
}

