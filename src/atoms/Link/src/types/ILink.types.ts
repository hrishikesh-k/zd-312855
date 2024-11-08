import React from "react";

import { IComponentParameters } from "@dd/types";

export type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "rel" | "target"
>;

export interface ILinkFields {
  linkType: "internal" | "external" | "media" | "email" | "phone" | "modal";
  url: string;
  label?: string;
  target: string;
  modalReference?: string;
  anchor?: string;
}

export interface ILinkProps extends AnchorProps {
  params?: IComponentParameters;
  fields: ILinkFields | React.ReactNode;
  inlineStyles?: {
    color?: string;
    borderColor?: string;
  };
  truncateLength?: number;
}
