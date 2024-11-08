import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from '../index';
import {
  LinkAnchorArgs,
  LinkArgs,
  LinkEmailArgs,
  LinkInternalArgs,
  LinkMediaArgs,
  LinkPhoneArgs,
} from '../Link.mock';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Link',
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: LinkArgs,
};

export const InternalLink: Story = {
  args: LinkInternalArgs,
};

export const MediaLink: Story = {
  args: LinkMediaArgs,
};

export const AnchorLink: Story = {
  args: LinkAnchorArgs,
};

export const EmailLink: Story = {
  args: LinkEmailArgs,
};

export const PhoneLink: Story = {
  args: LinkPhoneArgs,
};
