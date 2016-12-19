import { Injectable } from '@angular/core';
import { Plant, OptimalWater } from '../index';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlantService {
    
    plants : BehaviorSubject<Plant[]> = new BehaviorSubject<Plant[]>([]);
    
    getPlants() : BehaviorSubject<Plant[]> {
        this.plants.next(this.plantsArray);
        return this.plants;
    }
    
    private plantsArray : Plant[] = [
        new Plant(1, 'Crinum calamistratum', 'Kiharakriinumi', new OptimalWater(5.8, 7.5, 2, 12, 23, 26), null),
        new Plant(2, 'Ceratophyllum submersum', 'Hentokarvalehti', new OptimalWater(6.5, 8.5, 0, 20, 22, 28), null),
        new Plant(3, 'Taxiphyllum barbieri', 'Jaavansammal', new OptimalWater(5.5, 8.5, 0, 20, 18, 26), null),
        new Plant(4, 'Taxiphyllum barbieri', 'Kelluhankasammal', new OptimalWater(6, 7.5, 0, 20, 10, 28), null),
        new Plant(5, 'Microsorum pteropus', 'Jaavansaniainen', new OptimalWater(5, 8, 0, 20, 20, 28), 'Java fern'),
        new Plant(6, 'Ceratopteris thalictroides', 'Vesisaniainen', new OptimalWater(5, 8.5, 0, 20, 22, 28), null),
        new Plant(7, 'Vallisneria spiralis', 'Vallisneria', new OptimalWater(6, 7.5, 2, 19.9, 23, 28), null),
        new Plant(8, 'Vallisneria australis', 'Isovallisneria', new OptimalWater(6, 7.5, 4, 20, 22, 28), null),
        new Plant(9, 'Rotala rotundifolla', 'Hentorotala', new OptimalWater(5.5, 7.5, 0, 20, 22, 28), null),
        new Plant(10, 'Pistia stratiotes', 'Pistia', new OptimalWater(6.5, 7.2, 0, 20, 17, 30), null),
        new Plant(11, 'Nymphaea micrantha', 'Rusolumme', new OptimalWater(6.5, 7.5, 2, 12, 24, 28), null),
        new Plant(12, 'Najas guadalupensis', 'Hentonäkinruoho', new OptimalWater(6, 8, 0, 20, 20, 30), null),
        new Plant(13, 'Mayaca fluviatilis', 'Hapsuruoho', new OptimalWater(5.5, 7, 2, 8, 22, 28), null),
        new Plant(14, 'Myriophyllum tuberculatum', 'Ruosteärviä', new OptimalWater(6.5, 7.5, 2, 10, 22, 28), null),
        new Plant(15, 'Limnophila sessiliflora', 'Vedensuosikki', new OptimalWater(5.5, 8, 0, 20, 22, 28), null),
        new Plant(16, 'Hygrophila polysperma', 'Intianvesitähdikki', new OptimalWater(6, 8, 0, 20, 20, 30), null),
        new Plant(17, 'Hydrocotyle leucocephala', 'Konnanputki', new OptimalWater(6, 8, 0, 20, 20, 28), null),
        new Plant(18, 'Elodea canadensis', 'Kanadanvesirutto', new OptimalWater(6.5, 8.5, 6, 20, 15, 22), null),
        new Plant(19, 'Echidonorus `Rubin`', 'Rubiinivesimiekka', new OptimalWater(6, 8, 4, 20, 22, 30), null),
        new Plant(20, 'Echidonorus `Red Special`', 'Ruostevesimiekka', new OptimalWater(6, 8, 4, 30, 22, 28), null),
        new Plant(21, 'Echidonorus grisebachii', 'Amazoninvesimiekka', new OptimalWater(6, 8, 0, 20, 22, 28), null),
        new Plant(22, 'Anubias barteri var. barteri', 'Herttakeihäslehti', new OptimalWater(5.5, 8, 0, 30, 22, 26), null),
        new Plant(23, 'Anubias barteri var. coffeifolia', 'Kahvikeihäslehti', new OptimalWater(5.5, 8, 0, 30, 22, 28), null),
        new Plant(24, 'Saururus cernuus', 'Herttalehti', new OptimalWater(6, 8, 0, 30, 18, 24), null),
        new Plant(25, 'Gymnocoronis spilanthoides', 'Vesiasteri', new OptimalWater(6.5, 8, 2, 12, 15, 28), null),
        new Plant(26, 'Cryptocorune xwillisii', 'Kääpiömelalehti', new OptimalWater(6, 7.5, 0, 30, 22, 28), null),
        new Plant(27, 'Cryptocorune undulata', 'Aaltomelalehti', new OptimalWater(6, 8, 0, 30, 22, 26), null),
        new Plant(28, 'Eleocharis acicularis', 'Hapsiluikka', new OptimalWater(6, 8.5, 0, 30, 15, 24), null)
    ];
}
