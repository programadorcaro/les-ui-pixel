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

export function Home() {
  const { contributors, loading, error } = useGitHubContributors();
  const isDesktop = useMediaQuery('(min-width: 764px)');
  const useCarousel =
    contributors.length > (isDesktop ? 3 : 2);

  return (
    <main className="landing">
      <div className="landing-grid">
        <div className="landing-card landing-card--hero">
          <PixelTitle text="L&S Pixel" />
          <p className="landing-hero-subtitle">Component Library</p>
          <p className="landing-hero-text">
            React components with pixel art aesthetics for dashboards, games and
            retro interfaces.
          </p>
          <Link to="/docs" className="landing-cta">
            <Button variant="primary" size="lg">
              View Docs
            </Button>
          </Link>
        </div>

        <div className="landing-card landing-card--pastel-green">
          <h2 className="landing-card-title">Welcome</h2>
          <p className="landing-card-text landing-card-text--welcome">
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

      <section className="landing-section" id="contribuintes">
        <h2 className="landing-section-title">Contribuintes</h2>
        <p className="landing-section-desc">
          Pessoas que mantêm e contribuem com o projeto.
        </p>
        <div className="landing-contributors">
          {loading && (
            <p className="landing-contributors-loading">Carregando...</p>
          )}
          {error && (
            <p className="landing-contributors-error">
              Não foi possível carregar os contribuintes.
            </p>
          )}
          {!loading &&
            !error &&
            contributors.length > 0 &&
            (useCarousel ? (
              <Carousel
                ariaLabel="Contribuintes"
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
