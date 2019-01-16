import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatenewmenuitemsformPage } from './createnewmenuitemsform';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreatenewmenuitemsformPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(CreatenewmenuitemsformPage),
	TranslateModule.forChild({})
  ],
  providers:[SecurityProvider]
})
export class CreatenewmenuitemsformPageModule {}
