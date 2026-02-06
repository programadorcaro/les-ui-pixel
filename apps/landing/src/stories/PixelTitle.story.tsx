import { PixelTitle, PixelTitleProps } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const pixelTitleStory: StoryConfig<PixelTitleProps> = {
  id: 'pixel-title',
  title: 'PixelTitle',
  component: PixelTitle,
  description:
    'Pixel art title with glitch and floating effects for impactful headings.',
  isVoidElement: false,
  defaultProps: {
    text: 'Game Over',
    glitch: true,
    float: true,
  },
  propsConfig: {
    text: {
      type: 'text',
      default: 'Game Over',
      label: 'Text',
      description: 'Title text',
    },
    glitch: {
      type: 'boolean',
      default: true,
      label: 'Glitch',
      description: 'Apply glitch effect',
    },
    float: {
      type: 'boolean',
      default: true,
      label: 'Float',
      description: 'Apply floating effect',
    },
  },
  presets: [
    {
      name: 'Default Title',
      props: {
        text: 'Game Over',
        glitch: true,
        float: true,
      },
    },
    {
      name: 'No Float',
      props: {
        text: 'Level Complete',
        glitch: true,
        float: false,
      },
    },
    {
      name: 'No Glitch',
      props: {
        text: 'Welcome',
        glitch: false,
        float: true,
      },
    },
    {
      name: 'Simple',
      props: {
        text: 'Menu',
        glitch: false,
        float: false,
      },
    },
  ],
};
