import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingPvcComponent } from './pvc.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ExistingPvcComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    TranslateModule.forRoot()
  ],
  exports: [ExistingPvcComponent],
})
export class ExistingPvcModule {}
