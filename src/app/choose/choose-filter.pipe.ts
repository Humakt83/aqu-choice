import { Pipe } from 'angular2/core';
import { Living, Plant, Fish } from '../shared/index';

@Pipe({ 
    name: 'chooseFilter'
})
export class ChooseFilterPipe {
    
    transform(objects: Living[], query: string, scientific: boolean, size: number) {
        let filtered : Living[] = this.filterByName(objects, query, scientific);
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
}