import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const content = {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: February 2026',
    backToHome: 'Back to Home',
    sections: [
      {
        title: '1. Introduction',
        content: [
          'Welcome to Daily Bible Reader. We respect your privacy and are committed to protecting it. This policy explains how we handle your data.'
        ]
      },
      {
        title: '2. Data Collection',
        content: [
          '**Local Data:** Your reading progress, streaks, and personal notes are stored locally on your device. We do not have access to this data.',
          '**Analytics:** We may use anonymized usage data (e.g., which version of the Bible is most read) to improve app performance. No Personally Identifiable Information (PII) is collected.'
        ]
      },
      {
        title: '3. Third-Party Services',
        content: [
          'We use expo-sqlite. These services operate on your device and do not transmit your personal data to us.'
        ]
      },
      {
        title: '4. Your Rights',
        content: [
          'Since we do not collect personal data, there is no account to delete. You can reset all app data by clearing the app cache or uninstalling the application.'
        ]
      }
    ]
  };

  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="header">
          <Link to="/" className="back-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
            </svg>
            {content.backToHome}
          </Link>
        </div>

        <h1>{content.title}</h1>
        <p className="last-updated">{content.lastUpdated}</p>

        <div className="content">
          {content.sections.map((section, index) => (
            <section key={index}>
              <h2>{section.title}</h2>
              {section.content.map((text, textIndex) => {
                const parts = text.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={textIndex}>
                    {parts.map((part, i) =>
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                );
              })}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
