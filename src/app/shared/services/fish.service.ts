import { Injectable } from 'angular2/core';
import { Fish, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FishService {
  
    fish : Observable<Fish[]> = new BehaviorSubject<Fish[]>();
    
    getFish() : Observable<Fish[]> {
        this.fish.next(this.fishArray);
        return this.fish;
    }
    
    private fishArray : Fish[] = [
        new Fish('Pangio kuhlii', 'Piikkisilmä', new OptimalWater(5, 7.5, 0, 11.9, 24, 28), 63),
        new Fish('Crossocheilus langei', 'Leväbarbi', new OptimalWater(6.5, 8, 5, 14.9, 24, 26), 325),
        new Fish('Chromobotia macracanthus', 'Tiikerinuoliainen', new OptimalWater(5.5, 7, 0, 14.9, 24, 29), 720),
        new Fish('Pterophyllum scalare Callus', 'Lehtikala', new OptimalWater(6, 7.5, 0, 14.9, 24, 30), 325),
        new Fish('Paracheidoron innesi', 'Neontetra', new OptimalWater(5.5, 7, 0, 9.9, 22, 27), 63),
        new Fish('Hemigrammus erythrozonus', 'Rubiinitetra', new OptimalWater(5.5, 7, 0, 11.9, 22, 28), 63),
        new Fish('Corydoras aeneus', 'Kuparimonninen', new OptimalWater(6, 7.5, 0, 14.9, 22, 28), 84),
        new Fish('Ancistrus cirrhosus', 'Täpläpartamonni', new OptimalWater(5.8, 7.8, 0, 14.9, 23, 27), 128),
        new Fish('Trichopodus leerii', 'Helmirihmakala', new OptimalWater(6, 7.5, 0, 9.9, 24, 28), 200),
        new Fish('Trichopodus leerii', 'Helmirihmakala', new OptimalWater(6, 7.5, 0, 14.9, 23, 28), 160),
    ];
}
