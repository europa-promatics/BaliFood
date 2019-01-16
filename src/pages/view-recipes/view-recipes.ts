import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,LoadingController, ToastController} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TabsPage } from '../tabs/tabs';
import { Events } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import {
    DomSanitizer
} from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@IonicPage()
@Component({
  selector: 'page-view-recipes',
  templateUrl: 'view-recipes.html'
})


export class ViewRecipesPage {
  recipe_data
  mainImage
  recipeTitle
  views
  likes
  mealType
  duration
  level
  description
  instructions
  popupMessages
  instructionss=[]
  ingredients
  ingredientss=[]
  categories
  email
  userName
  img;
  recipe_id;
  a
  imgb
  recipeImages
  post
  status
  cook:boolean
  index
  camera_post
  currentLang
  videoUrl
  catty=[]
  constructor(private streamingMedia: StreamingMedia,private domSanitizer: DomSanitizer,public loadingCtrl: LoadingController, private socialSharing: SocialSharing, public alertCtrl: AlertController, public securityProvider: SecurityProvider, public navCtrl: NavController, public navParams: NavParams,private translate: TranslateService, public events: Events, public toastCtrl: ToastController, private photoViewer: PhotoViewer) {
	
	  this.getRecipeCategories();
	   this.translate.get('popup').subscribe(
  value => {
	this.popupMessages=value;
  })
    this.cook=false;
    this.img = [{
        img: "./assets/imgs/korean.jpg"
      },
      {
        img: "./assets/imgs/images.jpg"
      },
      {
        img: "./assets/imgs/Bebek-and-Ayam-Betutu.jpg"
      },
      {
        img: "./assets/imgs/balifood1.jpg"
      },
      {
        img: "./assets/imgs/korean.jpg"
      }
    ]
    this.recipe_data = this.navParams.get('recipe_data');
    this.camera_post=this.navParams.get('camera_post')
    console.log("recipe_data"+JSON.stringify(this.recipe_data));
    this.post = this.navParams.get('post');
    if (this.recipe_data) {
      this.mainImage = this.recipe_data.mainImage;
      this.videoUrl=this.recipe_data.videoUrl;
      this.recipeTitle = this.recipe_data.recipeTitle;
      if( this.recipe_data.views){
        this.views = this.recipe_data.views.length;
      this.likes = this.recipe_data.likes.length;
      }
      this.mealType = this.recipe_data.mealType;
      this.duration = this.recipe_data.duration;
      this.level = this.recipe_data.level;
      this.description = this.recipe_data.description;
      this.ingredients = this.recipe_data.ingredients;
      this.instructions = this.recipe_data.instructions;
      this.categories = this.recipe_data.categories;
      this.email = this.recipe_data.email;
      this.recipe_id = this.recipe_data._id;
      this.status=this.recipe_data.status;
      this.recipeImages = this.recipe_data.recipeImages;
      if (localStorage['email'] != this.email) {
        this.userName = this.recipe_data.userName;
      }
      this.a = {}
      for (var i = 0; i < this.ingredients.length; i++) {
        this.ingredientss.push({ing:this.ingredients[i],checkStatus:false})
      };

       for (var i = 0; i < this.instructions.length; i++) {
        this.instructionss.push({ins:this.instructions[i],checkStatus:false})
      };

    }
	
	this.currentLang = this.translate.currentLang;
	 events.subscribe('language:updated', _badgeValue => {
				  this.currentLang = _badgeValue;
				 // alert(_badgeValue);
			  
			});
  }
      playvideo1(url){
      let options: StreamingVideoOptions = {
  successCallback: () => { console.log('Video played') },
  errorCallback: (e) => { console.log('Error streaming') },
};

this.streamingMedia.playVideo(url, options);
    }
  getSafeUrl(url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRecipesPage');

  }
  onImage(img) {
    this.mainImage = img;
  }
  onSave() {
    var a = {
      recipe_id: this.recipe_id,
      user_id: localStorage['user_id']
    }
    this.securityProvider.AddtoMyRecipe(a)
      .subscribe(data => {
        var a = data;
        if (a.message == "Data Saved") {
          let alert = this.alertCtrl.create({
            title: 'Recipe saved!',
            subTitle: 'This recipe is saved from ' + this.userName,
            buttons: ['OK']
          });
          alert.present();
        } else {
          let alert = this.alertCtrl.create({
            title:this.popupMessages.Recipe_deleted_save,
            buttons: [this.popupMessages.ok]
          });
          alert.present();
        }
        console.log("data" + JSON.stringify(data));
      }),
      error => {}
  }


  onLike() {
    var a = {
      recipe_id: this.recipe_id,
      user_id: localStorage['user_id']
    }

    this.securityProvider.Likes(a)
      .subscribe(data => {
        console.log('like_data' + JSON.stringify(data));
      }),
      error => {}
  }

