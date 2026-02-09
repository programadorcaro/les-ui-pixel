# L&S Pixel

React component library with retro pixel art aesthetics, inspired by classic 8-bit games.

## Installation

```bash
npm install @les-ui/pixel
```

or

```bash
pnpm add @les-ui/pixel
```

or

```bash
yarn add @les-ui/pixel
```

## Technologies

- **React 18** - UI framework
- **TypeScript 5** - Static typing
- **Vite 6** - Build tool and dev server
- **Turborepo 2** - Monorepo build system
- **pnpm** - Package manager

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- React >= 18.3.1
- React-DOM >= 18.3.1

### Basic Usage

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Badge,
} from '@les-ui/pixel';
import '@les-ui/pixel/styles.css';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pixel Card</CardTitle>
      </CardHeader>
      <CardBody>
        <Badge variant="success">NEW</Badge>
        <Button variant="primary">Start Game</Button>
      </CardBody>
    </Card>
  );
}

export default App;
```

## Development

This repository is a **Turborepo** monorepo using **pnpm** workspaces:

```
les-ui-pixel/
├── apps/
│   └── landing/          # Landing page + docs (@repo/landing)
└── packages/
    └── ui/               # Component library (@les-ui/pixel)
```

### Development Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Local Installation

```bash
# Install dependencies
pnpm install

# Initial build of packages
pnpm build
```

### Development URLs

- **Landing Page**: http://127.0.0.1:5173

## Available Components

### PixelTitle

- `PixelTitle` - Pixel art title with glitch and float effects
- Props: `text`, `glitch` (boolean, default: true), `float` (boolean, default: true)

```tsx
import { PixelTitle } from '@les-ui/pixel';

// With glitch and float (default)
<PixelTitle text="PIXEL ART" />

// Without glitch
<PixelTitle text="PIXEL ART" glitch={false} />

// Without float
<PixelTitle text="PIXEL ART" float={false} />

// Without both
<PixelTitle text="PIXEL ART" glitch={false} float={false} />
```

### Buttons

- `Button` - Pixel art buttons with multiple variants (primary, secondary, accent, danger, success, ghost)
- Sizes: sm, md, lg
- Animations: pulse, shake, glow

### Cards

- `Card` - Main container
- `CardHeader` / `CardTitle` - Header
- `CardBody` - Card body
- `CardFooter` - Footer

### Carousel

- `Carousel` - Horizontal scroll/carousel for content (e.g. contributor cards)

### Badges and Labels

- `Badge` - Status badges (primary, success, danger, warning)
- `LevelBadge` - Level badges (1-4)
- `Label` - Colored labels (pink, cyan, yellow)

### Inputs

- `Input` - Text input
- `Textarea` - Text area
- `Select` - Dropdown select
- `Checkbox` - Custom checkbox

### Progress

- `ProgressBar` - Progress bar
- `HealthBar` - Health/mana/xp bar
- `Loader` - Loading indicators (pixel, dots, spinner)

### Alerts

- `Alert` - Alerts (info, success, warning, danger)
- `Toast` - Toast notifications

### Skeleton

- `Skeleton` - Placeholder loading skeleton

## Using the Components

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Badge,
} from '@les-ui/pixel';
import '@les-ui/pixel/styles.css';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pixel Card</CardTitle>
      </CardHeader>
      <CardBody>
        <Badge variant="success">NEW</Badge>
        <Button variant="primary">Start Game</Button>
      </CardBody>
    </Card>
  );
}
```

## Available Scripts

```bash
# Development
pnpm dev           # Run all apps in parallel

# Build
pnpm build         # Build all packages and apps

# Linting
pnpm lint          # Run linter across all packages

# Formatting
pnpm format        # Format code with Prettier

# Clean
pnpm clean         # Remove node_modules and dist
```

## Style Structure

The library uses CSS variables for visual consistency:

```css
/* Main colors */
--color-primary:
  #ff006e --color-accent: #00f5ff --color-success: #06ffa5
    --color-danger: #ff006e /* Pixel art font */ --font-pixel: 'Press Start 2P',
  monospace /* Spacing */ --space-sm: 8px --space-md: 16px --space-lg: 24px;
```

### Pixel Corners

All components use CSS `clip-path` to create the characteristic pixel art corners:

```css
.pixel-corner-8 {
  clip-path: polygon(
    0 8px,
    8px 8px,
    8px 0,
    calc(100% - 8px) 0,
    calc(100% - 8px) 8px,
    100% 8px,
    100% calc(100% - 8px),
    calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) 100%,
    8px 100%,
    8px calc(100% - 8px),
    0 calc(100% - 8px)
  );
}
```

## Release Process

This project uses **Changesets** for versioning and publishing. Only the **`@les-ui/pixel`** package is versioned; the landing app (`@repo/landing`) is ignored by changesets.

### Creating a New Changeset

After changing code in `packages/ui`, create a changeset:

```bash
pnpm changeset
```

You will be prompted to:

1. Select the package(s) changed — only **`@les-ui/pixel`** is versioned; `@repo/landing` is ignored.
2. Choose the version type:
   - **patch**: Bug fixes, small corrections (1.0.0 → 1.0.1)
   - **minor**: New backward-compatible features (1.0.0 → 1.1.0)
   - **major**: Breaking changes (1.0.0 → 2.0.0)
3. Write a short description of the changes in the generated markdown file.

### Publishing a New Version

```bash
# Update package versions and generate CHANGELOG.md
pnpm version-packages

# Build and publish to npm
pnpm release
```

This command:

1. Reads all changesets from the `.changeset/` directory
2. Updates the package version in `package.json`
3. Generates/updates the `CHANGELOG.md` file
4. Compiles the code
5. Publishes to the npm registry

## Build and Deploy

### Development

```bash
# Run the landing page
pnpm --filter @repo/landing dev

# Build the UI package
pnpm --filter @les-ui/pixel build
```

### Production Build

```bash
# Production build of the package
pnpm --filter @les-ui/pixel build

# Build all packages and apps
pnpm build
```

### Preview

```bash
# Preview the landing page build
pnpm --filter @repo/landing preview
```

## Contributing

The default branch is **`develop`**. Direct commits to `main` and `develop` are **not allowed**. All changes must be made on a **new branch** and submitted via a Pull Request **into `develop`**.

### How to contribute

1. **Clone the repository**  
   `git clone https://github.com/programadorcaro/les-ui-pixel.git && cd les-ui-pixel`

2. **Create a new branch from `develop`** (e.g. `feature/my-feature` or `fix/bug-description`). Do not commit or push to `main` or `develop`.  
   `git checkout develop && git pull && git checkout -b feature/my-feature`

3. **Install and build**  
   `pnpm install && pnpm build`

4. **Make your changes** in the appropriate app or package.

5. **Run lint**  
   `pnpm lint`

6. **Commit on your branch** (prefer conventional commits, e.g. `feat: add new feature`)  
   `git add . && git commit -m 'feat: add new feature'`

7. **Push your branch**  
   `git push origin feature/my-feature`

8. **Open a Pull Request** from your branch **into `develop`**. Only feature/fix branches are accepted; do not open PRs from `main` or `develop`.

Maintainers will review and merge into `develop`. Version bumps and publishing are done by maintainers via the [Release Process](#release-process) (`version-packages` and `release`).

## License

© 2026 L&S Pixel
