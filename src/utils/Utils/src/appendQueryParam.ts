const appendQueryParam = (url: string, queryParam: string): string => {
  if (url.includes('?')) {
    return `${url}&${queryParam}`;
  }
  return `${url}?${queryParam}`;
};

export default appendQueryParam;
