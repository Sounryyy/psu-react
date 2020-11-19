import React from 'react';

function Component(props) {
    const { content } = props;
    console.log(content)
    return content
        ? (
            <li className='component'>
                <h3>{content}</h3>
            </li>
        )
        : null;
}

export default Component;