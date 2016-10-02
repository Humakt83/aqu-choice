import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Plant implements Living {
  
    constructor(public identificationNumber: number, public scientificName: string, public name: string, public optimalWater: OptimalWater) {}
  
    toString(): string {
        return `${this.scientificName}: (${this.optimalWater.toString()})`
    }
}
