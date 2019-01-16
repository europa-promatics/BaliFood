import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaverecipelistPage } from './saverecipelist';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SaverecipelistPage,
  ],
  imports: [
    IonicPageModule.forChild(SaverecipelistPage),
	 HttpClientModule,
	TranslateModule.forChild({})
  ],

})
export class SaverecipelistPageModule {}
