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
    <main className="section" id="docs" aria-label="Documentation">
      <h1 className="section-title">Component Documentation</h1>
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
    </main>
  );
}
