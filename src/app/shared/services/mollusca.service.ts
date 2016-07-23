import { Injectable } from 'angular2/core';
import { Mollusca, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MolluscaService {
  
    mollusca : Observable<Mollusca[]> = new BehaviorSubject<Mollusca[]>([]);
    
    getMollusca() : Observable<Mollusca[]> {
        this.mollusca.next(this.molluscaArray);
        return this.mollusca;
    }
    
    private molluscaArray : Mollusca[] = [
        new Mollusca('Melanoides tuberculata', 'Kierteissarvikotilo', new OptimalWater(6, 8.5, 4, 19.9, 18, 30), 10),
        new Mollusca('Anentome helena', 'Petokotilo', new OptimalWater(6, 8.2, 4, 19.9, 20, 28), 45),
        new Mollusca('Caridina multidentata', 'Leväsukarapu', new OptimalWater(6, 8, 2, 20, 15, 28), 20)
    ];
}