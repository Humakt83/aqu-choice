import { Component, Input } from '@angular/core';

@Component({
    selector: 'info',
    templateUrl: 'info.html',
    styleUrls: ['info.css']
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
