/**
 *
 * ArtistSearch
 *
 */

import React from 'react';
import { useStoreState } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import { StyledPageWrapper } from '../../global-styles';
import { Artists } from '../../components';

/**
 * @name home
 * @param {object} props
 * @return {jsx}
 */

export default function Home() {
  const searchResults = useStoreState((state) => state.searchResults.items);
  const history = useHistory();

  const handleArtistSelected = (artist) =>
    history.push('/artist-detail', artist);

  return (
    <StyledPageWrapper>
      <Artists
        artists={searchResults}
        onArtistSelect={handleArtistSelected}
        isArtistList
      />
    </StyledPageWrapper>
  );
}
