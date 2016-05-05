import { Pipe } from 'angular2/core';
import { Plant } from '../shared/index';

@Pipe({ 
    name: 'chooseFilter'
})
export class ChooseFilterPipe {
    
    transform(plants: Plant[], query: string) {
        if (!query) return plants;
        return plants.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase()));
    }
}