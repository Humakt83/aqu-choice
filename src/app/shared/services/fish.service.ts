import { Injectable } from '@angular/core';
import { Fish, OptimalWater } from '../index';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FishService {
  
    fish : BehaviorSubject<Fish[]> = new BehaviorSubject<Fish[]>([]);
    
    getFish() : BehaviorSubject<Fish[]> {
        this.fish.next(this.fishArray);
        return this.fish;
    }
    
    private fishArray : Fish[] = [
        new Fish('Pangio kuhlii', 'Piikkisilmä', new OptimalWater(5, 7.5, 0, 11.9, 24, 28), 63, 8),
        new Fish('Crossocheilus langei', 'Leväbarbi', new OptimalWater(6.5, 8, 5, 14.9, 24, 26), 325, 16),
        new Fish('Chromobotia macracanthus', 'Tiikerinuoliainen', new OptimalWater(5.5, 7, 0, 14.9, 24, 29), 720, 35),
        new Fish('Pterophyllum scalare', 'Lehtikala', new OptimalWater(6, 7.5, 0, 14.9, 24, 30), 325, 15),
        new Fish('Paracheidoron innesi', 'Neontetra', new OptimalWater(5.5, 7, 0, 9.9, 22, 27), 63, 4),
        new Fish('Paracheidoron axelrodi', 'Kardinaalitetra', new OptimalWater(5.5, 7, 0, 9.9, 24, 29), 63, 5),
        new Fish('Moenkhausia pittieri', 'Timanttitetra', new OptimalWater(6, 7, 0, 7.9, 23, 28), 128, 7),
        new Fish('Hyphessobrycon pulchripinnis', 'Sitruunatetra', new OptimalWater(5.5, 7, 0, 11.9, 23, 27), 63, 4.5),
        new Fish('Hemigrammus erythrozonus', 'Rubiinitetra', new OptimalWater(5.5, 7, 0, 11.9, 22, 28), 63, 4.5),
        new Fish('Hemigrammus bleheri', 'Punapäätetra', new OptimalWater(5.5, 6.5, 0, 7.9, 24, 28), 63, 4.5),
        new Fish('Corydoras aeneus', 'Kuparimonninen', new OptimalWater(6, 7.5, 0, 14.9, 22, 28), 84, 8),
        new Fish('Corydoras sterbai', 'Helmimonninen', new OptimalWater(6, 7, 0, 9.9, 23, 28), 84, 7),
        new Fish('Corydoras schwartzi', 'Kirjomonninen', new OptimalWater(6, 7, 0, 9.9, 23, 28), 84, 7),
        new Fish('Corydoras gossei', 'Kultapäämonninen', new OptimalWater(6, 7, 0, 9.9, 23, 27), 100, 7),
        new Fish('Ancistrus cirrhosus', 'Täpläpartamonni', new OptimalWater(5.8, 7.8, 0, 14.9, 23, 27), 128, 15),
        new Fish('Trichopodus leerii', 'Helmirihmakala', new OptimalWater(6, 7.5, 0, 9.9, 24, 28), 200, 12),
        new Fish('Trichopodus trichopterus', 'Sinirihmakala', new OptimalWater(6, 7.5, 0, 14.9, 23, 28), 160, 10),
        new Fish('Helostoma temminkii', 'Pusukala', new OptimalWater(6, 8, 0, 14.9, 22, 28), 430, 30),
        new Fish('Trichogaster chuna', 'Hunajarihmakala', new OptimalWater(6, 7.5, 0, 7.9, 23, 26), 45, 5),
        new Fish('Betta splendens', 'Taistelukala', new OptimalWater(6, 7.5, 0, 14.9, 24, 30), 63, 7),
        new Fish('Pelvicachromis pulcher', 'Palettikala', new OptimalWater(5.5, 7.5, 0, 14.9, 23, 28), 128, 10),
        new Fish('Thorichthys meeki', 'Tulisuu', new OptimalWater(6.5, 7.5, 0, 19.9, 23, 28), 240, 15),
        new Fish('Symphysodon discus', 'Kiekkokala', new OptimalWater(5, 7, 0, 5.9, 27, 30), 430, 20),
        new Fish('Xiphophorus maculatus', 'Platy', new OptimalWater(6.5, 8, 5, 20, 22, 25), 63, 5),
        new Fish('Xiphophorus helleri', 'Miekkapyrstö', new OptimalWater(6.8, 8, 6, 20, 22, 26), 63, 15),
        new Fish('Poecilia reticulata', 'Miljoonakala', new OptimalWater(6.5, 8, 4, 20, 18, 28), 45, 6),
        new Fish('Synodantis nigriventris', 'Selkäuimari', new OptimalWater(6, 8, 0, 14.9, 22, 28), 100, 10),
        new Fish('Carassius auratus', 'Kultakala', new OptimalWater(6, 7.5, 5, 20, 4, 30), 430, 30),
        new Fish('Epalzeorhynchos bicolor', 'Tulipyrstö', new OptimalWater(6, 7.5, 0, 14.9, 22, 28), 240, 12),
        new Fish('Puntigrus tetrazona', 'Tiikeribarbi', new OptimalWater(6, 7.5, 0, 14.9, 22, 28), 140, 6),
        new Fish('Barbodes semifasciolatus', 'Messinkibarbi', new OptimalWater(6, 8, 0, 14.9, 18, 25), 100, 7),
        new Fish('Brachydanio rerio', 'Seeprakala', new OptimalWater(6, 7.5, 0, 14.9, 20, 28), 84, 6),
        new Fish('Pangio myersi', 'Siaminpiikkisilmä', new OptimalWater(6, 7.5, 0, 11.9, 24, 28), 84, 10),
        new Fish('Pangio malayna', 'Kiilapiikkisilmä', new OptimalWater(6, 7.5, 0, 11.9, 24, 28), 45, 7),
        new Fish('Pangio semicincta', 'Aaltopiikkisilmä', new OptimalWater(6, 7.5, 0, 14.9, 24, 28), 63, 9),
        new Fish('Corydoras panda', 'Pandamonninen', new OptimalWater(6, 7, 0, 9.9, 22, 25), 73, 6),
        new Fish('Corydoras paleatus', 'Täplämonninen', new OptimalWater(6, 7.5, 0, 14.9, 18, 26), 73, 8),
        new Fish('Spectracanthicus punctatissimus', 'Helmitähtipleko', new OptimalWater(6, 7, 0, 9.9, 26, 29), 200, 15),
        new Fish('Otacinclus hoppei', 'Täplänuolimonni', new OptimalWater(5.5, 7, 0, 9.9, 24, 28), 45, 3.5),
        new Fish('Panaqolus albivermis', 'Mustapleko L 204', new OptimalWater(6.5, 8, 0, 14.9, 25, 29), 200, 14),
        new Fish('Melanotaenia boesemani', 'Kultapyrstösateenkaarikala', new OptimalWater(6.5, 8, 6.5, 15, 24, 28), 240, 12),
        new Fish('Glossolepis incisus', 'Purppurasateenkaarikala', new OptimalWater(7, 8, 10, 20, 24, 28), 430, 15)
    ];
}
