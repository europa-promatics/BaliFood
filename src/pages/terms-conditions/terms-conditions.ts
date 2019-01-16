import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
@IonicPage()
@Component({
  selector: 'page-terms-conditions',
  templateUrl: 'terms-conditions.html',
})
export class TermsConditionsPage {

  constructor( public navCtrl: NavController, public navParams: NavParams,  public translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsConditionsPage');
  }
goback() {
    this.navCtrl.pop();
}
}
