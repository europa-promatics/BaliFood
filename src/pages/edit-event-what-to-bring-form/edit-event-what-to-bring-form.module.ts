import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEventWhatToBringFormPage } from './edit-event-what-to-bring-form';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EditEventWhatToBringFormPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(EditEventWhatToBringFormPage),
		TranslateModule.forChild({})
  ],
  providers:[SecurityProvider]
})
export class EditEventWhatToBringFormPageModule {}
