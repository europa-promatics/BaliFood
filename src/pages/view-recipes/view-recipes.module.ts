import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewRecipesPage } from './view-recipes';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { TranslateModule } from '@ngx-translate/core';import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    ViewRecipesPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(ViewRecipesPage),
		TranslateModule.forChild({})
  ],
  providers:[SecurityProvider,SocialSharing,StreamingMedia,  PhotoViewer]
})
export class ViewRecipesPageModule {}
