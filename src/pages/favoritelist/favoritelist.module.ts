import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritelistPage } from './favoritelist';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FavoritelistPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritelistPage),
		 HttpClientModule,
	TranslateModule.forChild({})
  ],
})
export class FavoritelistPageModule {}
