import { Pipe } from 'angular2/core';
import { Living } from '../shared/index';

@Pipe({ 
    name: 'chooseFilter'
})
export class ChooseFilterPipe {
    
transform(living: Living[], query: string, scientific: boolean) {
        if (!query) return living;
        if (scientific) {
            return living.filter(living => living.scientificName.toLowerCase().includes(query.toLowerCase()));
        } else {
            return living.filter(living => living.name.toLowerCase().includes(query.toLowerCase()));
        }
    }
}