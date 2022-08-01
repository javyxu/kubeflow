import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageClassComponent } from './storage-class.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [StorageClassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    TranslateModule.forRoot()
  ],
  exports: [StorageClassComponent],
})
export class StorageClassModule {}
