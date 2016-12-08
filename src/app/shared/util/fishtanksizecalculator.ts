import { Fish } from '../index';

export const calculateRequiredLitresForFish = (fish: Fish[]) : number => {
    let requiredLitres = 0;
    let minimumLitres = 0;
    fish.forEach(f => {
        if (f.size < 5) {
            requiredLitres += f.size * 0.5;            
        } else if (f.size < 8) {
            requiredLitres += f.size;
        } else if (f.size < 13) {
            requiredLitres += f.size * 2;
        } else {
            requiredLitres += f.size * 5;
        }
        minimumLitres = f.minimumTankSize > minimumLitres ? f.minimumTankSize : minimumLitres;
    });
    return minimumLitres > requiredLitres ? minimumLitres : requiredLitres;
}
