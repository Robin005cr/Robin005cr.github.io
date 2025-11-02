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

## Asset Management

**Important**: Static assets (images, PDFs, etc.) need to be in the `public/assets` folder to be accessible in React. 

If your assets are currently in the root `assets/` folder:
1. Copy them to `public/assets/` or create a symlink
2. Assets are referenced in code as `/assets/img/image.jpg` (starting with `/`)

CSS files are in `src/assets/css/` and imported directly in components.

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

This creates an optimized build in the `build` folder that can be deployed to any static hosting service.

## Features

- ✅ React Router for navigation
- ✅ Custom hooks for theme toggle and typewriter effect
- ✅ Responsive design maintained
- ✅ All original pages converted to React components
- ✅ Modern React patterns and best practices

## Converting from Vanilla HTML

The original HTML/CSS/JS structure has been converted to:

- **HTML** → React Components (JSX)
- **JavaScript** → React Hooks and Components
- **CSS** → Maintained, organized by component
- **Routing** → React Router DOM
- **Assets** → Moved to public folder (React convention)

## Deployment

For GitHub Pages deployment, you can use the `build` folder or configure React Router to work with GitHub Pages (may require hash routing).

## Original Structure

The original HTML files are preserved in the root directory. The React version is in the `src/` and `public/` directories.
