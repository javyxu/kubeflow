import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeMountComponent } from './mount.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [VolumeMountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule.forRoot()
  ],
  exports: [VolumeMountComponent],
})
export class VolumeMountModule {}
