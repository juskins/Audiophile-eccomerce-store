# 🚀 Production Deployment Guide

## Current Status
- ✅ **Local Development**: Working perfectly
- ⏳ **Production**: Not yet deployed

## Production Deployment URL
Your Convex production deployment will be at:
```
https://successful-seahorse-85.convex.cloud
```

---

## Option 1: Quick Deploy (Recommended)

### Step 1: Deploy Convex Backend

Run this command:
```bash
npx convex deploy
```

When prompted "Do you want to push your code to your prod deployment?", press **Enter** or type **Yes**

This will:
- Deploy your schemas and functions to Convex cloud
- Update `.env.local` with production URL
- Make your backend accessible from anywhere

### Step 2: Deploy Next.js App to Vercel

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Complete Audiophile e-commerce with Convex and email"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel**: https://vercel.com
3. Click **"New Project"**
4. Import your GitHub repository
5. **Add Environment Variables** in Vercel:
   ```env
   NEXT_PUBLIC_CONVEX_URL=https://successful-seahorse-85.convex.cloud
   NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=omojuwababatunde1@gmail.com
   SMTP_PASS=xgucdorcmkzmqfik
   ```
6. Click **"Deploy"**

### Step 3: Update App URL After Vercel Deploy

After Vercel gives you a URL (e.g., `https://audiophile-ecommerce.vercel.app`):

1. Go back to Vercel project settings
2. Update `NEXT_PUBLIC_APP_URL` to your actual Vercel URL
3. Redeploy

---

## Option 2: Keep Local for Now

If you want to continue developing locally:
- ✅ Keep using `npx convex dev`
- ✅ Your current setup works perfectly for development
- ⏰ Deploy to production when you're ready to share/go live

---

## Environment Variables Comparison

### Local Development (.env.local)
```env
NEXT_PUBLIC_CONVEX_URL=http://127.0.0.1:3210
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production (Vercel Environment Variables)
```env
NEXT_PUBLIC_CONVEX_URL=https://successful-seahorse-85.convex.cloud
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=omojuwababatunde1@gmail.com
SMTP_PASS=xgucdorcmkzmqfik
```

---

## Switching Between Local and Production

### For Local Development
```bash
npx convex dev
npm run dev
```

### For Production
```bash
# Deploy Convex backend
npx convex deploy

# Deploy Next.js to Vercel (via GitHub or Vercel CLI)
vercel --prod
```

---

## Production Checklist

Before deploying to production:

- [ ] Test complete checkout flow locally
- [ ] Verify orders save to Convex dashboard
- [ ] Confirm emails are being sent
- [ ] Deploy Convex backend (`npx convex deploy`)
- [ ] Push code to GitHub
- [ ] Create Vercel project
- [ ] Add all environment variables to Vercel
- [ ] Deploy to Vercel
- [ ] Test production checkout with real order
- [ ] Verify production emails work

---

## Important Notes

### Security
- ✅ `.env.local` is in `.gitignore` - your credentials won't be committed
- ✅ Use Vercel's environment variables (encrypted)
- ⚠️ Never commit `.env.local` to GitHub

### Email Sending
- Gmail might block emails from new IPs initially
- First production email might go to spam
- Consider using SendGrid or Resend for production emails

### Convex Dashboard Access
- Local: http://127.0.0.1:6790
- Production: https://dashboard.convex.dev/t/omojuwa-babatunde/audiophile-ecommerce-5dde2

---

## Quick Deploy Commands

```bash
# 1. Deploy Convex
npx convex deploy

# 2. Deploy to Vercel (if using Vercel CLI)
vercel --prod

# Or use the GUI:
# - Push to GitHub
# - Import to Vercel
# - Add environment variables
# - Deploy
```

---

## What Happens After Production Deploy?

1. **Convex Backend**: Accessible at `https://successful-seahorse-85.convex.cloud`
2. **Orders**: Stored in production Convex database
3. **Emails**: Sent from your production app
4. **Dashboard**: View production data at https://dashboard.convex.dev
5. **App**: Live at your Vercel URL

---

## Need Help?

- Convex Docs: https://docs.convex.dev
- Vercel Docs: https://vercel.com/docs
- Check browser console for errors
- Check Vercel deployment logs
