import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ButtonArgs,
  ButtonArgsDarkButton,
  ButtonArgsSecondaryButton,
  ButtonArgsSecondaryDarkButton,
  ButtonArgsTertiaryButton,
  ButtonArgsTertiaryDarkButton,
  ButtonArgsTextButton,
  ButtonArgsTextDarkButton,
  ButtonArgsSmall,
} from '../Button.mock';
import { Button } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryButton: Story = {
  args: ButtonArgs,
};

export const PrimaryButtonDarkMode: Story = {
  args: ButtonArgsDarkButton,
  render: (args) => {
    const style = {
      backgroundColor: '#000000',
    };

    return (
      <div style={style}>
        <Button {...args} />
      </div>
    );
  },
};

export const SecondaryButton: Story = {
  args: ButtonArgsSecondaryButton,
};

export const SecondaryButtonDarkMode: Story = {
  args: ButtonArgsSecondaryDarkButton,
  render: (args) => {
    const style = {
      backgroundColor: '#000000',
    };

    return (
      <div style={style}>
        <Button {...args} />
      </div>
    );
  },
};

export const TertiaryButton: Story = {
  args: ButtonArgsTertiaryButton,
};

export const TertiaryButtonDarkMode: Story = {
  args: ButtonArgsTertiaryDarkButton,
  render: (args) => {
    const style = {
      backgroundColor: '#000000',
    };

    return (
      <div style={style}>
        <Button {...args} />
      </div>
    );
  },
};

export const TextButton: Story = {
  args: ButtonArgsTextButton,
};

export const TextButtonDarkMode: Story = {
  args: ButtonArgsTextDarkButton,
  render: (args) => {
    const style = {
      backgroundColor: '#000000',
    };

    return (
      <div style={style}>
        <Button {...args} />
      </div>
    );
  },
};

export const SmallButton: Story = {
  args: ButtonArgsSmall,
};
