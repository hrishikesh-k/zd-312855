import React, { isValidElement } from "react";
import classNames from "classnames";

import { ILinkFields, Link } from "@dd/link";
import { truncateText, toggleModal } from "@dd/utils";

import { IButtonProps } from "./types/IButton.types";

import "./Button.styles.scss";

function isILinkProps(
  fields: ILinkFields | React.ReactNode
): fields is ILinkFields {
  return (fields as ILinkFields).linkType !== undefined;
}

export function Button({
  params,
  fields,
  isSmallVariant,
  buttonVariant,
  disabled,
  isDarkMode,
}: IButtonProps) {
  const linkfields = fields.link.fields as ILinkFields;

  const hasModalReference = !!linkfields.modalReference;
  const modalRef = linkfields?.modalReference ? linkfields?.modalReference : "";
  const MAX_LABEL_LENGTH = 18;

  if (isILinkProps(fields?.link.fields)) {
    const linkFields = fields?.link.fields as ILinkFields;

    const ctaMarkup = (
      <>
        <span>
          {truncateText(
            linkFields?.label,
            fields?.link.truncateLength ?? MAX_LABEL_LENGTH
          )}
        </span>
      </>
    );

    const buttonClassName = classNames("component button", params.styles, {
      [`button--${buttonVariant?.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`]:
        buttonVariant,
      "button--small": isSmallVariant,
      "button--disabled": disabled,
      "button--no-text": !linkfields.label,
      "button--dark-mode": isDarkMode,
    });

    // return render

    return (
      <div
        id={params.identifier}
        {...(params.searchIgnore
          ? { "data-attribute-search-ignore": true }
          : {})}
        className={buttonClassName}
      >
        {hasModalReference ? (
          <button
            id={params.identifier}
            className="link"
            type="button"
            disabled={disabled}
            onClick={() => {
              toggleModal(modalRef);
            }}
            aria-label={fields.ariaLabel}
          >
            {ctaMarkup}
          </button>
        ) : (
          <Link role="button" {...fields.link} aria-label={fields.ariaLabel}>
            {ctaMarkup}
          </Link>
        )}
      </div>
    );
  }
  if (isValidElement(fields.link.fields)) {
    return fields.link.fields;
  }

  return null;
}

export default Button;
