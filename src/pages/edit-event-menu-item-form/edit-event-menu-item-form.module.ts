import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEventMenuItemFormPage } from './edit-event-menu-item-form';
import {HttpClientModule} from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EditEventMenuItemFormPage,
  ],
  imports: [HttpClientModule,
    IonicPageModule.forChild(EditEventMenuItemFormPage),
	TranslateModule.forChild({})
  ],
  providers:[SecurityProvider]
})
export class EditEventMenuItemFormPageModule {}
