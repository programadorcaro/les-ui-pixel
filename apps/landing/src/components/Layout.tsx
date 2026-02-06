import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { useGitHubStats, formatStarCount } from '../hooks/useGitHubStats';

const GITHUB_REPO_URL = 'https://github.com/programadorcaro/les-ui-pixel';

function Header() {
  const { stats, loading } = useGitHubStats();

  return (
    <header className="header">
      <Link to="/" className="header-brand">
        <img src="/logo.png" alt="L&S Pixel" className="header-logo" />
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
          <Icon name="GitHub" size={18} className="nav-icon" />
          <span>GitHub</span>
        </a>
        <a
          href={GITHUB_REPO_URL}
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="Star" size={16} className="nav-icon" />
          <span>{loading ? '...' : formatStarCount(stats.stars)}</span>
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Made with <Icon name="Heart" size={12} /> and pixels · © 2026 L&S Pixel
      </p>
      <a
        href={GITHUB_REPO_URL}
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </footer>
  );
}

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
