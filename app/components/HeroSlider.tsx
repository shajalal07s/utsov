'use client';

import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    title: '',
    subtitle: 'Up to 25% Off with Free Shipping',
    bg: '/image/hs-thu-gen-yes-shopmore-savemore-upd-020726.jpg',
    ctas: [
      { label: 'New', href: '/newarrivals', blink: true },
      { label: 'Bestsellers', href: '/bestsellers' },
      { label: 'Ready To Ship', href: '/within-3-days' },
    ],
  },
  {
    id: 2,
    title: '',
    subtitle: 'For Women, Men & Kids',
    bg: '/image/hs-thu-gen-yes-shaadi-ke-rang-dutyfree-020726.jpg',
    ctas: [
      { label: 'Lehengas', href: '/lehenga/wedding', blink: true },
      { label: 'Sarees', href: '/saree/wedding' },
      { label: 'Salwar Kameez', href: '/salwar/wedding' },
    ],
  },
  {
    id: 3,
    title: "Men's Ethnic Range",
    subtitle: 'Lavish fabrics & timeless styles',
    bg: '/image/hs-thu-gen-yes-menswear-250626.jpg',
    ctas: [
      { label: 'Sherwanis', href: '/men/sherwani', blink: true },
      { label: 'Nehru Jackets', href: '/men/nehru-jacket' },
      { label: 'Bandhgala', href: '/men/bandhgala' },
    ],
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  const goTo = useCallback((index) => setActive(index), []);

  const prev = useCallback(() => {
    setActive((p) => (p === 0 ? slides.length - 1 : p - 1));
  }, []);

  const next = useCallback(() => {
    setActive((p) => (p === slides.length - 1 ? 0 : p + 1));
  }, []);

  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, [hovered, next]);

  return (
    <section className="hero-banner-section">
      <div className="hero-banner-container">
        <div
          className="hero-banner-slider"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="hero-banner-slides">
            {slides.map((s, index) => (
              <div
                key={s.id}
                className={`hero-banner-slide${index === active ? ' active' : ''}`}
                style={{ backgroundImage: `url(${s.bg})` }}
              >
                <div className="hero-banner-slide-overlay" />
                <div className="hero-banner-slide-content">
                  {s.title && <h2 className="hero-banner-slide-title">{s.title}</h2>}
                  <p className="hero-banner-slide-subtitle">{s.subtitle}</p>
                  <div className="hero-banner-slide-ctas">
                    {s.ctas.map((cta, ci) => (
                      <a
                        key={ci}
                        href={cta.href}
                        className={`hero-banner-cta${cta.blink ? ' cta-blink' : ''}`}
                      >
                        {cta.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="hero-banner-arrow hero-banner-arrow-left" onClick={prev} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="hero-banner-arrow hero-banner-arrow-right" onClick={next} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div className="hero-banner-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-banner-dot${i === active ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
