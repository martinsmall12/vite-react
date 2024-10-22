import React, {useState} from "react";
import Graph from "../../dataStructures/Graph.ts";
import {ForceGraph2D} from "react-force-graph";

export const GraphComponent: React.FC = () => {
    const [graph] = useState(new Graph());
    const [graphData, setGraphData] = useState(graph.getGraphData()); // Inicializace grafu
    const [nodeName, setNodeName] = useState('');
    const [fromNode, setFromNode] = useState('');
    const [toNode, setToNode] = useState('');
    const [edgeWeight, setEdgeWeight] = useState<number>(0);

    // Přidání uzlu a aktualizace grafu
    const handleAddNode = () => {
        if (nodeName) {
            graph.addNode(nodeName);
            setNodeName(''); // Reset vstupu
            setGraphData(graph.getGraphData()); // Aktualizace dat grafu
        }
    };

    // Přidání hrany a aktualizace grafu
    const handleAddEdge = () => {
        if (fromNode && toNode && edgeWeight) {
            graph.addEdge(fromNode, toNode, edgeWeight);
            setFromNode('');
            setToNode('');
            setEdgeWeight(0);
            setGraphData(graph.getGraphData()); // Aktualizace dat grafu
        }
    };

    // Implementace grafu
    const graph1 = new Graph();

// Přidání uzlů (města)
    graph1.addNode('Praha');
    graph1.addNode('Brno');
    graph1.addNode('Ostrava');
    graph1.addNode('Plzeň');
    graph1.addNode('Liberec');

// Přidání hran (cesty mezi městy s váhami - např. vzdáleností v kilometrech)
    graph1.addEdge('Praha', 'Brno', 200);
    graph1.addEdge('Praha', 'Ostrava', 350);
    graph1.addEdge('Praha', 'Plzeň', 90);
    graph1.addEdge('Brno', 'Ostrava', 170);
    graph1.addEdge('Ostrava', 'Liberec', 220);
    graph1.addEdge('Plzeň', 'Liberec', 160);

// BFS
    console.log('Prohledávání do šířky (z Prahy):', graph1.bfs('Praha'));

// DFS
    console.log('Prohledávání do hloubky (z Prahy):', graph1.dfs('Praha'));

    // Dijkstra - Nejkratší vzdálenosti z Prahy
    console.log('Dijkstra (nejkratší cesty z Prahy):', graph1.dijkstra('Praha'));



    return (
        <div className="graph-container">
            <h1>Interaktivní Graf</h1>

            {/* Sekce pro přidání uzlu */}
            <div className="form-container">
                <div className="form-group">
                    <input
                        type="text"
                        value={nodeName}
                        onChange={(e) => setNodeName(e.target.value)}
                        placeholder="Název uzlu"
                        className="form-input"
                    />
                    <button onClick={handleAddNode} className="form-button">Přidat uzel</button>
                </div>

                {/* Sekce pro přidání hrany */}
                <div className="form-group">
                    <input
                        type="text"
                        value={fromNode}
                        onChange={(e) => setFromNode(e.target.value)}
                        placeholder="Z uzlu"
                        className="form-input"
                    />
                    <input
                        type="text"
                        value={toNode}
                        onChange={(e) => setToNode(e.target.value)}
                        placeholder="Do uzlu"
                        className="form-input"
                    />
                    <input
                        type="number"
                        value={edgeWeight}
                        onChange={(e) => setEdgeWeight(Number(e.target.value))}
                        placeholder="Váha hrany"
                        className="form-input"
                    />
                    <button onClick={handleAddEdge} className="form-button">Přidat hranu</button>
                </div>
            </div>

            {/* Zobrazení grafu */}
            <div className="graph-view">
                <ForceGraph2D
                    graphData={graphData}
                    nodeLabel={(node: any) => node.id}
                    linkLabel={(link: any) => `${link.label}`}
                    linkDirectionalArrowLength={6}
                    linkDirectionalArrowRelPos={1}
                    linkCurvature={0.25}
                />
            </div>
        </div>
    );
};
