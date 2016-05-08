import { Injectable } from 'angular2/core';
import { BasketService, Plant, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlantService {
    
    plants : Observable<Plant[]> = new BehaviorSubject<Plant[]>();
    
    constructor(private basketService : BasketService) {
        console.log(this.basketService);
    }
    
    getPlants() : Observable<Plant[]> {
        this.basketService.basket.subscribe(result => this.plants.next(this.plantsArray));
        this.plants.next(this.plantsArray);
        return this.plants;
    }
    
    private plantsArray : Plant[] = [
        new Plant('Crinum calamistratum', 'Kiharakriinumi', new OptimalWater(5, 14, 5, 14, 5, 14)),
        new Plant('Ceratophyllum submersum', 'Hentokarvalehti', new OptimalWater(10, 20, 10, 20, 10, 20)),
        new Plant('Testatums aubmersum', 'Karvalehti', new OptimalWater(15, 25, 15, 25, 15, 25)),
        new Plant('Testatums aubmersum', 'Testilehti', new OptimalWater(21, 30, 21, 30, 21, 30))
    ];
}
