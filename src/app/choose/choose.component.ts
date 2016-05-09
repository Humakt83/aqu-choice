import { Component, OnInit } from 'angular2/core';
import { ChooseItemComponent } from './choose-item.component';
import { PlantService, FishService, BasketService, Living } from '../shared/index';
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
    size: number = 40;
    
    constructor(private plantService: PlantService, private fishService: FishService, private basketService: BasketService) {}
    
    ngOnInit() {
        this.plantService.getPlants()
            .combineLatest(this.fishService.getFish(), (x, y) => x.concat(y))
            .subscribe(
                (result: Living[]) => this.life = result,
                error => console.error(error),
                () => console.log('Fetched plants and fish'));
        
    }
    
    changeTank(sizeNew : number) {
        this.size = sizeNew;
        this.basketService.tankSize = this.size;
    }
    
}
