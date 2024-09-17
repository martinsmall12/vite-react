import './App.css'
import Book from "./classes/Book.ts";
import Reader from "./classes/Reader.ts";
import Librarian from "./classes/Librarian.ts";
import Library from "./classes/Library.ts";
import { useState} from "react";

function App() {

    // Vytvoření knih
    const book1 = new Book("1984", "George Orwell");
    const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

// Vytvoření čtenáře a knihovníka
    const reader = new Reader("Alice");
    const librarian = new Librarian("Bob");

// Vytvoření knihovny
    const library = new Library();
    library.addBook(book1);
    library.addBook(book2);

// Zobrazení dostupných knih
    library.listAvailableBooks();

// Čtenář si půjčuje knihu
    library.checkOutBook(reader, "1984");

// Pokus o opětovné půjčení téže knihy
    library.checkOutBook(reader, "1984");

// Zobrazení dostupných knih po půjčení
    library.listAvailableBooks();

// Knihovník vrací knihu
   librarian.returnBook(book1);

// Zobrazení dostupných knih po vrácení


    //const listAvailableBooks = library.listAvailableBooks();


    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [listAvailableBooks, setListAvailableBooks] = useState(library.listAvailableBooks());

    return (
        <>
            <div>
                <div>
                    <input name={'title'} value={title} onChange={(event) => setTitle(event.target.value) } />
                    <input name={'author'} value={author} onChange={(event) => setAuthor(event.target.value)} />
                    <button type={"button"} onClick={() => {
                        const book = new Book(title, author);
                        library.addBook(book);
                        setTitle('');
                        setAuthor('');
                        setListAvailableBooks(library.listAvailableBooks());
                    }}>Přidat knihu</button>
                </div>
                {listAvailableBooks.map((book) => (
                    <div key={book.getTitle()}>
                        <h2>{book.getTitle()}</h2><button type={"button"} onClick={() => {
                            library.checkOutBook(reader, book.getTitle());
                            setListAvailableBooks(library.listAvailableBooks());
                        }}>Půjčit</button>
                        <p>{book.getAuthor()}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default App
