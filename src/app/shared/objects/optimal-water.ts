export class OptimalWater {
  
    constructor(public minPH : number, public maxPH: number, public minDH: number, public maxDH: number, public minTemp: number, public maxTemp: number) {}
    
    consoleLog() {
        console.log('pH: %d-%d, dH: %d-%d, temp: %d-%d', this.minPH, this.maxPH, this.minDH, this.maxDH, this.minTemp, this.maxTemp);
    }
}
