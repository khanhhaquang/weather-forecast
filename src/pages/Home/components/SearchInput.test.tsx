import { render, screen, fireEvent } from 'utils/test';
import SearchInput from './SearchInput';

describe('Home/SearchInput', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SearchInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should change correctly', () => {
    render(<SearchInput />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'foo' } });
    expect(input.value).toBe('foo');
  });
});
