import React from 'react';
import styled from 'styled-components';
import { SearchInput, Error, LoadingSection, WeatherPanel } from './components';

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

const Home: React.FC = () => (
  <StyledWrapper>
    <SearchInput />
    <Error />
    <WeatherWrapper>
      <LoadingSection />
      <WeatherPanel />
    </WeatherWrapper>
  </StyledWrapper>
);

export default Home;
