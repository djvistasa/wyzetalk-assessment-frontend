import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../../../utils/helpers';

const StyledTopSectionWrapper = styled.div`
  ${breakpoint('tablet')`

    display: flex;
    justify-content: space-between;
    margin-bottom:${calculateRem(30)}
  `}
`;

export { StyledTopSectionWrapper };
