import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getErrorMessage } from '../reducer';

const StyledWrapper = styled.span`
  color: red;
`;

const Error: React.FC<any> = () => {
  const message = useSelector(getErrorMessage);
  return message ? <StyledWrapper>{message}</StyledWrapper> : null;
};

export default Error;
