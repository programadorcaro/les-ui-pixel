import { Button } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const buttonStory: StoryConfig = {
  id: 'button',
  title: 'Button',
  component: Button,
  description:
    'Pixel art buttons with multiple variants, sizes and animations.',
  isVoidElement: false,
  defaultProps: {
    variant: 'primary' as const,
    size: 'md' as const,
    animation: 'none' as const,
    style8bit: false,
    children: 'Start Game',
  },
  propsConfig: {
    variant: {
      type: 'select',
      options: [
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'accent', label: 'Accent' },
        { value: 'danger', label: 'Danger' },
        { value: 'success', label: 'Success' },
        { value: 'ghost', label: 'Ghost' },
      ],
      default: 'primary',
      label: 'Variant',
      description: 'Button visual style',
    },
    size: {
      type: 'select',
      options: [
        { value: 'sm', label: 'Small' },
        { value: 'md', label: 'Medium' },
        { value: 'lg', label: 'Large' },
      ],
      default: 'md',
      label: 'Size',
      description: 'Button size',
    },
    animation: {
      type: 'select',
      options: [
        { value: 'none', label: 'None' },
        { value: 'pulse', label: 'Pulse' },
        { value: 'shake', label: 'Shake' },
        { value: 'glow', label: 'Glow' },
      ],
      default: 'none',
      label: 'Animation',
      description: 'Button animation',
    },
    style8bit: {
      type: 'boolean',
      default: false,
      label: '8-bit Style',
      description: 'Use classic 8-bit style',
    },
  },
  presets: [
    {
      name: 'Primary Large',
      props: {
        variant: 'primary' as const,
        size: 'lg' as const,
        animation: 'none' as const,
        style8bit: false,
        children: 'Start Game',
      },
    },
    {
      name: 'Accent Glow',
      props: {
        variant: 'accent' as const,
        size: 'md' as const,
        animation: 'glow' as const,
        style8bit: false,
        children: 'Join Now',
      },
    },
    {
      name: 'Success Pulse',
      props: {
        variant: 'success' as const,
        size: 'md' as const,
        animation: 'pulse' as const,
        style8bit: false,
        children: 'Success!',
      },
    },
    {
      name: '8-bit Style',
      props: {
        variant: 'primary' as const,
        size: 'md' as const,
        animation: 'none' as const,
        style8bit: true,
        children: 'Retro Button',
      },
    },
  ],
};
