# Deployment Script
# Run from business-system root

Write-Host "Deploying GermanMedPath + ToolKit Pro to GitHub Pages..." -ForegroundColor Cyan

# Check for changes
$status = git status --short
if (-not $status) {
    Write-Host "No changes to deploy." -ForegroundColor Yellow
    exit 0
}

# Show what's changing
Write-Host "`nChanges to commit:" -ForegroundColor Cyan
git status --short

# Add everything
git add -A

# Commit
$commitMsg = "Site update: " + (Get-Date -Format "yyyy-MM-dd HH:mm")
git commit -m $commitMsg

# Push
git push origin main

Write-Host "`nDone! Site will update at https://hosxam.github.io/business-system/" -ForegroundColor Green
Write-Host "Note: GitHub Pages may take 1-2 minutes to refresh." -ForegroundColor Yellow
