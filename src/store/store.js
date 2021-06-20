export function createStore() {

    return {
        currentColor: '#f50057',
        setColor(color) {
            console.log({ color });
            this.currentColor = color;
        },
        canvasRef: null,
        setCanvasRef(ref) {
            this.canvasRef = ref;
        },
        roughCanvasRef: null,
        setRoughCanvasRef(ref) {
            this.roughCanvasRef = ref;
        },
        drawingType: 'line',
        setDrawingType(type) {

            this.drawingType = type;
        }
    }
}