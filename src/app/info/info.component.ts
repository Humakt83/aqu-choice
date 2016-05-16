import { Component, Input } from 'angular2/core';

@Component({
    selector: 'info',
    templateUrl: 'app/info/info.html',
    styleUrls: ['app/info/info.css']
})
export class InfoComponent {
    
    displayModal: boolean = false;
    
    showModal() {
        this.displayModal = true;
    }
    
    hideModal(event: Event) {
        event.stopPropagation();
        this.displayModal = false;
    }
    
    
}
