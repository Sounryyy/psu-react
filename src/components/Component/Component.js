import React from 'react';

function Component(props) {
    const { id, content } = props;

    return content
        ? (
            <li className='component'>
                <h3>№{id} - {content}</h3>
            </li>
        )
        : null;
}

export default Component;