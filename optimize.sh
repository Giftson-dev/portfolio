#!/bin/bash
# Quick Performance Optimization Steps
# Run this after making code changes

echo "🚀 Starting Performance Build Optimization..."
echo ""

# Step 1: Build the project
echo "📦 Building optimized bundle..."
npm run build

# Step 2: Analyze bundle size
echo ""
echo "📊 Bundle Analysis:"
echo "Checking for large chunks..."
du -sh dist/assets/* 2>/dev/null || echo "Build complete. Check dist/assets/ for file sizes."

# Step 3: Preview the build
echo ""
echo "👀 Starting preview server..."
echo "Open http://localhost:4173 in your browser"
echo "Test with Chrome DevTools Lighthouse for performance metrics"
echo ""
echo "Press CTRL+C to stop the preview server"
npm run preview
