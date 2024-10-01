import {Book} from "../../designPatterns/constructor/Book.ts";


export const Constructor = () => {
    // Použití
    const book = new Book("1984", "George Orwell", 1949);
    console.log(book.getDetails()); // 1984, autor: George Orwell, rok vydání: 1949

    return (
        <div>
            <h2>Constructor</h2>
            <p>Constructor je návrhový vzor, který umožňuje vytvářet objekty s využitím konstruktoru.</p>
            <p>Book</p>
            <p>{book.getDetails()}</p>
        </div>
    );

}


