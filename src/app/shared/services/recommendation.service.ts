import { Injectable } from 'angular2/core';
import { OptimalWater, BasketItem } from '../index';
import { BasketService } from './basket.service';
import { ChoiceService } from './choice.service';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/observable/throw';

@Injectable()
export class RecommendationService {
    
    recommendedWater: Observable<string> = new BehaviorSubject<string>();
    
    constructor(private basketService: BasketService, private choiceService: ChoiceService) {
        this.basketService.basket
            .map((items : BasketItem[]) => items ? items.map(item => item.item.optimalWater) : [])
            .subscribe((waters: OptimalWater[]) => this.handleChangedWaters(waters));
    }
    
    private handleChangedWaters(waters: OptimalWater[]) {
        if(this.areWatersIncompatible(waters)) {
            this.recommendedWater.next('Kalojen ja/tai kasvien vesiarvot eivät ole yhteensopivat');
        } else if(waters.length > 0) {
            this.recommendedWater.next(this.calculateOptimalWater(waters).toString());
        }
    }
    
    private calculateOptimalWater(waters: OptimalWater[]) : OptimalWater {
        let minPH: number = this.getMax(waters.map(water => water.minPH));
        let maxPH: number = this.getMin(waters.map(water => water.maxPH));
        let minDH: number = this.getMax(waters.map(water => water.minDH));
        let maxDH: number = this.getMin(waters.map(water => water.maxDH));
        let minTemp: number = this.getMax(waters.map(water => water.minTemp));
        let maxTemp: number = this.getMin(waters.map(water => water.maxTemp));
        return new OptimalWater(minPH, maxPH, minDH, maxDH, minTemp, maxTemp);
    }
    
    private getMin(numbers: number[]) : number {
        let min : number = 9999;
        numbers.forEach(n => min = Math.min(n, min));
        return min;
    }
    
    private getMax(numbers: number[]) : number {
        let max : number = -100;
        numbers.forEach(n => max = Math.max(n, max));
        return max;
    }
    
    private areWatersIncompatible(waters : OptimalWater[]) : boolean {
        let incompatible = false;
        waters.forEach(water => incompatible = incompatible || this.choiceService.isWaterIncompatibleWithOthers(water, waters));
        return incompatible;
    }
}
