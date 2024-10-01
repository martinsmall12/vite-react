interface Prototype {
    clone(): this;
}

export class Vehicle implements Prototype {
    constructor(public make: string, public model: string, public year: number) {}

    clone(): this {
        return Object.create(this); // Vytvoření kopie
    }
}

