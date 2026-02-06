import {
  Carousel,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  ProgressBar,
} from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';
import { Icon } from '../components/Icon';

const carouselContent = [
  <Card key={0}>
    <CardHeader>
      <CardTitle>Character Card</CardTitle>
    </CardHeader>
    <CardBody>
      <Icon name="Android" size={48} />
      <p className="pixel-text">Level 42 Warrior</p>
      <ProgressBar value={80} max={100} />
    </CardBody>
    <CardFooter>
      <Button size="sm" variant="primary">
        View
      </Button>
    </CardFooter>
  </Card>,
  <Card key={1} variant="accent">
    <CardHeader>
      <CardTitle>Quest Card</CardTitle>
    </CardHeader>
    <CardBody>
      <Icon name="Gamepad" size={48} />
      <p className="pixel-text">Daily Challenge</p>
      <ProgressBar value={60} max={100} variant="accent" />
    </CardBody>
    <CardFooter>
      <Button size="sm" variant="accent">
        Start
      </Button>
    </CardFooter>
  </Card>,
  <Card key={2} variant="danger">
    <CardHeader>
      <CardTitle>Boss Battle</CardTitle>
    </CardHeader>
    <CardBody>
      <Icon name="Zap" size={48} />
      <p className="pixel-text">Final Challenge</p>
      <ProgressBar value={30} max={100} />
    </CardBody>
    <CardFooter>
      <Button size="sm" variant="danger">
        Fight
      </Button>
    </CardFooter>
  </Card>,
];

const childrenCodePlaceholder = `  <Card>
    <CardHeader>
      <CardTitle>Character Card</CardTitle>
    </CardHeader>
    <CardBody>
      <Icon name="Android" size={48} />
      <p className="pixel-text">Level 42 Warrior</p>
      <ProgressBar value={80} max={100} />
    </CardBody>
    <CardFooter>
      <Button size="sm" variant="primary">View</Button>
    </CardFooter>
  </Card>
  <Card variant="accent">
    <CardHeader>
      <CardTitle>Quest Card</CardTitle>
    </CardHeader>
    <CardBody>
      <Icon name="Gamepad" size={48} />
      <p className="pixel-text">Daily Challenge</p>
      <ProgressBar value={60} max={100} variant="accent" />
    </CardBody>
    <CardFooter>
      <Button size="sm" variant="accent">Start</Button>
    </CardFooter>
  </Card>
  <Card variant="danger">
    <CardHeader>
      <CardTitle>Boss Battle</CardTitle>
    </CardHeader>
    <CardBody>
      <Icon name="Zap" size={48} />
      <p className="pixel-text">Final Challenge</p>
      <ProgressBar value={30} max={100} />
    </CardBody>
    <CardFooter>
      <Button size="sm" variant="danger">Fight</Button>
    </CardFooter>
  </Card>`;

export const carouselStory: StoryConfig = {
  id: 'carousel',
  title: 'Carousel',
  component: Carousel,
  description:
    'Accessible carousel component with keyboard navigation and mobile swipe support. Navigate using arrow keys, Home, End, or swipe on touch devices.',
  isVoidElement: false,
  childrenCodePlaceholder,
  defaultProps: {
    children: carouselContent,
  },
};
