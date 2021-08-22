import { META_WEATHER_DOMAIN } from 'config';
import styled from 'styled-components';
import { getWeekDay, roundVal } from '../helpers';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  border-radius: 4px;
  padding: 8px;
`;

const DateText = styled.h2`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #337ab7;
`;

const StateWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 18px;

  span {
    margin-left: 4px;
  }
`;

type TProps = {
  minTemp: number;
  maxTemp: number;
  day: Date;
  stateImg: string;
  stateName: string;
};

const WeatherCard: React.FC<TProps> = ({
  minTemp,
  maxTemp,
  day,
  stateImg,
  stateName,
  ...rest
}: TProps) => (
  <StyledWrapper {...rest}>
    <DateText>{getWeekDay(new Date(day))}</DateText>
    <StateWrapper>
      <img
        alt="state"
        width={24}
        height={24}
        src={`${META_WEATHER_DOMAIN}/static/img/weather/png/64/${`${stateImg}.png`}`}
      />
      <span>{stateName}</span>
    </StateWrapper>
    <span>Max: {roundVal(maxTemp)}°C</span>
    <span>Min: {roundVal(minTemp)}°C</span>
  </StyledWrapper>
);
export default WeatherCard;
