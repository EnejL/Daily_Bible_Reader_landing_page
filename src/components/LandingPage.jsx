import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LandingPage.css';

const LandingPage = () => {
  const content = {
    appName: 'Daily Bible Reader',
    tagline: 'Your daily companion for Scripture.',
    downloadText: 'Download on the',
    storeText: 'App Store',
    scrollText: 'Scroll down',
    featuresTitle: 'Features',
    features: [
      {
        title: 'Daily Reading',
        description: 'Build a lasting habit with structured daily readings. Track your progress and streaks as you journey through Scripture.'
      },
      {
        title: 'Bookmark Favourites',
        description: 'Save your favourite chapters and passages for quick access. Your bookmarks stay on your device and are always at your fingertips.'
      },
      {
        title: 'Multiple Versions',
        description: 'Read your preferred Bible translation. We use local storage so you can focus offline, anytime.'
      }
    ],
    copyright: '© 2026 Enej Licina',
    privacyLink: 'Privacy Policy'
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <div className="app-logo">
              <img src={appLogo} alt="Daily Bible Reader App Logo" />
            </div>
          </div>

          <h1 className="app-name">{content.appName}</h1>
          <p className="tagline">{content.tagline}</p>
          <a href="#" className="app-store-button">
            <div className="app-store-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div>
                <div className="download-text">{content.downloadText}</div>
                <div className="store-text">{content.storeText}</div>
              </div>
            </div>
          </a>
        </div>
        <div className="hero-background"></div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
          </div>
          <p className="scroll-text">{content.scrollText}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">{content.featuresTitle}</h2>
          <div className="features-grid">
            {content.features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    {index === 0 && (
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M11,8V13L15.25,15.15L16,13.92L12.5,12.15V8H11Z"/>
                    )}
                    {index === 1 && (
                      <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5A2,2 0 0,0 17,3Z"/>
                    )}
                    {index === 2 && (
                      <path d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C14.89,4.5 12.36,5.5 10,7C7.64,5.5 5.11,4.5 2.5,4.5C1.33,4.5 0.11,4.65 -1,5V19C0.11,18.65 1.33,18.5 2.5,18.5C5.11,18.5 7.64,19.5 10,21C12.36,19.5 14.89,18.5 17.5,18.5C18.67,18.5 19.89,18.65 21,19V5M21,16.5V17.5C20.36,17.42 19.69,17.36 19,17.36C16.53,17.36 14.15,18.09 12,19.5V7C14.15,5.59 16.53,4.86 19,4.86C19.69,4.86 20.36,4.92 21,5V16.5Z"/>
                    )}
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="copyright">{content.copyright}</p>
            <Link to="/privacy" className="privacy-link">{content.privacyLink}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
