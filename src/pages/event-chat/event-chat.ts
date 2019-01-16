import { Component,ViewChild,ElementRef  } from '@angular/core';
import{Observable}from'rxjs/Rx';
import { IonicPage, NavController, NavParams,Content,ToastController,LoadingController, Config, Tabs } from 'ionic-angular';
import * as io from 'socket.io-client';
import { TranslateService } from '@ngx-translate/core';
import { SecurityProvider } from '../../providers/security/security';
import{NgZone}from'@angular/core';


/**
 * Generated class for the EventChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-chat',
  templateUrl: 'event-chat.html',
  providers:[]
})

export class EventChatPage {
  @ViewChild(Content) content: Content
   @ViewChild(Tabs, { read: ElementRef }) tabs: ElementRef
  chatinp
  zone
  chatclass
  socket
  tabBarElement
  me
  chats=[]
 tradeschat
  conversation_id
  flag
  name
  chathistory
  chathistorymessage
	eventData
	typing
	
	
	

  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController,public securityProvider:SecurityProvider, public navParams: NavParams, ngzone: NgZone,public toastCtrl: ToastController, private translate: TranslateService, public config:Config) {
	  
	  this.translate.use(localStorage['language']);
	    this.eventData=this.navParams.get('event');
		this.chatclass=this.navParams.get('classes');
		 this.zone = ngzone;
		 this.me=localStorage['user_id'];
		 		 this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  
    this.chatinp = '';
    
    this.socket = io.connect('http://18.218.43.56:5002');
    this.socket.on('connect_failed', (connect_failed) => {
/*       let toast1 = this.toastCtrl.create({
        message: 'Sorry, there seems to be an issue with the connection_failed!',
        duration: 3000,
        position: 'top'
      })
      toast1.onDidDismiss(() => {
        console.log('over')
      })
      toast1.present(); */
    })
	 this.socket.emit('room join', {
	  room_id:this.eventData._id,
	  sender_id:localStorage['user_id']});
	  
    this.socket.on('disconnect', (disconnect) => {
      /* let toast2 = this.toastCtrl.create({
        message: 'Sorry, there seems to be an issue with the disconnection!',
        duration: 3000,
        position: 'top'
      })
      toast2.onDidDismiss(() => {
        console.log('over')
      })
      toast2.present(); */
    })
    this.socket.on('error', (error) => {
     /*  let toast3 = this.toastCtrl.create({
        message: 'Something Went Wrong!',
        duration: 3000,
        position: 'top'
      })
      toast3.onDidDismiss(() => {
        console.log('here ' + error + 'ERror' + JSON.stringify(error))
      })
      toast3.present(); */
    })
    this.socket.on('connecting', (connecting) => {
     /*  let toast4 = this.toastCtrl.create({
        message: 'Connecting With the Server!',
        duration: 3000,
        position: 'top'
      })
      toast4.onDidDismiss(() => {
        console.log('over')
      })
      toast4.present(); */
    })
	
    this.socket.on('message', (msg) => {
	//	alert(this.chathistory.length + this.chats.length);
      this.zone.run(() => {
        setTimeout(() => {
			if((this.chathistory.length + this.chats.length) > 10){
          this.content.scrollToBottom(0)
			}
        }, 0)
	//	alert(msg)
        this.chats.push(msg);
		//alert(this.chathistory.length);
		//alert(this.chats.length);
       
      });
    }, (error) => {
      alert('uncheck' + JSON.stringify(error));
    });
  
		
	 this.socket.on('typeIn', (msg) => {
            this.zone.run(() => {
               this.typing=msg.sender_name+' is typing...';
            });
        }, (error) => {
            // alert('uncheck'+JSON.stringify(error));
        });
		
  this.socket.on('connect', (connect) => {
      /* let toast7 = this.toastCtrl.create({
        message: 'Connection Successful',
        duration: 3000,
        position: 'top'
      })
      toast7.onDidDismiss(() => {
        console.log('over')
      })
      toast7.present() */
    })
	
 
let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.securityProvider.EventChats(this.eventData._id))
      .subscribe(data =>
        loading.dismiss().then(() => {
          var a=data;
		 // alert(JSON.stringify(a));
          if (a.success==true) {
             this.chathistory=a.eventChat;
          }
         
        }),
        error =>
        loading.dismiss().then(() => {})
      );
       
	 // alert(JSON.stringify(this.eventData));
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventChatPage');
	this.config.set('tabsHideOnSubPages', true);
	  this.tabBarElement.addClass="demo";
	 // alert('her');'
	 // const tabbar = (this.tabs.nativeElement as HTMLElement).querySelector('.tabbar');
    //if ( tabbar ) {
    //  alert('yo');
  //  } 
  }
   closeModal() {
        this.navCtrl.pop();
    }
   	sendTypeIn(){
		this.socket.emit('typeIn', {
		  room_id:this.eventData._id,
		  sender_id:localStorage['user_id'],
		  send_name: localStorage['username']
		  });
	}
    send(msg) {
    if (msg != '') {
     
      this.socket.emit('message', {
        room_id: this.eventData._id,
        message: msg,
        sender_id: localStorage['user_id'],
		sender_name:localStorage['username']
      });
      //this.sendPush(localStorage['customer_sender_email'], localStorage['customer_reciever_email'], msg)
    }
    this.chatinp = '';
  }
  
  getLiClassName(item){
	  if(item){
     if(item.sender_id==this.me){
		 return "right";
	 }else{
		 return "left";
	 }
	  }
  }
	
	ionViewWillEnter() { 
    this.tabBarElement.style.display = 'none';
  }
 
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}
