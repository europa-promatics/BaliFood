import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateWhatToBringPage } from './create-what-to-bring';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreateWhatToBringPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateWhatToBringPage),
	TranslateModule.forChild({})
  ],
})
export class CreateWhatToBringPageModule {}
