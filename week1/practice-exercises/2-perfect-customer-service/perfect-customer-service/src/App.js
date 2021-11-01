import { useState } from "react";
import "./App.css";
import { GuaranteeList } from "./GuaranteeList.js";

function App() {
  const guarantees = [
    {
      src: "./images/coin.png",
      title: "Economic",
      description: "The best quality for the low price...",
    },
    {
      src: "./images/chat.png",
      title: "Communication",
      description: "The easiest way to contact...",
    },
    {
      src: "./images/f-delivery.png",
      title: "Delivery",
      description: "The fastest delivery...",
    },
  ];
  const [list, setList] = useState(guarantees);
  return (
    <div className="App">
      <GuaranteeList images={list} />
    </div>
  );
}

export default App;
