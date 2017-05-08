import { Component, Input } from '@angular/core';
import { BasketService, BasketItem, Fish, Mollusca, translateName } from '../shared/index';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'basket-item',
    templateUrl: 'basket-item.html',
    styleUrls: ['basket-item.css']
})
export class BasketItemComponent {
    
    @Input() item : BasketItem;
    
    constructor(private basketService : BasketService, private translateService: TranslateService) {}
    
    getName() {
        return translateName(this.translateService, this.item.item);
    }

    removeFromBasket(amount: number = 1) {
        this.basketService.removeFromBasket(this.item, amount);
    }
    
    isCompatibleWithOthersInBasket() {
        return !this.basketService.isIncompatibleWithBasket(this.item.item);
    }
    
    styleColor() {
        if (this.item.item instanceof Fish) return 'rgb(60, 15, 232)';
        if (this.item.item instanceof Mollusca) return 'rgb(200, 120, 120)';
        return 'rgb(93, 102, 64)';
    }
}
