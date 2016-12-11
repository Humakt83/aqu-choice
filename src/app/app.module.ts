import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MainComponent }   from './main/main.component';
import { InfoComponent } from './info/info.component';
import { BasketService, ChoiceService, FishService, MolluscaService, PlantService, RecommendationService } from './shared/index';
import { BasketComponent, BasketItemComponent, RecommendationComponent } from './basket/index';
import { ChooseComponent, ChooseItemComponent, ChooseFilterPipe } from './choose/index';
import { TranslateModule } from 'ng2-translate';

@NgModule({
    declarations: [MainComponent, InfoComponent, BasketComponent, BasketItemComponent, RecommendationComponent, ChooseComponent, ChooseItemComponent,
        ChooseFilterPipe],
    imports: [BrowserModule, HttpModule, FormsModule, TranslateModule.forRoot()],
    bootstrap: [MainComponent],
    providers: [HttpModule, BasketService, ChoiceService, FishService, MolluscaService, PlantService, RecommendationService]
})
export class AppModule {}