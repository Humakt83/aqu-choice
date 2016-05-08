import { Component, OnInit } from 'angular2/core';
import { ChooseItemComponent } from './choose-item.component';
import { PlantService, FishService, Plant, Fish } from '../shared/index';
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
    
    life : any[] = [];
    
    constructor(private plantService: PlantService, private fishService: FishService) {}
    
    ngOnInit() {
        this.plantService.getPlants()
            .combineLatest(this.fishService.getFish(), (x, y) => x.concat(y))
            .subscribe(
                (result: any[]) => this.life = result,
                error => console.error(error),
                () => console.log('Fetched plants and fish'));
        
    }
    
}
