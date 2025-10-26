#!/bin/bash

# Deploy GetTix to GitHub Pages
# This script copies public/ contents to repository root

echo "🚀 Deploying GetTix to GitHub Pages..."

# Copy all files from public/ to root
cp -r public/* .

# List files to verify
echo "✅ Deployment complete! Files ready:"
ls -la

echo ""
echo "📝 Next steps:"
echo "1. Commit these changes: git add ."
echo "2. Commit: git commit -m 'Deploy to GitHub Pages'"
echo "3. Push: git push origin main"
echo "4. In GitHub Settings → Pages, select 'Deploy from a branch' → 'main' → '/ (root)'"
echo ""
echo "Or use the public/ folder directly by setting it in GitHub Pages settings."
