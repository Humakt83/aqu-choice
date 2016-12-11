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
        translate.use(this.selectedLanguage);
    }

    toggleLanguage() {
        this.selectedLanguage = this.selectedLanguage === 'fi'? 'en' : 'fi';
        this.translate.use(this.selectedLanguage);
    }
}
