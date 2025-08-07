#!/bin/bash

echo "🚀 Starting Vercel deployment for Vachi Services website..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "📦 Installing Vercel CLI globally..."
    npm install -g vercel
    
    if ! command -v vercel &> /dev/null; then
        echo "❌ Failed to install Vercel CLI. Please install it manually:"
        echo "   npm install -g vercel"
        echo "   Then run this script again."
        exit 1
    fi
    echo "✅ Vercel CLI installed successfully!"
fi

# Build the project
echo "📦 Building project..."
if ! npm run build; then
    echo "❌ Build failed! Please fix build errors and try again."
    exit 1
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
if vercel --prod; then
    echo "✅ Deployment complete!"
    echo "🌍 Your website should be live at the URL provided above"
else
    echo "❌ Deployment failed! Please check the error messages above."
    exit 1
fi