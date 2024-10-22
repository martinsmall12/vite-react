class TrieNode {
    public children: { [key: string]: TrieNode } = {};
    public isEndOfWord = false;
}

class Trie {
    private root: TrieNode = new TrieNode();

    // Vložení slova do Trie
    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Vyhledání slova v Trie
    search(word: string): boolean {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Kontrola, zda nějaká slova začínají určitým prefixem a vypíše je
    startsWith(prefix: string): string[] {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return []; // Prefix nenalezen
            }
            node = node.children[char];
        }

        // Shromažďuje slova, která začínají na tento prefix
        const result: string[] = [];
        this.collectAllWords(node, prefix, result);
        return result;
    }

    // Pomocná funkce pro rekurzivní sběr slov
    private collectAllWords(node: TrieNode, prefix: string, result: string[]) {
        if (node.isEndOfWord) {
            result.push(prefix);
        }

        for (const char in node.children) {
            this.collectAllWords(node.children[char], prefix + char, result);
        }
    }
}

export default Trie;
