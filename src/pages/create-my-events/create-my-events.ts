import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  ToastController
} from 'ionic-angular';
import {
  Camera,
  CameraOptions
} from '@ionic-native/camera';
import {
  ActionSheetController
} from 'ionic-angular';
import {
  Observable
} from 'rxjs/Rx';
import {
  SecurityProvider
} from '../../providers/security/security';
import {
  ModalController
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-create-my-events',
  templateUrl: 'create-my-events.html',
})
export class CreateMyEventsPage {
  pic
  menuPopUp: boolean
  location
  lat=45.480827
  lng=-73.4024567
  Event
  event_id
  min_date
  datee
  editEvent:boolean
  eventData
  popupMessages

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public modalCtrl: ModalController, public securityProvider: SecurityProvider, public actionSheetCtrl: ActionSheetController, private camera: Camera, public navCtrl: NavController, public navParams: NavParams,  private translate: TranslateService,  public toastCtrl: ToastController) {
	  this.translate.get('popup').subscribe(
  value => {
    // value is our translated string
	this.popupMessages=value;
  }
)
    this.menuPopUp = false
    this.Event = {}
    this.pic = 'assets/imgs/add-profiler.png';
	if(localStorage['language']=='heb'){
    this.pic = 'assets/imgs/add-profiler-heb.png';		
	}
     delete localStorage['event_id'];
    // localStorage['event_id']='5a8a8df5ba259548f3a90427';
    this.datee = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    var a=this.datee.split('-');
    this.min_date=a[0]+'-'+a[1]+'-'+a[2];
	this.editEvent=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMyEventsPage');
  }
  onEvent(){
	  
    this.navCtrl.setRoot('EventsPage');
  }
  presentConfirm() {
  let alert = this.alertCtrl.create({
    title: this.popupMessages.confirm_cancel,
    message: this.popupMessages.do_you_really,
    buttons: [
      {
        text: this.popupMessages.Disagree,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: this.popupMessages.Agree,
        handler: () => {
        this.onEvent();
        }
      }
    ]
  });
  alert.present();
}

  onMenuCreate() {
    this.menuPopUp = true
  }
  
  onEditEvents(){
	this.navCtrl.push('EditEventPage',{eventData:this.eventData});
}
  onCreateNewMenu() {
    if (localStorage['event_id']) {
      this.navCtrl.push('CreateNewMenuPage', {
        event_id: localStorage['event_id']
      });
      this.menuPopUp = false
    } else {
      let alert = this.alertCtrl.create({
        subTitle: 'Create event firstly!',
        buttons: ['OK']
      });
      alert.present();
      this.menuPopUp = false
    }
  }
  onCreateExistingMenu() {
    this.menuPopUp = false;
  }
  onAddMember() {
      // this.navCtrl.push('CreateeventmemberPage', {
      //   event_id: localStorage['event_id']
      // });
    if (localStorage['event_id']) {
      this.navCtrl.push('CreateeventmemberPage', {
        event_id: localStorage['event_id']
      });
    } else {
      let alert = this.alertCtrl.create({
        subTitle: 'Create event firstly!',
        buttons: ['OK']
      });
      alert.present();
    }

  }
  onLocation() {
    let Modal = this.modalCtrl.create('CreateEventLocationPage');
    Modal.onDidDismiss(data => {
      if (data) {
        console.log("address" + JSON.stringify(data));
        var a = data;
        this.Event.address = a.address;
        this.lat = a.lat;
        this.lng = a.lng;
      }
    });
    Modal.present();
  }
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: this.popupMessages.Select_Image_Source,
      buttons: [{
          text: this.popupMessages.Load_from_Library,
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
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit: false
    }).then((imageData) => {
      let base64Image = imageData;
      this.Event.image = imageData;
      this.pic = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log('gallery not working');
    })
  }


  fromcamera() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit: false
    }).then((imageData) => {
      let base64Image = imageData;
      this.pic = 'data:image/jpeg;base64,' + imageData;
      this.Event.image = imageData;
    }, (err) => {
      console.log('camera not working');
    })
  }
  onSave() {
    
    if (this.Event) {
      this.Event.userId = localStorage['user_id'],
        this.Event.username = localStorage['username'],
        this.Event.eventType = "myEvent";
      this.Event.location = this.lat + "," + this.lng;
      let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
      Observable.fromPromise(loading.present())
        .flatMap(data => this.securityProvider.CreateEvent(this.Event))
        .subscribe(data =>
          loading.dismiss().then(() => {
            var a = data;
            if (a.success == true) {
              var b = a.eventData;
			  this.eventData=a.eventData;
              console.log("event_data" + JSON.stringify(b));
              this.event_id = b._id;
              localStorage['event_id'] = b._id;
            /*   let alert = this.alertCtrl.create({
                subTitle: this.popupMessages.Create_eventsss,
                buttons: [this.popupMessages.ok]
              });
              alert.present(); */
				let toast1 = this.toastCtrl.create({
				message: this.popupMessages.Create_eventsss,
				duration: 3000,
				position: 'top'
			 })
			  toast1.onDidDismiss(() => {
				console.log('over')
			  })
			  toast1.present();
			  this.editEvent=true
			  this.onEditEvents();
			  
            } else {
              /* let alert = this.alertCtrl.create({
                subTitle: this.popupMessages.Something_went_wrong,
                buttons: [this.popupMessages.ok]
              });
              alert.present(); */
			  	let toast1 = this.toastCtrl.create({
				message: this.popupMessages.missing_fields,
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
          loading.dismiss().then(() => {})
        );
    }

  }
}

