import { Badge } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const badgeStory: StoryConfig = {
  id: 'badge',
  title: 'Badge',
  component: Badge,
  description:
    'Status badges with pixel art style to indicate states or categories.',
  isVoidElement: false,
  defaultProps: {
    variant: 'primary' as const,
    children: 'NEW',
  },
  propsConfig: {
    variant: {
      type: 'select',
      options: [
        { value: 'primary', label: 'Primary' },
        { value: 'success', label: 'Success' },
        { value: 'danger', label: 'Danger' },
        { value: 'warning', label: 'Warning' },
      ],
      default: 'primary',
      label: 'Variant',
      description: 'Badge color variant',
    },
  },
  presets: [
    {
      name: 'New Badge',
      props: {
        variant: 'primary' as const,
        children: 'NEW',
      },
    },
    {
      name: 'Online Badge',
      props: {
        variant: 'success' as const,
        children: 'ONLINE',
      },
    },
    {
      name: 'Offline Badge',
      props: {
        variant: 'danger' as const,
        children: 'OFFLINE',
      },
    },
    {
      name: 'Busy Badge',
      props: {
        variant: 'warning' as const,
        children: 'BUSY',
      },
    },
  ],
};
