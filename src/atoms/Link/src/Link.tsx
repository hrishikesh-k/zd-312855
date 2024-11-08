import React, { isValidElement } from "react";

import { truncateText, appendQueryParam } from "@dd/utils";
import classNames from "classnames";
import "./Link.styles.scss";

import { ILinkFields, ILinkProps } from "./types/ILink.types";

export function Link({
  children,
  params,
  fields,
  inlineStyles,
  truncateLength,
  ...anchorProps
}: ILinkProps) {
  /**
   * Returns the appropriate value for the rel attribute based on the provided link type.
   * If no link type is provided, an empty string is returned.
   *
   * @param {string} linkType - The type of link, either 'external' or 'internal'.
   * @returns {string} The value for the rel attribute corresponding to the given link type.
   */
  const getRelValue = (linkType: string = "") => {
    switch (linkType) {
      case "external":
        return "noopener noreferrer";

      case "internal":
        return "related";

      default:
        return "";
    }
  };

  /**
   * Returns the appropriate href value based on the provided URL and link type.
   * If no URL is provided, an empty string is returned.
   * If no link type is provided or an unsupported link type is provided, the URL is returned as is.
   *
   * @param {string} url - The URL to be used for generating the href value.
   * @param {string} linkType - The type of link, can be 'anchor', 'email', 'phone', or empty.
   * @returns {string} The href value corresponding to the given URL and link type.
   */
  const getHrefValue = (
    url: string = "",
    linkType: string = "",
    anchor: string = ""
  ) => {
    switch (linkType) {
      case "email":
        return `mailto:${url}`;

      case "phone":
        return `tel:${url}`;

      case "media":
        return appendQueryParam(`${url}`, "download=true");

      default:
        return `${url}${anchor ? `#${anchor}` : ""}`;
    }
  };

  // * Check if fields is a React Component
  if (isValidElement(fields)) {
    return fields;
  }
  // * Constants
  const linkProps = fields as unknown as ILinkFields;
  const linkInlineStyles = inlineStyles
    ? {
        color: inlineStyles.color,
        borderColor: inlineStyles.color,
      }
    : {};

  return (
    <a
      {...anchorProps}
      id={`${params?.identifier}`}
      className={classNames("link", {
        [params?.styles || ""]: !!params?.styles,
        [anchorProps?.className || ""]: !!anchorProps?.className,
      })}
      href={getHrefValue(
        linkProps?.url,
        linkProps?.linkType,
        linkProps?.anchor
      )}
      rel={getRelValue(linkProps?.linkType)}
      target={linkProps?.target}
      style={linkInlineStyles}
      aria-label={linkProps?.label}
      title={linkProps?.label}
    >
      {children || truncateText(linkProps?.label, truncateLength)}
    </a>
  );
}

export default Link;
