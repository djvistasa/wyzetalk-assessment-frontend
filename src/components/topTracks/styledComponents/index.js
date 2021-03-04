import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../../../utils/helpers';

// NOTE: change div to your preferred type: e.g button
const StyledTopTracks = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${calculateRem(22)};
    margin-bottom: ${calculateRem(15)};
  }

  ${breakpoint('tablet')`
    width: 60%;
  `}
`;

export { StyledTopTracks };
