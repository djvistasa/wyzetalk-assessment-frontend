/**
 *
 * ArtistCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { truncate, formatNumber } from '../../utils/helpers';
import {
  StyledArtistCard,
  StyledCardMedia,
  StyledCardContent,
  StyledCardActionArea,
} from './styledComponents';

/**
 * @name ArtistCard
 * @param {object} props
 * @return {jsx}
 */
function ArtistCard({
  artist: {
    picture_medium: pictureMedium,
    name,
    nb_fan: numberOfFans,
    id,
    releaseDate,
  },
  onArtistSelect,
  horizontal = false,
}) {
  const handleArtistSelect = () => {
    if (onArtistSelect && typeof onArtistSelect === 'function') {
      onArtistSelect({
        id,
        pictureMedium,
        numberOfFans,
        name,
      });
    }
  };

  return (
    <StyledCardActionArea onClick={handleArtistSelect}>
      <StyledArtistCard horizontal={+horizontal}>
        <StyledCardMedia image={pictureMedium} horizontal={+horizontal} />
        <StyledCardContent horizontal={+horizontal}>
          <p>{truncate(name, 20)}</p>
          <p>Fans: {formatNumber(numberOfFans)}</p>
          {releaseDate && <p>Released: {releaseDate}</p>}
        </StyledCardContent>
      </StyledArtistCard>
    </StyledCardActionArea>
  );
}

ArtistCard.propTypes = {
  artist: PropTypes.object,
  onArtistSelect: PropTypes.func,
  horizontal: PropTypes.bool,
};

export default ArtistCard;
