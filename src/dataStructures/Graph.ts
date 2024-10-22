class GraphNode {
    name: string;
    edges: Map<GraphNode, number>;

    constructor(name: string) {
        this.name = name;
        this.edges = new Map();
    }
}

class Graph {
    private nodes: Map<string, GraphNode>;

    constructor() {
        this.nodes = new Map();
    }

    addNode(name: string): void {
        const node = new GraphNode(name);
        this.nodes.set(name, node);
    }

    addEdge(from: string, to: string, weight: number): void {
        const fromNode = this.nodes.get(from);
        const toNode = this.nodes.get(to);

        if (fromNode && toNode) {
            fromNode.edges.set(toNode, weight);
        }
    }

    // BFS (Breadth-First Search)
    bfs(startNodeName: string): string[] {
        const startNode = this.nodes.get(startNodeName);
        if (!startNode) return [];

        const visited = new Set<GraphNode>();
        const queue: GraphNode[] = [];
        const result: string[] = [];

        queue.push(startNode);
        visited.add(startNode);

        while (queue.length > 0) {
            const currentNode = queue.shift()!;
            result.push(currentNode.name);

            for (const neighbor of currentNode.edges.keys()) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }

        return result;
    }

    // DFS (Depth-First Search)
    dfs(startNodeName: string): string[] {
        const startNode = this.nodes.get(startNodeName);
        if (!startNode) return [];

        const visited = new Set<GraphNode>();
        const result: string[] = [];

        const dfsVisit = (node: GraphNode) => {
            visited.add(node);
            result.push(node.name);

            for (const neighbor of node.edges.keys()) {
                if (!visited.has(neighbor)) {
                    dfsVisit(neighbor);
                }
            }
        };

        dfsVisit(startNode);

        return result;
    }

    // Dijkstra (najde nejkratší cesty od startNode k ostatním uzlům)
    dijkstra(startNodeName: string): { [key: string]: number } {
        const startNode = this.nodes.get(startNodeName);
        if (!startNode) return {};

        const distances: { [key: string]: number } = {};
        const visited = new Set<GraphNode>();
        const priorityQueue: { node: GraphNode; distance: number }[] = [];

        this.nodes.forEach((_, nodeName) => {
            distances[nodeName] = Infinity;
        });
        distances[startNodeName] = 0;

        priorityQueue.push({ node: startNode, distance: 0 });

        while (priorityQueue.length > 0) {
            priorityQueue.sort((a, b) => a.distance - b.distance);
            const { node: currentNode } = priorityQueue.shift()!;

            if (visited.has(currentNode)) continue;
            visited.add(currentNode);

            currentNode.edges.forEach((weight, neighbor) => {
                const newDistance = distances[currentNode.name] + weight;
                if (newDistance < distances[neighbor.name]) {
                    distances[neighbor.name] = newDistance;
                    priorityQueue.push({ node: neighbor, distance: newDistance });
                }
            });
        }

        return distances;
    }

    getGraphData() {
        const nodes: { id: string }[] = [];
        const links: { source: string; target: string; label: number }[] = [];

        this.nodes.forEach((node) => {
            nodes.push({ id: node.name });
            node.edges.forEach((weight, neighbor) => {
                links.push({ source: node.name, target: neighbor.name, label: weight });
            });
        });

        return { nodes, links };
    }
}

export default Graph;
