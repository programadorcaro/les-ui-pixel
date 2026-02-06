import { Input } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const inputStory: StoryConfig = {
  id: 'input',
  title: 'Input',
  component: Input,
  description:
    'Text input field with pixel art style and validation states.',
  isVoidElement: true,
  defaultProps: {
    type: 'text' as const,
    placeholder: 'Enter text...',
    state: 'default' as const,
    disabled: false,
  },
  propsConfig: {
    type: {
      type: 'select',
      options: [
        { value: 'text', label: 'Text' },
        { value: 'email', label: 'Email' },
        { value: 'password', label: 'Password' },
        { value: 'number', label: 'Number' },
      ],
      default: 'text',
      label: 'Type',
      description: 'Input type',
    },
    placeholder: {
      type: 'text',
      default: 'Enter text...',
      label: 'Placeholder',
      description: 'Example text displayed when empty',
    },
    state: {
      type: 'select',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'success', label: 'Success' },
        { value: 'error', label: 'Error' },
      ],
      default: 'default',
      label: 'State',
      description: 'Input validation state',
    },
    disabled: {
      type: 'boolean',
      default: false,
      label: 'Disabled',
      description: 'Disable the input',
    },
  },
  presets: [
    {
      name: 'Default Text Input',
      props: {
        type: 'text' as const,
        placeholder: 'Enter username...',
        state: 'default' as const,
        disabled: false,
      },
    },
    {
      name: 'Success Email Input',
      props: {
        type: 'email' as const,
        placeholder: 'user@example.com',
        state: 'success' as const,
        disabled: false,
      },
    },
    {
      name: 'Error Password Input',
      props: {
        type: 'password' as const,
        placeholder: 'Enter password',
        state: 'error' as const,
        disabled: false,
      },
    },
    {
      name: 'Disabled Input',
      props: {
        type: 'text' as const,
        placeholder: 'Disabled field',
        state: 'default' as const,
        disabled: true,
      },
    },
  ],
};
