import * as React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';
import { ButtonArgs } from './Button.mock';

test('loads label', async () => {
  //ARRANGE
  render(<Button {...ButtonArgs} />);

  //ACT
  await screen.findByRole('button');

  //ASSERT
  expect(screen.getByRole('button')).toHaveTextContent('Google');
});
