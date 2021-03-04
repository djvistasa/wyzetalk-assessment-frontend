import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { CardMedia, CardContent, CardActionArea } from '@material-ui/core';

import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../../../utils/helpers';

// NOTE: change div to your preferred type: e.g button
const StyledArtistCard = styled(Card)`
  margin-bottom: ${calculateRem(10)};
  display: ${({ horizontal }) => (horizontal ? 'flex' : 'block')};

  ${breakpoint('tablet')`
    margin-right: ${calculateRem(10)};
    `}
`;
const StyledCardMedia = styled(CardMedia)`
  height: ${({ horizontal }) =>
    horizontal ? calculateRem(270) : calculateRem(200)};
  width: ${({ horizontal }) => (horizontal ? '40%' : '100%')};
`;
const StyledCardContent = styled(CardContent)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey};
  width: ${({ horizontal }) => (horizontal ? '60%' : '100%')};

  p:first-child {
    font-weight: bold;
    font-size: ${calculateRem(18)};
    margin-bottom: ${calculateRem(10)};
  }
`;

const StyledCardActionArea = styled(CardActionArea)``;

export {
  StyledArtistCard,
  StyledCardMedia,
  StyledCardContent,
  StyledCardActionArea,
};
