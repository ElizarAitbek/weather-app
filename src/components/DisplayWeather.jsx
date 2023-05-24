import React from "react";
import { useSelector } from "react-redux";

export const DisplayWeather = () => {
  const { location, current } = useSelector((state) => state);

  return (
    <div>
      <span>
        погода в | {location.name} {location.country} | сейчас
      </span>

      <h3> {current.temp_c} C&deg;</h3>
      {current != "" && <img src={current.condition.icon} alt="weather icon" />}

      <h4>Ощущается как {current.feelslike_c} C&deg;</h4>

      {current != "" && (
        <p>
          {current.condition.text}, облачность: {current.cloud}%
        </p>
      )}
    </div>
  );
};
