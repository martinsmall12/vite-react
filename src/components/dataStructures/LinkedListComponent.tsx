import {useState} from "react";
import LinkedList from "../../dataStructures/LinkedList.ts";

export const LinkedListComponent: React.FC = () => {
const [books] = useState(new LinkedList<string>()); // Stav pro seznam knih
const [bookName, setBookName] = useState(''); // Stav pro název knihy
const [searchName, setSearchName] = useState(''); // Stav pro hledání knihy
const [foundBook, setFoundBook] = useState<string | null>(null); // Stav pro nalezenou knihu

// Funkce pro přidání knihy
const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookName) {
        books.add(bookName);
        setBookName(''); // Vyčistí vstupní pole po přidání
        alert(`Kniha '${bookName}' byla přidána.`);
    }
};

// Funkce pro vyhledání knihy
const handleSearchBook = (e: React.FormEvent) => {
    e.preventDefault();
    const result = books.find(searchName);
    setFoundBook(result ? result.value : null);
};

// Získání všech knih
const allBooks = books.getAll();

return (
    <div>
        <h1>Seznam knih</h1>

        {/* Formulář pro přidání nové knihy */}
        <form onSubmit={handleAddBook}>
            <input
                type="text"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                placeholder="Název knihy"
                required
            />
            <button type="submit">Přidat knihu</button>
        </form>

        {/* Výpis všech knih */}
        <h2>Všechny knihy:</h2>
        <ul>
            {allBooks.map((book, index) => (
                <li key={index}>{book}</li>
            ))}
        </ul>

        {/* Formulář pro vyhledání knihy */}
        <h2>Vyhledávání knih</h2>
        <form onSubmit={handleSearchBook}>
            <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Vyhledat knihu"
                required
            />
            <button type="submit">Najít knihu</button>
        </form>

        {/* Výsledek vyhledávání */}
        {searchName && (
            <div>
                {foundBook ? (
                    <p>Kniha nalezena: {foundBook}</p>
                ) : (
                    <p>Kniha '{searchName}' nebyla nalezena.</p>
                )}
            </div>
        )}
    </div>
);
}
