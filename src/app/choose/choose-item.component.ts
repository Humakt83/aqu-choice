import { Component, Input } from 'angular2/core';
import { BasketService } from '../shared/index';


@Component({
    selector: 'choose-item',
    template: `<div class="choose-item">{{item.name}}<span class="addToBasket" (click)="addToBasket()">+</span></div>`,
    styleUrls: ['app/choose/choose-item.css']
})
export class ChooseItemComponent {
    
    @Input() item : any;
    
    constructor(private basketService : BasketService) {}
    
    addToBasket() {
        this.basketService.addToBasket(this.item);
    }
}
