import { useState } from "react";
import "./App.css";
import Tiptap from "./src/Tiptap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Tiptap />
    </div>
  );
}

export default App;
