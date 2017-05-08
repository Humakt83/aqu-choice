import { Component, OnInit } from '@angular/core';
import { BasketService, BasketItem, Plant } from '../shared/index';

const AQUSCAPE_URL = 'http://ukkosnetti.fi/aqu-scape/?'

@Component({
    selector: 'basket',
    templateUrl: 'basket.html',
    styleUrls: ['basket.css']
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
