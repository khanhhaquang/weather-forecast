import { render, screen } from 'utils/test';
import Error from './Error';

describe('Home/Error', () => {
  const mockState = {
    home: {
      error: {
        message: 'error',
      },
    },
  };

  it('should render correctly', () => {
    const { asFragment } = render(<Error />, { initialState: { ...mockState } });
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
