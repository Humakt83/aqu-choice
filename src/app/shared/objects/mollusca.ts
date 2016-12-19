import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Mollusca implements Living {
  
    constructor(public scientificName: string, public name: string, public optimalWater: OptimalWater, public minimumTankSize: number, public englishName: string) {}
    
    toString() : string {
        return `${this.scientificName}: (${this.optimalWater.toString()}, ${this.minimumTankSize} l)`
    }
}