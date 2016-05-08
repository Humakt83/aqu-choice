import { Injectable } from 'angular2/core';
import { Plant, ChoiceService, BasketItem } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BasketService {
    
    basket: Observable<any[]> = new BehaviorSubject<any[]>();
    
    constructor(private choiceService: ChoiceService) {}
	
    private basketItems: BasketItem[] = [];
    
    addToBasket(obj: any) {        
        this.basketItems.push(new BasketItem(1 + this.basketItems.length, obj));
        this.basket.next(this.basketItems);
	}
    
    removeFromBasket(obj: any) {
        this.basketItems = this.basketItems.filter((item) => item !== obj);
        this.basket.next(this.basketItems);
    }
    
    isIncompatibleWithBasket(obj: any) {
        return this.choiceService.isWaterIncompatibleWithOthers(obj.optimalWater, this.basketItems.map(item => item.item.optimalWater));
    }
}