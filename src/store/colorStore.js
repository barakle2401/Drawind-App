export function createColorStore() {

    return {
        currentColor: '#fff',
        setColor(color) {
            console.log({ color });
            this.currentColor = color;
        }
    }
}