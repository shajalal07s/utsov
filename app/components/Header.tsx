'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';

const rotatingPlaceholders = [
  'Sharara',
  'Anarkali',
  'Pre-stitched saree',
  'Pastel',
  'Maternity Wear',
  'Sleeveless Blouse',
  'Mens Kurta Pajama',
  'Nehru Jacket',
  'Necklace',
  'Indowestern Kurta',
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % rotatingPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleMobileSearch = () => setMobileSearchOpen((prev) => !prev);

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <div className="middle-header">
        <div className="middle-header-content">
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="logo">
            <img
              src="https://medias.utsavfashion.com/media/wysiwyg/2024/header/utsav-fashion-logo-shopping.png"
              alt="Utsav Fashion"
              width="100"
              height="45"
              className="logo-img"
            />
          </Link>

          <div className={`search-section${mobileSearchOpen ? ' search-mobile-open' : ''}`}>
            <button className="mobile-search-back" onClick={toggleMobileSearch} aria-label="Close search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <div className="search-form">
              <div className="search-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <span className="search-divider"></span>
              <input
                type="text"
                className="search-input"
                placeholder={`Search for ${rotatingPlaceholders[placeholderIndex]}...`}
                aria-label="Search products"
              />
              <button className="search-btn" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>

          <div className="header-actions">
            <button className="mobile-search-toggle" onClick={toggleMobileSearch} aria-label="Toggle search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <a href="#" className="header-action-link help-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span className="action-label">Help</span>
            </a>
            <a href="#" className="header-action-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="action-label">Account</span>
            </a>
            <a href="#" className="header-action-link wishlist-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="action-label">Wishlist</span>
              <span className="action-counter">0</span>
            </a>
            <a href="#" className="header-action-link bag-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="action-label">Bag</span>
              <span className="action-counter">0</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-header">
        <div className="bottom-header-content">
          <MegaMenu />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-menu-close" onClick={toggleMobileMenu}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="mobile-menu-logo">
              <img
                src="https://medias.utsavfashion.com/media/wysiwyg/2024/header/utsav-fashion-logo-shopping.png"
                alt="Utsav Fashion"
                width="100"
                height="45"
              />
            </div>
            <ul className="mobile-nav">
              <li className="mobile-nav-item">
                <a href="#">Saree</a>
                <ul className="mobile-subnav">
                  <li><a href="#">Wedding Sarees</a></li>
                  <li><a href="#">Casual Salwar Kameez</a></li>
                  <li><a href="#">Bridal Lehengas</a></li>
                  <li><a href="#">Nehru Jackets</a></li>
                </ul>
              </li>
              <li className="mobile-nav-item"><a href="#">Salwar Kameez</a></li>
              <li className="mobile-nav-item"><a href="#">Lehenga</a></li>
              <li className="mobile-nav-item"><a href="#">Men</a></li>
              <li className="mobile-nav-item"><a href="#">Indowestern</a></li>
              <li className="mobile-nav-item"><a href="#">Plus</a></li>
              <li className="mobile-nav-item"><a href="#">Jewelry</a></li>
              <li className="mobile-nav-item"><a href="#">Concepts</a></li>
              <li className="mobile-nav-item"><a href="#">Kids</a></li>
              <li className="mobile-nav-item"><a href="#">Discover</a></li>
            </ul>
            <div className="mobile-menu-links">
              <a href="#">Log In</a>
              <a href="#">Account</a>
              <a href="#">Help</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
