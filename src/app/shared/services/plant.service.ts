import { Injectable } from 'angular2/core';
import { Plant } from '../index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlantService {
  
    getPlants() : Observable<Plant[]> {
        return Observable.of([
            new Plant('Crinum calamistratum', 'Kiharakriinumi', null),
            new Plant('Ceratophyllum submersum', 'Hentokarvalehti', null),
        ]);
    }
}
