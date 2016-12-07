import { Injectable } from '@angular/core';
import { Living, ChoiceService, BasketItem, Fish } from '../index';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BasketService {
    
    basket: BehaviorSubject<BasketItem[]> = new BehaviorSubject<BasketItem[]>([]);
    
    tankSize: number = 1000;
    
    constructor(private choiceService: ChoiceService) {}
	
    private basketItems: BasketItem[] = [];
    
    addToBasket(obj: Living, amount: number = 1) {
        let existingItem = this.basketItems.filter(item => item.item === obj)[0];
        if (existingItem) {
            existingItem.amount += amount;
        } else {
            this.basketItems.push(new BasketItem(1 + this.basketItems.length, obj, amount));
        } 
        this.basket.next(this.basketItems);
	}
    
    removeFromBasket(obj: BasketItem) {
        this.basketItems = this.basketItems.filter((item) => item !== obj);
        this.basket.next(this.basketItems);
    }
    
    isIncompatibleWithBasket(obj: Living) {
        let tankIsTooSmall : boolean = obj instanceof Fish ? !this.choiceService.isTankLargeEnoughForFish(this.tankSize, obj): false;
        return tankIsTooSmall || this.choiceService.isWaterIncompatibleWithOthers(obj.optimalWater, this.basketItems.map(item => item.item.optimalWater));
    }
}
