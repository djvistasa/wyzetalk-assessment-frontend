import axios from 'axios';

export const calculateRem = (size) => `${(size / 16) * 1}rem`;

export const debounce = (func, wait, immediate) => {
  let timeout;
  // eslint-disable-next-line func-names
  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    // eslint-disable-next-line func-names
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const handleApiError = (error) => {
  const errorMessage = error.error || error;

  return {
    ok: false,
    result: null,
    error: new Error(errorMessage).message,
  };
};

const handleApiSuccess = (result) => ({
  ok: true,
  result,
  error: null,
});

export const makeApiCall = async (
  method,
  url,
  data,
  params,
  headers = {},
  callBack = null,
) => {
  try {
    const { data: response, error } = await axios({
      method,
      url,
      data,
      params,
      headers,
    });

    if (error) {
      return handleApiError(error);
    }

    if (callBack) {
      callBack(response);
    }

    return handleApiSuccess(response.result);
  } catch (error) {
    return handleApiError(error);
  }
};

export const truncate = (input, limit) =>
  input.length > limit ? `${input.substring(0, limit)}...` : input;

export const formatNumber = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}K`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}M`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}B`;
  if (n >= 1e12) return `${+(n / 1e12).toFixed(1)}T`;

  return false;
};
