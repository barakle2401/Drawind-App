import React, { Component, useEffect } from 'react';
import "../../style/sass/ToolsBar.scss";

//COMPONENTS 
import ToolsOptions from "./ToolsOptions"
//UI
import ColorPickerDialog from "../colorsPicker/ColorPickerDialog"
import { useStore } from "../../store/StoreContext";


export default function ToolsBar() {

    const store = useStore();
    useEffect(() => {

    }, [])
    const clearCanvas = () => {
        console.log();
        const { width, height } = store.canvasRef.canvas;

        store.canvasRef.clearRect(0, 0, width, height)
    }
    return (

        <React.Fragment>
            <div className="tools-bar">
                <a onClick={clearCanvas}> Clear</a>
                <ColorPickerDialog></ColorPickerDialog>
                <ToolsOptions></ToolsOptions>
            </div>
        </React.Fragment>
    )

}