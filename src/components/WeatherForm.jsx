import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/actions/weather-actions";

export const WeatherForm = () => {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(cityName));
  };

  const cityNameInputHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={cityNameInputHandler}
        type="search"
        placeholder="enter the city..."
      />
      <button type="submit">submit</button>
    </form>
  );
};
