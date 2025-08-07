# Deployment Guide for Vachi Services Website

## Overview
This is a React + Vite application configured for deployment on Vercel. The application uses React Router for client-side routing and requires proper SPA (Single Page Application) configuration for deployment.

## Deployment Platforms

### Vercel (Recommended)
The application is optimized for Vercel deployment with the following configuration:

1. **vercel.json** - Configures SPA routing and build settings
2. **_redirects** - Fallback for client-side routing
3. **deploy.sh** - Automated deployment script

#### Quick Deploy to Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Run deployment script
./deploy.sh
```

#### Manual Deploy:
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Other Platforms

#### Netlify:
- The `_redirects` file in `/public` will handle SPA routing
- Build command: `npm run build`
- Publish directory: `dist`

#### GitHub Pages:
- Requires additional configuration for client-side routing
- Consider using hash routing for GitHub Pages deployment

## Build Configuration

### Environment Variables
The application uses the following environment variables:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### Build Commands
- Development: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Troubleshooting

### Common Deployment Issues:

1. **404 on Direct Route Access**
   - Ensure `vercel.json` is configured correctly
   - Check that `_redirects` file is in the `public` directory

2. **Asset Loading Issues**
   - Verify the `base` path in `vite.config.js`
   - Check that assets are properly referenced

3. **Environment Variables**
   - Ensure all `VITE_` prefixed variables are set in your deployment platform
   - Variables must be available at build time

4. **Build Failures**
   - Run `npm audit` to check for security vulnerabilities
   - Ensure all dependencies are properly installed

## Security
- All security vulnerabilities have been resolved
- Vite has been updated to the latest stable version (7.0.6)
- Regular dependency updates are recommended

## Support
For deployment issues, check:
1. Build logs for errors
2. Network tab for 404s on routes
3. Console for JavaScript errors
4. Deployment platform specific logs