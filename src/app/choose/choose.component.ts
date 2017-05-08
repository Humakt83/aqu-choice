import { Component, OnInit } from '@angular/core';
import { PlantService, FishService, BasketService, Living, OptimalWater, MolluscaService, Plant, Mollusca, 
    Fish, StorageService } from '../shared/index';
import 'rxjs/add/operator/combineLatest';

@Component({
    selector: 'choose',
    templateUrl: 'choose.html',
    styleUrls: ['choose.css']
})
export class ChooseComponent implements OnInit {
    
    life : Living[] = [];
    size: number = 1000;
    displayModal = false;
    modalFish: Fish = new Fish('', '', new OptimalWater(6, 8, 2, 6, 20, 30), 100, 10, '');
    
    customWater : OptimalWater = new OptimalWater(7, 7, 7, 7, 25, 25);
    useCustomWater: boolean = false;
    
    constructor(private plantService: PlantService, private fishService: FishService, private basketService: BasketService, 
        private molluscaService: MolluscaService, private storageService: StorageService) {}
    
    ngOnInit() {
        this.plantService.getPlants()
            .combineLatest(this.fishService.fish, (x: Living[], y: Living[]) => x.concat(y))
            .combineLatest(this.molluscaService.getMollusca(), (x: Living[], y: Living[]) => x.concat(y))
            .subscribe(
                (result: Living[]) => {
                    result.sort((a : Living, b : Living) => {
                        if ((a instanceof Fish && b instanceof Fish) || (a instanceof Mollusca && b instanceof Mollusca) || (a instanceof Plant && b instanceof Plant)) return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
                        if (a instanceof Plant || (a instanceof Fish && !(b instanceof Plant))) return -1;
                        return 1;
                    });
                    this.life = result;
                }, error => console.error(error),
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
        this.customWater = new OptimalWater(this.customWater.minPH, this.customWater.maxPH, dH, dH, this.customWater.minTemp, this.customWater.maxTemp);
    }
    
    changeTemp(temp : number) {
        this.customWater = new OptimalWater(this.customWater.minPH, this.customWater.maxPH, this.customWater.minDH, this.customWater.maxDH, temp, temp);
    }

    showModal() {
        this.displayModal = true;
    }

    hideModal(event: Event) {
        event.stopPropagation();
        this.displayModal = false;
    }

    saveFish() {
        this.storageService.addFishToStorage(this.modalFish);
        this.displayModal = false;
    }

    canAddFish() {
        return this.modalFish.scientificName.trim().length > 0
            && this.isNumber(this.modalFish.minimumTankSize) && this.modalFish.minimumTankSize > 0
            && this.isNumber(this.modalFish.size) && this.modalFish.size > 0;
    }

    isNumber(val: any) : boolean {
        return !Number.isNaN(val);
    }
    
}
