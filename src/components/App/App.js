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
    // Задаем первоначальный конфиг-массив.

    const [ needfulString, setNeedfulString ] = useState('');
    // Стейт, в котором хранится значение с поисковой строки
    const handleChange = (event) => setNeedfulString(event.target.value);
    // Функция, отрабатывающая при изменении поисковой строки

    return (
        <div className="app">
            <h1>3rd task</h1>
            <input type="text" value={needfulString} onChange={handleChange}/>
            {/*Значение строки и функция, отрабатывающая при изменении инпута*/}
            <ComponentsList componentsConfig={componentsConfig} needfulString={needfulString}/>
            {/*ComponentList сам определяет, что нужно будет */}
        </div>
    );
}

export default App;
