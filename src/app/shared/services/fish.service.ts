import { Injectable } from 'angular2/core';
import { Fish, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FishService {
  
    fish : Observable<Plant[]> = new BehaviorSubject<Plant[]>();
    
    getFish() : Observable<Fish[]> {
        this.fish.next(this.fishArray);
        return this.fish;
    }
    
    private fishArray : Fish[] = [
        new Fish('Callus calamistratum', 'Piikkisilmä', new OptimalWater(5, 14, 5, 14, 5, 14)),
        new Fish('Callus submersum', 'Tiikerinuoliainen', new OptimalWater(10, 20, 10, 20, 10, 20)),
        new Fish('Testatums Callus', 'Lehtikala', new OptimalWater(15, 25, 15, 25, 15, 25)),
        new Fish('Testatums Iaa', 'Neontetra', new OptimalWater(21, 30, 21, 30, 21, 30))
    ];
}
