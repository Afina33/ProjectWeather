import { useAppSelector } from "store/hooks";

export default function outputWeathers() {
  const weatherList = useAppSelector(
    state => state.WEATHER_CARD.weatherData
  );

  if (!weatherList.length) {
    return <p>Сохранённых городов нет</p>;
  }

  return (
    <div>
      {weatherList.map(weather => (
        <div key={weather.id}>
          <h3>{weather.city}</h3>
          <p>{Math.round(weather.celsius)}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.city}
          />
        </div>
      ))}
    </div>
  );
}
