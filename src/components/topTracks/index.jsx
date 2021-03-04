/**
 *
 * TopTracks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledTopTracks } from './styledComponents';
import TopTrack from '../topTrack';

/**
 * @name TopTracks
 * @param {object} props
 * @return {jsx}
 */
function TopTracks({ topTracks }) {
  return (
    <StyledTopTracks>
      <h1>Top tracks:</h1>
      {topTracks.map((track, index) => (
        <TopTrack track={track} rank={index + 1} key={track.id.toString()} />
      ))}
    </StyledTopTracks>
  );
}

TopTracks.propTypes = {
  topTracks: PropTypes.array,
};

export default TopTracks;
