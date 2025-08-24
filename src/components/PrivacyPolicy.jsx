import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState('sl'); // 'sl' for Slovenian, 'en' for English

  const toggleLanguage = () => {
    setLanguage(language === 'sl' ? 'en' : 'sl');
  };

  const content = {
    sl: {
      title: 'Politika zasebnosti',
      lastUpdated: 'Nazadnje posodobljeno: 24. Avgust 2025',
      backToHome: 'Back to Home',
      sections: [
        {
          title: '1. Splošne informacije',
          content: [
            'Aplikacijo "DriveTrack Pro" razvija Enej Ličina.',
            'Za vsa vprašanja o zasebnosti se lahko obrnete na: enej.dev@gmail.com.'
          ]
        },
        {
          title: '2. Namen aplikacije',
          content: [
            '"DriveTrack Pro" omogoča uporabnikom sledenje porabi goriva oziroma električne energije za njihova vozila.'
          ]
        },
        {
          title: '3. Zbiranje in obdelava osebnih podatkov',
          content: [
            'Zbiramo naslednje podatke:',
            '• Ime in priimek',
            '• E-naslov',
            '• Podatke o vozilu (znamka, model, registrska številka)',
            '• Lokacijo (za iskanje bencinskih servisov)',
            '• Podatke o polnjenju goriva',
            '• Podatke o polnjenju elektrike'
          ],
          subsections: [
            {
              title: 'Podlaga za obdelavo:',
              content: ['Uporabniška privolitev pri registraciji računa.']
            },
            {
              title: 'Obdelava tretjih oseb:',
              content: ['Uporabljamo Googlovo storitev Firebase za avtentikacijo in hranjenje podatkov.']
            },
            {
              title: 'Obdobje hrambe podatkov:',
              content: ['Vaše podatke hranimo do izbrisa uporabniškega računa oz. največ 6 mesecev po izbrisu računa.']
            },
            {
              title: 'Vaše pravice:',
              content: [
                '• Pravica do dostopa do podatkov',
                '• Pravica do izbrisa podatkov ("pravica do pozabe")',
                'Za uveljavljanje pravic nas kontaktirajte na zgoraj navedeni e-naslov.'
              ]
            }
          ]
        },
        {
          title: '4. Piškotki in analitika',
          content: [
            'Aplikacija uporablja Google Analytics for Firebase za zbiranje anonimnih podatkov o uporabi. Namen je izključno analiza uporabe aplikacije.',
            'Piškotkov ni možno onemogočiti znotraj aplikacije.'
          ]
        },
        {
          title: '5. Posredovanje podatkov v tretje države',
          content: ['Podatki se ne prenašajo izven EU/EGP.']
        },
        {
          title: '6. Starostna omejitev',
          content: ['Aplikacijo lahko uporabljajo samo osebe, stare 18 let ali več.']
        },
        {
          title: '7. Blagovne znamke',
          content: ['Vse blagovne znamke in logotipi (znamke vozil, logotipi bencinskih servisov ipd.) so last njihovih zakonitih imetnikov.']
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: August 24, 2025',
      backToHome: 'Back to Home',
      sections: [
        {
          title: '1. General Information',
          content: [
            'The "DriveTrack Pro" application is developed by Enej Ličina.',
            'For all privacy-related questions, you can contact us at: enej.dev@gmail.com.'
          ]
        },
        {
          title: '2. Application Purpose',
          content: [
            '"DriveTrack Pro" enables users to track fuel or electricity consumption for their vehicles.'
          ]
        },
        {
          title: '3. Collection and Processing of Personal Data',
          content: [
            'We collect the following data:',
            '• First and last name',
            '• Email address',
            '• Vehicle data (brand, model, registration number)',
            '• Location (for finding fuel stations)',
            '• Fuel filling data',
            '• Electricity charging data'
          ],
          subsections: [
            {
              title: 'Legal Basis for Processing:',
              content: ['User consent during account registration.']
            },
            {
              title: 'Third-Party Processing:',
              content: ['We use Google\'s Firebase service for authentication and data storage.']
            },
            {
              title: 'Data Retention Period:',
              content: ['We store your data until account deletion or maximum 6 months after account deletion.']
            },
            {
              title: 'Your Rights:',
              content: [
                '• Right to access data',
                '• Right to data deletion ("right to be forgotten")',
                'To exercise your rights, contact us at the email address above.'
              ]
            }
          ]
        },
        {
          title: '4. Cookies and Analytics',
          content: [
            'The application uses Google Analytics for Firebase to collect anonymous usage data. The purpose is exclusively to analyze application usage.',
            'Cookies cannot be disabled within the application.'
          ]
        },
        {
          title: '5. Data Transfer to Third Countries',
          content: ['Data is not transferred outside the EU/EEA.']
        },
        {
          title: '6. Age Restriction',
          content: ['The application can only be used by persons aged 18 or older.']
        },
        {
          title: '7. Trademarks',
          content: ['All trademarks and logos (vehicle brands, fuel station logos, etc.) are the property of their legal owners.']
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="header">
          <Link to="/" className="back-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
            </svg>
            {currentContent.backToHome}
          </Link>
          
          {/* Language Toggle */}
          <div className="language-toggle">
            <button 
              onClick={toggleLanguage}
              className={`flag-button ${language === 'sl' ? 'active' : ''}`}
              title="Slovenian"
            >
              🇸🇮
            </button>
            <button 
              onClick={toggleLanguage}
              className={`flag-button ${language === 'en' ? 'active' : ''}`}
              title="English"
            >
              🇬🇧
            </button>
          </div>
        </div>
        
        <h1>{currentContent.title}</h1>
        <p className="last-updated">{currentContent.lastUpdated}</p>

        <div className="content">
          {currentContent.sections.map((section, index) => (
            <section key={index}>
              <h2>{section.title}</h2>
              {section.content.map((text, textIndex) => (
                <p key={textIndex}>{text}</p>
              ))}
              
              {section.subsections && section.subsections.map((subsection, subIndex) => (
                <div key={subIndex}>
                  <h3>{subsection.title}</h3>
                  {subsection.content.map((text, textIndex) => (
                    <p key={textIndex}>{text}</p>
                  ))}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
