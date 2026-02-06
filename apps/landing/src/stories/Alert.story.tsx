import { Alert } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const alertStory: StoryConfig = {
  id: 'alert',
  title: 'Alert',
  component: Alert,
  description:
    'Alert components with icons to display important or status messages.',
  isVoidElement: false,
  defaultProps: {
    variant: 'info' as const,
    children: 'This is an important information message.',
  },
  propsConfig: {
    variant: {
      type: 'select',
      options: [
        { value: 'info', label: 'Info' },
        { value: 'success', label: 'Success' },
        { value: 'warning', label: 'Warning' },
        { value: 'danger', label: 'Danger' },
      ],
      default: 'info',
      label: 'Variant',
      description: 'Alert color variant',
    },
  },
  presets: [
    {
      name: 'Info Alert',
      props: {
        variant: 'info' as const,
        children: 'This is an important information message.',
      },
    },
    {
      name: 'Success Alert',
      props: {
        variant: 'success' as const,
        children: 'Your changes have been saved successfully!',
      },
    },
    {
      name: 'Warning Alert',
      props: {
        variant: 'warning' as const,
        children: 'Please review your settings before proceeding.',
      },
    },
    {
      name: 'Danger Alert',
      props: {
        variant: 'danger' as const,
        children: 'An error occurred. Please try again later.',
      },
    },
  ],
};
