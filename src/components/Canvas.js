import React, { Component, useEffect, useRef, useState } from 'react';

function Canvas() {

    const canvasRef = useRef(null)
    const cavansContextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const ctx = canvas.getContext("2d");
        ctx.scale(2, 2);
        ctx.lineCap = "round";
        ctx.lineWidth = 5;
        cavansContextRef.current = ctx;
    }, [])

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent


        cavansContextRef.current.beginPath()
        cavansContextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        setIsDrawing(false)
        cavansContextRef.current.closePath()
    }

    const draw = ({ nativeEvent }) => {

        if (!isDrawing)
            return
        const { offsetX, offsetY } = nativeEvent;
        cavansContextRef.current.lineTo(offsetX, offsetY);
        cavansContextRef.current.stroke();


    }
    const clearCanvas = () => {

        const { width, height } = cavansContextRef.current.canvas;

        cavansContextRef.current.clearRect(0, 0, width, height)

    }

    return (
        <div>
            <button onClick={clearCanvas}>Clear</button>
            <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw}></canvas>
        </div>
    )

}
export default Canvas