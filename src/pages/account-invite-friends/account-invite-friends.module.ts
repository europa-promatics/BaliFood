import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountInviteFriendsPage } from './account-invite-friends';
import { SMS } from '@ionic-native/sms';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AccountInviteFriendsPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(AccountInviteFriendsPage),
		TranslateModule.forChild({})
  ],
  providers:[SMS,SecurityProvider]
})
export class AccountInviteFriendsPageModule {}
