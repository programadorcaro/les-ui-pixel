import { Skeleton } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const skeletonStory: StoryConfig = {
  id: 'skeleton',
  title: 'Skeleton',
  component: Skeleton,
  description:
    'Loading placeholder with pixel art style to display while content is loading.',
  isVoidElement: true,
  defaultProps: {
    width: 200,
    height: 20,
  },
  propsConfig: {
    width: {
      type: 'number',
      default: 200,
      label: 'Width',
      description: 'Width in pixels',
    },
    height: {
      type: 'number',
      default: 20,
      label: 'Height',
      description: 'Height in pixels',
    },
  },
  presets: [
    {
      name: 'Small Skeleton',
      props: {
        width: 100,
        height: 16,
      },
    },
    {
      name: 'Medium Skeleton',
      props: {
        width: 200,
        height: 20,
      },
    },
    {
      name: 'Large Skeleton',
      props: {
        width: 400,
        height: 100,
      },
    },
    {
      name: 'Square Skeleton',
      props: {
        width: 50,
        height: 50,
      },
    },
  ],
};
