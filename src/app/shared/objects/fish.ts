import { OptimalWater } from './optimal-water';
import { Living } from './living';

export class Fish implements Living {
  
    constructor(public scientificName: string, public name: string, public optimalWater: OptimalWater, public minimumTankSize: number, public size: number, public englishName: string) {}
    
    static fromJson(json: any): Fish {
        const op = json.optimalWater;
        const optimalWater = new OptimalWater(op.minPH, op.maxPH, op.minDH, op.maxDH, op.minTemp, op.maxTemp);
        return new Fish(json.scientificName, json.name, optimalWater, json.minimumTankSize, json.size, json.englishName);
    }

    toString() : string {
        return `${this.scientificName}: (${this.size} cm, ${this.optimalWater.toString()}, ${this.minimumTankSize} l)`
    }
}
