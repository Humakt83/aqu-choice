import { Component, Input } from 'angular2/core';
import { BasketService, BasketItem, Fish, Mollusca } from '../shared/index';

@Component({
    selector: 'basket-item',
    template:   `<div class="basket-item" [attr.data-tip]="item.toString()" [class.basket-item-incompatible]="!isCompatibleWithOthersInBasket()" [style.background-color]="styleColor()">
                    {{item.item.name}}<span class="removeFromBasket" (click)="removeFromBasket()">-</span>
                </div>`,
    styleUrls: ['app/basket/basket-item.css']
})
export class BasketItemComponent {
    
    @Input() item : BasketItem;
    
    constructor(private basketService : BasketService) {}
    
    removeFromBasket() {
        this.basketService.removeFromBasket(this.item);
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
