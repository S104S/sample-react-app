import React, {useMemo, useContext} from 'react';
import {useImmer} from 'use-immer';

export default function makeStore() {
    const context = React.createContext("app");

    const Provider = ({children, initialState = {} }) => {
        console.log('init state');
        console.log(initialState);

        const [state, setState] = useImmer(initialState);

        console.log('state');
        console.log(state);

        const contextValue = useMemo(() => [state, setState], [state]);

        return <context.Provider value={contextValue}>{children}</context.Provider>;
    };

    const useStore = () => useContext(context);

    return {
        Provider,
        useStore
    }
};