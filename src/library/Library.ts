import Reader from "./Reader.ts";
import Book from "./Book.ts";

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
       this.books.push(book);
        console.log(`Kniha "${book.getTitle()}" byla přidána do knihovny.`);
    }

    public listAvailableBooks(): Book[] {
        const books = this.books.filter((b) => b.isAvailable())
        console.log("Dostupné knihy:");
        books.forEach((book) => console.log(`- ${book.getTitle()}`));
        return books;
    }

    public checkOutBook(reader: Reader, bookTitle: string): void {
        const book = this.books.find((b) => b.getTitle() === bookTitle);

        if (book) {
            reader.borrowBook(book);
        } else {
            console.log(`Kniha "${bookTitle}" nebyla nalezena.`);
        }
    }
}

export default Library;
