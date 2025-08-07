#!/bin/bash

echo "🚀 Starting Vercel deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🌐 Deploying to Vercel..."
    vercel --prod
    
    echo "✅ Deployment complete!"
    echo "🌍 Your website should be live at the URL provided above"
else
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi