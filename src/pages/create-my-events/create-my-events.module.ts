import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateMyEventsPage } from './create-my-events';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreateMyEventsPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(CreateMyEventsPage),
	 HttpClientModule,
	TranslateModule.forChild({})
  ],
  providers:[SecurityProvider,Camera]
})
export class CreateMyEventsPageModule {}
