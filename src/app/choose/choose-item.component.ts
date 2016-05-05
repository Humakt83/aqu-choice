import { Component, Input } from 'angular2/core';

@Component({
    selector: 'choose-item',
    template: `<div class="choose-item">{{itemName}}</div>`,
    styleUrls: ['app/choose/choose-item.css']
})
export class ChooseItemComponent {
    
    @Input() itemName : string;
    
}
