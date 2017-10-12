import { Injectable } from '@angular/core';
import { Fish } from '../objects/fish';
import { Plant } from '../objects/plant';
import { Mollusca } from '../objects/mollusca';
import { Living } from '../objects/living';
import { ReplaySubject } from 'rxjs';

const STORAGE_FISH = 'aqu.fish';
const STORAGE_PLANT = 'aqu.plant';
const STORAGE_MOLLUSCA = 'aqu.mollusca';

@Injectable()
export class StorageService {

    storedFish: ReplaySubject<Fish[]> = new ReplaySubject<Fish[]>();

    storedPlants: ReplaySubject<Plant[]> = new ReplaySubject<Plant[]>();

    storedMollusca: ReplaySubject<Mollusca[]> = new ReplaySubject<Mollusca[]>();

    constructor() {
        this.storedFish.next(<Fish[]>this.getStoredLiving(STORAGE_FISH, Fish.fromJson));
        this.storedPlants.next(<Plant[]>this.getStoredLiving(STORAGE_PLANT, Plant.fromJson));
        this.storedMollusca.next(<Mollusca[]>this.getStoredLiving(STORAGE_MOLLUSCA, Mollusca.fromJson));
    }

    addFishToStorage(fish: Fish) {
        const storedFish = <Fish[]> this.addLivingToStorage(fish, STORAGE_FISH, Fish.fromJson);
        this.storedFish.next(storedFish);
    }

    addPlantToStorage(plant: Plant) {
        const storedPlants = <Plant[]> this.addLivingToStorage(plant, STORAGE_PLANT, Plant.fromJson);
        this.storedPlants.next(storedPlants);
    }

    addMolluscaToStorage(mollusca: Mollusca) {
        const storedMollusca = <Mollusca[]> this.addLivingToStorage(mollusca, STORAGE_MOLLUSCA, Mollusca.fromJson);
        this.storedMollusca.next(storedMollusca);
    }

    private addLivingToStorage(living: Living, storageKey, conversion: (any) => Living): Living[] {
        let storedLiving = this.getStoredLiving(storageKey, conversion);
        storedLiving.push(living);
        localStorage[storageKey] = JSON.stringify(storedLiving);
        return storedLiving;
    }

    private getStoredLiving(storageKey: string, conversion: (any) => Living) : Living[] {
        let stored = localStorage[storageKey];
        return !stored ? [] : this.convertJsonToLiving(stored, conversion);
    }

    private convertJsonToLiving(json: string, conversion: (any) => Living) : Living[] {
        let living: any[] = JSON.parse(json);
        return living.map(livingJson => conversion(livingJson));
    }

}
