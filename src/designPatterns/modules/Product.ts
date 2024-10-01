export class Product {
    constructor(public name: string, public price: number) {}

    getInfo(): string {
        return `${this.name} - $${this.price}`;
    }
}
