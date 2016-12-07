import { Component, Input } from '@angular/core';
import { BasketService, Fish, Living, Mollusca } from '../shared/index';

@Component({
    selector: 'choose-item',
    templateUrl:   'app/choose/choose-item.html',
    styleUrls: ['app/choose/choose-item.css']
})
export class ChooseItemComponent {
    
    @Input() item : Living;
    
    constructor(private basketService : BasketService) {}
    
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
