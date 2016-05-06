import { Injectable } from 'angular2/core';
import { Plant } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BasketService {
    
    basket: Observable<any[]> = new BehaviorSubject<any[]>();
	
    private basketItems: any[] = [];
    
	addToBasket(obj: any) {
	   this.basketItems.push(obj);
       this.basket.next(this.basketItems);
	}
}
