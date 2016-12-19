import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Fish implements Living {
  
    constructor(public scientificName: string, public name: string, public optimalWater: OptimalWater, public minimumTankSize: number, public size: number, public englishName: string) {}
    
    toString() : string {
        return `${this.scientificName}: (${this.size} cm, ${this.optimalWater.toString()}, ${this.minimumTankSize} l)`
    }
}
