import { Injectable } from 'angular2/core';
import { Plant, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlantService {
  
    getPlants() : Observable<Plant[]> {
        return Observable.of([
            new Plant('Crinum calamistratum', 'Kiharakriinumi', new OptimalWater(5, 14, 5, 14, 5, 14)),
            new Plant('Ceratophyllum submersum', 'Hentokarvalehti', new OptimalWater(10, 20, 10, 20, 10, 20)),
            new Plant('Testatums aubmersum', 'Karvalehti', new OptimalWater(15, 25, 15, 25, 15, 25)),
            new Plant('Testatums aubmersum', 'Testilehti', new OptimalWater(21, 30, 21, 30, 21, 30))
        ]);
    }
}
