import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Plant implements Living {

    public static fromJSON(plant: any): Plant {
        const water = new OptimalWater(plant.phMin, plant.phMax, plant.dhMin, plant.dhMax, plant.tempMin, plant.tempMax);
        return new Plant(plant.identificationNumber, plant.scientificName, plant.finnishName, water);
    }
  
    constructor(public identificationNumber: number, public scientificName: string, public name: string, public optimalWater: OptimalWater) {}
  
    toString(): string {
        return `${this.scientificName}: (${this.optimalWater.toString()})`
    }
}
