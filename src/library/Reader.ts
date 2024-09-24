import Book from "./Book.ts";

class Reader {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public borrowBook(book: Book): void {
        if (book.isAvailable()) {
            book.borrow();
            console.log(`${this.name} si půjčil(a) knihu "${book.getTitle()}".`);
        } else {
            console.log(`Kniha "${book.getTitle()}" není k dispozici.`);
        }
    }
}

export default Reader;
