import { Injectable } from '@angular/core';
import { Fish } from '../objects/fish';

const STORAGE_FISH = 'aqu.fish';

@Injectable()
export class StorageService {

    addFishToStorage(fish: Fish) {
        let storedFish = this.getStoredFish();
        storedFish.push(fish);
        localStorage[STORAGE_FISH] = storedFish;
    }

    getStoredFish() : Fish[] {
        let stored = localStorage[STORAGE_FISH];
        return !stored ? [] : stored;
    }

}
