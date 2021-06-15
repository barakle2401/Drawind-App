import { useObserver } from 'mobx-react';
import { useEffect, useState } from 'react';
import './App.css';
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import { useColorStore } from './store/StoreContext';
function App() {
  const colorStore = useColorStore();
  useEffect(() => {

  })
  return useObserver(() =>
    <div>
      <h1 style={{ backgroundColor: colorStore.currentColor }}>sss</h1>
      <ColorPicker></ColorPicker>
      <Canvas></Canvas>
    </div>
  );
}

export default App;

