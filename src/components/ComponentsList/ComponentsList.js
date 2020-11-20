import React, {useEffect} from 'react';
import Component from "../Component/Component";
import './ComponentsList.css'
import {checkContentEntry} from "../helpers/common";

function ComponentsList(props) {
    const { componentsConfig, needfulString } = props;
    const viewComponentsConfig = componentsConfig.filter(componentConfig => checkContentEntry(componentConfig, needfulString));

    useEffect(() => {
        document.title = `${viewComponentsConfig.length} element(s) found`
    }, [viewComponentsConfig])

    useEffect(() => {
        document.title = 'useEffect hook example'
    },[]);

    return (
        <ul className='components-list'>
            {
                viewComponentsConfig.map(componentConfig => {
                    const { id } = componentConfig;

                    return <Component key={id} {...componentConfig} />
                })
            }
        </ul>
    )
}

export default ComponentsList;