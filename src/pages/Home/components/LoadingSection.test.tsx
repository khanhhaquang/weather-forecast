import { render, screen } from 'utils/test';
import Loading from './LoadingSection';

describe('Home/LoadingSection', () => {
  const mockState = {
    home: {
      isLoading: true,
    },
  };

  it('should render correctly', () => {
    render(<Loading />, { initialState: { ...mockState } });
    expect(screen.getByTestId('card-loader-1')).toBeInTheDocument();
  });
});
