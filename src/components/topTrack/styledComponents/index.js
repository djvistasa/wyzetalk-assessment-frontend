import styled from 'styled-components';
import { calculateRem } from '../../../utils/helpers';
// import breakpoint from 'styled-components-breakpoint';

// NOTE: change div to your preferred type: e.g button
const StyledTopTrack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${calculateRem(10)};
  margin-bottom: ${calculateRem(10)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: ${calculateRem(15)};
`;

export { StyledTopTrack };
