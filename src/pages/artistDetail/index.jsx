/**
 *
 * ArtistDetail
 *
 */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { StyledTopSectionWrapper } from './styledComponents';
import { ArtistCard, TopTracks, Artists } from '../../components';
import { ArtistDetailApi } from '../../api';
import { StyledPageWrapper } from '../../global-styles';
/**
 * @name artistDetail
 * @param {object} props
 * @return {jsx}
 */

export default function ArtistDetail() {
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const { pictureMedium, name, numberOfFans, id } = location.state || {};

  const [topTracks, setTopTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  const constructAlbumData = (artistAlbums) =>
    // eslint-disable-nex-line
    artistAlbums.map(
      ({
        title,
        cover_medium: coverMedium,
        id: artistId,
        release_date: releaseDate,
        fans,
      }) => ({
        name: title,
        picture_medium: coverMedium,
        id: artistId,
        releaseDate,
        nb_fan: fans,
      }),
    );

  useEffect(() => {
    const getArtistTopTracks = async (artistId) => {
      const { error, ok, result } = await ArtistDetailApi.getArtistTopTracks(
        artistId,
      );

      if (error) {
        return enqueueSnackbar(error, {
          variant: 'error',
        });
      }

      if (ok && result) {
        return setTopTracks(result);
      }

      return false;
    };
    const getArtistAlbums = async (artistId) => {
      const { error, ok, result } = await ArtistDetailApi.getArtistAlbums(
        artistId,
      );

      if (error) {
        return enqueueSnackbar(error, {
          variant: 'error',
        });
      }

      if (ok && result) {
        return setAlbums(constructAlbumData(result));
      }

      return false;
    };

    if (id) {
      getArtistTopTracks(id);
      getArtistAlbums(id);
    }
  }, [location]);

  return (
    <StyledPageWrapper>
      {location && location.state && (
        <>
          <StyledTopSectionWrapper>
            <ArtistCard
              artist={{
                picture_medium: pictureMedium,
                name,
                nb_fan: numberOfFans,
                id,
              }}
              horizontal
            />
            <TopTracks topTracks={topTracks} />
          </StyledTopSectionWrapper>
          <Artists artists={albums} isAlbumList />
        </>
      )}
    </StyledPageWrapper>
  );
}
