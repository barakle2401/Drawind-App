import React, { Component, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useStore } from "../../store/StoreContext";
import rough from 'roughjs/bundled/rough.esm';
const generator = rough.generator();
function createElement(x1, y1, x2, y2) {

    const roughElement = generator.line(x1, y1, x2, y2, { fill: 'red' });
    return { x1, y1, x2, y2, roughElement }

}
function Canvas() {

    const canvasRef = useRef(null)
    const canvasContextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const store = useStore()
    const [elements, setElements] = useState([])
    useLayoutEffect(() => {
        const canvas = document.getElementById('canvas');
        // canvas.width = window.innerWidth * 2;
        // canvas.height = window.innerHeight * 2;
        // canvas.style.width = `${window.innerWidth}px`
        // canvas.style.height = `${window.innerHeight}px`
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const roughCanvas = rough.canvas(canvas)




        // ctx.scale(2, 2);
        // ctx.lineCap = "round";
        // ctx.lineWidth = 3;
        canvasContextRef.current = ctx;
        // store.setCanvasRef(ctx)
        // store.setRoughCanvasRef(roughCanvas)


        elements.forEach(({ roughElement }) => { roughCanvas.draw(roughElement) })

    }, [elements])
    // useEffect(() => {


    //     drawElements()

    // }, [isDrawing])

    const drawElements = () => {

        elements.forEach(({ roughElement }) => { store.roughCanvasRef.draw(roughElement) })
    }
    const startDrawing = ({ nativeEvent }) => {
        setIsDrawing(true)
        const { clientX, clientY } = nativeEvent
        if (store.drawingType === 'free') {
            // canvasContextRef.current.strokeStyle = store.currentColor
            // canvasContextRef.current.beginPath()
            // canvasContextRef.current.moveTo(offsetX, offsetY);

        }
        else {


            const element = createElement(clientX, clientY, clientX, clientY)
            setElements((prevState) => [...prevState, element])

        }


    }

    const finishDrawing = () => {
        setIsDrawing(false)

        canvasContextRef.current.closePath()
    }

    const draw = ({ nativeEvent }) => {

        if (!isDrawing)
            return

        const { clientX, clientY } = nativeEvent;
        if (store.drawingType === 'free') {
            // canvasContextRef.current.lineTo(clientX, clientY);
            // canvasContextRef.current.stroke();
        } else {
            const { x1, x2 } = elements[elements.length - 1]
            const element = createElement(x1, x2, clientX, clientY)

            const elementsCopy = [...elements];
            elementsCopy[elements.length - 1] = element;
            setElements(elementsCopy)
        }





    }

    return (
        <div>
            {/* <button onClick={clearCanvas}>Clear</button> */}

            <canvas id="canvas" width={500} height={500} ref={canvasRef} onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw}></canvas>

        </div>
    )

}
export default Canvas