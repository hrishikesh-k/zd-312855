import { ILinkProps } from "./types/ILink.types";

export const LinkArgs: ILinkProps = {
  params: {
    identifier: "Link01",
    styles: "",
  },
  fields: {
    linkType: "external",
    url: "https://www.google.com/",
    target: "_blank",
  },
  children: "Google",
};

export const LinkInternalArgs: ILinkProps = {
  params: {
    identifier: "Link01",
    styles: "",
  },
  fields: {
    linkType: "internal",
    url: "https://localhost:6006/",
    target: "_self",
  },
  children: "Storybook",
};

export const LinkMediaArgs: ILinkProps = {
  params: {
    identifier: "Link01",
    styles: "",
  },
  fields: {
    linkType: "media",
    url: "https://an-image.html",
    target: "_blank",
  },
  children: "Media",
};

export const LinkAnchorArgs: ILinkProps = {
  params: {
    identifier: "Link01",
    styles: "",
  },
  fields: {
    linkType: "internal",
    url: "https://localhost:6006/",
    anchor: "anchor",
    target: "_self",
  },
  children: "Anchor",
};

export const LinkEmailArgs: ILinkProps = {
  params: {
    identifier: "Link01",
    styles: "",
  },
  fields: {
    linkType: "email",
    url: "someone@email.com",
    target: "_self",
  },
  children: "Email",
};

export const LinkPhoneArgs: ILinkProps = {
  params: {
    identifier: "Link01",
    styles: "",
  },
  fields: {
    linkType: "phone",
    url: "0400000000",
    target: "_self",
  },
  children: "Phone",
};
