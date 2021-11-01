import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementTitle = "Add 1!", decrementTitle='Remove 1!';
  let feedback = "";
  if (count > 9) feedback = "It's higher than 10!";
  else feedback = "Keep counting...";

  return (
    <>
      <Count count={count} />
      <Button setCount={setCount} title={incrementTitle} />
      <p></p>
      <Button setCount={setCount} title={decrementTitle} />
      <p>{feedback}</p>
    </>
  );
}
function Count({ count }) {
  return (
    <>
      <p>{count}</p>
    </>
  );
}
function Button({ setCount , title }) {
  const handleCount = () => {
    if(title==="Add 1!") {
    setCount((count) => {
      if (count < 10) count = count + 1;
      return count;
    });
  }else {
    setCount((count) => {
      if (count > 0) count = count - 1;
      return count;
    });
  }
  };
  return (
    <>
      <button onClick={handleCount}>{title}</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
