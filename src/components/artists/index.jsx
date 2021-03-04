/**
 *
 * Artists
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledArtists } from './styledComponents';
import ArtistCard from '../artistCard';

/**
 * @name Artists
 * @param {object} props
 * @return {jsx}
 */
function Artists({ artists = [], onArtistSelect, isArtistList = false }) {
  return (
    <StyledArtists>
      {artists.map((artist) => (
        <ArtistCard
          artist={artist}
          key={artist.id.toString()}
          onArtistSelect={onArtistSelect}
        />
      ))}
      {artists.length === 0 && isArtistList && (
        <p>Please use the search bar on the top left to begin</p>
      )}
    </StyledArtists>
  );
}

Artists.propTypes = {
  artists: PropTypes.array,
  onArtistSelect: PropTypes.func,
  isArtistList: PropTypes.bool,
};

export default Artists;
