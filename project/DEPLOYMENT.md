# Vercel Deployment Guide

## Quick Deploy

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

### Build and Deploy Process

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build Project**:
   ```bash
   npm run build
   ```

3. **Deploy to Vercel**:
   ```bash
   # For production deployment
   vercel --prod
   
   # For preview deployment
   vercel
   ```

## Configuration

The project includes a `vercel.json` configuration file that:
- Sets the build command to `npm run build`
- Configures the output directory as `dist`
- Sets up routing for SPA (Single Page Application)
- Optimizes asset caching for better performance

## Project Structure

- **Framework**: React + Vite
- **Build Output**: `dist/` directory
- **Entry Point**: `index.html`
- **Assets**: Optimized with cache headers for performance