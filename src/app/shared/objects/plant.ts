import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Plant implements Living {
  
    constructor(public identificationNumber: number, public scientificName: string, public name: string, public optimalWater: OptimalWater, public englishName: string) {}
  
    static fromJson(json: any): Plant {
        const op = json.optimalWater;
        const optimalWater = new OptimalWater(op.minPH, op.maxPH, op.minDH, op.maxDH, op.minTemp, op.maxTemp);
        return new Plant(undefined, json.scientificName, json.name, optimalWater, json.englishName);
    }

    toString(): string {
        return `${this.scientificName}: (${this.optimalWater.toString()})`
    }
}
