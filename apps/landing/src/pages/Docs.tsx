import { Playground } from '../components/Playground';
import {
  alertStory,
  badgeStory,
  buttonStory,
  cardStory,
  carouselStory,
  inputStory,
  loaderStory,
  pixelTitleStory,
  progressStory,
  selectStory,
  skeletonStory,
} from '../stories';

export function Docs() {
  return (
    <section className="section" id="docs">
      <h2 className="section-title">Component Documentation</h2>
      <p className="pixel-text" style={{ marginBottom: '24px' }}>
        Explore and test library components in real-time. Adjust props and see
        result instantly.
      </p>
      <Playground
        stories={[
          alertStory,
          badgeStory,
          buttonStory,
          cardStory,
          carouselStory,
          inputStory,
          loaderStory,
          pixelTitleStory,
          progressStory,
          selectStory,
          skeletonStory,
        ]}
      />
    </section>
  );
}
