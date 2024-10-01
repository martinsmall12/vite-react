import React from 'react';
import './App.css';
import {Modules} from "./components/designPatterns/Modules.tsx";
import {Singleton} from "./components/designPatterns/Singleton.tsx";
import {Prototype} from "./components/designPatterns/Prototype.tsx";
import {Factory} from "./components/designPatterns/Factory.tsx";
import {Constructor} from "./components/designPatterns/Constructor.tsx";
import {ObserverView} from "./components/designPatterns/observer/ObserverView.tsx";

const App: React.FC = () => {

    return (
        <div>
            <Modules />
            <Singleton />
            <Prototype />
            <Factory />
            <Constructor />
            <ObserverView />
        </div>
    );
};

export default App;
