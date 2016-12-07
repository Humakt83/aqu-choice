import { Component, Input } from '@angular/core';
import { BasketService, BasketItem, Fish, Mollusca } from '../shared/index';

@Component({
    selector: 'basket-item',
    templateUrl: 'app/basket/basket-item.html',
    styleUrls: ['app/basket/basket-item.css']
})
export class BasketItemComponent {
    
    @Input() item : BasketItem;
    
    constructor(private basketService : BasketService) {}
    
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
