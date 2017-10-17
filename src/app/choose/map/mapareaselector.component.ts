import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'area-selector',
    templateUrl:   'mapareaselector.html',
    styleUrls: ['mapareaselector.css']
})
export class MapAreaSelectorComponent implements OnInit {

    map: google.maps.Map

    @Output('closeAreaSelection') closeAreaSelection: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit() {
        this.map = new google.maps.Map(document.getElementById('map'), {zoom: 2, center: {lat: 64, lng: 24}});
    }

    close() {
        this.closeAreaSelection.next(true);
    }

}