import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Badge,
  Label,
  ProgressBar,
  PixelTitle,
  Carousel,
} from '@les-ui/pixel';
import { Link } from 'react-router-dom';
import { useGitHubContributors } from '../hooks/useGitHubContributors';
import type { GitHubContributor } from '../hooks/useGitHubContributors';
import { useMediaQuery } from '../hooks/useMediaQuery';

const GITHUB_REPO_URL = 'https://github.com/programadorcaro/les-ui-pixel';

const LANDING_BADGES: {
  label: string;
  variant: 'primary' | 'success' | 'danger' | 'warning';
}[] = [
  { label: 'React', variant: 'primary' },
  { label: 'Pixel Art', variant: 'success' },
  { label: 'Components', variant: 'warning' },
  { label: 'Games', variant: 'danger' },
  { label: 'Open source', variant: 'primary' },
  { label: 'UI Library', variant: 'success' },
  { label: 'Retro', variant: 'warning' },
  { label: 'TypeScript', variant: 'primary' },
];

const LANDING_LABELS: { label: string; variant: 'pink' | 'cyan' | 'yellow' }[] =
  [
    { label: 'RARE', variant: 'pink' },
    { label: 'EPIC', variant: 'cyan' },
    { label: 'LEGENDARY', variant: 'yellow' },
  ];

// const SHOWCASE_COMPANIES = [
//   {
//     name: 'Retro Games Studio',
//     description: 'Building immersive pixel art games with our components',
//     logo: '🎮',
//     variant: 'accent' as const,
//   },
//   {
//     name: 'Pixel Dashboard Co',
//     description: 'Creating beautiful retro-style admin panels',
//     logo: '📊',
//     variant: 'success' as const,
//   },
//   {
//     name: '8-Bit Analytics',
//     description: 'Data visualization with nostalgic charm',
//     logo: '📈',
//     variant: 'primary' as const,
//   },
//   {
//     name: 'Indie Dev Hub',
//     description: 'Powering indie game developers worldwide',
//     logo: '🚀',
//     variant: 'danger' as const,
//   },
// ];

const HERO_STARS: {
  top: string;
  left: string;
  delay: number;
  opacity: 'dim' | 'mid' | 'bright';
  size: number;
}[] = [
  { top: '5%', left: '3%', delay: 0, opacity: 'dim', size: 2 },
  { top: '12%', left: '8%', delay: 0.4, opacity: 'bright', size: 4 },
  { top: '7%', left: '14%', delay: 1.2, opacity: 'mid', size: 3 },
  { top: '16%', left: '22%', delay: 0.8, opacity: 'dim', size: 2 },
  { top: '4%', left: '28%', delay: 0.2, opacity: 'bright', size: 5 },
  { top: '11%', left: '35%', delay: 1.6, opacity: 'mid', size: 3 },
  { top: '8%', left: '42%', delay: 0.6, opacity: 'dim', size: 2 },
  { top: '14%', left: '48%', delay: 1.4, opacity: 'bright', size: 4 },
  { top: '6%', left: '54%', delay: 0.3, opacity: 'mid', size: 3 },
  { top: '18%', left: '60%', delay: 0.9, opacity: 'dim', size: 2 },
  { top: '9%', left: '66%', delay: 1.1, opacity: 'bright', size: 4 },
  { top: '13%', left: '72%', delay: 0.5, opacity: 'mid', size: 3 },
  { top: '5%', left: '78%', delay: 1.3, opacity: 'dim', size: 2 },
  { top: '15%', left: '84%', delay: 0.7, opacity: 'bright', size: 5 },
  { top: '10%', left: '91%', delay: 0.1, opacity: 'mid', size: 3 },
  { top: '7%', left: '18%', delay: 1.5, opacity: 'dim', size: 2 },
  { top: '14%', left: '26%', delay: 0.4, opacity: 'bright', size: 3 },
  { top: '6%', left: '38%', delay: 0.8, opacity: 'mid', size: 4 },
  { top: '12%', left: '52%', delay: 1.2, opacity: 'dim', size: 2 },
  { top: '8%', left: '64%', delay: 0.2, opacity: 'bright', size: 3 },
  { top: '16%', left: '76%', delay: 0.6, opacity: 'mid', size: 2 },
  { top: '9%', left: '88%', delay: 1, opacity: 'dim', size: 4 },
  { top: '11%', left: '12%', delay: 0.5, opacity: 'mid', size: 3 },
  { top: '5%', left: '46%', delay: 1.4, opacity: 'bright', size: 2 },
  { top: '15%', left: '70%', delay: 0.3, opacity: 'dim', size: 3 },
  { top: '7%', left: '96%', delay: 0.9, opacity: 'mid', size: 2 },
];

