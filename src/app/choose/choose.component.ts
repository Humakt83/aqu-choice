import { Component, OnInit } from 'angular2/core';
import { ChooseItemComponent } from './choose-item.component';
import { PlantService, FishService, BasketService, Living, OptimalWater, MolluscaService } from '../shared/index';
import { ChooseFilterPipe } from './choose-filter.pipe';
import 'rxjs/add/operator/combineLatest';

@Component({
    selector: 'choose',
    templateUrl: 'app/choose/choose.html',
    styleUrls: ['app/choose/choose.css'],
    directives: [ChooseItemComponent],
    pipes: [ChooseFilterPipe]
})
export class ChooseComponent implements OnInit {
    
    life : Living[] = [];
    size: number = 1000;
    
    customWater : OptimalWater = new OptimalWater(7, 7, 7, 7, 25, 25);
    useCustomWater: boolean = false;
    
    constructor(private plantService: PlantService, private fishService: FishService, private basketService: BasketService, private molluscaService: MolluscaService) {}
    
    ngOnInit() {
        this.plantService.getPlants()
            .combineLatest(this.fishService.getFish(), (x, y) => x.concat(y))
            .combineLatest(this.molluscaService.getMollusca(), (x, y) => x.concat(y))
            .subscribe(
                (result: Living[]) => this.life = result,
                error => console.error(error),
                () => console.log('Fetched plants and fish'));
        
    }
    
    changeTank(sizeNew : number) {
        this.size = sizeNew;
        this.basketService.tankSize = this.size;
    }
    
    changePH(pH : number) {
        this.customWater = new OptimalWater(pH, pH, this.customWater.minDH, this.customWater.maxDH, this.customWater.minTemp, this.customWater.maxTemp);
    }
    
    changeDH(dH : number) {
        this.customWater = new OptimalWater(this.customWater.minPH, this.customWater.maxPH, dH, dH this.customWater.minTemp, this.customWater.maxTemp);
    }
    
    changeTemp(temp : number) {
        this.customWater = new OptimalWater(this.customWater.minPH, this.customWater.maxPH, this.customWater.minDH, this.customWater.maxDH, temp, temp);
    }
    
}
