@echo off
echo ========================================
echo  Convex Cloud Login
echo ========================================
echo.
echo This will open your browser to login to Convex.
echo You can sign in with GitHub, Google, or Email.
echo.
pause

npx convex login

echo.
echo ========================================
echo Login complete!
echo ========================================
echo.
echo Next steps:
echo 1. Run: deploy-convex.bat to deploy to production
echo 2. Or keep using local deployment with: npx convex dev
echo.
pause
