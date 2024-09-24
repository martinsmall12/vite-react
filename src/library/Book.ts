class Book {
    private title: string;
    private author: string;
    private available: boolean;

    constructor(title: string, author: string, available: boolean = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }

    public isAvailable(): boolean {
        return this.available;
    }

    public borrow(): void {
        if (this.available) {
            this.available = false;
            console.log(`Kniha "${this.title}" byla zapůjčena.`);
        } else {
            console.log(`Kniha "${this.title}" není k dispozici.`);
        }
    }

    public returnBook(): void {
        this.available = true;
        console.log(`Kniha "${this.title}" byla vrácena.`);
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }
}

export default Book;
