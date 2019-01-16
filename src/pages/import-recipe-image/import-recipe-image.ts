import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController,LoadingController,ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { TabsPage } from '../tabs/tabs';
import { ImagePicker } from '@ionic-native/image-picker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { TranslateService } from "@ngx-translate/core";
import { File } from '@ionic-native/file';
import { Events } from 'ionic-angular';
const heroesUrl = 'http://18.218.43.56:5001/api/'; 

@IonicPage()
@Component({
  selector: 'page-import-recipe-image',
  templateUrl: 'import-recipe-image.html',
})
export class ImportRecipeImagePage {
  public photos:any
  public base64Image : string;
  Recipes;
  fruits = []
  ingredients_data
  instructions_data;
  category_name
  video
  recipe_id
  edit_recipe_data;
  pic;
  update;
  editrecipe_id
  multiImage=[]
  recipeImages
  insidecategory
  popupMessages
  imagetext='Image';
  currentLang
  constructor(private transfer: FileTransfer, private file: File, public loadingCtrl: LoadingController,  private imagePicker: ImagePicker, public alertCtrl: AlertController, public securityProvider: SecurityProvider, public actionSheetCtrl: ActionSheetController, private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public viewCtrl: ViewController, private translate: TranslateService, public toastCtrl: ToastController, public events: Events) {
	  	  	   	 this.translate.get('popup').subscribe(
  value => {
    // value is our translated string
	this.popupMessages=value;
  })
  	this.Recipes={};
     this.Recipes.ingredients = []
    this.Recipes.instructions = []
    this.pic=this.navParams.get('pic');
   this.Recipes.mainImage=this.navParams.get('mainImage');
 this.Recipes.email = localStorage['email']
    this.Recipes.userName = localStorage['username']
    this.Recipes.user_id = localStorage['user_id']
	
	this.currentLang = this.translate.currentLang;
	 events.subscribe('language:updated', _badgeValue => {
				  this.currentLang = _badgeValue;
				 // alert(_badgeValue);
			  
			});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportRecipeImagePage');
  }
    ngOnInit() {
    this.securityProvider.category()
      .subscribe(data => {
        console.log("data" + JSON.stringify(data));
        var a = data;
        this.category_name = a.data;

      }),
      error => {}
  }

  	dismiss() {
  		this.viewCtrl.dismiss();
		}


