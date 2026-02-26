# Daily Bible Reader - Landing Page

A modern, responsive landing page for the **Daily Bible Reader** mobile app built with React and Vite.

## Overview

This is a single-page website designed to introduce the Daily Bible Reader app, provide a download link to the App Store, and host the Privacy Policy page required for app submission.

## Features

- **Modern Design**: Dark theme with gold and green accents and creamy beige text, matching the app’s logo and brand
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Two-Page Structure**:
  - Main landing page (`/`)
  - Privacy Policy page (`/privacy`)
- **React Router**: Client-side routing for smooth navigation
- **CSS Animations**: Subtle animations and hover effects

## Tech Stack

- **React 19.1.1** – Frontend framework
- **React Router DOM** – Client-side routing
- **Vite 7.1.2** – Build tool and development server
- **CSS3** – Styling (gradients, flexbox, grid)

## Getting Started

### Prerequisites

- Node.js (version 20.x or higher recommended)
- npm

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Daily_Bible_Reader_landing_page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output is in the `dist` directory.

### Deploy (GitHub Pages)

```bash
npm run deploy
```

Ensure `CNAME` and `homepage` in `package.json` match your custom domain (e.g. `daily-bible-reader.enej.app`).

## Project Structure

```
src/
├── assets/
│   └── app-logo.png          # App icon/logo
├── components/
│   ├── LandingPage.jsx       # Main landing page
│   ├── LandingPage.css       # Landing page styles
│   ├── PrivacyPolicy.jsx     # Privacy policy page
│   └── PrivacyPolicy.css     # Privacy policy styles
├── App.jsx                   # App root and routing
├── App.css                   # Global reset and base styles
├── index.css                 # Root styles
└── main.jsx                  # Entry point
public/
└── favicon.png               # Browser tab icon
```

## Customization

- **Logo**: Replace `src/assets/app-logo.png` and `public/favicon.png` with your icon.
- **Privacy Policy**: Edit the sections in `src/components/PrivacyPolicy.jsx`.
- **App Store link**: Update the App Store button `href` in `LandingPage.jsx` when the app is published.

## App Information

**Daily Bible Reader** – Your daily companion for Scripture.

- Daily reading with progress and streaks
- Bookmark favourite chapters and passages
- Multiple Bible versions, with data stored locally on device

## Developer

Created by Enej Licina

## License

This project is private and proprietary.
