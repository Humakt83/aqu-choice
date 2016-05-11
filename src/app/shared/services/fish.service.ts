import { Injectable } from 'angular2/core';
import { Fish, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FishService {
  
    fish : Observable<Fish[]> = new BehaviorSubject<Fish[]>();
    
    getFish() : Observable<Fish[]> {
        this.fish.next(this.fishArray);
        return this.fish;
    }
    
    private fishArray : Fish[] = [
        new Fish('Pangio kuhlii', 'Piikkisilmä', new OptimalWater(5, 7.5, 0, 11.9, 24, 28), 63),
        new Fish('Crossocheilus langei', 'Leväbarbi', new OptimalWater(6.5, 8, 5, 14.9, 24, 26), 325),
        new Fish('Chromobotia macracanthus', 'Tiikerinuoliainen', new OptimalWater(5.5, 7, 0, 14.9, 24, 29), 720),
        new Fish('Pterophyllum scalare Callus', 'Lehtikala', new OptimalWater(6, 7.5, 0, 14.9, 24, 30), 325),
        new Fish('Paracheidoron innesi', 'Neontetra', new OptimalWater(5.5, 7, 0, 9.9, 22, 27), 63),
        new Fish('Paracheidoron axelrodi', 'Kardinaalitetra', new OptimalWater(5.5, 7, 0, 9.9, 24, 29), 63),
        new Fish('Hyphessobrycon pulchripinnis', 'Sitruunatetra', new OptimalWater(5.5, 7, 0, 11.9, 23, 27), 63),
        new Fish('Hemigrammus erythrozonus', 'Rubiinitetra', new OptimalWater(5.5, 7, 0, 11.9, 22, 28), 63),
        new Fish('Hemigrammus bleheri', 'Punapäätetra', new OptimalWater(5.5, 6.5, 0, 7.9, 24, 28), 63),
        new Fish('Corydoras aeneus', 'Kuparimonninen', new OptimalWater(6, 7.5, 0, 14.9, 22, 28), 84),
        new Fish('Corydoras sterbai', 'Helmimonninen', new OptimalWater(6, 7, 0, 9.9, 23, 28), 84),
        new Fish('Corydoras schwartzi', 'Kirjomonninen', new OptimalWater(6, 7, 0, 9.9, 23, 28), 84),
        new Fish('Corydoras gossei', 'Kultapäämonninen', new OptimalWater(6, 7, 0, 9.9, 23, 27), 100),
        new Fish('Ancistrus cirrhosus', 'Täpläpartamonni', new OptimalWater(5.8, 7.8, 0, 14.9, 23, 27), 128),
        new Fish('Trichopodus leerii', 'Helmirihmakala', new OptimalWater(6, 7.5, 0, 9.9, 24, 28), 200),
        new Fish('Trichopodus trichopterus', 'Sinirihmakala', new OptimalWater(6, 7.5, 0, 14.9, 23, 28), 160),
        new Fish('Helostoma temminkii', 'Pusukala', new OptimalWater(6, 8, 0, 14.9, 22, 28), 430),
        new Fish('Trichogaster chuna', 'Hunajarihmakala', new OptimalWater(6, 7.5, 0, 7.9, 23, 26), 45),
        new Fish('Betta splendens', 'Taistelukala', new OptimalWater(6, 7.5, 0, 14.9, 24, 30), 63),
        new Fish('Pelvicachromis pulcher', 'Palettikala', new OptimalWater(5.5, 7.5, 0, 14.9, 23, 28), 128),
        new Fish('Thorichthys meeki', 'Tulisuu', new OptimalWater(6.5, 7.5, 0, 19.9, 23, 28), 240),
        new Fish('Symphysodon discus', 'Kiekkokala', new OptimalWater(5, 7, 0, 5.9, 27, 30), 430),
        new Fish('Xiphophorus maculatus', 'Platy', new OptimalWater(6.5, 8, 5, 20, 22, 25), 63),
        new Fish('Xiphophorus helleri', 'Miekkapyrstö', new OptimalWater(6.8, 8, 6, 20, 22, 26), 63),
        new Fish('Poecilia reticulata', 'Miljoonakala', new OptimalWater(6.5, 8, 4, 20, 18, 28), 45),
        new Fish('Synodantis nigriventris', 'Selkäuimari', new OptimalWater(6, 8, 0, 14.9, 22, 28), 100),
        new Fish('Carassius auratus', 'Kultakala', new OptimalWater(6, 7.5, 5, 20, 4, 30), 430),
        new Fish('Epalzeorhynchos bicolor', 'Tulipyrstö', new OptimalWater(6, 7.5, 0, 14.9, 2, 28), 240),
        new Fish('Puntigrus tetrazona', 'Tiikeribarbi', new OptimalWater(6, 7.5, 0, 14.9, 22, 28), 140)
    ];
}
