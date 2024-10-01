import { Product } from './Product.ts';

export class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    showOrder(): void {
        console.log("Objednávka obsahuje:");
        this.products.forEach(product => {
            console.log(product.getInfo());
        });
    }
}
