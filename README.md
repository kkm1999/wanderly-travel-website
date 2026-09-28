# ✈️ Wanderly — Travel Beyond the Ordinary

A premium, responsive travel discovery website designed as a Front-End Developer recruitment task for Young Edsplorer.

Wanderly is designed around the idea that travel should feel personal. Instead of presenting destinations as a simple list, the experience lets users discover trips based on their mood, explore curated destinations, and use a smart local travel-matching experience to find an escape.

## 🌐 Live Demo

> Coming soon — deployed on Vercel

## 📦 GitHub Repository

https://github.com/kkm1999/wanderly-travel-website

---

## ✨ Features

### 🏔️ Premium Hero Experience
- Full-screen cinematic travel hero
- Responsive typography and layout
- Animated background image
- Clear primary and secondary CTAs
- Interactive "Hidden Escapes" destination card
- Responsive mobile/tablet CTA

### 🤖 Wanderly AI — Smart Travel Matcher
- Natural-language travel preference input
- Local recommendation engine with no API key required
- Matches destinations based on:
  - Travel mood
  - Budget
  - Trip duration
  - Keywords and interests
- Quick suggestion prompts
- Destination recommendations
- Reuses the destination exploration experience

### ✨ Floating Wanderly AI Assistant
- Accessible throughout the website
- Compact floating AI launcher
- Responsive travel assistant panel
- Quick travel prompts
- Destination recommendation results
- Keyboard-friendly Escape-to-close interaction

### 🌴 Travel Mood Discovery
Users can explore destinations through different travel moods:

- Slow & Sunny
- Wild & Free
- Culture & Soul
- Quiet & Green

### 🗺️ Destination Exploration
- Curated destination cards
- Destination imagery
- Duration and starting price
- Interactive Explore buttons
- Detailed destination modal

### 📋 Trip Planner
A functional contact/trip-planning form with:
- Destination selection
- Number of travelers
- Trip type
- Name
- Email
- Form validation
- Submission success state
- Reset functionality

### 📱 Fully Responsive
Designed and tested across:
- Desktop
- Tablet
- Mobile

### ♿ Accessibility & UX
- Semantic HTML structure
- Accessible button and link labels
- Keyboard focus states
- `aria-label` and `aria-pressed` where appropriate
- Escape key support for modals and AI assistant
- Reduced-motion support
- Responsive touch-friendly controls

---

## 🛠️ Tech Stack

- React
- JavaScript
- Vite
- Tailwind CSS
- Lucide React
- HTML5
- CSS3

---

## 🧠 AI / Recommendation Architecture

Wanderly AI uses a lightweight local recommendation engine instead of an external AI API.

The matcher analyzes the user's input and scores available destinations using:

```text
User Input
    ↓
Text Normalization
    ↓
Keyword / Mood Detection
    ↓
Budget Extraction
    ↓
Duration Extraction
    ↓
Destination Scoring
    ↓
Best Destination Match
```

This approach keeps the demo:
- Fast
- Free to run
- Secure
- Easy to deploy
- Independent of API keys

No external AI API key is required.

---

## 📁 Project Structure

```text
wanderly/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AITravelPlanner.jsx
│   │   ├── ContactPlanner.jsx
│   │   ├── DestinationModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── TravelMood.jsx
│   │   ├── WanderlyAIAssistant.jsx
│   │   └── WhyWanderly.jsx
│   │
│   ├── data/
│   │   └── destinations.js
│   │
│   ├── utils/
│   │   └── travelMatcher.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kkm1999/wanderly-travel-website.git
```

### 2. Navigate to the project

```bash
cd wanderly-travel-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Design Direction

Wanderly follows a premium editorial travel aesthetic built around:

- Deep forest green
- Emerald accents
- Warm neutral backgrounds
- Large editorial typography
- Cinematic photography
- Soft glassmorphism
- Rounded cards
- Subtle motion
- Minimal visual clutter

The design intentionally avoids a generic travel-template appearance and focuses on creating a more immersive travel-product experience.

---

## 📱 Responsive Design

The interface adapts to different screen sizes with dedicated layouts for:

**Desktop**
- Full navigation
- Large editorial typography
- Destination feature cards
- Expanded AI experience

**Tablet**
- Adaptive grids
- Compact destination CTAs
- Responsive typography

**Mobile**
- Mobile navigation
- Compact Hero destination CTA
- Single-column layouts
- Floating AI assistant
- Touch-friendly controls

---

## ⚡ Performance & UX

- Vite-based development and production builds
- Lazy-loaded destination imagery
- Lightweight icon library
- No external API dependency
- Responsive image sizing
- Reduced-motion support
- Minimal JavaScript overhead

---

## 📝 Project Notes

This project is a front-end demonstration.

Destination information, pricing, statistics, and travel packages shown in the interface are **sample/demo content** and do not represent real travel offers, bookings, or payment services.

The contact planner is a functional front-end demonstration; no real booking or payment is processed.

---

## 👨‍💻 Developer

**Kishor Mandal**

B.Tech — Computer Science & Engineering

Frontend Development · React · JavaScript · TypeScript · UI/UX

---

## 📄 License

This project was created as a recruitment/task submission and is intended for demonstration purposes.
