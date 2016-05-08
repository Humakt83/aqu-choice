import { Injectable } from 'angular2/core';
import { Plant, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlantService {
    
    plants : Observable<Plant[]> = new BehaviorSubject<Plant[]>();
    
    getPlants() : Observable<Plant[]> {
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
