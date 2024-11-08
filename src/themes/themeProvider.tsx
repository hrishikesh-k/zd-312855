/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { FormSelect } from 'react-bootstrap';

// @ts-ignore
import('./baseTheme/src/scss/index.scss');

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <pre>
        <code className='fs-6'>
          <sup className='text-danger'>*</sup> You will need to refresh the page again if you need
          to use another theme
        </code>
      </pre>

      <label htmlFor='theme-select' className='d-block h5'>
        Select a theme:
      </label>
      <FormSelect id='theme-select' size='sm' aria-labelledby='theme-label'>
        <option value='default'>Default theme</option>
      </FormSelect>

      <hr />

      {children}
    </section>
  );
}

export default ThemeProvider;