  onSave(){
   let mandatoryfields: string[] = [];
    if (this.Recipes.mainImage == 'assets/imgs/add-profiler.png') {
       if(this.translate.currentLang=='heb'){
		  mandatoryfields.push('תמונה') 
	  }else{
		 mandatoryfields.push('upload main image')  
	  }
     
    }
    if (!this.Recipes.categories || this.Recipes.categories == '') {
     if(this.translate.currentLang=='heb'){
		  mandatoryfields.push('קטגוריות') 
	  }else{
		 mandatoryfields.push('categories')  
	  }
     
    }
    if (!this.Recipes.recipeTitle || this.Recipes.recipeTitle == '') {
        if(this.translate.currentLang=='heb'){
		  mandatoryfields.push('שם המתכון') 
	  }else{
		 mandatoryfields.push('recipe name')  
	  }
    }
     if (mandatoryfields.length > 0) {
		var title='Missing Values!!'
	if(this.translate.currentLang=='heb'){
		  title="ערכים חסרים"
	  }
		
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: mandatoryfields.join(', '),
        buttons: [this.popupMessages.ok]
      });
      alert.present();
    }
    else{
    	   let loading = this.loadingCtrl.create({
          content: this.popupMessages.Please_wait
        });
        Observable.fromPromise(loading.present())
          .flatMap(data => this.securityProvider.addRecipes(this.Recipes))
          .subscribe(data =>
            loading.dismiss().then(() => {
              var a = data;

              if (a.success == true) {
                var b = a.recipeData;
                this.recipe_id = b._id;
                var mesaage = this.popupMessages.Post_successfully;
				if (this.video) {
                  this.upload(mesaage)
                } else {
               /*    let alert = this.alertCtrl.create({
                    subTitle: mesaage,
                    buttons: [ this.popupMessages.ok]
                  });
                  alert.present(); */ 
				  let toast1 = this.toastCtrl.create({
				message: mesaage,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
                  this.dismiss();

                }
                if (this.multiImage) {
                  this.uploadMultiimage()
                }
         
              } else {
                let alert = this.alertCtrl.create({
                  title: 'Alert!',
                  subTitle: 'Something went wrong!',
                  buttons: ['OK']
                });
                alert.present();
              }
            }),
            error =>
            loading.dismiss().then(() => {
              let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: error,
                buttons: ['OK']
              });
              alert.present();
            })
          );
    }    
  }
  
  uploadMultiimage() {
    var recipe_id = this.recipe_id;
    var multiImage = this.multiImage;
    for (var i = 0; i < multiImage.length; i++) {
      var recipeImage = multiImage[i];
      var image = multiImage[i];
      let fileTransfer: FileTransferObject = this.transfer.create();
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: image,
        chunkedMode: false,
        headers: {}
      }
      fileTransfer.upload(recipeImage, heroesUrl + 'addRecipeImage/' + recipe_id, options)
        .then((data) => {
          var a = data;
        }, (err) => {

        })
    }
  }


   onIngredients(value) {
    if (!value) {

    } else {
      this.Recipes.ingredientsValue = '';
      this.Recipes.ingredients.push(value);
      this.ingredients_data = this.Recipes.ingredients
    }

  }
  remove_btn(index: any): void {
    let index1 = this.Recipes.ingredients.indexOf(index);
    this.Recipes.ingredients.splice(index1, 1);
  }
  onInstruction(value) {
    if (!value) {

    } else {
      this.Recipes.instructionsValue = '';
      this.Recipes.instructions.push(value);
      this.instructions_data = this.Recipes.instructions
    }
  }
  remove_instruction(index: any): void {
    let index1 = this.Recipes.instructions.indexOf(index);
    this.Recipes.instructions.splice(index1, 1);

  }

  inst_edit_btn(index: any, value: any): void {
    if (this.Recipes.instructionsValue) {
      // code...
    }
    else{
     this.Recipes.instructionsValue = value;
    this.remove_instruction(index) 
    }
    
  }
  ing_edit_btn(index: any, value: any): void {
    if (this.Recipes.ingredientsValue) {
    }else{
        this.Recipes.ingredientsValue = value;
    this.remove_btn(index)
    }

  }

   upload(message) {
    let loading = this.loadingCtrl.create({
      content: this.popupMessages.Please_wait
    });

    loading.present();
    let fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'video',
      fileName: this.video,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      headers: {}
    }
    fileTransfer.upload(this.video, heroesUrl + 'recipeVideo/' + this.recipe_id, options)
      .then((data) => {
        var a = data;
        loading.dismiss();
       /*  let alert = this.alertCtrl.create({
          subTitle: message,
          buttons: [this.popupMessages.ok]
        });
        alert.present(); */
		let toast1 = this.toastCtrl.create({
				message: message,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();

        this.navCtrl.setRoot('MyRecipesPage');
      }, (err) => {

      })
  }
  
onImports(){
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
      allowEdit:false
    }).then((imageData) => {
      let base64Image = imageData;
      this.pic = 'data:image/jpeg;base64,' + imageData;
      this.Recipes.mainImage = base64Image;
      console.log(this.Recipes.mainImage);
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
      allowEdit:true
    }).then((imageData) => {
      let base64Image = imageData;
      this.pic = 'data:image/jpeg;base64,' + imageData;
      this.Recipes.mainImage = base64Image;
      console.log(this.Recipes.mainImage);
    }, (err) => {
      console.log('camera not working');
    })
  }


  onMultiImg() {
    let actionSheet = this.actionSheetCtrl.create({
      title:this.popupMessages.Select_Image_Source,
      buttons: [{
          text: this.popupMessages.Load_from_Library,
          handler: () => {
            this.Multiimage();
          }
        },
        {
          text: this.popupMessages.use_camera,
          handler: () => {
            this.takePhoto();
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

takePhoto() {
    const options : CameraOptions = {
       destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit:false
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = imageData;
        this.imagetext='Add More Image';
          this.multiImage.push(this.base64Image);
      }, (err) => {
      });
  }


  Multiimage() {
    var options = {
      width: 800,
      height: 800,
      quality: 50,
      outputType: 0,
    };
    this.imagePicker.getPictures(options).then((results) => {
      let a = results.length;
      this.multiImage = results;
    }, (err) => {

    });
  }


  onVideo() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,

    }
    this.camera.getPicture(options).then((videoData) => {
      this.video = videoData;
    }, (err) => {});
  }





  onCancel() {
    let alert = this.alertCtrl.create({
      title: this.popupMessages.confirmation_recp,
      buttons: [{
          text: this.popupMessages.cancel,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.popupMessages.yes,
          handler: () => {
            console.log('Yes clicked');
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
