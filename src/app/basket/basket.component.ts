import { Component, OnInit } from 'angular2/core';
import { BasketItemComponent } from './basket-item.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { BasketService, BasketItem } from '../shared/index';

@Component({
    selector: 'basket',
    templateUrl: 'app/basket/basket.html',
    styleUrls: ['app/basket/basket.css'],
    directives: [BasketItemComponent, RecommendationComponent]
})
export class BasketComponent implements OnInit {
    
    items: BasketItem[] = [];
    
    constructor(private basketService: BasketService) {}
    
    ngOnInit() {        
        this.basketService.basket.subscribe(result => this.items = result);
    }
    
}
