@echo off
echo ========================================
echo  Deploying Convex to Production Cloud
echo ========================================
echo.
echo This will deploy your Convex backend to production.
echo Your production URL will be: https://successful-seahorse-85.convex.cloud
echo.
echo After deployment:
echo 1. Your .env.local will be updated with production URL
echo 2. Copy NEXT_PUBLIC_CONVEX_URL to your Vercel environment variables
echo 3. Deploy your Next.js app to Vercel
echo.
pause

npx convex deploy

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Copy the NEXT_PUBLIC_CONVEX_URL from .env.local
echo 2. Add it to your Vercel project environment variables
echo 3. Also add SMTP credentials to Vercel
echo 4. Deploy your Next.js app to Vercel
echo.
pause
