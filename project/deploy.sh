#!/bin/bash

echo "🚀 Starting deployment for Vachi Services website..."

# Ensure we're in the project directory
cd "$(dirname "$0")"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel (if vercel CLI is available)
    if command -v vercel &> /dev/null; then
        echo "🌐 Deploying to Vercel..."
        vercel --prod
    else
        echo "⚠️  Vercel CLI not found. Please install it with: npm i -g vercel"
        echo "🌍 Build files are ready in the 'dist' directory"
    fi
else
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Deployment process complete!"