const getPageUrl = () =>
  typeof window !== 'undefined'
    ? `${window.location?.protocol}//${window.location?.host}${
        window.location?.pathname === '/' ? '' : window.location?.pathname
      }`
    : '';

export default getPageUrl;
