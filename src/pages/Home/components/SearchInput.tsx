import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useDebounce } from 'hooks';
import { getWeather } from '../actions';

const Input = styled.input`
  outline: none;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 6px 6px 0px rgb(162 162 162);
  height: 24px;
  padding: 10px 50px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  &::placeholder {
    font-style: italic;
    opacity: 0.5;
  }
`;

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedSearchValue) {
      dispatch(getWeather(debouncedSearchValue));
    }
  }, [debouncedSearchValue]);

  return (
    <Input
      placeholder="Which city do you want to check ?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
