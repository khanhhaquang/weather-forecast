import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../actions';

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [value]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default SearchInput;
