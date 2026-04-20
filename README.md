# Robin CR Portfolio - React Version

This is the React version of the Robin CR portfolio website, converted from vanilla HTML/CSS/JavaScript to a modern React application.

## Project Structure

```
robin005cr.github.io/
├── public/                 # Static files (HTML entry point)
│   ├── index.html
│   └── assets/            # Static assets (images, CV, certificates)
│       ├── img/
│       ├── CV/
│       └── certificates/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/            # Page components (routes)
│   │   ├── Home.js
│   │   ├── Bugs.js
│   │   ├── ProfessionalExperience.js
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   │   ├── useTheme.js
│   │   └── useTypewriter.js
│   ├── assets/           # CSS and other source assets
│   │   └── css/
│   ├── App.js            # Main App component with routing
│   ├── App.css
│   ├── index.js          # React entry point
│   └── index.css
├── assets/               # Original assets folder (preserved)
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:

```bash
npm run build
```

## Deployment
- Commit and push the changes to the git.
- Execute the below comment, this will execute build + publish. This is mainly used in github pages.
```bash
npm run deploy
```
