import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController, IonicPage ,LoadingController, AlertController, ActionSheetController, ToastController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { SecurityProvider } from '../../providers/security/security';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {
    DomSanitizer
} from "@angular/platform-browser";
import { ModalController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { TranslateService } from "@ngx-translate/core";
import { Events } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  main
  recipedata:any;
  dataOffset
  recipedata2
  rCats
  add_rec
  count=0
  u_id
  comment_value
  mySavedRecipe
  paginate
  Recipes;
  shownGroup = null;
  camera_pop: boolean
  ppic
  edit_id
  b=[]
  cardImage
  Notification
  checkmark:boolean
  editcomment
  popupMessages
  thumbnail_image='assets/imgs/add-new-recipe.png'
  constructor(public modalCtrl: ModalController,private streamingMedia: StreamingMedia,private domSanitizer: DomSanitizer,public loadingCtrl: LoadingController, public alertCtrl: AlertController, private camera: Camera, private socialSharing: SocialSharing, public securityProvider: SecurityProvider, public navCtrl: NavController,  public translate: TranslateService, public actionSheetCtrl:ActionSheetController, public toastCtrl: ToastController, public events:Events) {
  //alert(this.translate.currentLang);
  
  this.translate.get('popup').subscribe(
  value => {
	  this.recipedata=[];
	// value is our translated string
	this.popupMessages=value;
  })
    this.main = {}
    this.add_rec = {}
    this.u_id = localStorage['user_id'];
    this.Recipes = {};
    this.camera_pop = false;
    this.checkmark=false;
	this.dataOffset=0;
	this.paginate="showPaginate";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
	//  this.getRecipeData(0)
    //this.getfav_sav_Status()
	 var a=localStorage['user_id'];
		    this.securityProvider.GetNotification(a)
		  .subscribe(data => {
			var a=data;
			this.Notification=a.notifications.reverse();
			this.count=this.Notification.filter(d=>d.seenStatus==0).length;
			this.events.publish('cart:updated', this.count);
		  }),
		  error => {}
	
  }

  
  ionViewDidEnter(){
	
	
  //console.log();
  }
  
getSafeUrl(url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
	onDivClick(showComments) {
		if(!showComments.show){
			showComments.show=true;
		}else{
			showComments.show=false;
		}
    }
    /////////////straming media/////////
    playvideo1(url){
      let options: StreamingVideoOptions = {
  successCallback: () => { console.log('Video played') },
  errorCallback: (e) => { console.log('Error streaming') },
};

this.streamingMedia.playVideo(url, options);
    }

  ngOnInit() {
	  //alert('Here');
	//  alert(localStorage["private"]);
    this.getRecipeData(0)
    this.getfav_sav_Status()
	//this.navCtrl.parent.select(0);
	//alert(JSON.stringify(this.recipedata));
	//this.getRecipeCategories();
   
  }
  
  toggleGroup(group) {
		if (this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
	};
	isGroupShown(group) {
		return this.shownGroup === group;
	};
	  

  getRecipeData(offset) {
//alert(localStorage["private"]);
	    let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    this.securityProvider.MainRecipe(offset)
      .subscribe(data => {
		 // alert(localStorage['private']);
		  if(localStorage["private"]=="0"){
			  //alert(JSON.stringify(data.Recipes));
			  if(data.Recipes){
				// alert(JSON.stringify(data.Recipes))
		this.recipedata.push(data.Recipes);
			  }
		  }else{
			  if(data.recipesData){
			 this.recipedata.push(data.recipesData);
			  }else{
				  this.recipedata=[];
			  }
		  }
		  loading.dismiss().then(() => {
           this.recipedata2 = data.Recipes;
           this.recipedata = data.Recipes;
		
        })
       
       // console.log('recipedata' + JSON.stringify(this.recipedata2))
//console.log(JSON.stringify(this.recipedata))
      }),
      error => {}
  }
  
    getRecipeDataPaginated(offset, infScroll) {
    this.securityProvider.MainRecipe(offset)
      .subscribe(data => {
		  if(localStorage["private"]==0){
		this.recipedata = this.recipedata.concat(data.Recipes);
       // this.recipedata = data.Recipes;
	    this.paginate="hidePaginate";
	      infScroll.complete();
		  }else{
			 this.recipedata = this.recipedata.concat(data.Recipes);
			 infScroll.complete();
			   this.paginate="hidePaginate";
		  }
		  if(data){
        this.recipedata2 = data.Recipes;
		  }
        
      }),
      error => {}
  }
  
   doInfinite(infiniteScroll) {
	   this.paginate="showPaginate";
    console.log('Begin async operation');
	this.dataOffset++;
      this.getRecipeDataPaginated(this.dataOffset, infiniteScroll);
      console.log('Async operation has ended');
   
  }

  getfav_sav_Status() {
    var a = localStorage['user_id']
    this.securityProvider.get_status(a)
      .subscribe(data => {
        var a = data.myRecipes;
        this.mySavedRecipe = data.myRecipes
        var b = this.recipedata
        var c = []

       // console.log('get_status' + JSON.stringify(a))
      }),
      error => {}
  }

  getStatusFOrdisabled(id) {
    let data = this.mySavedRecipe.filter(arg => arg.recipe_id == id)
    if (data.length > 0) {
      return true
    } else {
      return false
    }
  }

getCommentCount(comment){
	return comment.length;
}

  getCommentSeen(user_id){
if(localStorage['user_id']==user_id){
  return true
}
else{
  return false
}
  }

  getItems(ev: any) {
    var val = ev.target.value;

    if (val && val.trim() != '') {

      this.recipedata = this.recipedata.filter((p) => { 
        if (p.recipeTitle) {
          return (p.recipeTitle.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      })
    } else {
      this.recipedata = this.recipedata2;
    }
  }



  onLike(recipe_id) {
    var a = {
      recipe_id: recipe_id,
      user_id: localStorage['user_id']
    }
    let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.Likes(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
          this.ngOnInit()
        }),
        error =>
        loading.dismiss().then(() => {})
      );
  }
  onViewDetail(recipe_id, recipe_data) {
    this.navCtrl.push('ViewRecipesPage', {
      recipe_data: recipe_data
    });
    console.log("recipe_data" + JSON.stringify(recipe_data));
    var a = {
      recipe_id: recipe_id,
      user_id: localStorage['user_id']
    }

    this.securityProvider.View_detail(a)
      .subscribe(data => {
        console.log('View_data' + JSON.stringify(data));
        this.ngOnInit();

      }),
      error => {}
  }

  share(recipeTitle, img) {
	 // alert(img);
  let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });

  loading.present();
    var message = 'Check out this post ('+recipeTitle+') on Balifood.';
    var subject = recipeTitle;
    var file = img;
      var url='https://www.dropbox.com/s/796mk502mbpee64/android-debug.apk?dl=0';

    this.socialSharing.share(message, file, url).then((data) => {
  loading.dismiss();
     }).catch((error) => {
      loading.dismiss();
     }); 
  }

  addmyRecipe(recipe_id, userName) {
    this.add_rec.recipe_id = recipe_id
    this.add_rec.user_id = localStorage['user_id']
     let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.AddtoMyRecipe(this.add_rec))
      .subscribe(data =>
        loading.dismiss().then(() => {
          this.ngOnInit();
          var a = data;
          if (a.message == "Data Saved") {
           /* let alert = this.alertCtrl.create({
              subTitle: this.popupMessages.recipe_saved,
              buttons: [this.popupMessages.ok]
            });
            alert.present();*/
			 let toast1 = this.toastCtrl.create({
				message: this.popupMessages.recipe_saved,
				duration: 3000,
				position: 'top'
		  })
		  toast1.onDidDismiss(() => {
			console.log('over')
		  })
		  toast1.present();
          } else {
          /*   let alert = this.alertCtrl.create({
              subTitle: this.popupMessages.Recipe_deleted,
              buttons: [this.popupMessages.ok]
            });
            alert.present(); */
			 let toast1 = this.toastCtrl.create({
				message: this.popupMessages.Recipe_deleted,
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

  }


  addcomment(recipe_id, comment, allcomments) {
	  //alert(recipe_id+' '+comment);
    var a = {
      recipe_id: recipe_id,
      user_id: localStorage['user_id'],
      comment: comment,
      userName: localStorage['username']
    }
	allcomments.comments.unshift(a);
	allcomments.comment_value=null;
	allcomments.show=true;
    this.securityProvider.Addcomment(a)
      .subscribe(data => {
		//allcomments.comments=data;
        console.log("data" + JSON.stringify(data));
        this.comment_value = '';
        this.ngOnInit();
		
      }),
      error => {}
  }
  creatRecipeCameraold() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit:false
    }).then((imageData) => {
      let base64Image = imageData;
       this.ppic = 'data:image/jpeg;base64,' + imageData;
      var cameraImage = base64Image;
      this.Recipes.recipeImages = base64Image;
       let modal = this.modalCtrl.create('CreatRecipeCameraPage',{ppic:this.ppic,orgPic:imageData});
    modal.present();
      console.log(cameraImage);
    }, (err) => {
       this.camera_pop = false;
      console.log('camera not working');
    })

  }  
  
  creatRecipeCamera() {
     let actionSheet = this.actionSheetCtrl.create({
      title: this.popupMessages.Select_Image_Source,
      buttons: [{ 
          text: this.popupMessages.Load_from_Library,
          handler: () => {
            this.fromgallery();
            //this.pop_div=false;
          }
        },
        {
          text: this.popupMessages.use_camera,
          handler: () => {
            this.fromcamera();
            // this.pop_div=false;
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
  
  fromcamera(){
	   this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
	  correctOrientation:false,
      allowEdit:false
    }).then((imageData) => {
      let base64Image = imageData;
       this.ppic = 'data:image/jpeg;base64,' + imageData;
      var cameraImage = base64Image;
      this.Recipes.recipeImages = base64Image;
       let modal = this.modalCtrl.create('CreatRecipeCameraPage',{ppic:this.ppic,orgPic:imageData});
    modal.present();
      console.log(cameraImage);
    }, (err) => {
       this.camera_pop = false;
      console.log('camera not working');
    }) 
  }
  
  fromgallery(){
	      this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit:false
    }).then((imageData) => {
        let base64Image = imageData;
       this.ppic = 'data:image/jpeg;base64,' + imageData;
      var cameraImage = base64Image;
      this.Recipes.recipeImages = base64Image;
       let modal = this.modalCtrl.create('CreatRecipeCameraPage',{ppic:this.ppic,orgPic:imageData});
    modal.present();
      console.log(cameraImage);
    }, (err) => {
      console.log('gallery not working');
    })
  }
  
  nextFun(ppic,orgPic){
 let modal = this.modalCtrl.create('CreatRecipeCameraPage',{ppic:ppic,orgPic:orgPic});
    modal.present();
    }
  onPostRecipe() {
    this.navCtrl.push('MyRecipesPage', {
      post: 'post_data'
    });
  }

  onCamerapostRecipe() {
    var a = {
      email: localStorage['email'],
      userName: localStorage['username'],
      user_id: localStorage['user_id'],
      mainImage: this.Recipes.recipeImages
    }


     let loading = this.loadingCtrl.create({
        content: this.popupMessages.Please_wait
      });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.addRecipes(a))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a = data;
          if (a.success == true) {
           /*  let alert = this.alertCtrl.create({
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
            this.ngOnInit();
            this.camera_pop = false;
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
        loading.dismiss().then(() => {})
      );
  }
  onCameraPostCancel() {
    this.camera_pop = false;
  }

  onAttachedRecipe() {
    var a = "camera_post"
    this.camera_pop = false;
    this.navCtrl.setRoot('MyRecipesPage', {
      camera_post: this.Recipes.recipeImages
    })			
  }


  

  onEditComment(comment_id,recipe_id,edit_comment){
this.edit_id=comment_id;
      var a = {
      recipe_id:recipe_id,
    commentId:comment_id,
    comment:edit_comment
    }
    this.securityProvider.EditComment(a)
      .subscribe(data => {
        console.log("data" + JSON.stringify(data));
        this.editcomment=45745
         this.ngOnInit();
         this.checkmark=false;
   
      }),
      error => {}
  }
  
  
    onDeleteComment(comment_id,recipe_id){
    var a = {
      recipe_id:recipe_id,
    commentId:comment_id
    }
    this.securityProvider.DeleteComment(a)
      .subscribe(data => {
        console.log("data" + JSON.stringify(data));
        var a=data;
        if(a.success==true || a.success=="true"){
        this.ngOnInit();
        }
      }),
      error => {}
  }
  

   edit_comment(user_id,comment_id){
     this.editcomment=comment_id;
    if(user_id==localStorage['user_id']){
       this.checkmark=true
    }
  
 }
doRefresh(refresher) {
    this.ngOnInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 5000);
  }


}

