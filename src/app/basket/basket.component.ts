import { Component, OnInit } from 'angular2/core';
import { BasketItemComponent } from './basket-item.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { BasketService, BasketItem, Plant } from '../shared/index';

const AQUSCAPE_URL = 'http://localhost:5555?'

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

    doesBasketContainPlants() : boolean {
        return this.items.filter(item => item.item instanceof Plant).length > 0;
    }

    aquScapeUrl() {
        const params = this.items.filter(item => item.item instanceof Plant).map(plant => 'plants=' + (<Plant>plant.item).identificationNumber).reduce((arg1, arg2) => arg1 + "&" + arg2);
        return AQUSCAPE_URL + params;
    }
    
}
