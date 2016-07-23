import { Component, Input } from 'angular2/core';
import { BasketService, Fish, Living, Mollusca } from '../shared/index';

@Component({
    selector: 'choose-item',
    template:   `<div class="choose-item" [attr.data-tip]="item.toString()" [class.choose-item-incompatible]="isIncompatibleWithBasket()" [style.background-color]="styleColor()">
                    {{item.name}}<span class="addToBasket" (click)="addToBasket()">+</span>
                </div>`,
    styleUrls: ['app/choose/choose-item.css']
})
export class ChooseItemComponent {
    
    @Input() item : Living;
    
    constructor(private basketService : BasketService) {}
    
    addToBasket() {
        this.basketService.addToBasket(this.item);
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
