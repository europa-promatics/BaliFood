var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImportRecipeUrlPage } from './import-recipe-url';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { SecurityProvider } from '../../providers/security/security';
import { ImagePicker } from '@ionic-native/image-picker';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
var ImportRecipeUrlPageModule = /** @class */ (function () {
    function ImportRecipeUrlPageModule() {
    }
    ImportRecipeUrlPageModule = __decorate([
        NgModule({
            declarations: [
                ImportRecipeUrlPage,
            ],
            imports: [HttpClientModule,
                IonicPageModule.forChild(ImportRecipeUrlPage),
            ],
            providers: [Camera, SecurityProvider, ImagePicker, FileTransfer, File]
        })
    ], ImportRecipeUrlPageModule);
    return ImportRecipeUrlPageModule;
}());
export { ImportRecipeUrlPageModule };
//# sourceMappingURL=import-recipe-url.module.js.map