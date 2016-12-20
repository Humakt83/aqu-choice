import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'aqu',
    templateUrl: 'app/main/main.html'
})
export class MainComponent {

    selectedLanguage = 'fi';

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('fi');
        this.setLanguageFromQueryParam();
    }

    toggleLanguage() {
        this.selectedLanguage === 'fi'? this.changeLanguage('en') : this.changeLanguage('fi');
        this.translate.use(this.selectedLanguage);
    }

    private changeLanguage(lang: string) {
        this.selectedLanguage = lang;
        this.setLanguageParam(lang);
    }

    private setLanguageFromQueryParam() {
        let url = window.location.href;
        if (url.includes('lang=')) {
            this.selectedLanguage = url.split('lang=')[1];
        } else {
            this.setLanguageParam(this.selectedLanguage);
        }
        this.translate.use(this.selectedLanguage);
    }

    private setLanguageParam(lang: string) {
        if (history.pushState) {
            let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + lang;
            window.history.pushState({path:newurl},'',newurl);
        }  
    }

}
