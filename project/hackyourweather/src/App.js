import React from "react";
import "./App.css";
import { CityListController } from "./components/CityListController";

import SearchController, { SearchForm } from "./components/SearchController";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <SearchController />
      <CityListController />
    </div>
  );
}

export default App;
