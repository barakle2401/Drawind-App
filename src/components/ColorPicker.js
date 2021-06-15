import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { useColorStore } from '../store/StoreContext';

function ColorPicker() {
    const colorStore = useColorStore();
    const [background, setBackground] = useState(colorStore.currentColor)


    const handleChangeComplete = (color) => {

        colorStore.setColor(color.hex)
        setBackground(color.hex)
    };
    return (
        <SketchPicker
            color={background}
            onChange={handleChangeComplete}
        />
    );

}
export default ColorPicker