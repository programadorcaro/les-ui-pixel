import { Carousel } from '@les-ui/pixel';
import { Card, CardHeader, CardTitle, CardBody } from '@les-ui/pixel';

export function CarouselExample() {
  return (
    <Carousel onSlideChange={(index) => console.log('Slide changed:', index)}>
      <Card>
        <CardHeader>
          <CardTitle>Level 1</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Welcome to the first slide!</p>
          <p>Navigate using arrow keys or swipe on mobile.</p>
        </CardBody>
      </Card>
      <Card variant="accent">
        <CardHeader>
          <CardTitle>Level 2</CardTitle>
        </CardHeader>
        <CardBody>
          <p>You're making progress!</p>
          <p>This is the second slide.</p>
        </CardBody>
      </Card>
      <Card variant="success">
        <CardHeader>
          <CardTitle>Level 3</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Almost there!</p>
          <p>Third slide reached.</p>
        </CardBody>
      </Card>
      <Card variant="danger">
        <CardHeader>
          <CardTitle>Final Level</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Game Over or Victory?</p>
          <p>Final slide.</p>
        </CardBody>
      </Card>
    </Carousel>
  );
}
