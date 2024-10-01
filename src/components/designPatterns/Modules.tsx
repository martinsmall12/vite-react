import {Order} from "../../designPatterns/modules/Order.ts";
import {Product} from "../../designPatterns/modules/Product.ts";

export const Modules = () => {
    const order = new Order();
    const product1 = new Product("Laptop", 1500);
    const product2 = new Product("Mouse", 25);

    order.addProduct(product1);
    order.addProduct(product2);

    order.showOrder(); // Laptop - $1500, Mouse - $25

    return (
        <div>
            <h2>Modules</h2>
            <div>Aplikace se vypisuje do konzole</div>
        </div>
    );
}
