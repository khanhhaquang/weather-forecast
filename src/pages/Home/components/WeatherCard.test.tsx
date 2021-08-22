import { render, screen } from 'utils/test';
import WeatherCard from './WeatherCard';

describe('Home/WeatherCard', () => {
  const mockState = {
    home: {},
  };

  const mockProps = {
    minTemp: '2',
    maxTemp: '3',
    day: '1/1/1999',
    stateImg: 'abc',
    stateName: 'xyz',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<WeatherCard {...mockProps} />, {
      initialState: { ...mockState },
    });
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Max/i)).toBeInTheDocument();
    expect(screen.getByText(/Min/i)).toBeInTheDocument();
  });
});
