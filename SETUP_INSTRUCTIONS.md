# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Move static assets to public folder:**
   The React app expects static assets (images, PDFs) in the `public/assets/` folder.
   
   Run these commands to copy/symlink assets:
   ```bash
   # Windows PowerShell
   New-Item -ItemType Junction -Path "public\assets" -Target "assets"
   
   # OR copy the assets folder:
   Copy-Item -Path "assets" -Destination "public\assets" -Recurse
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

## Asset Organization

- **Static assets** (images, PDFs, etc.) → `public/assets/`
  - Referenced in code as `/assets/img/robin.png`
  
- **CSS files** → `src/assets/css/`
  - Already copied, imported in components

- **Original assets** → Preserved in root `assets/` folder

## What Changed from Original

1. ✅ HTML files converted to React components
2. ✅ JavaScript converted to React hooks
3. ✅ Routing handled by React Router
4. ✅ All functionality preserved
5. ✅ Responsive design maintained

## Troubleshooting

- **Assets not loading?** Make sure they're in `public/assets/`
- **CSS not working?** Check that CSS files are in `src/assets/css/`
- **Routing issues?** React Router is configured for client-side routing

