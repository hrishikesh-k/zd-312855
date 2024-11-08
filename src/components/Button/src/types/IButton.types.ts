import { ILinkProps } from "@dd/link";

import { IComponentParameters } from "@dd/types";

export enum ButtonVariant {
  SECONDARY = "secondaryButton",
  TERTIARY = "tertiaryButton",
  TEXT = "textButton",
}

interface IButtonFields {
  link: ILinkProps;
  icon?: string;
  ariaLabel?: string;
}

export interface IButtonProps {
  params: IComponentParameters;
  fields: IButtonFields;
  disabled?: boolean;
  // setting icon position, small variant and button variant can be controlled by params.styles OR using these props
  iconPosition?: "left" | "right";
  isSmallVariant?: boolean;
  buttonVariant?: ButtonVariant;
  isDarkMode?: boolean;
}
