import { Injectable } from 'angular2/core';
import { Plant } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BasketItem } from '../index';

@Injectable()
export class BasketService {
    
    basket: Observable<any[]> = new BehaviorSubject<any[]>();
	
    private basketItems: BasketItem[] = [];
    
    addToBasket(obj: any) {        
        this.basketItems.push(new BasketItem(1 + this.basketItems.length, obj));
        this.basket.next(this.basketItems);
	}
    
    removeFromBasket(obj: any) {
        this.basketItems = this.basketItems.filter((item) => item !== obj);
        this.basket.next(this.basketItems);
    }
}
