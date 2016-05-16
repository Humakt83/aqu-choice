import { Component, OnInit } from 'angular2/core';
import { RecommendationService, BasketService } from '../../shared/index';

@Component({
    selector: 'recommendation',
    templateUrl: 'app/basket/recommendation/recommendation.html',
    styleUrls: ['app/basket/recommendation/recommendation.css'],
})
export class RecommendationComponent implements OnInit {
    
    message: string;
    
    constructor(private recommendationService: RecommendationService, private basketService: BasketService) {}
    
    ngOnInit() {        
        this.recommendationService.recommendedWater
            .subscribe((result : string) => this.message = result);
    }
    
}
