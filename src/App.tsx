import React from 'react';
import './App.css';
import {StackNumbers} from "./components/dataStructures/StackNumbers.tsx";
import QueueClient from "./components/dataStructures/QueueClient.tsx";
import {HashTablePeople} from "./components/dataStructures/HashTablePeople.tsx";

const App: React.FC = () => {

    return (
        <div>
            <StackNumbers />
            <QueueClient />
            <HashTablePeople />
        </div>
    );
};

export default App;
