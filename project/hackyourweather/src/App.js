import React, { useState, useEffect } from "react";
import "./App.css";
import { CityList } from "./components/CityList";
import JSONCities from "./city-weather.json";

function App() {
  const [cities, setCities] = useState(JSONCities);
  useEffect(() => {
    setCities(JSONCities);
  }, [cities]);
  return (
    <div className="App">
      <h1>Weather</h1>
      <CityList cities={cities} />
    </div>
  );
}

export default App;
