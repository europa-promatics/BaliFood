import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,AlertController,LoadingController
} from 'ionic-angular';
import {
  ModalController
} from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';

/**
 * Generated class for the EditEventMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-event-menu',
  templateUrl: 'edit-event-menu.html',
})
export class EditEventMenuPage {
  Menu_event = []
  Menu
  event_id
  eventType
  menuData
  eventData
  event_userId
  editEvent:boolean
  me
  myname
  
  popupMessages
constructor(public securityProvider: SecurityProvider,public loadingCtrl: LoadingController, public alertCtrl: AlertController,public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService) {
	  this.translate.get('popup').subscribe(
		  value => {
			this.popupMessages=value;
		  })
	this.me=localStorage['user_id']
	this.myname=localStorage['username']
    this.Menu = {}
this.eventData=this.navParams.get('eventData');
if (this.eventData) {
	//alert(JSON.stringify(this.eventData));
  this.Menu_event=this.eventData.menu;
  this.eventType=this.eventData.eventType;
  
 
  this.event_userId=this.eventData.userId;
  this.event_id=this.eventData._id
}
if (this.event_userId==localStorage['user_id']) {
 this.editEvent=true
}
else{
  this.editEvent=false
}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventMenuPage');
  }
    onEvent(){
    this.navCtrl.setRoot('EventsPage');
  }
  
  check(object){
	//console.log(object);
	 if(object){
		 console.log(object)
		 if(object[0]){
	  return object[0].recipeTitle;
	 }else{
		 return "";
	 }
	 }
	 return "";
  }
    onDeletemenu(menuId){
 var a = {
   eventId:this.event_id,
   menuId:menuId
    }
let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.onDeletemenu(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
       var a=data;
          if (a.success==true) {
           
            let alert = this.alertCtrl.create({
                subTitle: this.popupMessages.Item_Removed,
                buttons: [this.popupMessages.ok]
              });
              alert.present();
             // this.navCtrl.push('EventsPage');
          }
        }),
        error =>
        loading.dismiss().then(() => {})
      ); 
	   
	  
	
  }
  
/*   
  presentConfirm(menuId, Menu) {
  let alert = this.alertCtrl.create({
    title: 'Confirm delete',
    message: 'Do you really want to delete this menu item?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Delete clicked');
		  this.onDeletemenu(menuId);
		    Menu.deleted=true;
        }
      }
    ]
  });
  alert.present();

} */

    presentConfirm(menuId, Menu) {
  let alert = this.alertCtrl.create({
    title: this.popupMessages.Confirm_delete,
    message:this.popupMessages.confirmationMessage,
    buttons: [
      {
        text: this.popupMessages.no,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: this.popupMessages.yes,
        handler: () => {
          console.log('Delete clicked');
		 this.onDeletemenu(menuId);
		    Menu.deleted=true;
        }
      }
    ]
  });
  alert.present();

}
    onAdd() {
		
    let Modal = this.modalCtrl.create('EditEventMenuItemFormPage', {
   eventData:this.eventData,
   newData:true
    });
    Modal.onDidDismiss(data => {
      if (data) {
        console.log("event_menu" + JSON.stringify(data));
        this.Menu_event = data.menu;
        localStorage['menu_id'] = data.owner_id;
      }
    });
    Modal.present();
  }
onUpdateMenu(menu_data){
	
 let Modal = this.modalCtrl.create('EditEventMenuItemFormPage', {
   menu_data:menu_data,
   eventData:this.eventData,
   newData:false
    });
    Modal.onDidDismiss(data => {
      if (data) {
        console.log("event_menu" + JSON.stringify(data));
        this.Menu_event = data.menu;
        localStorage['menu_id'] = data.owner_id;
      }
    });
    Modal.present();
}

onDeleteOwner(menu_data){
	menu_data.id=localStorage['event_id']
	menu_data.menuId=menu_data._id
	menu_data.owner_id=localStorage['user_id']
	menu_data.owner_name=localStorage['username']
  	if (menu_data) {
 let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.updateMenu(menu_data))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
		  JSON.stringify(a);
               if (a.success == true) {
            let alert = this.alertCtrl.create({
              subTitle: 'Owner deleted!',
              buttons: ['OK']
            });
            alert.present();
           
          }
        }),
        error =>
        loading.dismiss().then(() => {})
      );
  	}
}
	
	  goBack(){
		  //alert('');
	  this.navCtrl.push('EditEventPage',{eventData:this.eventData});
	  
  }
    getTranslation(Menu){
	  if(Menu.status){
	  this.translate.get(Menu.status).subscribe(
		  value => {
			Menu.status=value;
		  })
	  }
  }
}
