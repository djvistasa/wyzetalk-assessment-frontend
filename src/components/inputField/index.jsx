/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import { StyledInputField, StyledLabel } from './styledComponents';

/**
 * @name InputField
 * @param {object} props
 * @return {jsx}
 */
function InputField({
  placeholder,
  disabled = false,
  multiline = false,
  autoComplete = 'on',
  rows = 1,
  rowsMax = 1,
  onFocus,
  onBlur,
  type = 'input',
  name,
  onChange,
  startAdornmentIcon,
  variant = 'filled',
}) {
  const handleFocus = () => {
    if (onFocus && typeof onFocus === 'function') {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur && typeof onBlur === 'function') {
      onBlur();
    }
  };
  const handleChange = (event) => {
    if (onChange && typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };
  return (
    <StyledLabel htmlFor={name}>
      <StyledInputField
        type={type}
        variant={variant}
        placeholder={placeholder}
        label={placeholder}
        rows={rows}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rowsMax={rowsMax}
        multiline={multiline}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={handleChange}
        startAdornment={
          startAdornmentIcon && (
            <InputAdornment position="start">
              {startAdornmentIcon}
            </InputAdornment>
          )
        }
      />
    </StyledLabel>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
  rows: PropTypes.string,
  rowsMax: PropTypes.string,
  multiline: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  variant: PropTypes.string,
  startAdornmentIcon: PropTypes.node,
};

export default InputField;
