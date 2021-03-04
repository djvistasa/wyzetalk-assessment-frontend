/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { StyledNavBar } from './styledComponents';
import InputField from '../inputField';

import { debounce } from '../../utils/helpers';

/**
 * @name NavBar
 * @param {object} props
 * @return {jsx}
 */
function NavBar({ onSearchTermChange }) {
  const handleSearch = debounce(
    (searchTerm) =>
      onSearchTermChange &&
      typeof onSearchTermChange === 'function' &&
      onSearchTermChange(searchTerm),
    300,
  );
  return (
    <StyledNavBar position="fixed">
      <Link to={{ pathname: '/' }}>
        <EqualizerIcon />
      </Link>

      <InputField
        placeholder="search"
        onChange={handleSearch}
        startAdornmentIcon={<SearchIcon />}
      />
    </StyledNavBar>
  );
}

NavBar.propTypes = {
  onSearchTermChange: PropTypes.func,
};

export default NavBar;
