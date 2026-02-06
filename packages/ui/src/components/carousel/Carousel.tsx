import React, { useState, useRef, useCallback, useEffect } from 'react';
import './carousel.css';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  onSlideChange?: (index: number) => void;
  ariaLabel?: string;
}

export function Carousel({
  children,
  className = '',
  onSlideChange,
  ariaLabel = 'Carousel',
  ...props
}: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;

  const activeSlideId = `carousel-slide-${activeSlide}`;

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return;
    
    setActiveSlide(index);
    onSlideChange?.(index);
  }, [totalSlides, onSlideChange]);

  const goToPrev = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        goToNext();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
    }
  }, [goToPrev, goToNext, goToSlide, totalSlides]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  const trackTransform = totalSlides > 0 ? `translateX(-${activeSlide * 100}%)` : 'translateX(0)';

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const focusables = track.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusables.forEach((el) => {
      el.setAttribute('tabindex', '-1');
    });
  });

  return (
    <div
      ref={carouselRef}
      className={`carousel-container ${className}`}
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      aria-live="polite"
      aria-activedescendant={activeSlideId}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      <div className="carousel-nav">
        <button
          className="carousel-nav-btn carousel-nav-btn-prev"
          onClick={goToPrev}
          disabled={activeSlide === 0}
          aria-label="Previous slide"
          type="button"
        >
          ◀
        </button>
        <button
          className="carousel-nav-btn carousel-nav-btn-next"
          onClick={goToNext}
          disabled={activeSlide === totalSlides - 1}
          aria-label="Next slide"
          type="button"
        >
          ▶
        </button>
      </div>

      <div className="carousel-track" ref={trackRef} style={{ transform: trackTransform }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`carousel-slide-${index}`}
            className="carousel-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${totalSlides}`}
            tabIndex={-1}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

Carousel.displayName = 'Carousel';
