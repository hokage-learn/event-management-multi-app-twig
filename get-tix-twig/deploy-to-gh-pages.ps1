# Deploy GetTix to GitHub Pages
# This script copies public/ contents to repository root

Write-Host "🚀 Deploying GetTix to GitHub Pages..." -ForegroundColor Cyan

# Get current directory
$currentDir = Get-Location

# Copy all files from public/ to root
Copy-Item -Path "public\*" -Destination "." -Recurse -Force

# List files to verify
Write-Host "✅ Deployment complete! Files ready:" -ForegroundColor Green
Get-ChildItem

Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Yellow
Write-Host "1. Commit these changes: git add ."
Write-Host "2. Commit: git commit -m 'Deploy to GitHub Pages'"
Write-Host "3. Push: git push origin main"
Write-Host "4. In GitHub Settings → Pages, select 'Deploy from a branch' → 'main' → '/ (root)'"
Write-Host ""
Write-Host "Or use the public/ folder directly by setting it in GitHub Pages settings." -ForegroundColor Cyan
