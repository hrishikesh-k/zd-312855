import ThemeProvider from '../src/themes/themeProvider';
import React from 'react';

// Add a global decorator to wrap all stories with the ThemeProvider
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
export const tags = ['autodocs'];

