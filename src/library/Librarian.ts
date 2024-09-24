import Book from "./Book.ts";
import Reader from "./Reader.ts";

class Librarian extends Reader {
    constructor(name: string) {
        super(name);
    }

    public returnBook(book: Book): void {
        book.returnBook();
        console.log(`${this.getName()} vrátil(a) knihu "${book.getTitle()}".`);
    }

    private getName(): string {
        // Používáme protected vlastnost name z třídy Reader, protože jméno je privátní.
        return this['name'];
    }
}

export default Librarian;

