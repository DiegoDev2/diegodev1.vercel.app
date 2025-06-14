# 🚀 Deployment Guide

Simple CI/CD setup for Next.js portfolio with Sanity CMS.

## 📋 What's Included

### GitHub Actions Workflows
- **Main Build & Deploy** (`build.yml`) - Production deployments
- **Preview Deployments** (`deploy-preview.yml`) - PR previews
- **Security & Dependencies** (`security.yml`) - Weekly updates

### Development Scripts
- **Setup Script** (`scripts/dev-setup.sh`) - Quick environment setup
- **Deploy Script** (`scripts/deploy.sh`) - Manual deployments

## 🔧 Quick Setup

### 1. Required GitHub Secrets

Add these to your GitHub repository settings:

```
VERCEL_TOKEN=your_vercel_token_here
SANITY_AUTH_TOKEN=your_sanity_auth_token_here
```

### 2. Get Your Tokens

#### Vercel Token
```bash
pnpm add -g vercel@latest
vercel login
vercel tokens create
```

#### Sanity Token
```bash
npm install -g @sanity/cli
sanity login
sanity debug --secrets
```

### 3. Local Development
```bash
# Complete setup
pnpm run setup

# Start development servers
pnpm run dev:all

# Clean project
pnpm run clean
```

## 🚀 Deployment

### Automatic Deployments
- **Production**: Push to `main` branch
- **Preview**: Create/update pull request

### Manual Deployments
```bash
# Deploy everything
pnpm run deploy

# Deploy only portfolio
pnpm run deploy:portfolio

# Deploy to preview
pnpm run deploy:preview

# Check status
pnpm run deploy:status
```

## 📊 What Gets Monitored

### Performance
- Lighthouse audits on every deployment
- Core Web Vitals tracking
- Bundle size monitoring

### Security
- Weekly dependency updates
- Vulnerability scanning
- Automated security patches

## 🏗️ Project Structure

```
.github/
├── workflows/
│   ├── build.yml              # Main CI/CD
│   ├── deploy-preview.yml     # PR previews
│   ├── security.yml           # Security scans
│   └── reusable/              # Modular workflows
│       ├── setup.yml
│       ├── test.yml
│       ├── build.yml
│       └── deploy.yml
├── scripts/
│   ├── dev-setup.sh           # Development setup
│   └── deploy.sh              # Manual deployment
└── lighthouse-budget.json     # Performance budgets
```

## 🔍 Environment Variables

### Required for Deployment
- `VERCEL_TOKEN` - Vercel deployment token
- `SANITY_AUTH_TOKEN` - Sanity Studio deployment token

### Optional (handled automatically)
- `NEXT_PUBLIC_SANITY_PROJECT_ID=d0xtwzoe` (public, in code)
- `NEXT_PUBLIC_SANITY_DATASET=production` (public, in code)

## 📱 Available Commands

### Development
```bash
pnpm run setup         # Complete setup
pnpm run dev           # Start Next.js only
pnpm run dev:all       # Start both servers (tmux)
pnpm run sanity:dev    # Start Sanity Studio only
```

### Building & Testing
```bash
pnpm run build         # Build Next.js
pnpm run lint          # ESLint
pnpm run type-check    # TypeScript check
pnpm run test          # Lint + type check
pnpm run ci            # Full CI checks
```

### Deployment
```bash
pnpm run deploy                # Deploy everything
pnpm run deploy:portfolio      # Portfolio only
pnpm run deploy:sanity         # Sanity only
pnpm run deploy:preview        # Preview environment
pnpm run deploy:status         # Check status
pnpm run deploy:check          # Pre-deployment checks
```

### Maintenance
```bash
pnpm run clean         # Clean build files
```

## 🎯 Performance Budgets

The CI/CD includes performance monitoring with these budgets:

- **Performance Score**: ≥75%
- **Accessibility**: ≥90%
- **Best Practices**: ≥80%
- **SEO**: ≥90%

### Resource Limits
- **JavaScript**: 600KB max
- **CSS**: 150KB max
- **Total Bundle**: 2.5MB max

### Load Time Targets
- **First Contentful Paint**: ≤2.5s
- **Largest Contentful Paint**: ≤4s
- **Cumulative Layout Shift**: ≤0.1

## 🚨 Troubleshooting

### Build Failures
```bash
# Test locally first
pnpm run ci

# Check environment variables
pnpm run deploy:check
```

### Deployment Issues
```bash
# Check status
pnpm run deploy:status

# View GitHub Actions logs
gh run list
gh run view [run-id] --log
```

### Common Issues

#### Missing Environment Variables
- Add `VERCEL_TOKEN` to GitHub secrets
- Add `SANITY_AUTH_TOKEN` to GitHub secrets

#### Build Errors
- Run `pnpm run test` locally first
- Check TypeScript errors with `pnpm run type-check`

#### Deployment Timeouts
- Check Vercel dashboard for deployment logs
- Verify token permissions

## 🎉 Ready to Deploy!

Your CI/CD pipeline is ready. To test:

1. **Add GitHub secrets** (VERCEL_TOKEN, SANITY_AUTH_TOKEN)
2. **Push to main** or create a PR
3. **Watch the magic happen** ✨

### URLs
- **Portfolio**: https://diegodev1.vercel.app
- **Sanity Studio**: https://portafolio.sanity.studio

---

**Happy coding! 🚀**