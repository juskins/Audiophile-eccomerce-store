# Audiophile E-Commerce

A modern, full-stack e-commerce application built with Next.js 15, TypeScript, Tailwind CSS, and Convex. Features a complete shopping cart, checkout flow with validation, order management, and email notifications.

## ✨ Features

- 🛍️ **Product Catalog**: Browse headphones, speakers, and earphones
- 🛒 **Shopping Cart**: Add, remove, and update quantities
- 💳 **Checkout Flow**: Multi-step form with validation
- 📧 **Email Notifications**: Order confirmation emails with HTML templates
- 💾 **Convex Backend**: Real-time database for orders
- 🎨 **Pixel-Perfect Design**: Matching Figma design specifications
- 📱 **Responsive**: Mobile, tablet, and desktop layouts
- ⚡ **Performance**: Next.js 15 with App Router

## 🚀 Tech Stack

- **Framework**: Next.js 15.0.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Database**: Convex (production deployed)
- **Email**: Nodemailer with SMTP
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Font**: Manrope (Google Fonts)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Gmail account (for SMTP) or other email service
- Convex account (free at [convex.dev](https://convex.dev))

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd audiophile-ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your credentials:

```env
# Convex (automatically set after running npx convex deploy)
CONVEX_DEPLOYMENT=prod:successful-seahorse-85
NEXT_PUBLIC_CONVEX_URL=https://successful-seahorse-85.convex.cloud

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email Configuration (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password
```

#### Getting Gmail App Password:

1. Enable 2-Factor Authentication on your Google Account
2. Visit: https://myaccount.google.com/apppasswords
3. Create new app password for "Mail"
4. Copy the 16-character password to `SMTP_PASS`

### 4. Set Up Convex Backend

#### Login to Convex:

```bash
npx convex login
```

This will open your browser to authenticate with Convex (sign in with GitHub, Google, or Email).

#### Deploy Convex Backend:

```bash
npx convex deploy
```

This will:
- Deploy your database schemas (products, orders)
- Deploy queries and mutations
- Update `.env.local` with production URL
- Create your backend at `https://successful-seahorse-85.convex.cloud`

#### View Convex Dashboard:

Production: https://dashboard.convex.dev/t/omojuwa-babatunde/audiophile-ecommerce-5dde2

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📦 Build Commands

### Development

```bash
npm run dev          # Start dev server on localhost:3000
npx convex dev       # Run Convex locally (optional, for local development)
```

### Production Build

```bash
npm run build        # Build Next.js app for production
npm run start        # Start production server
npx convex deploy    # Deploy Convex backend to production
```

### Linting

```bash
npm run lint         # Run ESLint
```

## 🌍 Environment Variables Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_CONVEX_URL` | Convex backend URL | `https://successful-seahorse-85.convex.cloud` |
| `CONVEX_DEPLOYMENT` | Convex deployment identifier | `prod:successful-seahorse-85` |
| `NEXT_PUBLIC_APP_URL` | Your app URL | `http://localhost:3000` (dev) or `https://your-app.vercel.app` (prod) |
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | Your email address | `your@gmail.com` |
| `SMTP_PASS` | Email app password | `abcdefghijklmnop` |

### Environment Variables for Different Stages

**Local Development:**
```env
NEXT_PUBLIC_CONVEX_URL=https://successful-seahorse-85.convex.cloud
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Production (Vercel):**
```env
NEXT_PUBLIC_CONVEX_URL=https://successful-seahorse-85.convex.cloud
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
```

## 🗄️ Convex Setup Steps

### Initial Setup

1. **Install Convex** (already included in dependencies):
   ```bash
   npm install convex
   ```

2. **Login to Convex**:
   ```bash
   npx convex login
   ```
   - Opens browser for authentication
   - Sign in with GitHub, Google, or Email

3. **Deploy Backend**:
   ```bash
   npx convex deploy
   ```
   - Deploys schemas and functions
   - Updates `.env.local` automatically
   - Creates production deployment

### Database Schema

The project includes two main tables:

**Products Table:**
- Product details (name, price, category, description)
- Images (product, gallery, category preview)
- Features and included items
- Product recommendations

**Orders Table:**
- Customer information (name, email, phone)
- Shipping address details
- Payment method (e-Money or Cash on Delivery)
- Order items with quantities and prices
- Totals (subtotal, shipping, VAT, grand total)
- Order status and timestamp

### Convex Functions

**Queries:**
- `products:getAll` - Get all products
- `products:getBySlug` - Get product by slug
- `products:getByCategory` - Get products by category
- `orders:getById` - Get order by ID
- `orders:getByEmail` - Get orders by customer email

**Mutations:**
- `orders:create` - Create new order

### View Data in Convex Dashboard

**Production Dashboard:**
https://dashboard.convex.dev/t/omojuwa-babatunde/audiophile-ecommerce-5dde2

Here you can:
- View all orders in real-time
- Inspect order details
- Monitor database performance
- Run queries manually

### Switching Between Local and Production

**For Local Convex Backend:**
```bash
npx convex dev
# Update .env.local NEXT_PUBLIC_CONVEX_URL to http://127.0.0.1:3210
```

**For Production Convex Backend:**
```bash
npx convex deploy
# Uses https://successful-seahorse-85.convex.cloud
```

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add Environment Variables** in Vercel:
   ```env
   NEXT_PUBLIC_CONVEX_URL=https://successful-seahorse-85.convex.cloud
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your@gmail.com
   SMTP_PASS=your_app_password
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live!

5. **Update App URL**:
   - After deployment, update `NEXT_PUBLIC_APP_URL` with your actual Vercel URL
   - Redeploy

### Verify Production Deployment

- ✅ Test checkout flow
- ✅ Verify orders appear in Convex dashboard
- ✅ Confirm email delivery works
- ✅ Test on mobile devices

## 📂 Project Structure

```
audiophile-ecommerce/
├── convex/                 # Convex backend
│   ├── schema.ts          # Database schemas
│   ├── products.ts        # Product queries
│   ├── orders.ts          # Order mutations
│   └── tsconfig.json      # Convex TypeScript config
├── public/
│   └── assets/            # Product images
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── checkout/      # Checkout and success pages
│   │   ├── headphones/    # Product category pages
│   │   ├── speakers/      # Product category pages
│   │   ├── earphones/     # Product category pages
│   │   └── api/           # API routes (email)
│   ├── components/        # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── layout/        # Header, Footer
│   │   └── home/          # Homepage sections
│   ├── context/           # React context (cart)
│   └── lib/               # Utilities and actions
├── .env.local            # Environment variables (gitignored)
├── .env.local.example    # Environment template
└── README.md
```

## 🧪 Testing Checkout Flow

1. **Add Products to Cart**:
   - Browse products
   - Click "Add to Cart"
   - Adjust quantities

2. **Proceed to Checkout**:
   - Click "Checkout" in cart modal
   - Fill in billing details
   - Fill in shipping address
   - Choose payment method (e-Money or Cash on Delivery)

3. **Submit Order**:
   - Click "Continue & Pay"
   - Order is saved to Convex
   - Email confirmation is sent
   - Redirected to success page

4. **Verify**:
   - Check Convex dashboard for order
   - Check email inbox for confirmation
   - View order ID on success page

## 📧 Email Configuration

The app sends HTML email confirmations using Nodemailer. Emails include:
- Order ID
- Product summary with images
- Shipping details
- Payment information
- Total breakdown

**Supported Email Providers:**
- Gmail (default)
- Outlook: `smtp-mail.outlook.com:587`
- Yahoo: `smtp.mail.yahoo.com:587`
- SendGrid, Mailgun, etc.

## 🐛 Troubleshooting

**Orders not saving to Convex:**
- Verify `NEXT_PUBLIC_CONVEX_URL` is set correctly
- Check Convex deployment status: `npx convex deploy`
- Check browser console for errors

**Emails not sending:**
- Verify SMTP credentials in `.env.local`
- Check spam/junk folder
- Ensure Gmail App Password is correct (not regular password)
- Restart dev server after updating `.env.local`

**Build errors:**
- Run `npm run build` to check for TypeScript errors
- Verify all environment variables are set
- Check Node.js version (18+ required)

## 📚 Additional Documentation

- [CONVEX_SETUP.md](./CONVEX_SETUP.md) - Detailed Convex configuration
- [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md) - Production deployment guide
- [CONVEX_DEPLOYMENT.md](./CONVEX_DEPLOYMENT.md) - Convex cloud deployment

## 🤝 Contributing

This is a portfolio/demonstration project. Feel free to fork and customize!

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

## 🔗 Links

- **Live Demo**: (Add your Vercel URL)
- **Convex Dashboard**: https://dashboard.convex.dev/t/omojuwa-babatunde/audiophile-ecommerce-5dde2
- **Next.js Docs**: https://nextjs.org/docs
- **Convex Docs**: https://docs.convex.dev
- **Tailwind CSS**: https://tailwindcss.com

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Convex
