export class BasketItem {
    
    constructor(public id: number, public item: any) {}
    
    toString() {
        return this.item.toString();
    }
}