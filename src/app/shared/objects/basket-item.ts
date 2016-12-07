export class BasketItem {
    
    constructor(public id: number, public item: any, public amount: number) {}
    
    toString() {
        return this.item.toString();
    }
}