import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateMutualEventPage } from './create-mutual-event';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreateMutualEventPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(CreateMutualEventPage),
	 HttpClientModule,
	TranslateModule.forChild({})
  ],
    providers:[SecurityProvider,Camera]
})
export class CreateMutualEventPageModule {}


