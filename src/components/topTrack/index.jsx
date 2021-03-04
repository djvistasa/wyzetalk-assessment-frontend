/**
 *
 * TopTrack
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledTopTrack } from './styledComponents';
import { truncate } from '../../utils/helpers';

/**
 * @name TopTrack
 * @param {object} props
 * @return {jsx}
 */
function TopTrack({ track: { title, duration }, rank }) {
  const convertDurationToMinutes = (timeInSeconds) =>
    `${Math.floor(timeInSeconds / 60)}:${Math.floor(timeInSeconds % 60)}`;
  return (
    <StyledTopTrack>
      <p>{rank}</p>
      <p>{truncate(title, 30)} </p>
      <p>{convertDurationToMinutes(duration)}</p>
    </StyledTopTrack>
  );
}

TopTrack.propTypes = {
  track: PropTypes.object,
  rank: PropTypes.number,
};

export default TopTrack;
