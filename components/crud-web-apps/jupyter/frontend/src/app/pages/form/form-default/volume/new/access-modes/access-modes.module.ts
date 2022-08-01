import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeAccessModesComponent } from './access-modes.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [VolumeAccessModesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTooltipModule,
    TranslateModule.forRoot()
  ],
  exports: [VolumeAccessModesComponent],
})
export class VolumeAccessModesModule {}
