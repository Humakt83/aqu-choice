import { Component } from 'angular2/core';
import { BasketComponent } from '../basket/basket.component';
import { ChooseComponent } from '../choose/choose.component';
import { InfoComponent } from '../info/info.component';
import { ChoiceService, BasketService, FishService, PlantService } from '../shared/index';

@Component({
  selector: 'aqu',
  templateUrl: 'app/main/main.html',
  providers: [ ChoiceService, BasketService, FishService, PlantService ],
  directives: [ BasketComponent, ChooseComponent, InfoComponent ]
})
export class MainComponent {
}
