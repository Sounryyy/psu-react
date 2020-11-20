import React, {useState} from 'react';
import './App.css';
import ComponentsList from "../ComponentsList/ComponentsList";

function App() {
    const componentsConfig = [
        { id: 1, content: 'first component' },
        { id: 2, content: 'second component' },
        { id: 3, content: 'third component' },
        { id: 4, content: 'fourth component' },
        { id: 5, content: 'fifth component' },
    ];
    const [ needfulString, setNeedfulString ] = useState('');
    const handleChange = (event) => setNeedfulString(event.target.value);

    return (
        <div className="app">
            <h1>3rd task</h1>
            <input type="text" value={needfulString} onChange={handleChange}/>
            <ComponentsList componentsConfig={componentsConfig} needfulString={needfulString}/>
        </div>
    );
}

export default App;
