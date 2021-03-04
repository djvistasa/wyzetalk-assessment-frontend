import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './utils/theme';
import { calculateRem } from './utils/helpers';

const GlobalStyles = createGlobalStyle`
  ${reset};

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: ${theme.colors.darkGrey};
  }

  a {
    cursor: pointer;
  }

  strong, h1 {
    font-weight: bold;
}
`;

const StyledPageWrapper = styled.div`
  padding: ${calculateRem(106)} ${calculateRem(10)} ${calculateRem(10)};
  max-width: ${calculateRem(1024)};
  margin: auto;
`;

export { StyledPageWrapper };

export { GlobalStyles };
