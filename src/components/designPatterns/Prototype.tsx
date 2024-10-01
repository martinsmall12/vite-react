import {Vehicle} from "../../designPatterns/prototype/Vehicle.ts";

export const Prototype = () => {
    const car1 = new Vehicle("Toyota", "Corolla", 2020);
    const car2 = car1.clone();

    car2.model = "Camry";

    console.log(car1.model); // Corolla
    console.log(car2.model); // Camry

    return (
        <div>
            <h2>Prototype</h2>
            <p>Prototype je návrhový vzor, který umožňuje vytvářet nové objekty na základě existujících instancí, což umožňuje kopírovat jejich vlastnosti.</p>
            <p>Umožňuje vytvářet nové objekty na základě existujících instancí, což umožňuje kopírovat jejich vlastnosti.</p>
        </div>
    );
}
