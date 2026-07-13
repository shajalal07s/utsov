import Link from "next/link";

export default function AppBanner() {
  return (
    <section className="app-banner-section">
      <div className="app-banner-container">
        <div className="app-banner-content">
          <h2 className="app-banner-heading">Global It Solution Mobile Apps</h2>
          <p className="app-banner-desc">
            Shop the latest trends anytime, anywhere. Download our app for exclusive deals,
            personalized recommendations, and a seamless shopping experience.
          </p>
          <div className="app-banner-buttons">
            <Link
              href="https://play.google.com/store/apps/details?id=com.utsavfashion"
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-btn google-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 12.065c0 .454-.117.874-.352 1.26-.234.386-.514.673-.84.86l-.005.004-3.75 2.168c-.294.17-.633.255-1.016.255-.383 0-.722-.085-1.016-.255l-3.75-2.168-.005-.004c-.326-.187-.606-.474-.84-.86-.235-.386-.352-.806-.352-1.26 0-.454.117-.874.352-1.26.234-.386.514-.673.84-.86l.005-.004 3.75-2.168c.294-.17.633-.255 1.016-.255.383 0 .722.085 1.016.255l3.75 2.168.005.004c.326.187.606.474.84.86.235.386.352.806.352 1.26zM2.04 3.065c-.026.08-.04.168-.04.265v17.34c0 .097.014.185.04.265l.005.004 3.75-3.69v-.005l-2.34-1.352-.006-.004c-.326-.187-.606-.474-.84-.86-.235-.386-.352-.806-.352-1.26 0-.454.117-.874.352-1.26.234-.386.514-.673.84-.86l.006-.004 2.34-1.352v-.006l-2.34-1.352-.006-.004c-.326-.187-.606-.474-.84-.86-.235-.386-.352-.806-.352-1.26 0-.454.117-.874.352-1.26.234-.386.514-.673.84-.86l.006-.004 2.34-1.352v-.005l-3.75-3.69-.005.004z" />
              </svg>
              <span className="app-store-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </Link>
            <Link
              href="https://apps.apple.com/app/utsav-fashion/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-btn apple-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="app-store-text">
                <small>Download on</small>
                <strong>App Store</strong>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
