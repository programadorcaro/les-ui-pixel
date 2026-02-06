import { ProgressBar, ProgressBarProps } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const progressStory: StoryConfig<ProgressBarProps> = {
  id: 'progress',
  title: 'ProgressBar',
  component: ProgressBar,
  description:
    'Pixel art progress bar to display task progress or loading.',
  isVoidElement: true,
  defaultProps: {
    value: 65,
    max: 100,
    variant: 'default' as const,
  },
  propsConfig: {
    value: {
      type: 'number',
      default: 65,
      label: 'Value',
      description: 'Current progress value',
    },
    max: {
      type: 'number',
      default: 100,
      label: 'Max',
      description: 'Maximum progress value',
    },
    variant: {
      type: 'select',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'accent', label: 'Accent' },
        { value: 'success', label: 'Success' },
      ],
      default: 'default',
      label: 'Variant',
      description: 'Bar color variant',
    },
  },
  presets: [
    {
      name: 'Medium Progress',
      props: {
        value: 65,
        max: 100,
        variant: 'default' as const,
      },
    },
    {
      name: 'Almost Done',
      props: {
        value: 85,
        max: 100,
        variant: 'success' as const,
      },
    },
    {
      name: 'Accent Progress',
      props: {
        value: 40,
        max: 100,
        variant: 'accent' as const,
      },
    },
    {
      name: 'Just Started',
      props: {
        value: 15,
        max: 100,
        variant: 'default' as const,
      },
    },
  ],
};
