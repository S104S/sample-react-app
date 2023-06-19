import React, {useEffect} from 'react';
import Home from './home.pres';
import {useHome} from "./home.hooks";
const HomeContainer = () => {
    const {baseVals, loadDefaults, addDefault} = useHome();

    useEffect(() => {
        if (baseVals === null) {
            console.log('loading defaults');
            console.log('loading defaults');
            loadDefaults()
        }
    }, [baseVals])
    return (
        <Home
            baseVals={baseVals}
            addAnotherDefault={addDefault}
        />
    )
}

export default HomeContainer;