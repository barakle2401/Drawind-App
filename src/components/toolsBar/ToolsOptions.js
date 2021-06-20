import React from 'react';
import { RadioGroup, FormControlLabel, Radio, FormControl } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


import { useStore } from "../../store/StoreContext"
const GreenRadio = withStyles({
    root: {
        color: pink[50],
        '&$checked': {
            color: pink[900],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export default function ToolsOptions() {

    const store = useStore();
    const [value, setValue] = React.useState(store.drawingType);

    const handleChange = (event) => {
        setValue(event.target.value);
        store.setDrawingType(event.target.value)
    };
    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="free" control={<GreenRadio />} label="Free Drawing" />
                <FormControlLabel value="line" control={<GreenRadio />} label="Line" />
                <FormControlLabel value="circle" control={<GreenRadio />} label="Circle" />
                <FormControlLabel value="rectangle" control={<GreenRadio />} label="Rectangle" />
            </RadioGroup>
        </FormControl>
    )

}