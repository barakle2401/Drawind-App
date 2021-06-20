import { useObserver } from 'mobx-react';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
//Mobx
import { useStore } from './store/StoreContext';
// Components
import Canvas from "./components/canvas/Canvas";
import ToolsBar from "./components/toolsBar/ToolsBar"
//Material UI


function App() {

  useEffect(() => {

  })
  return useObserver(() =>
    <React.Fragment>
      <ToolsBar></ToolsBar>
      <Canvas></Canvas>
    </React.Fragment>
  );
}

export default App;

