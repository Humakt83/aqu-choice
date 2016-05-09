import { OptimalWater } from './optimal-water';

export interface Living {
    
    name: string;
    scientificName: string;
    optimalWater: OptimalWater;
    
    toString() : string;
    
}