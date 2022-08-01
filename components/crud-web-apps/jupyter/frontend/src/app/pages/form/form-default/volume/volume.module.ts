import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExistingVolumeModule } from './existing/existing-volume.module';
import { VolumeMountModule } from './mount/mount.module';
import { NewVolumeModule } from './new/new.module';
import { MatButtonModule } from '@angular/material/button';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    ExistingVolumeModule,
    VolumeMountModule,
    NewVolumeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [ExistingVolumeModule, VolumeMountModule, NewVolumeModule],
})
export class VolumeModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../static/assets/i18n/", ".json");
}
