import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { useGitHubStats, formatStarCount } from '../hooks/useGitHubStats';
import { useMediaQuery } from '../hooks/useMediaQuery';

const GITHUB_REPO_URL = 'https://github.com/programadorcaro/les-ui-pixel';

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const { stats, loading } = useGitHubStats();

  return (
    <>
      <Link to="/" className="nav-link" onClick={onNavigate}>
        Home
      </Link>
      <Link to="/docs" className="nav-link" onClick={onNavigate}>
        Docs
      </Link>
      <a
        href={GITHUB_REPO_URL}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        <Icon name="GitHub" size={18} className="nav-icon" />
        <span>GitHub</span>
      </a>
      <a
        href={GITHUB_REPO_URL}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        <Icon name="Star" size={16} className="nav-icon" />
        <span>{loading ? '...' : formatStarCount(stats.stars)}</span>
      </a>
    </>
  );
}

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!isMobile) setDrawerOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <header className="header">
      <Link to="/" className="header-brand">
        <img src="/logo.png" alt="L&S Pixel" className="header-logo" />
      </Link>
      {isMobile ? (
        <>
          <button
            type="button"
            className="header-hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <Icon name="Menu" size={24} />
          </button>
          {typeof document !== 'undefined' &&
            createPortal(
              <>
                <div
                  className={`header-drawer-backdrop ${drawerOpen ? 'header-drawer-backdrop--open' : ''}`}
                  aria-hidden
                  onClick={() => setDrawerOpen(false)}
                />
                <div
                  className={`header-drawer ${drawerOpen ? 'header-drawer--open' : ''}`}
                  role="dialog"
                  aria-label="Navigation menu"
                >
                  <div className="header-drawer-inner">
                    <div className="header-drawer-header">
                      <img src="/logo.png" alt="L&S Pixel" className="header-drawer-logo" />
                      <button
                        type="button"
                        className="header-drawer-close"
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close menu"
                      >
                        <Icon name="Close" size={24} />
                      </button>
                    </div>
                    <nav className="header-drawer-nav" aria-label="Main">
                      <NavContent onNavigate={() => setDrawerOpen(false)} />
                    </nav>
                  </div>
                </div>
              </>,
              document.body
            )}
        </>
      ) : (
        <nav className="nav" aria-label="Main">
          <NavContent />
        </nav>
      )}
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
