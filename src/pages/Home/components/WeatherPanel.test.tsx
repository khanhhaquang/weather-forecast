import { render, screen } from 'utils/test';
import WeatherPanel from './WeatherPanel';

describe('Home/WeatherPanel', () => {
  const mockState = {
    home: {
      data: [
        {
          id: 1,
          min_temp: 10,
          max_temp: 20,
          applicable_date: '1999/1/1',
          weather_state_name: 'foo',
          weather_state_abbr: 'bar',
        },
      ],
    },
  };

  it('should render correctly', () => {
    const { asFragment } = render(<WeatherPanel />, {
      initialState: { ...mockState },
    });
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('weather-card-1')).toBeInTheDocument();
  });
});
