import "./App.css";
import { useWindowSize } from "./useWindowSize";
import { BigHead } from "@bigheads/core";

function App() {
  const windowSize = useWindowSize();
  return (
    <div className="App">
      <h1>
        {windowSize.width}px / {windowSize.height}px
      </h1>
    </div>
  );
}

export default App;
