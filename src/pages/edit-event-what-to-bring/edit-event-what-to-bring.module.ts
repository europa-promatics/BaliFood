import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEventWhatToBringPage } from './edit-event-what-to-bring';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EditEventWhatToBringPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(EditEventWhatToBringPage),
		TranslateModule.forChild({})
  ],
  providers:[SecurityProvider]
})
export class EditEventWhatToBringPageModule {}
