import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SearchInput, Error, WeatherCard } from './components';
import LoadingSection from './components/LoadingSection';
import { getWeatherData } from './reducer';

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const WeatherWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 8px;
`;

const Home: React.FC = () => {
  const weatherArray = useSelector(getWeatherData);
  return (
    <StyledWrapper>
      <SearchInput />
      <Error />
      <WeatherWrapper>
        <LoadingSection />
        {weatherArray.slice(0, 5).map((data) => (
          <WeatherCard
            key={data.id}
            minTemp={data.min_temp}
            maxTemp={data.max_temp}
            stateImg={data.weather_state_abbr}
            stateName={data.weather_state_name}
            day={data.applicable_date}
          />
        ))}
      </WeatherWrapper>
    </StyledWrapper>
  );
};

export default Home;
