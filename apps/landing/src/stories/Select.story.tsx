import { StoryConfig } from '../components/ComponentDoc';
import { SelectExample } from '../components/examples/SelectExample';

export const selectStory: StoryConfig = {
  id: 'select',
  title: 'Select',
  component: SelectExample,
  description:
    'Dropdown with pixel art style for option selection.',
  isVoidElement: true,
  defaultProps: {
    placeholder: 'Select an option...',
    disabled: false,
  },
  propsConfig: {
    placeholder: {
      type: 'text',
      default: 'Select an option...',
      label: 'Placeholder',
      description: 'Text displayed when no option is selected',
    },
    disabled: {
      type: 'boolean',
      default: false,
      label: 'Disabled',
      description: 'Disable select',
    },
  },
  presets: [
    {
      name: 'Default Select',
      props: {
        placeholder: 'Select an option...',
        disabled: false,
      },
    },
    {
      name: 'Character Select',
      props: {
        placeholder: 'Choose your character...',
        disabled: false,
      },
    },
    {
      name: 'Difficulty Select',
      props: {
        placeholder: 'Select difficulty...',
        disabled: false,
      },
    },
    {
      name: 'Disabled Select',
      props: {
        placeholder: 'Select an option...',
        disabled: true,
      },
    },
  ],
};
