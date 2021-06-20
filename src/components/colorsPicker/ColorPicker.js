import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { useStore } from '../../store/StoreContext';

function ColorPicker() {
    const colorStore = useStore();
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