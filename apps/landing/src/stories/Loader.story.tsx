import { Loader } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const loaderStory: StoryConfig = {
  id: 'loader',
  title: 'Loader',
  component: Loader,
  description:
    'Loading components with pixel art animations to indicate loading state.',
  isVoidElement: true,
  defaultProps: {
    type: 'dots' as const,
  },
  propsConfig: {
    type: {
      type: 'select',
      options: [
        { value: 'dots', label: 'Dots' },
        { value: 'spinner', label: 'Spinner' },
      ],
      default: 'dots',
      label: 'Type',
      description: 'Loader animation type',
    },
  },
  presets: [
    {
      name: 'Dots Loader',
      props: {
        type: 'dots' as const,
      },
    },
    {
      name: 'Spinner Loader',
      props: {
        type: 'spinner' as const,
      },
    },
  ],
};
