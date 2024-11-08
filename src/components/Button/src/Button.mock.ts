import { IButtonProps, ButtonVariant } from './types/IButton.types';

export const ButtonArgs: IButtonProps = {
  params: {
    identifier: 'Link01',
    styles: '',
  },
  fields: {
    link: {
      params: {
        identifier: '',
        styles: '',
      },
      fields: {
        linkType: 'external',
        url: 'https://www.google.com/',
        label: 'Google',
        target: '_blank',
      },
    },
    icon: 'arrowLeft',
  },
};

export const ButtonArgsDarkButton: IButtonProps = {
  ...ButtonArgs,
  params: {
    ...ButtonArgs.params,
    styles: 'button--dark-mode',
  },
};

export const ButtonArgsSecondaryButton: IButtonProps = {
  params: {
    identifier: 'Link01',
    styles: '',
    variant: '',
  },
  fields: {
    link: {
      params: {
        identifier: '',
        styles: '',
      },
      fields: {
        linkType: 'external',
        url: 'https://www.google.com/',
        label: 'Google',
        target: '_blank',
      },
    },
    icon: 'arrowRight',
  },
  buttonVariant: ButtonVariant.SECONDARY,
};

export const ButtonArgsSecondaryDarkButton: IButtonProps = {
  ...ButtonArgsSecondaryButton,
  params: {
    ...ButtonArgsSecondaryButton.params,
    styles: 'button--dark-mode',
  },
};

export const ButtonArgsTertiaryButton: IButtonProps = {
  params: {
    identifier: 'Link01',
    styles: '',
    variant: 'tertiaryButton',
  },
  fields: {
    link: {
      params: {
        identifier: '',
        styles: '',
      },
      fields: {
        linkType: 'external',
        url: 'https://www.google.com/',
        label: 'Google',
        target: '_blank',
      },
    },
    icon: 'arrowRight',
  },
  buttonVariant: ButtonVariant.TERTIARY,
};

export const ButtonArgsTertiaryDarkButton: IButtonProps = {
  ...ButtonArgsTertiaryButton,
  params: {
    ...ButtonArgsTertiaryButton.params,
    styles: 'button--dark-mode',
  },
};

export const ButtonArgsTextButton: IButtonProps = {
  params: {
    identifier: 'Link01',
    styles: '',
  },
  fields: {
    link: {
      params: {
        identifier: '',
        styles: '',
      },
      fields: {
        linkType: 'external',
        url: 'https://www.google.com/',
        label: 'Google',
        target: '_blank',
      },
    },
    icon: '',
  },
  buttonVariant: ButtonVariant.TEXT,
};

export const ButtonArgsTextDarkButton: IButtonProps = {
  ...ButtonArgsTextButton,
  params: {
    ...ButtonArgsTextButton.params,
    styles: 'button--dark-mode',
  },
};

export const ButtonArgsSmall: IButtonProps = {
  params: {
    identifier: 'Link01',
    styles: '',
  },
  fields: {
    link: {
      params: {
        identifier: '',
        styles: '',
      },
      fields: {
        linkType: 'external',
        url: 'https://www.google.com/',
        label: 'Google',
        target: '_blank',
      },
    },
    icon: 'arrowRight',
  },
  isSmallVariant: true,
};
