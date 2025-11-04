@echo off
echo ========================================
echo  Convex Production Deployment
echo ========================================
echo.
echo This will deploy your Convex backend to the cloud.
echo Make sure you've logged in first (run login-convex.bat)
echo.
pause

npx convex deploy

echo.
echo ========================================
echo Deployment complete!
echo ========================================
echo.
echo Your .env.local has been updated with the production URL.
echo.
pause
