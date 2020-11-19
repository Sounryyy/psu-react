import React from 'react';
import Component from "../Component/Component";

function ComponentsList(props) {
    const componentsConfig = props.componentsConfig;
    console.log(componentsConfig)
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