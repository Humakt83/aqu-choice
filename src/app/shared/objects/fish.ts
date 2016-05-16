import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Fish implements Living {
  
    constructor(public scientificName: string, public name: string, public optimalWater: OptimalWater, public minimumTankSize: number) {}
    
    toString() : string {
        return `${this.scientificName}: (${this.optimalWater.toString()}, akvaarion koko: ${this.minimumTankSize} l)`
    }
}
