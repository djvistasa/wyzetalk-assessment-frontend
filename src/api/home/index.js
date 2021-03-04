/**
 *
 * ArtistSearchApi
 *
 */

import { makeApiCall } from '../../utils/helpers';
import { SEARCH_URL } from '../constants';

export class HomeApi {
  static performSearch(searchTerm) {
    return makeApiCall('get', SEARCH_URL, null, {
      searchTerm,
    });
  }
}
