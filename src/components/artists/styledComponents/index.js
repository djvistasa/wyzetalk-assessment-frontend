/* eslint-disable indent */
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../../../utils/helpers';

// NOTE: change div to your preferred type: e.g button
const StyledArtists = styled.div`
  margin: auto;

  > p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    height: ${calculateRem(20)};
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 10px;
  }

  ${breakpoint('maxWidth')`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: ${calculateRem(10)};
  `}

  ${breakpoint('tablet')`
    grid-template-columns: ${({ isAlbumList }) =>
      isAlbumList ? 'auto auto auto auto' : 'auto auto auto'};
  `}
`;

export { StyledArtists };
