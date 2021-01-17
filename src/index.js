import './style.css';
import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME I AM A REACT COMPONENT");
    return <button className = "hello" onClick={() => setState("CLICKED - Reactified")}>{state}</button>;
}

render(<App />, document.getElementById("root"));