const getStickyElementHeight = (currentElementId: string): number => {
  const currentElement = document.getElementById(currentElementId);
  const elements = document.querySelectorAll('[data-sticky-visible="true"]');

  let height = 0;
  let reachedCurrentElement = false;

  elements.forEach((element) => {
    if (element === currentElement) {
      reachedCurrentElement = true;
    }

    if (!reachedCurrentElement) {
      const elemHeight = (element as HTMLElement).offsetHeight;
      height += elemHeight;
    }
  });

  return height;
};

export default getStickyElementHeight;
