'use client';

import { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    type: 'text',
    content: 'Free Shipping Worldwide on all orders above $99',
  },
  {
    id: 2,
    type: 'text',
    content: 'Sign up for newsletter & get 10% off your first order',
  },
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(cycle);
  }, []);

  if (!visible) return null;

  const banner = banners[currentBanner];

  return (
    <div className="announcement-bar">
      <div className="announcement-bar-inner">
        <span className="announcement-text">{banner.content}</span>
        <button
          className="announcement-close"
          onClick={() => setVisible(false)}
          aria-label="Close announcement"
        >
          ✕
        </button>
      </div>
      <div className="announcement-dots">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`announcement-dot ${i === currentBanner ? 'active' : ''}`}
            onClick={() => setCurrentBanner(i)}
          />
        ))}
      </div>
    </div>
  );
}
