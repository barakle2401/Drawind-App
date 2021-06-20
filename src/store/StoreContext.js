import React from 'react';
import { createStore } from "./store";
import { useLocalObservable } from 'mobx-react';

const StoreContext = React.createContext(null);

export const ColorProvider = ({ children }) => {

    const colorStore = useLocalObservable(createStore)
    return <StoreContext.Provider value={colorStore}>
        {children}
    </StoreContext.Provider>
}
export const useStore = () => React.useContext(StoreContext)