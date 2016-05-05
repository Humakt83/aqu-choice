import { Component, OnInit } from 'angular2/core';
import { ChooseItemComponent } from './choose-item.component';
import { PlantService, Plant } from '../shared/index';
import { ChooseFilterPipe } from './choose-filter.pipe';

@Component({
    selector: 'choose',
    templateUrl: 'app/choose/choose.html',
    styleUrls: ['app/choose/choose.css'],
    directives: [ChooseItemComponent],
    pipes: [ChooseFilterPipe]
})
export class ChooseComponent implements OnInit {
    
    plants : Plant[] = [];
    
    constructor(private plantService: PlantService) {}
    
    ngOnInit() {
        this.plantService.getPlants().subscribe(
            (result: Plant[]) => this.plants = result,
            error => console.error(error),
            () => console.log('Fetched plants'));
    }
    
}
