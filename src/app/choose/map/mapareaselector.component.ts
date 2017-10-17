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
        const worldGeometry = new google.maps.FusionTablesLayer({
            query: {
                select: 'geometry',
                from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk'
            },
            map: this.map,
            suppressInfoWindows: true
        });
    }

    close() {
        this.closeAreaSelection.next(true);
    }

    clickOnMap(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();
    }

}