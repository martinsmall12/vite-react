class HashTable<K, V> {
    private table: { [key: string]: V } = {};

    set(key: K, value: V): void {
        this.table[JSON.stringify(key)] = value;
    }

    get(key: K): V | undefined {
        return this.table[JSON.stringify(key)];
    }

    remove(key: K): void {
        delete this.table[JSON.stringify(key)];
    }
}

export default HashTable;