  ondeleteRecipe(){
    let confirm = this.alertCtrl.create({
      title: this.popupMessages.tilte,
      message: this.popupMessages.delete_recipe_con,
      buttons: [
        {
          text: this.popupMessages.no,
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: this.popupMessages.yes,
          handler: () => {
            console.log('Agree clicked');
            this.deleteRecipe()
          }
        }
      ]
    });
    confirm.present();
   
  }
  deleteRecipe(){
	  
       var a=this.recipe_id
      this.securityProvider.deleteRecipe(a)
      .subscribe(data => {
        var a=data;
        console.log('delete_data' + JSON.stringify(data));
        if(a.success=='true' ||a.success==true){
          let alert = this.alertCtrl.create({
            subTitle: this.popupMessages.Recipe_deleted_successfully,
            buttons: [this.popupMessages.ok]
          });
          alert.present();
		 this.navCtrl.pop();
	     this.events.publish('recipe:deleted', this.recipe_data);
		
		
       // this.navCtrl.pop();
        }
          else{
          let alert = this.alertCtrl.create({
            subTitle: a.msg,
            buttons: [this.popupMessages.ok]
          });
          alert.present();
        }
      }),
      error => {}  
	 
	  
  }

  share() {
        let loading = this.loadingCtrl.create({
          content: this.popupMessages.Please_wait
        });

  loading.present();
    var message = 'Shared by baliFood App';
    var subject = this.recipeTitle;
    var file = this.mainImage;
    var url = "http://google.com";
    this.socialSharing.share(message, subject, file, url).then((data) => {
      loading.dismiss();

    }).catch((error) => {
      loading.dismiss();
    });
  }
  onPost() {
    var recipe_id = this.recipe_id;

    let loading = this.loadingCtrl.create({
      content: this.popupMessages.Please_wait
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.postRecipe(recipe_id))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true) {
          /*   let alert = this.alertCtrl.create({
              subTitle: this.popupMessages.Post_successfully,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */
			let toast1 = this.toastCtrl.create({
				message: this.popupMessages.Post_successfully,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
            this.navCtrl.setRoot(TabsPage, {index:0});
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

  onEditRecipe(){
	  if(this.instructionss.length==0){
    this.navCtrl.push('NewRecipesPage',{edit_recipe_data:this.recipe_data, type: 'photo'})
	  }else{
		   this.navCtrl.push('NewRecipesPage',{edit_recipe_data:this.recipe_data, type: 'regular'}) 
	  }
  }
  cookmode1(){
    this.cook=!this.cook;
  }
  cookmode(){
    this.cook=!this.cook;
  }
  onCookeding(index){
    if(this.cook){
      this.ingredientss[index].checkStatus=!this.ingredientss[index].checkStatus;
    }
  }
   onCookedins(index){
    if(this.cook){
       this.instructionss[index].checkStatus=!this.instructionss[index].checkStatus;
    }
  }
onattchedRecipe(){
	
   var recipe_id = this.recipe_id;
   var a={
     recipe_id: this.recipe_id,
     recipeImage:this.camera_post
   }

    let loading = this.loadingCtrl.create({
      content: this.popupMessages.Please_wait
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.attachedRecipe(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
    message: this.popupMessages.Doyouwant,
    buttons: [
      {
        text: this.popupMessages.cancel,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: this.popupMessages.yes,
        handler: () => {
          console.log('Buy clicked');
          this.Confirm_post(this.recipe_id)
        }
      }
    ]
  });
  alert.present();
          this.camera_post='';
          var a = data;
          if(a.data){
            var b=a.data;
            this.mainImage = b.mainImage
      this.recipeTitle = b.recipeTitle;
      if( b.views){
        this.views = b.views.length;
      this.likes = b.likes.length;
      }
      this.mealType = b.mealType;
      this.duration = b.duration;
      this.level = b.level;
      this.description = b.description;
      this.ingredients = b.ingredients;
      this.instructions = b.instructions;
      this.categories = b.categories;
      this.email = b.email;
      this.recipe_id = b._id;
      this.status=b.status;
      this.recipeImages = b.recipeImages;
      if (localStorage['email'] != this.email) {
        this.userName = b.userName;
      }
      this.a = {}
      for (var i = 0; i < this.ingredients.length; i++) {
        this.ingredientss.push({ing:this.ingredients[i],checkStatus:false})
      };

       for (var i = 0; i < this.instructions.length; i++) {
        this.instructionss.push({ins:this.instructions[i],checkStatus:false})
      };
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


Confirm_post(recipe_id) {
 var recipe_id = recipe_id;

    let loading = this.loadingCtrl.create({
      content: this.popupMessages.Please_wait
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.postRecipe(recipe_id))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true) {
          /*   let alert = this.alertCtrl.create({
              subTitle: this.popupMessages.Post_successfully1,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */
			let toast1 = this.toastCtrl.create({
				message: this.popupMessages.Post_successfully1,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
            this.navCtrl.push(TabsPage, {index:0});
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

 getRecipeCategories(){
	   var a = localStorage['user_id']
	   var cats=[];
    this.securityProvider.MyRecipe(a)
      .subscribe(data => {
		  data.recipes.forEach(function (eachObj) {
			    cats[eachObj.category] = eachObj.categoryHebrew;
		  });
      
      }),
    error => {}
	console.log('Hereee');
	console.log(cats);
	this.catty=cats;
	
 }
 showImage(url, title){
	   this.photoViewer.show(url, title, {share: true});
 }

 goback() {
    this.navCtrl.pop();
}
}

