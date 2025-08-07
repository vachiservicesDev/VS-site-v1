#!/bin/bash

echo "🚀 Starting Vercel deployment for Vachi Services website..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌍 Your website should be live at the URL provided above"