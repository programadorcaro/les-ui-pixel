import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Badge,
  LevelBadge,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  ProgressBar,
  Loader,
  Alert,
  Toast,
  PixelTitle,
  Skeleton,
} from '@les-ui/pixel';
import { Icon } from '../components/Icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGitHubStats, formatStarCount } from '../hooks/useGitHubStats';

const GITHUB_REPO_URL = 'https://github.com/programadorcaro/les-ui-pixel';

const COLLABORATORS = [
  {
    name: 'Lucas Maia e Silva',
    role: 'Maintainer',
    avatar: 'https://avatars.githubusercontent.com/u/8356935?v=4',
  },
  {
    name: 'Víctor Souza',
    role: 'Contributor',
    avatar: 'https://avatars.githubusercontent.com/u/102697200?v=4',
  },
];

function Hero() {
  const { stats, loading } = useGitHubStats();

  return (
    <section className="hero">
      <PixelTitle text="PIXEL UI" />
      <h2 className="pixel-subtitle">Component Library</h2>
      <p className="pixel-text">
        Retro gaming inspired UI components with authentic pixel art corners
      </p>
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/docs" className="button-link">
          View Docs
        </Link>
      </div>
      <div className="hero-stats">
        <a
          href={GITHUB_REPO_URL}
          className="hero-stat-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="GitHub" size={20} className="pixel-icon" />
          <span>View on GitHub</span>
        </a>
        <a
          href={GITHUB_REPO_URL}
          className="hero-stat-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="Star" size={20} className="pixel-icon" />
          <span>{loading ? '...' : formatStarCount(stats.stars)}</span>
        </a>
      </div>
    </section>
  );
}

function ButtonsSection() {
  return (
    <section className="section" id="components">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Buttons
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Primary Buttons</h3>
          <Button variant="primary">Start Game</Button>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
        </div>

        <div className="component-card">
          <h3 className="component-label">Secondary Buttons</h3>
          <Button variant="secondary">Continue</Button>
          <Button variant="secondary" size="lg">
            Load Save
          </Button>
          <Button variant="secondary" size="sm">
            Cancel
          </Button>
        </div>

        <div className="component-card">
          <h3 className="component-label">Accent Buttons</h3>
          <Button variant="accent">Join Now</Button>
          <Button variant="accent" size="lg">
            Claim Reward
          </Button>
          <Button variant="accent" size="sm">
            Info
          </Button>
        </div>

        <div className="component-card">
          <h3 className="component-label">Animated Buttons</h3>
          <Button variant="primary" animation="pulse">
            Pulse
          </Button>
          <Button variant="accent" animation="glow">
            Glow
          </Button>
        </div>
      </div>
    </section>
  );
}

function CardsSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Cards
      </h2>
      <div className="component-grid">
        <Card>
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
            <Button size="sm" variant="accent">
              Start
            </Button>
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
            <Button size="sm" variant="danger">
              Fight
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

function BadgesSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Badges & Labels
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Status Badges</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge variant="primary">NEW</Badge>
            <Badge variant="success">ONLINE</Badge>
            <Badge variant="danger">OFFLINE</Badge>
            <Badge variant="warning">BUSY</Badge>
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Level Badges</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <LevelBadge level={1}>LV.1</LevelBadge>
            <LevelBadge level={2}>LV.10</LevelBadge>
            <LevelBadge level={3}>LV.50</LevelBadge>
            <LevelBadge level={4}>LV.99</LevelBadge>
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Pixel Labels</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Label variant="pink">RARE</Label>
            <Label variant="cyan">EPIC</Label>
            <Label variant="yellow">LEGENDARY</Label>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputsSection() {
  const [selectedCharacter, setSelectedCharacter] = useState('');

  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Input Fields
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Text Input</h3>
          <Input placeholder="Enter username..." />
          <Input placeholder="Success state" state="success" />
          <Input placeholder="Error state" state="error" />
        </div>

        <div className="component-card">
          <h3 className="component-label">Textarea</h3>
          <Textarea placeholder="Enter your message..." rows={4} />
        </div>

        <div className="component-card">
          <h3 className="component-label">Select</h3>
          <Select
            value={selectedCharacter}
            onChange={setSelectedCharacter}
            placeholder="Select character..."
            options={[
              { value: 'warrior', label: 'Warrior' },
              { value: 'mage', label: 'Mage' },
              { value: 'rogue', label: 'Rogue' },
            ]}
          />
        </div>

        <div className="component-card">
          <h3 className="component-label">Checkbox</h3>
          <Checkbox label="Accept terms" />
          <Checkbox label="Remember me" defaultChecked />
        </div>
      </div>
    </section>
  );
}

function ProgressSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Progress & Loading
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Progress Bars</h3>
          <ProgressBar value={30} max={100} />
          <ProgressBar value={60} max={100} variant="accent" />
          <ProgressBar value={100} max={100} variant="success" />
        </div>

        <div className="component-card">
          <h3 className="component-label">Loading Indicators</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Loader type="dots" />
            <Loader type="spinner" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkeletonSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Skeleton
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Text lines</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Skeleton style={{ width: '100%', height: '12px' }} />
            <Skeleton style={{ width: '90%', height: '12px' }} />
            <Skeleton style={{ width: '70%', height: '12px' }} />
            <Skeleton style={{ width: '85%', height: '12px' }} />
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Avatar + text</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Skeleton width={48} height={48} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                flex: 1,
              }}
            >
              <Skeleton style={{ width: '80%', height: '12px' }} />
              <Skeleton style={{ width: '50%', height: '12px' }} />
            </div>
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Card placeholder</h3>
          <Skeleton height={120} style={{ width: '100%' }} />
        </div>
      </div>
    </section>
  );
}

function AlertsSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Alerts &
        Notifications
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Alert variant="info">
          <strong>Info:</strong> This is an informational message.
        </Alert>
        <Alert variant="success">
          <strong>Success:</strong> Your game has been saved!
        </Alert>
        <Alert variant="warning">
          <strong>Warning:</strong> Low health detected!
        </Alert>
        <Alert variant="danger">
          <strong>Error:</strong> Connection lost!
        </Alert>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Toast>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="Gamepad" size={16} />
              <span>New quest available!</span>
            </div>
          </Toast>
          <Toast>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="Trophy" size={16} />
              <span>Achievement unlocked!</span>
            </div>
          </Toast>
        </div>
      </div>
    </section>
  );
}

function CollaboratorsSection() {
  return (
    <section className="section" id="collaborators">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Colaboradores
      </h2>
      <div className="collaborators-grid">
        {COLLABORATORS.map((person) => (
          <Card key={person.name}>
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
                className="collaborator-avatar"
                width={64}
                height={64}
              />
              <CardTitle>{person.name}</CardTitle>
            </CardHeader>
            <CardBody>
              <span className="collaborator-role">{person.role}</span>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

function HowToContributeSection() {
  const steps = [
    'Clone o repositório',
    'Instale dependências (pnpm install)',
    'Crie uma branch para sua mudança',
    'Abra um Pull Request',
  ];
  return (
    <section className="section" id="contribuir">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Como contribuir
      </h2>
      <ol className="contribute-steps">
        {steps.map((step, i) => (
          <li key={i} className="contribute-step">
            {step}
          </li>
        ))}
      </ol>
      <a
        href={`${GITHUB_REPO_URL}#readme`}
        className="hero-stat-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver guia completo
      </a>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <ButtonsSection />
      <CardsSection />
      <BadgesSection />
      <InputsSection />
      <ProgressSection />
      <SkeletonSection />
      <AlertsSection />
      <CollaboratorsSection />
      <HowToContributeSection />
    </>
  );
}
