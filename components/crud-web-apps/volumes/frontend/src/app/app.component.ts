import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService){
    const browserLang = window.location.search.substring(1);
    var currentLanguage = ""
    const vars = browserLang.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] == 'lang') {
          currentLanguage = pair[1];
        }
    }
    const lang = currentLanguage.match(/en|fr|zh/) ? currentLanguage : "en";
    translate.setDefaultLang(lang);
  }
}
