// eslint-disable-next-line max-len
import {AppLocalizeBehavior} from '@polymer/app-localize-behavior/app-localize-behavior.js';
import {languages} from '../assets/i18n/languages.json';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';

// eslint-disable-next-line max-len
export default (superClass) => class extends mixinBehaviors([AppLocalizeBehavior], superClass) {
    constructor() {
        super();
        this.resources = languages;
        const currentLanguage = this.getBrowserLang();
        // eslint-disable-next-line max-len
        const lang = (currentLanguage != undefined && currentLanguage.match(/en|fr|zh/)) ? currentLanguage : 'en';
        this.language = lang;
    }

    // Get the language based on the browser
    getBrowserLang() {
        const browserLang = window.location.search.substring(1);
        const vars = browserLang.split('&');
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            if (pair[0] == 'lang') {
                return pair[1];
            }
        }
        return 'undefined';
    }
};
