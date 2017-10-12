import { Injectable } from '@angular/core';
import { Mollusca, OptimalWater } from '../index';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class MolluscaService {
  
    mollusca : BehaviorSubject<Mollusca[]> = new BehaviorSubject<Mollusca[]>([]);

    constructor(private storageService: StorageService) {
        this.getMollusca();
    }
    
    private getMollusca() {
        this.storageService.storedMollusca.subscribe(
            result => this.mollusca.next(this.molluscaArray.concat(result))
        );
    }
    
    private molluscaArray : Mollusca[] = [
        new Mollusca('Melanoides tuberculata', 'Kierteissarvikotilo', new OptimalWater(6, 8.5, 4, 20, 18, 30), 10, 'Malaysian Trumpet Snail'),
        new Mollusca('Anentome helena', 'Petokotilo', new OptimalWater(6, 8.2, 4, 20, 20, 28), 45, 'Assassin Snail'),
        new Mollusca('Caridina multidentata', 'Leväsukarapu', new OptimalWater(6, 8, 2, 20, 15, 28), 20, 'Amano Shrimp'),
        new Mollusca('Neritina turrita', 'Tiikerileväkotilo', new OptimalWater(6.8, 8, 8, 20, 22, 26), 40, null),
        new Mollusca('Clithon diadema', 'Sarvileväkotilo', new OptimalWater(6, 7.5, 3, 20, 22, 28), 12, null)
    ];
}