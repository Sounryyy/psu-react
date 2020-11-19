import React from 'react';
import './App.css';
import ComponentsList from "../ComponentsList/ComponentsList";

function App() {
    const componentsConfig = [
        { id: 1, content: 'first component' },
        { id: 2, content: 'second component' },
        { id: 3, content: 'third component' },
        { id: 4, content: 'fourth component' },
        { id: 5, content: 'fifth component' },
    ]
    return (
        <div className="app">
            <h1>2nd task</h1>
            <ComponentsList componentsConfig={componentsConfig}/>
        </div>
    );
}

export default App;
