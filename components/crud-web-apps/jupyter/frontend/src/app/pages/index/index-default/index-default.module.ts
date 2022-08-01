import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDefaultComponent } from './index-default.component';
import { KubeflowModule } from 'kubeflow';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [IndexDefaultComponent],
  imports: [
    CommonModule, 
    KubeflowModule,
    TranslateModule.forRoot()
  ],
  exports: [IndexDefaultComponent],
})
export class IndexDefaultModule {}