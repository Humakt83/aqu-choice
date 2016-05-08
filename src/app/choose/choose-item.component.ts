import { Component, Input } from 'angular2/core';
import { BasketService, Fish } from '../shared/index';

@Component({
    selector: 'choose-item',
    template:   `<div class="choose-item" [attr.data-tip]="item.toString()" [class.choose-item-incompatible]="isIncompatibleWithBasket()" [style.background-color]="styleColor()">
                    {{item.name}}<span class="addToBasket" (click)="addToBasket()">+</span>
                </div>`,
    styleUrls: ['app/choose/choose-item.css']
})
export class ChooseItemComponent {
    
    @Input() item : any;
    
    constructor(private basketService : BasketService) {}
    
    addToBasket() {
        this.basketService.addToBasket(this.item);
    }
    
    isIncompatibleWithBasket() {
        return this.basketService.isIncompatibleWithBasket(this.item);
    }
    
    styleColor() {
        return this.item instanceof Fish ? 'rgb(140, 140, 140)' : 'rgb(0, 140, 0)';
    }
}
