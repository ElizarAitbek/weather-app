import React, { useEffect } from "react";
import { WeatherForm } from "./components/WeatherForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/actions/weather-actions";
import { DisplayWeather } from "./components/DisplayWeather";

export const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchWeatherData("Bishkek"));
  }, []);

  return (
    <div className="App">
      <h2>Weather App</h2>
      <WeatherForm />
      {loading ? <p>Loading...</p> : <DisplayWeather />}
    </div>
  );
};
