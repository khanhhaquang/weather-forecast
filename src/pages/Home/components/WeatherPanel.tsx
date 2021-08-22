import { useSelector } from 'react-redux';
import { getWeatherData } from '../redux/reducer';
import WeatherCard from './WeatherCard';

const WeatherPanel: React.FC = () => {
  const weatherArray = useSelector(getWeatherData);

  return (
    <>
      {weatherArray.slice(0, 5).map((data) => (
        <WeatherCard
          data-testid={`weather-card-${data.id}`}
          key={data.id}
          minTemp={data.min_temp}
          maxTemp={data.max_temp}
          stateImg={data.weather_state_abbr}
          stateName={data.weather_state_name}
          day={data.applicable_date}
        />
      ))}
    </>
  );
};

export default WeatherPanel;
