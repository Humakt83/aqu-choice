import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../../shared/index';

@Component({
    selector: 'recommendation',
    templateUrl: 'recommendation.html',
    styleUrls: ['recommendation.css'],
})
export class RecommendationComponent implements OnInit {
    
    message: string;
    minimumRequiredLitres: number;
    
    constructor(private recommendationService: RecommendationService) {}
    
    ngOnInit() {        
        this.recommendationService.recommendedWater
            .subscribe((result : string) => this.message = result);
        this.recommendationService.litresRequiredForFish
            .subscribe((result: number) => this.minimumRequiredLitres = result);
    }
    
}
