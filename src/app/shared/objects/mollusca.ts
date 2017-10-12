import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Mollusca implements Living {
  
    constructor(public scientificName: string, public name: string, public optimalWater: OptimalWater, public minimumTankSize: number, public englishName: string) {}

    static fromJson(json: any): Mollusca {
        const op = json.optimalWater;
        const optimalWater = new OptimalWater(op.minPH, op.maxPH, op.minDH, op.maxDH, op.minTemp, op.maxTemp);
        return new Mollusca(json.scientificName, json.name, optimalWater, json.minimumTankSize, json.englishName);
    }
    
    toString() : string {
        return `${this.scientificName}: (${this.optimalWater.toString()}, ${this.minimumTankSize} l)`
    }
}