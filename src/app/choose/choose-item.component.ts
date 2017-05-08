import { Component, Input } from '@angular/core';
import { BasketService, Fish, Living, Mollusca, translateName } from '../shared/index';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'choose-item',
    templateUrl:   'choose-item.html',
    styleUrls: ['choose-item.css']
})
export class ChooseItemComponent{
    
    @Input() item : Living;
    
    constructor(private basketService : BasketService, private translateService: TranslateService) {}

    getName() {
        return translateName(this.translateService, this.item);   
    }
    
    addToBasket(amount: number = 1) {
        this.basketService.addToBasket(this.item, amount);
    }
    
    isIncompatibleWithBasket() {
        return this.basketService.isIncompatibleWithBasket(this.item);
    }
    
    styleColor() {
        if (this.item instanceof Fish) return 'rgb(60, 15, 232)';
        if (this.item instanceof Mollusca) return 'rgb(200, 120, 120)';
        return 'rgb(93, 102, 64)';
    }
}
