import { useEffect, useMemo, useState } from 'react';

const updateDeviceType = (width: number) => {
  const isMobile = width > 0 && width < 767;
  const isTablet = width >= 767 && width < 992;
  const isDesktop = width >= 992;

  return { isMobile, isTablet, isDesktop };
};

/**
 * The function `useDeviceContext` returns an object indicating whether the current device is mobile,
 * tablet, or desktop based on the window width.
 * @param width - The `width` parameter represents the width of the window or viewport in pixels. It is
 * used in the `updateDeviceType` function to determine whether the device falls into the categories of
 * mobile, tablet, or desktop based on the specified width breakpoints.
 * @returns The `useDeviceContext` function returns an object with properties `isMobile`, `isTablet`,
 * and `isDesktop` based on the `width` value obtained from `window.innerWidth`, which updates on the
 * window resize event, and is processed by the `updateDeviceType` function.
 */
const useDeviceContext = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });
  const memoizedDeviceType = useMemo(() => deviceType, [deviceType]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const updatedDeviceType = updateDeviceType(width);

      if (
        updatedDeviceType.isMobile !== deviceType.isMobile ||
        updatedDeviceType.isTablet !== deviceType.isTablet ||
        updatedDeviceType.isDesktop !== deviceType.isDesktop
      ) {
        setDeviceType(updatedDeviceType);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceType]);

  return memoizedDeviceType;
};

export default useDeviceContext;
