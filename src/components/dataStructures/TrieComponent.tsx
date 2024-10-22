import React, { useState } from 'react';
import Trie from "../../dataStructures/Trie.ts";

// Hlavní komponenta
const TrieComponent: React.FC = () => {
    const [trie] = useState(new Trie()); // Stav pro instanci Trie
    const [word, setWord] = useState(''); // Stav pro přidávání slova
    const [searchTerm, setSearchTerm] = useState(''); // Stav pro vyhledávání
    const [prefixTerm, setPrefixTerm] = useState(''); // Stav pro hledání prefixu
    const [wordsList, setWordsList] = useState<string[]>([]); // Stav pro výpis všech slov
    const [searchResult, setSearchResult] = useState<boolean | null>(null); // Výsledek vyhledávání
    const [prefixResult, setPrefixResult] = useState<string[]>([]); // Výsledky vyhledávání podle prefixu

    // Funkce pro přidání slova
    const handleAddWord = (e: React.FormEvent) => {
        e.preventDefault();
        if (word) {
            trie.insert(word);
            setWordsList(prevList => [...prevList, word]); // Přidáme slovo do seznamu
            setWord(''); // Vyčistí vstupní pole
        }
    };

    // Funkce pro vyhledávání slova
    const handleSearchWord = (e: React.FormEvent) => {
        e.preventDefault();
        const found = trie.search(searchTerm);
        setSearchResult(found);
    };

    // Funkce pro vyhledávání podle prefixu
    const handleSearchPrefix = (e: React.FormEvent) => {
        e.preventDefault();
        const wordsWithPrefix = trie.startsWith(prefixTerm);
        setPrefixResult(wordsWithPrefix);
    };

    return (
        <div>
            <h1>Slovník Trie</h1>

            {/* Formulář pro přidání slova */}
            <form onSubmit={handleAddWord}>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Zadej slovo"
                    required
                />
                <button type="submit">Přidat slovo</button>
            </form>

            {/* Výpis všech slov */}
            <h2>Všechna slova ve slovníku:</h2>
            {wordsList.length > 0 ? (
                <ul>
                    {wordsList.map((word, index) => (
                        <li key={index}>{word}</li>
                    ))}
                </ul>
            ) : (
                <p>Žádná slova zatím nejsou ve slovníku.</p>
            )}

            {/* Formulář pro vyhledávání slova */}
            <h2>Vyhledávání slova</h2>
            <form onSubmit={handleSearchWord}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Hledané slovo"
                    required
                />
                <button type="submit">Najít slovo</button>
            </form>

            {/* Výsledek vyhledávání */}
            {searchTerm && searchResult !== null && (
                <div>
                    {searchResult ? (
                        <p>Slovo "{searchTerm}" bylo nalezeno ve slovníku.</p>
                    ) : (
                        <p>Slovo "{searchTerm}" nebylo nalezeno.</p>
                    )}
                </div>
            )}

            {/* Formulář pro vyhledávání podle prefixu */}
            <h2>Vyhledávání slov podle prefixu</h2>
            <form onSubmit={handleSearchPrefix}>
                <input
                    type="text"
                    value={prefixTerm}
                    onChange={(e) => setPrefixTerm(e.target.value)}
                    placeholder="Prefix"
                    required
                />
                <button type="submit">Najít slova podle prefixu</button>
            </form>

            {/* Výsledek vyhledávání podle prefixu */}
            {prefixTerm && (
                <div>
                    <h3>Slova začínající na "{prefixTerm}":</h3>
                    {prefixResult.length > 0 ? (
                        <ul>
                            {prefixResult.map((word, index) => (
                                <li key={index}>{word}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Žádná slova s tímto prefixem nebyla nalezena.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TrieComponent;
