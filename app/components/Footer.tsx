'use client';

import Image from "next/image";

export default function Footer() {
  const middleLinks = [
    {
      heading: 'Explore',
      links: [
        { text: 'About Us', href: '/about-us' },
        { text: 'Blog', href: 'https://www.utsavfashion.com/blog/' },
        { text: 'Testimonials', href: '/testimonial' },
      ],
    },
    {
      heading: 'Help',
      links: [
        { text: "FAQ's", href: 'https://help.utsavfashion.com/support/home' },
        { text: 'Track Order', href: '/order-track' },
        { text: 'Contact Us', href: 'https://help.utsavfashion.com/support/tickets/new' },
      ],
    },
    {
      heading: 'Useful Info',
      links: [
        { text: 'Payments', href: '/payment-options' },
        { text: 'Shipping', href: '/shipping-policy' },
        { text: 'Returns', href: '/return-policy' },
      ],
    },
  ];

  return (
    <footer className="footer footer1">
      <div className="footer-main">
        <div className="footer-main-inner">
          <div className="footer-col footer-col-subscribe">
            <Image
              src="https://medias.utsavfashion.com/media/wysiwyg/2024/header/utsav-fashion-logo-shopping.png"
              alt="Utsav Fashion"
              width={170}
              height={52}
              className="footer-logo-img"
            />
            <h4 className="footer-col-heading nl_subscribe_title">Subscribe and get extra USD10 off</h4>
            <div className="block newsletter nl_subs_form_footer">
              <div className="footer-subscribe-form">
                <input
                  type="email"
                  className="footer-subscribe-input"
                  id="newsletter-footer"
                  name="email"
                  placeholder="Enter Email Here"
                  aria-label="Email address"
                />
                <button className="footer-subscribe-btn" type="submit">Join</button>
              </div>
            </div>
            <div className="footer-social">
              <a href="https://www.facebook.com/UtsavFashion" className="footer-social-icon sic sic-facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://x.com/UtsavFashion" className="footer-social-icon sic sic-x" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.pinterest.com/utsavfashion/" className="footer-social-icon sic sic-pinterest" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.627.001 12.017.001z" /></svg>
              </a>
              <a href="https://www.instagram.com/utsavfashion/" className="footer-social-icon sic sic-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.youtube.com/user/utsavsarees" className="footer-social-icon sic sic-youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
            <div className="footer-apps">
              <a href="https://apps.apple.com/in/app/utsav-fashion-online-shopping/id6475716463" className="uf-appbtn apple" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.utsavfashion.app" className="uf-appbtn google" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17a.5.5 0 01.85-.36l11.8 11.8a.5.5 0 010 .71l-11.8 11.8a.5.5 0 01-.85-.36zM9.17 12L3.85 6.68V3l13.13 7.5L9.17 12zm0 2l7.81 3.5L3.85 3v3.68L9.17 14z" /></svg>
                Google Play
              </a>
            </div>
          </div>

          {middleLinks.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4 className="footer-col-heading">{col.heading}</h4>
              <ul className="footer-col-links">
                {col.links.map((link) => (
                  <li key={link.text}><a href="#">{link.text}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="copyright">&copy; 2003-2026 UTSAV FASHION | Developement by Shajalal</div>
        </div>
      </div>
    </footer>
  );
}
