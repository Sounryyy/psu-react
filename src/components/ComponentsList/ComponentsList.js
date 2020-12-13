import React, {useEffect} from 'react';
import Component from "../Component/Component";
import './ComponentsList.css'
import {checkContentEntry} from "../helpers/common";

function ComponentsList(props) {
    const { componentsConfig, needfulString } = props; // Берем их пропсов айди и контент
    const viewComponentsConfig = componentsConfig.filter(componentConfig => checkContentEntry(componentConfig, needfulString));
    // Проверяем вхождения с помощью хелпера, который переводит строки в нижний регистр.

    useEffect(() => {
        document.title = `${viewComponentsConfig.length} element(s) found`
    }, [viewComponentsConfig])
    // Обновляем тайтл страницы исходя из значения viewComponentsConfig

    useEffect(() => {
        document.title = 'useEffect hook example'
    },[]);
    // При первом маунтинге компонента задаем тайтл страницы.


    return (
        <ul className='components-list'>
            {
                viewComponentsConfig.map(componentConfig => {
                    const { id } = componentConfig;
                    //Выводим все компоненты, удовлетворяющие критериям поиска
                    return <Component key={id} {...componentConfig} />
                })
            }
        </ul>
    )
}

export default ComponentsList;