
import React from "react";
 import './App.css';
import FC from "./Components/FunctionalComp";
import { CLassComp, CLassComp1 } from "./Components/classcomp";
import Click from "./Components/Click"
function App() {
  return (
    <div>
      <h1> Hello! welcome </h1>
      <h1> Components Details </h1>
      <FC/>
      <CLassComp></CLassComp>
      <CLassComp1></CLassComp1>
      <Click></Click>
    </div>
    
  );
}

export default App;
