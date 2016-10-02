import { Injectable } from 'angular2/core';
import { Plant, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlantService {
    
    plants : Observable<Plant[]> = new BehaviorSubject<Plant[]>([]);
    
    getPlants() : Observable<Plant[]> {
        this.plants.next(this.plantsArray);
        return this.plants;
    }
    
    private plantsArray : Plant[] = [
        new Plant(1, 'Crinum calamistratum', 'Kiharakriinumi', new OptimalWater(5.8, 7.5, 2, 12, 23, 26)),
        new Plant(2, 'Ceratophyllum submersum', 'Hentokarvalehti', new OptimalWater(6.5, 8.5, 0, 20, 22, 28)),
        new Plant(3, 'Taxiphyllum barbieri', 'Jaavansammal', new OptimalWater(5.5, 8.5, 0, 20, 18, 26)),
        new Plant(4, 'Taxiphyllum barbieri', 'Kelluhankasammal', new OptimalWater(6, 7.5, 0, 20, 10, 28)),
        new Plant(5, 'Microsorum pteropus', 'Jaavansaniainen', new OptimalWater(5, 8, 0, 20, 20, 28)),
        new Plant(6, 'Ceratopteris thalictroides', 'Vesisaniainen', new OptimalWater(5, 8.5, 0, 20, 22, 28)),
        new Plant(7, 'Vallisneria spiralis', 'Vallisneria', new OptimalWater(6, 7.5, 2, 19.9, 23, 28)),
        new Plant(8, 'Rotala rotundifolla', 'Hentorotala', new OptimalWater(5.5, 7.5, 0, 20, 22, 28)),
        new Plant(9, 'Pistia stratiotes', 'Pistia', new OptimalWater(6.5, 7.2, 0, 20, 17, 30)),
        new Plant(10, 'Nymphaea micrantha', 'Rusolumme', new OptimalWater(6.5, 7.5, 2, 12, 24, 28)),
        new Plant(11, 'Najas guadalupensis', 'Hentonäkinruoho', new OptimalWater(6, 8, 0, 20, 20, 30)),
        new Plant(12, 'Mayaca fluviatilis', 'Hapsuruoho', new OptimalWater(5.5, 7, 2, 8, 22, 28)),
        new Plant(13, 'Myriophyllum tuberculatum', 'Ruosteärviä', new OptimalWater(6.5, 7.5, 2, 10, 22, 28)),
        new Plant(14, 'Limnophila sessiliflora', 'Vedensuosikki', new OptimalWater(5.5, 8, 0, 20, 22, 28)),
        new Plant(15, 'Hygrophila polysperma', 'Intianvesitähdikki', new OptimalWater(6, 8, 0, 20, 20, 30)),
        new Plant(16, 'Hydrocotyle leucocephala', 'Konnanputki', new OptimalWater(6, 8, 0, 20, 20, 28)),
        new Plant(17, 'Elodea canadensis', 'Kanadanvesirutto', new OptimalWater(6.5, 8.5, 6, 20, 15, 22)),
        new Plant(18, 'Echidonorus `Rubin`', 'Rubiinivesimiekka', new OptimalWater(6, 8, 4, 20, 22, 30)),
        new Plant(19, 'Echidonorus `Red Special`', 'Ruostevesimiekka', new OptimalWater(6, 8, 4, 30, 22, 28)),
        new Plant(20, 'Echidonorus grisebachii', 'Amazoninvesimiekka', new OptimalWater(6, 8, 0, 20, 22, 28)),
        new Plant(21, 'Anubias barteri var. barteri', 'Herttakeihäslehti', new OptimalWater(5.5, 8, 0, 30, 22, 26)),
        new Plant(22, 'Anubias barteri var. coffeifolia', 'Kahvikeihäslehti', new OptimalWater(5.5, 8, 0, 30, 22, 28)),
        new Plant(23, 'Saururus cernuus', 'Herttalehti', new OptimalWater(6, 8, 0, 30, 18, 24)),
        new Plant(24, 'Gymnocoronis spilanthoides', 'Vesiasteri', new OptimalWater(6.5, 8, 2, 12, 15, 28)),
        new Plant(25, 'Microsorum pteropus', 'Jaavansaniainen', new OptimalWater(5, 8, 0, 30, 20, 28)),
        new Plant(26, 'Cryptocorune xwillisii', 'Kääpiömelalehti', new OptimalWater(6, 7.5, 0, 30, 22, 28)),
        new Plant(27, 'Cryptocorune undulata', 'Aaltomelalehti', new OptimalWater(6, 8, 0, 30, 22, 26)),
        new Plant(28, 'Eleocharis acicularis', 'Hapsiluikka', new OptimalWater(6, 8.5, 0, 30, 15, 24))
    ];
}
