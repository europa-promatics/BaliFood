import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ToastController} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";


@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})




export class ContactusPage {
  contact
  salonregister: FormGroup;
  constructor(public formBuilder: FormBuilder, public alertCtrl: AlertController, public securityProvider: SecurityProvider, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private translate: TranslateService) {
    this.contact = {}
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.salonregister = formBuilder.group({
      useremail: ['', Validators.compose([
        Validators.pattern(emailRegex), Validators.required
      ])],
      message: ['', Validators.compose([Validators.minLength(1), Validators.pattern(''), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

  onSave() {
    this.securityProvider.contactopen(this.contact)
      .subscribe(data => {
        console.log("data" + JSON.stringify(data));
        var a = data;
        if (a.success == true || a.success == 'true' || a.success == "true") {
         /*  let alert = this.alertCtrl.create({
            title: 'Thanks for contact us.!',
            subTitle: 'We will contact you shortly !',
            buttons: ['OK']
          });
          alert.present(); */
		  let toast1 = this.toastCtrl.create({
				message: "Thanks for contact us.",
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
          this.navCtrl.push('SettingsPage');
        } else {
          console.log('eror');
        }
      }),
      error => {}
  }
  
   goback() {
    this.navCtrl.pop();
}


}

