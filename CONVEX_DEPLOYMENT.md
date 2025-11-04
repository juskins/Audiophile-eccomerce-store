# Convex Cloud Deployment Guide

## Current Status
✅ Convex is running locally at `http://127.0.0.1:3210`
✅ Database schemas are loaded (products and orders tables)
✅ Local dashboard available at `http://127.0.0.1:6790`

## Steps to Link to Convex Cloud

### 1. Login to Convex (Creates Account)

Open a **new PowerShell terminal** and run:

```powershell
npx convex login
```

This will:
- Open your browser to https://convex.dev
- Prompt you to sign in with GitHub, Google, or Email
- Save your credentials locally

### 2. Create a Production Deployment

After logging in, run:

```powershell
npx convex deploy
```

This will:
- Create a new project in Convex cloud
- Deploy your schemas and functions
- Update `.env.local` with production URL
- Generate a deployment URL like `https://your-project.convex.cloud`

### 3. Update Environment Variables

The deployment will automatically update your `.env.local`:

```env
# Production deployment
CONVEX_DEPLOYMENT=prod:your-team-name:your-project-name
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
```

### 4. Switch Between Local and Production

**For local development:**
```powershell
npx convex dev
```

**For production deployment:**
```powershell
npx convex deploy
```

## Quick Start (Recommended)

If you want to keep working locally for now and deploy later:

1. **Keep using local deployment** - Your app is already working with the local Convex backend
2. **Test your checkout flow** - Add items, complete checkout, verify it works
3. **Deploy to cloud later** - Run `npx convex login` then `npx convex deploy` when ready

## Current Configuration

Your app is configured to use:
- **Local Convex URL**: `http://127.0.0.1:3210`
- **Tables**: products, orders
- **Indexes**: products.by_slug, orders.by_email

Everything is ready to test! The checkout flow will work with your local Convex backend.

## Troubleshooting

**If `npx convex login` doesn't open browser:**
1. Manually visit: https://convex.dev
2. Sign up/login
3. Create a new project manually
4. Copy the deployment URL
5. Update `NEXT_PUBLIC_CONVEX_URL` in `.env.local`

**If you get "Already logged in" message:**
- You're already authenticated
- Just run `npx convex deploy` to create production deployment

**To check login status:**
```powershell
npx convex whoami
```

## What You Can Do Now

Since Convex is already running locally, you can:

✅ Test the complete checkout flow
✅ Orders will be saved to local Convex database
✅ View data in local dashboard: http://127.0.0.1:6790
✅ Deploy to cloud anytime with `npx convex deploy`

No need to deploy to cloud right now unless you want to!
