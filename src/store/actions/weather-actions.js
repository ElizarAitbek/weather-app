const fetchWeatherRequest = () => ({
  type: "FETCH_WEATHER_REQUEST",
});

const fetchWeatherSuccess = (data) => ({
  type: "FETCH_WEATHER_SUCCESS",
  payload: data,
});

const fetchWeatherFailure = (error) => ({
  type: "FETCH_WEATHER_FAILURE",
  payload: error,
});

export const fetchWeatherData = (cityName) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    fetch(
      `https://api.weatherapi.com/v1/current.json?q=${cityName}&lang=ru&key=b21c51d1cf2641aab6d110504232405`
    )
      .then((response) => response.json())
      .then((data) => dispatch(fetchWeatherSuccess(data)))
      .catch((error) => dispatch(fetchWeatherFailure(error)));
  };
};
