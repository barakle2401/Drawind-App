import React from 'react';
import { createColorStore } from "./colorStore";
import { useLocalObservable } from 'mobx-react';

const ColorContext = React.createContext(null);

export const ColorProvider = ({ children }) => {

    const colorStore = useLocalObservable(createColorStore)
    return <ColorContext.Provider value={colorStore}>
        {children}
    </ColorContext.Provider>
}
export const useColorStore = () => React.useContext(ColorContext)