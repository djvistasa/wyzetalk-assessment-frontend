import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../../../utils/helpers';

// NOTE: change div to your preferred type: e.g button
const StyledNavBar = styled(AppBar)`
  &.MuiAppBar-root {
    padding: ${calculateRem(15)};
    display: flex;
    flex-direction: row;
    align-items: center;

    a > svg {
      margin-right: ${calculateRem(20)};
      fill: ${({ theme }) => theme.colors.white};
    }

    .MuiInputBase-root {
      ${breakpoint('tablet')`

        width: ${calculateRem(300)};
      `}
    }
  }
`;

export { StyledNavBar };
