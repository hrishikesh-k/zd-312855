import * as React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Link from "./Link";
import {
  LinkArgs,
  LinkInternalArgs,
  LinkMediaArgs,
  LinkEmailArgs,
  LinkPhoneArgs,
} from "./Link.mock";

describe("Link", () => {
  it("renders a basic Link", () => {
    render(
      <Link params={LinkArgs.params} fields={LinkArgs.fields}>
        {LinkArgs.children}
      </Link>
    );
    const link = document.querySelector(".link");
    expect(link).toBeInTheDocument();
  });

  it("renders an internal Link", () => {
    render(
      <Link params={LinkInternalArgs.params} fields={LinkInternalArgs.fields}>
        {LinkInternalArgs.children}
      </Link>
    );
    const link = document.querySelector('a[target="_self"]');
    expect(link).toBeInTheDocument();
  });

  it("renders an media Link", () => {
    render(
      <Link params={LinkMediaArgs.params} fields={LinkMediaArgs.fields}>
        {LinkMediaArgs.children}
      </Link>
    );
    const link = document.querySelector(
      'a[href="https://somesite?download=true"]'
    );
    expect(link).toBeInTheDocument();
  });

  it("renders an email Link", () => {
    render(
      <Link params={LinkEmailArgs.params} fields={LinkEmailArgs.fields}>
        {LinkEmailArgs.children}
      </Link>
    );
    const link = document.querySelector('a[href="mailto:someone@email.com"]');
    expect(link).toBeInTheDocument();
  });

  it("renders an phone Link", () => {
    render(
      <Link params={LinkPhoneArgs.params} fields={LinkPhoneArgs.fields}>
        {LinkPhoneArgs.children}
      </Link>
    );
    const link = document.querySelector('a[href="tel:0400000000"]');
    expect(link).toBeInTheDocument();
  });
});
