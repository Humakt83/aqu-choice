import { Component } from 'angular2/core';
import { BasketComponent } from '../basket/basket.component';
import { ChooseComponent } from '../choose/choose.component';
import { InfoComponent } from '../info/info.component';
import { ChoiceService, FishService, PlantService, BasketService } from '../shared/index';

@Component({
  selector: 'aqu',
  templateUrl: 'app/main/main.html',
  providers: [ ChoiceService, FishService, PlantService, BasketService ],
  directives: [ BasketComponent, ChooseComponent, InfoComponent ]
})
export class MainComponent {
}
