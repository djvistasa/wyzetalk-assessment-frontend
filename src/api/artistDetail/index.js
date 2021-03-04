/**
 *
 * ArtistDetailApi
 *
 */

import { makeApiCall } from '../../utils/helpers';
import { GET_TOP_TRACKS_URL, GET_ARTIST_ALBUMS } from '../constants';

export class ArtistDetailApi {
  static getArtistTopTracks(artistId) {
    return makeApiCall('get', GET_TOP_TRACKS_URL, null, {
      artistId,
    });
  }

  static getArtistAlbums(artistId) {
    return makeApiCall('get', GET_ARTIST_ALBUMS, null, {
      artistId,
    });
  }
}
