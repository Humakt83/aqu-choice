import { OptimalWater } from './optimal-water';

export interface Living {
    
    name: string;
    englishName: string;
    scientificName: string;
    optimalWater: OptimalWater;
    
    toString() : string;
    
}