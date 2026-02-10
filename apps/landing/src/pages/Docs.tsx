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

const DOCS_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 3,
  duration: Math.random() * 2 + 2,
}));

export function Docs() {
  return (
    <main className="section" id="docs" aria-label="Documentation">
      <div className="docs-particles" aria-hidden>
        {DOCS_PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="docs-particle"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="docs-content">
        <h1 className="section-title">
          <span className="docs-title-prefix">⚡</span>
          Component Documentation
        </h1>
        <p className="pixel-text" style={{ marginBottom: '24px' }}>
          Explore and test library components in real-time. Adjust props and see
          result instantly.
        </p>
        <div className="docs-playground-wrapper">
          <div className="docs-playground-border" aria-hidden />
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
        </div>
      </div>
    </main>
  );
}
