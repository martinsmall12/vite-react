import HashTable from "../../dataStructures/HashTable.ts";

interface Person {
    name: string;
    age: number;
    height: number;
}

export const HashTablePeople = () => {
    const hashTable = new HashTable<string, Person>();

    hashTable.set('Alice', { name: 'Alice', age: 25, height: 170 });
    hashTable.set('Bob', { name: 'Bob', age: 30, height: 180 });

    const heightBob = hashTable.get('Bob')?.height;

    console.log('Alice:', hashTable.get('Alice')); // Výstup: Alice: 25
    hashTable.remove('Alice');
    console.log('Alice po odstranění:', hashTable.get('Alice')); // Výstup: Alice po odstranění: undefined

    return (
        <div>
            <h2>HashTable</h2>
            <p>HashTable je datová struktura, která ukládá hodnoty podle klíče.</p>
            {heightBob && <p>Bobova výška: {heightBob}</p>}
        </div>
    );

}
