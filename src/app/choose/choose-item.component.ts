import { Component, Input } from 'angular2/core';

@Component({
    selector: 'choose-item',
    template: `<div class="choose-item">{{itemName}}</div>`
})
export class ChooseItemComponent {
    
    @Input() itemName : string;
    
}