export function Home() {
  const { contributors, loading, error } = useGitHubContributors();
  const isDesktop = useMediaQuery('(min-width: 764px)');
  const useCarousel = contributors.length > (isDesktop ? 3 : 2);

  return (
    <main className="landing">
      <section className="landing-hero" aria-label="Hero">
        <div className="landing-hero-inner">
          <div className="landing-hero-card">
            <PixelTitle text="L&S Pixel" className="landing-hero-title" />
            <p className="landing-hero-subtitle">Component Library</p>
            <p className="landing-hero-description">
              React components with pixel art aesthetics
            </p>
            <p className="landing-hero-text">
              Built for dashboards, games and retro interfaces
            </p>
            <Link to="/docs" className="landing-hero-cta">
              <Button variant="primary" size="lg" style8bit>
                View Docs
              </Button>
            </Link>
          </div>
          <div className="landing-hero-stars" aria-hidden>
            {HERO_STARS.map((star, i) => (
              <span
                key={i}
                className={`landing-star landing-star--${star.opacity}`}
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
          </div>
          <div className="landing-hero-video">
            <div className="landing-video-container">
              <div className="landing-video-wrapper">
                <video
                  className="landing-video-backdrop"
                  src="/game.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden
                />
                <div className="landing-video-backdrop-overlay" aria-hidden />
                <img
                  src="/gameOverlay.png"
                  alt=""
                  className="landing-video-overlay"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="landing-grid">
        <div className="landing-card landing-card--pastel-green">
          <h2 className="landing-card-title">Welcome</h2>
          <p className="landing-card-text landing-card-text">
            Welcome to our pixel paradise! A collection of React components
            where classic pixel art meets modern UI. Perfect for games,
            dashboards and retro-style apps.
          </p>
        </div>

        <div className="landing-card landing-card--pastel-yellow">
          <h2 className="landing-card-title">Components</h2>
          <p className="landing-card-text">
            Buttons, cards, badges, inputs, progress bars and more. Built for
            React with TypeScript.
          </p>
          <Link to="/docs" className="landing-card-link">
            Explore components →
          </Link>
        </div>

        <div className="landing-card landing-card--pastel-pink landing-card--wide">
          <h2 className="landing-card-title">Contribute</h2>
          <p className="landing-card-text">
            Open source on GitHub. Report bugs, improve docs or add new
            components.
          </p>
          <a
            href={`${GITHUB_REPO_URL}#readme`}
            className="landing-card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            See how to contribute →
          </a>
        </div>
      </div>

      <div className="landing-bottom">
        <p className="landing-tagline">
          Unleash your pixel passion with a component library for React and
          games.
        </p>
        <div className="landing-tags">
          {LANDING_BADGES.map(({ label, variant }) => (
            <Badge key={label} variant={variant}>
              {label}
            </Badge>
          ))}
          {LANDING_LABELS.map(({ label, variant }) => (
            <Label key={label} variant={variant}>
              {label}
            </Label>
          ))}
        </div>
      </div>

      {/* <section
        className="landing-section landing-section--showcase"
        id="showcase"
      >
        <h2 className="landing-section-title">Trusted by developers</h2>
        <p className="landing-section-desc">
          Companies and teams building amazing pixel art experiences
        </p>
        <div className="landing-showcase">
          <Carousel
            ariaLabel="Showcase companies"
            className="landing-showcase-carousel"
          >
            {SHOWCASE_COMPANIES.map((company) => (
              <Card
                key={company.name}
                variant={company.variant}
                className="landing-showcase-card"
              >
                <CardHeader>
                  <div className="landing-showcase-logo">{company.logo}</div>
                  <CardTitle>{company.name}</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="landing-showcase-text">{company.description}</p>
                </CardBody>
              </Card>
            ))}
          </Carousel>
        </div>
      </section> */}

      <section className="landing-section" id="examples">
        <h2 className="landing-section-title">Component examples</h2>
        <p className="landing-section-desc">
          A quick preview of some components. Explore all variants in the docs.
        </p>
        <div className="landing-examples">
          <div className="landing-example-block">
            <h3 className="landing-example-label">Buttons</h3>
            <div className="landing-example-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="danger" style8bit>
                8-bit Style
              </Button>
            </div>
          </div>
          <div className="landing-example-block">
            <h3 className="landing-example-label">Badges</h3>
            <div className="landing-example-row landing-example-row--wrap">
              <Badge variant="primary">NEW</Badge>
              <Badge variant="success">ONLINE</Badge>
              <Badge variant="warning">BUSY</Badge>
              <Badge variant="danger">OFFLINE</Badge>
            </div>
          </div>
          <div className="landing-example-block">
            <h3 className="landing-example-label">Card & Progress</h3>
            <Card className="landing-example-card">
              <CardHeader>
                <CardTitle>Sample card</CardTitle>
              </CardHeader>
              <CardBody>
                <p className="landing-example-card-text">
                  Level 42 · Progress example
                </p>
                <ProgressBar value={70} max={100} variant="accent" />
              </CardBody>
            </Card>
          </div>
        </div>
        <Link to="/docs" className="landing-section-cta">
          View all components in Docs →
        </Link>
      </section>

      <section className="landing-section" id="contributors">
        <h2 className="landing-section-title">Contributors</h2>
        <p className="landing-section-desc">
          People who maintain and contribute to the project.
        </p>
        <div className="landing-contributors">
          {loading && (
            <p className="landing-contributors-loading">Loading...</p>
          )}
          {error && (
            <p className="landing-contributors-error">
              Unable to load contributors.
            </p>
          )}
          {!loading &&
            !error &&
            contributors.length > 0 &&
            (useCarousel ? (
              <Carousel
                ariaLabel="Contributors "
                className="landing-contributors-carousel"
              >
                {contributors.map((person) => (
                  <ContributorCard key={person.login} person={person} />
                ))}
              </Carousel>
            ) : (
              contributors.map((person) => (
                <ContributorCard key={person.login} person={person} />
              ))
            ))}
        </div>
      </section>
    </main>
  );
}

function ContributorCard({ person }: { person: GitHubContributor }) {
  return (
    <a
      href={`https://github.com/${person.login}`}
      target="_blank"
      rel="noopener noreferrer"
      className="landing-contributor-link"
    >
      <Card className="landing-contributor-card">
        <CardHeader
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            borderBottom: 'none',
          }}
        >
          <img
            src={person.avatar}
            alt={person.name}
            className="landing-contributor-avatar"
            width={64}
            height={64}
          />
          <CardTitle>{person.name}</CardTitle>
        </CardHeader>
        <CardBody className="landing-contributor-body">
          <span className="landing-contributor-role">{person.role}</span>
          {person.contributions > 0 && (
            <span className="landing-contributor-count">
              {person.contributions} commits
            </span>
          )}
        </CardBody>
      </Card>
    </a>
  );
}
