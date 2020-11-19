import React from 'react';
import Component from "../Component/Component";
import './ComponentsList.css'

function ComponentsList(props) {
    const componentsConfig = props.componentsConfig;

    return (
        <ul className='components-list'>
            {
                componentsConfig.map(componentConfig => {
                    const { id } = componentConfig;

                    return <Component key={id} {...componentConfig} />
                })
            }
        </ul>
    )
}

export default ComponentsList;