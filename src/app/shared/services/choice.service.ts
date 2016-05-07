import { Injectable } from 'angular2/core';
import { OptimalWater } from '../index';

@Injectable()
export class ChoiceService {
  
    isWaterIncompatibleWithOthers(water: OptimalWater, others: OptimalWater[]) {
        let incompatible : boolean = false;
        others.forEach(other => {
            incompatible = incompatible || (!this.pHMatch(water, other) && !this.dHMatch(water, other) && !this.tempMatch(water, other));
        });
        return incompatible;
    }
    
    private pHMatch(water: OptimalWater, other: OptimalWater) {
        return (water.minPH <= other.maxPH && water.maxPH >= other.minPH) || (other.minPH <= water.maxPH && other.maxPH >= water.minPH)
    }
    
    private dHMatch(water: OptimalWater, other: OptimalWater) {
        return (water.minDH <= other.maxDH && water.maxDH >= other.minDH) || (other.minDH <= water.maxDH && other.maxDH >= water.minDH)
    }
    
    private tempMatch(water: OptimalWater, other: OptimalWater) {
        return (water.minTemp <= other.maxTemp && water.maxTemp >= other.minTemp) || (other.minTemp <= water.maxTemp && other.maxTemp >= water.minTemp)
    }
    
}