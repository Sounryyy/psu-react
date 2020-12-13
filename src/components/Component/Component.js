import React from 'react';

function Component(props) {
    const { id, content } = props; // Берем их пропсов айди и контент

    return (
        <li className='component'>
            <h3>№{id} - {content}</h3>
        </li>
    )
}

export default Component;
//Это stateless компонент, его единственная и основная функция - отрисовка контента.