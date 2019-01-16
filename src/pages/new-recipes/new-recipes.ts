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
  selector: 'page-new-recipes',
  templateUrl: 'new-recipes.html',
})
export class NewRecipesPage {
  public photos:any
  public base64Image : string;
  Recipes;
  fruits = []
  ingredients_data
  popupMessages
  instructions_data;
  category_name
  lang
  video
  recipe_id
  recipeType
  edit_recipe_data;
  loginform: FormGroup;
  pic;
  update;
  editrecipe_id
  multiImage=[]
  recipeImages
  insidecategory
  imagetext='Image';
  currentLang
  constructor(private transfer: FileTransfer, private file: File, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private imagePicker: ImagePicker, public alertCtrl: AlertController, public securityProvider: SecurityProvider, public actionSheetCtrl: ActionSheetController, private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public viewCtrl: ViewController,private translate: TranslateService, public toastCtrl: ToastController, public events: Events) {
	//alert();
	this.currentLang = this.translate.currentLang;
	 events.subscribe('language:updated', _badgeValue => {
				  this.currentLang = _badgeValue;
				 // alert(_badgeValue);
			  
			});
		this.translate.get('popup').subscribe(
		  value => {
			this.popupMessages=value;
		  })
    this.Recipes = {}
   
    this.edit_recipe_data = this.navParams.get('edit_recipe_data');
    this.recipeType = this.navParams.get('type');
   // console.log(this.edit_recipe_data);
	this.insidecategory=this.navParams.get('insidecategory');
    if(this.insidecategory){
      this.Recipes.categories=this.insidecategory;
    }else{

    }
	
	if(localStorage['language']=='heb'){
    this.lang = 'heb';		
	}else{
		this.lang='eng';
	}
    console.log("edit_recipe_data" + JSON.stringify(this.edit_recipe_data));
    
    this.Recipes.ingredients = []
    this.Recipes.instructions = []
    this.Recipes.recipeImages;
    this.Recipes.email = localStorage['email']
    this.Recipes.userName = localStorage['username']
    this.Recipes.user_id = localStorage['user_id']
    if (this.edit_recipe_data) {
	  //alert(this.edit_recipe_data.duration); 
      this.Recipes.mainImage = this.edit_recipe_data.mainImage;
      this.pic = this.edit_recipe_data.mainImage;
      this.Recipes.recipeTitle = this.edit_recipe_data.recipeTitle;
      this.Recipes.description = this.edit_recipe_data.description;
      this.Recipes.level = this.edit_recipe_data.level;
      if(this.edit_recipe_data.duration){
	  this.Recipes.duration =  this.edit_recipe_data.duration.split(":")[0]+":"+this.edit_recipe_data.duration.split(":")[1];
	  }
	 // this.Recipes.duration=new Date(2018, 11, 12, 06,31,00);
	 // alert(this.Recipes.duration);
      this.Recipes.mealType = this.edit_recipe_data.mealType;
      this.Recipes.categories = this.edit_recipe_data.categories;
      this.ingredients_data = this.edit_recipe_data.ingredients;
      this.Recipes.ingredients = this.edit_recipe_data.ingredients;
      this.Recipes.instructions = this.edit_recipe_data.instructions;
      this.instructions_data = this.edit_recipe_data.instructions;
      this.recipeImages = this.edit_recipe_data.recipeImages;
      this.editrecipe_id = this.edit_recipe_data._id;
    } else {
      this.pic = 'assets/imgs/add-profiler.png';
	  this.Recipes.level = "Easy";
		this.Recipes.duration = "00:00";
     this.Recipes.mainImage = 'assets/imgs/add-profiler.png';		
	  	if(localStorage['language']=='heb'){
         this.pic = 'assets/imgs/add-profiler-heb.png';	
			 
	   }
   
	}
    let nameReg = /^[a-zA-Z0-9_ ]*$/;
    this.loginform = formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.minLength(1), Validators.pattern(''), Validators.required])],
      level: ['', Validators.compose([Validators.minLength(1), Validators.pattern(''), Validators.required])],
      time: ['', Validators.compose([Validators.minLength(1), Validators.pattern(''), Validators.required])],
      meal: ['', Validators.compose([Validators.minLength(1), Validators.pattern(''), Validators.required])],
      category: ['', Validators.compose([Validators.minLength(1), Validators.pattern(''), Validators.required])],
      ing: ['', Validators.compose([])],
      ins: ['', Validators.compose([])],
    });
	
	if(this.recipeType=='photo'){
		 this.loginform = formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.minLength(1), Validators.pattern(''), Validators.required])],
      level: ['', Validators.compose([])],
      time: ['', Validators.compose([])],
      meal: ['',Validators.compose([])],
      category: ['', Validators.compose([])],
      ing: ['', Validators.compose([])],
      ins: ['', Validators.compose([])],
    });
	}
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRecipesPage');
  }
  ngOnInit() {
    this.securityProvider.category()
      .subscribe(data => {
        console.log("data" + JSON.stringify(data));
        var a = data;
        this.category_name = a.data;

      }),
      error => {}
	  if(this.navParams.get('edit_recipe_data')){
	  this.edit_recipe_data=this.navParams.get('edit_recipe_data');
	  if(this.edit_recipe_data.duration){
	   this.Recipes.duration =  this.edit_recipe_data.duration.split(":")[0]+":"+this.edit_recipe_data.duration.split(":")[1];
	  }
	  }else{
	   this.Recipes.duration="00:00:00";
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
          text:  this.popupMessages.use_camera,
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
      allowEdit:true
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
      title: this.popupMessages.Select_Image_Source,
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
        this.imagetext=this.popupMessages.add_more_images;
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


  EdituploadMultiimage() {
    var recipe_id = this.recipe_id;
    var multiImage = this.multiImage;
    for (var i = 0; i < multiImage.length; i++) {
      var recipeImage = this.multiImage[i];
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
    this.EditRepeatfun()
  }
  EditRepeatfun() {
       let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.EditRecipes(this.Recipes, this.editrecipe_id))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          var b = a.data;

          if (a.success == true) {
            var mesaage1 = this.popupMessages.recipe_updated;
            this.navCtrl.push('ViewRecipesPage', {
              recipe_data: b
            });
           /*  let alert = this.alertCtrl.create({
              subTitle: mesaage1,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */
			
			let toast1 = this.toastCtrl.create({
				message: mesaage1,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
          } else {
            let toast1 = this.toastCtrl.create({
				message: "Something went wrong",
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
          let toast1 = this.toastCtrl.create({
				message: JSON.stringify(error),
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
         // alert.present();
        })
      );
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
      /*   let alert = this.alertCtrl.create({
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


  updateupload() {
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
      }, (err) => {})
  }


  onSave() {
    let mandatoryfields: string[] = [];
    if (this.Recipes.mainImage == 'assets/imgs/add-profiler.png' || this.Recipes.mainImage == 'assets/imgs/add-profiler-heb.png') {
	  if(this.translate.currentLang=='heb'){
		  mandatoryfields.push('תמונה') 
	  }else{
		 mandatoryfields.push('upload main image')  
	  }
    }
    if (!this.instructions_data || this.instructions_data == '') {
       if(this.translate.currentLang=='heb'){
		  mandatoryfields.push('הוראות') 
	  }else{
		 mandatoryfields.push('instructions')  
	  }
    }
    if (!this.ingredients_data || this.ingredients_data == '') {
         if(this.translate.currentLang=='heb'){
		  mandatoryfields.push('רכיבים') 
	     }else{
		 mandatoryfields.push('ingredients')  
	    }
	}
    if ((mandatoryfields.length > 0) && this.recipeType!="photo") {
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
    } else {
      if (!this.edit_recipe_data) {
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
                var mesaage = this.popupMessages.recipe_saved
                if (this.video) {
                  this.upload(mesaage)
                } else {
                /*   let alert = this.alertCtrl.create({
                    subTitle: mesaage,
                    buttons: [this.popupMessages.ok]
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
                  this.navCtrl.setRoot('MyRecipesPage');

                }
                if (this.multiImage) {
                  this.uploadMultiimage()
                }


              } else {
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
      } else {
        let loading = this.loadingCtrl.create({
          content: this.popupMessages.Please_wait
        });
        Observable.fromPromise(loading.present())
          .flatMap(data => this.securityProvider.EditRecipes(this.Recipes, this.editrecipe_id))
          .subscribe(data =>
            loading.dismiss().then(() => {
              var a = data;
              var b = a.data;

              if (a.success == true) {
                var mesaage1 = this.popupMessages.recipe_updated
                if (this.multiImage) {
                  this.EdituploadMultiimage()
                } else {

                 /*  this.navCtrl.push('ViewRecipesPage', {
                    recipe_data: b
                  }); */
                 /*  let alert = this.alertCtrl.create({
                    subTitle: mesaage1,
                    buttons: [this.popupMessages.ok]
                  });
                  alert.present(); */
				  	  let toast1 = this.toastCtrl.create({
				message: mesaage1,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
                }
                if (this.video) {
                  this.updateupload();
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
    //const index = this.navCtrl.getActive().index+1;
	this.navCtrl.setRoot('MyRecipesPage');
  
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

