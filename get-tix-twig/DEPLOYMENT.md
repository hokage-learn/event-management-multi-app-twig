# GetTix - Deployment Guide

## ⚠️ IMPORTANT: GitHub Pages Setup

If deploying to GitHub Pages, you have **two options**:

### Option A: Point to `public` folder (RECOMMENDED)

1. Go to your repository Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Set Branch to `main` (or your default branch)
4. Set Folder to `/public`
5. Save

### Option B: Move files to root

If you can't select the `public` folder in settings, copy all contents of `public/` to the repository root.

## Overview

GetTix is a static HTML/JS/CSS application that requires no build process. All files are ready for direct deployment.

## Project Structure

```
get-tix-twig/
└── public/              # Deployment directory
    ├── index.html       # Entry point
    ├── css/            # Stylesheets
    ├── js/             # JavaScript modules
    ├── assets/         # Images and SVGs
    └── ...
```

## Local Development

### Run Development Server

```bash
npm run serve
# or
npm start
```

Application will be available at: `http://localhost:3000`

## Deployment Options

### Option 1: GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select `public` as the source directory
4. Your site will be available at `https://username.github.io/repo-name`

### Option 2: Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --dir=public`
4. For production: `netlify deploy --dir=public --prod`

Or drag and drop the `public` folder at [app.netlify.com](https://app.netlify.com)

### Option 3: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 4: Surge.sh

1. Install Surge: `npm install -g surge`
2. Deploy: `surge public your-domain.surge.sh`

### Option 5: Traditional Web Hosting (cPanel, FTP, etc.)

1. Upload all contents of the `public` directory
2. Ensure `index.html` is in the root
3. Access via your domain

## Important Notes

### Routing

This application uses hash-based routing (`#/dashboard`, `#/tickets`). 

For proper routing on static hosts:
- Configure your web server to redirect all routes to `index.html`
- Or use the `public/_redirects` file (Netlify)

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript
- CSS Grid and Flexbox
- LocalStorage API

### Security

- No backend dependencies
- Client-side authentication only
- All data stored in browser LocalStorage
- Not suitable for production-grade security

## Files to Deploy

Deploy the ENTIRE `public` directory including:

- `/index.html`
- `/css/` (all CSS files)
- `/js/` (all JavaScript files)
- `/assets/` (all assets)

## Testing Deployment Locally

```bash
# Install dependencies
npm install

# Run local server
npm run serve

# Access at http://localhost:3000
```

## Troubleshooting

### 404 on page refresh

**Problem**: Getting 404 when refreshing routes

**Solution**: Configure your server to redirect all routes to `index.html`

- **Netlify**: Create `public/_redirects` with `/*    /index.html   200`
- **Apache**: Add `.htaccess` rewrite rules
- **Nginx**: Configure try_files directive

### Assets not loading

**Problem**: CSS/JS/images not loading

**Solution**: Ensure relative paths are correct and all files are uploaded

### Routing not working

**Problem**: Hash routing not working

**Solution**: This is expected behavior for hash-based routing. URLs should be:
- `yoursite.com/#/dashboard` (not `yoursite.com/dashboard`)

## Production Checklist

- [ ] All CSS files are minified (optional)
- [ ] All JavaScript files are optimized
- [ ] Images are compressed
- [ ] Browser caching configured
- [ ] HTTPS enabled
- [ ] Analytics added (optional)
- [ ] Error tracking configured (optional)

## Support

For issues or questions, refer to the main README.md file.
