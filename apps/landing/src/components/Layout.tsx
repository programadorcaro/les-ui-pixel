import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { PixelTitle } from '@les-ui/pixel';
import { useGitHubStats, formatStarCount } from '../hooks/useGitHubStats';

const GITHUB_REPO_URL = 'https://github.com/programadorcaro/les-ui-pixel';

const STAR_COUNT = 4000;
const STAR_RADIUS = 1;
const TWINKLE_SPEED = 0.002;
const STAR_OPACITY_MIN = 0.05;
const STAR_OPACITY_MAX = 0.4;

type Star = { x: number; y: number; phase: number };

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function initStars(width: number, height: number): Star[] {
      return Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(
      context: CanvasRenderingContext2D,
      width: number,
      height: number,
      stars: Star[],
      time: number
    ) {
      context.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const t = time * TWINKLE_SPEED + star.phase;
        const opacity =
          STAR_OPACITY_MIN +
          (STAR_OPACITY_MAX - STAR_OPACITY_MIN) * (1 + Math.sin(t)) * 0.5;
        context.beginPath();
        context.arc(star.x, star.y, STAR_RADIUS, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 0, 110, ${opacity})`;
        context.fill();
      }
    }

    function resize() {
      const el = canvasRef.current;
      const context = el?.getContext('2d');
      if (!el || !context) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      el.width = w;
      el.height = h;
      starsRef.current = initStars(w, h);
    }

    resize();

    function loop(time: number) {
      const el = canvasRef.current;
      const context = el?.getContext('2d');
      if (!el || !context || starsRef.current.length === 0) return;
      draw(context, el.width, el.height, starsRef.current, time);
      frameRef.current = requestAnimationFrame(loop);
    }
    frameRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      resize();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="stars">
      <canvas ref={canvasRef} className="stars-canvas" aria-hidden />
    </div>
  );
}

function Header() {
  const { stats, loading } = useGitHubStats();

  return (
    <header className="header">
      <Link to="/">
        <PixelTitle text="PIXEL UI" float={false} glitch={false} />
      </Link>

      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/docs" className="nav-link">
          Docs
        </Link>
        <a
          href={GITHUB_REPO_URL}
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="GitHub" size={18} className="pixel-icon" />
          <span>GitHub</span>
        </a>
        <a
          href={GITHUB_REPO_URL}
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="Star" size={16} className="pixel-icon" />
          <span>{loading ? '...' : formatStarCount(stats.stars)}</span>
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p
        className="pixel-text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        Made with <Icon name="Heart" size={12} /> and pixels
      </p>
      <p className="pixel-text-small">© 2026 Pixel Art Component Library</p>
    </footer>
  );
}

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Starfield />
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
