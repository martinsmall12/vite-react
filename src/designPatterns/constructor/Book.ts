export class Book {
    constructor(public title: string, public author: string, public year: number) {}

    getDetails(): string {
        return `${this.title}, autor: ${this.author}, rok vydání: ${this.year}`;
    }
}


