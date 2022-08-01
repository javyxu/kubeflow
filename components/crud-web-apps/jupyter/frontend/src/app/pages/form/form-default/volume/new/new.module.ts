import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVolumeComponent } from './new.component';
import { VolumeNameModule } from './name/name.module';
import { StorageClassModule } from './storage-class/storage-class.module';
import { VolumeAccessModesModule } from './access-modes/access-modes.module';
import { VolumeSizeModule } from './size/size.module';
import { AceEditorModule } from 'ng2-ace-editor';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RokUrlModule } from './rok-url/rok-url.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NewVolumeComponent],
  imports: [
    CommonModule,
    VolumeNameModule,
    StorageClassModule,
    VolumeAccessModesModule,
    VolumeSizeModule,
    AceEditorModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RokUrlModule,
    TranslateModule.forRoot()
  ],
  exports: [NewVolumeComponent],
})
export class NewVolumeModule {}
