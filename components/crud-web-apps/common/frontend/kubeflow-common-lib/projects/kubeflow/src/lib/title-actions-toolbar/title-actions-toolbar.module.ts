import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleActionsToolbarComponent } from './title-actions-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TitleActionsToolbarComponent],
  imports: [
    CommonModule, 
    MatIconModule, 
    MatDividerModule, 
    MatButtonModule,
    TranslateModule.forRoot()
  ],
  exports: [TitleActionsToolbarComponent],
})
export class TitleActionsToolbarModule {}
