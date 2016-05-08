export class OptimalWater {
  
    constructor(public minPH : number, public maxPH: number, public minDH: number, public maxDH: number, public minTemp: number, public maxTemp: number) {}
    
    toString() {
        return `pH: ${this.minPH}-${this.maxPH}, dH: ${this.minDH}-${this.maxDH}, temp: ${this.minTemp}-${this.maxTemp}`;
    }
}
