import React, { Component, useState } from 'react';
import ColorPicker from "./ColorPicker"

import { DialogTitle, Dialog, Button } from '@material-ui/core/'

export default function ColorPickerDialog() {

    const [open, setOpen] = useState(false)
    return (

        <div>
            <a variant="outlined" color="primary" onClick={() => { setOpen(true) }}>
                Choose Color
           </a>
            <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={() => { setOpen(false) }}>
                <DialogTitle id="simple-dialog-title">Choose Color</DialogTitle>
                <ColorPicker></ColorPicker>
            </Dialog>
        </div>

    )

}