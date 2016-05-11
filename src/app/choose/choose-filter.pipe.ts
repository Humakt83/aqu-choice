import { Pipe } from 'angular2/core';
import { Living, Plant, Fish, OptimalWater } from '../shared/index';

@Pipe({ 
    name: 'chooseFilter'
})
export class ChooseFilterPipe {
    
    transform(objects: Living[], query: string, scientific: boolean, size: number, useCustomWater: boolean, customWater: OptimalWater) {
        let filtered : Living[] = this.filterByName(objects, query, scientific);
        if (useCustomWater) {
            filtered = this.filterByCustomWater(filtered, customWater);
        }
        return this.filterByTankSize(filtered, size);
    }
    
    private filterByName(objects: Living[], query: string, scientific: boolean) {
        if(scientific && query) {
            return objects.filter(living => living.scientificName.toLowerCase().includes(query.toLowerCase()));
        } else if(query) {
            return objects.filter(living => living.name.toLowerCase().includes(query.toLowerCase()));
        }
        return objects;
    }
    
    private filterByTankSize(objects: Living[], tankSize: number) {
        return objects.filter(living => living instanceof Plant || (<Fish>living).minimumTankSize <= tankSize);
    }
    
    private filterByCustomWater(objects: Living[], customWater: OptimalWater) {
        return objects.filter(living => {
            let optWater = living.optimalWater;
            let tempFits: boolean = customWater.minTemp >= optWater.minTemp && customWater.minTemp <= optWater.maxTemp;
            let dHFits: boolean = customWater.minDH >= optWater.minDH && customWater.minDH <= optWater.maxDH;
            let pHFits: boolean = customWater.minPH >= optWater.minPH && customWater.minPH <= optWater.maxPH;
            return tempFits && dHFits && pHFits;
        });
    }
    
}