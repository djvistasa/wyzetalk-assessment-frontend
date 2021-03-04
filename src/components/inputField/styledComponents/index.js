/* eslint-disable */
import styled from 'styled-components';
import Input from '@material-ui/core/InputBase';
import { calculateRem } from '../../../utils/helpers';

const StyledInputField = styled(Input)`
  transition: 0.3s border-color ease-in-out;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding: ${calculateRem(2)} ${calculateRem(10)};
  border-radius: ${calculateRem(5)};
  width: 100%;
  input {
    color: ${({ theme }) => theme.colors.white};
  }
  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const StyledLabel = styled.label`
  width: 100%;
`;

export { StyledInputField, StyledLabel };
