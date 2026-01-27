import React from "react";
import {
  WeatherCard,
  WeatherIcon,
  CityName,
  Temperature,
  Description,
  CardActions,
  SaveButton,
  DeleteButton,
  LeftBlock,
  RightBlock,
} from "./styles";

export const OutputWeather = ({ weather, onSave, onDelete }) => {
  if (!weather || !weather.main) return null;

  const { name, main, weather: weatherInfo } = weather;
  const icon = weatherInfo[0].icon;
  const description = weatherInfo[0].description;

  return (
    <WeatherCard>
      <LeftBlock>
        <CityName>{name}</CityName>
        <Temperature>{Math.round(main.temp)}°C</Temperature>
        <Description>{description}</Description>
      </LeftBlock>

      <RightBlock>
        <WeatherIcon
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
        />
        <CardActions>
          {onSave && <SaveButton onClick={onSave}>Save</SaveButton>}
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </CardActions>
      </RightBlock>
    </WeatherCard>
  );
};

