export const toggleModal = (modalRef: string) => {
  const modalContainer = document.querySelectorAll<HTMLElement>(`#${modalRef}`);

  if (modalContainer.length > 0) {
    const modalBackdrop = document.querySelector<HTMLElement>(`#${modalRef} .modal-backdrop`);
    const modal = document.querySelector<HTMLElement>(`#${modalRef} .modal`);
    if (modal) {
      modalBackdrop?.classList.toggle('show');
      modal?.classList.toggle('show');

      const displaySetting = modal?.style.display;

      if (displaySetting === 'none') {
        modal!.style.display = 'block';
        modal?.setAttribute('aria-hidden', 'false');
      } else {
        modal!.style.display = 'none';
        modal?.setAttribute('aria-hidden', 'true');
      }
    }
  }
};
