enum ButtonVariant {
  SECONDARY = 'secondaryButton',
  TERTIARY = 'tertiaryButton',
  TEXT = 'textButton',
}
export interface IComponentParameters {
  identifier: string;
  styles: string;
  overrideTheme?: string;
  variant?: string;
  searchIgnore?: boolean;
}

export interface IComponentWithButtonGroupParameters extends IComponentParameters {
  buttonOneIcon?: string;
  buttonOneVariant?: ButtonVariant;
  buttonOneIsIconLeft?: boolean;
  buttonTwoIcon?: string;
  buttonTwoVariant?: ButtonVariant;
  buttonTwoIsIconLeft?: boolean;
}
