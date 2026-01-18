import type { Meta, StoryObj } from '@storybook/react-vite';

import { TailwindDemo } from './TailwindDemo';

const meta = {
  title: 'Demo/TailwindDemo',
  component: TailwindDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TailwindDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomSizing: Story = {};
