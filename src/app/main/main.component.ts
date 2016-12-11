import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'aqu',
    templateUrl: 'app/main/main.html'
})
export class MainComponent {

    constructor(translate: TranslateService) {
        translate.setDefaultLang('fi');
        translate.use('fi');
    }
}
