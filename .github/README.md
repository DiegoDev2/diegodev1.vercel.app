# CI/CD Documentation

This repository includes a comprehensive CI/CD pipeline setup for a Next.js portfolio with Sanity CMS integration. The pipeline automates building, testing, security scanning, and deployment processes.

## 🚀 Overview

The CI/CD setup consists of multiple GitHub Actions workflows that handle different aspects of the development and deployment process:

- **Build and Deploy** - Main production deployment pipeline
- **Preview Deployments** - Automatic preview deployments for pull requests  
- **Security Scanning** - Automated security audits and dependency updates
- **Performance Monitoring** - Lighthouse audits and bundle size analysis

## 📋 Workflows

### 1. Build and Deploy (`build.yml`)

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

**Jobs:**
- **lint-and-test** - ESLint and TypeScript checks
- **build-portfolio** - Build Next.js application
- **build-sanity** - Build Sanity Studio
- **deploy-vercel** - Deploy portfolio to Vercel (production only)
- **deploy-sanity** - Deploy Sanity Studio (production only)
- **lighthouse-audit** - Performance audit with Lighthouse
- **notify** - Deployment status notifications

### 2. Preview Deployments (`deploy-preview.yml`)

**Triggers:**
- Pull request opened/updated/reopened

**Features:**
- Automatic preview deployments for every PR
- PR comments with preview URLs
- Lighthouse performance audits on preview deployments
- Automatic cleanup when PR is closed

### 3. Security and Dependencies (`security.yml`)

**Triggers:**
- Weekly schedule (Mondays at 9 AM UTC)
- Push to `main` branch
- Pull requests

**Features:**
- Security audits with `pnpm audit` and Snyk
- CodeQL security analysis
- Dependency review for PRs
- Automated dependency updates
- Bundle size analysis

### 4. Workflow Configuration (`config.yml`)

Reusable workflow configurations and environment settings that can be referenced by other workflows.

## 🔧 Setup Instructions

### 1. Required GitHub Secrets

Add the following secrets to your GitHub repository settings:

#### Vercel Deployment
```
VERCEL_TOKEN - Your Vercel deployment token
```

#### Sanity Configuration
```
NEXT_PUBLIC_SANITY_PROJECT_ID - Your Sanity project ID (d0xtwzoe)
NEXT_PUBLIC_SANITY_DATASET - Your Sanity dataset (production)
SANITY_API_READ_TOKEN - Sanity API token with read permissions
SANITY_AUTH_TOKEN - Sanity authentication token for deployments
```

#### Optional (for enhanced features)
```
SNYK_TOKEN - Snyk security scanning token
LHCI_GITHUB_APP_TOKEN - Lighthouse CI GitHub app token
```

### 2. Vercel Setup

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_READ_TOKEN`

3. Get your Vercel token:
   ```bash
   npx vercel login
   npx vercel tokens create
   ```

### 3. Sanity Setup

1. Install Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```

2. Login and get auth token:
   ```bash
   sanity login
   sanity debug --secrets
   ```

3. Configure Sanity project for deployment:
   ```bash
   cd sanity
   sanity deploy
   ```

## 🏗️ Project Structure

```
.github/
├── workflows/
│   ├── build.yml              # Main CI/CD pipeline
│   ├── deploy-preview.yml     # Preview deployments
│   ├── security.yml           # Security and dependencies
│   └── config.yml             # Reusable configurations
└── README.md                  # This documentation

lighthouse-budget.json         # Performance budgets
```

## 📊 Performance Monitoring

### Lighthouse Budgets

The pipeline includes performance budgets configured in `lighthouse-budget.json`:

- **Performance Score**: Minimum 80%
- **Accessibility Score**: Minimum 90%
- **Best Practices Score**: Minimum 80%
- **SEO Score**: Minimum 90%

### Resource Budgets

- **JavaScript Bundle**: 500KB max
- **CSS**: 100KB max
- **Images**: 1MB max
- **Fonts**: 200KB max
- **Total Resources**: 2MB max

### Core Web Vitals

- **First Contentful Paint**: 2s (±500ms)
- **Largest Contentful Paint**: 3s (±500ms)
- **Cumulative Layout Shift**: 0.1 (±0.05)
- **Total Blocking Time**: 500ms (±200ms)

## 🔒 Security Features

### Automated Security Scanning

- **npm/pnpm audit** - Vulnerability scanning for dependencies
- **Snyk** - Advanced security analysis
- **CodeQL** - Static analysis for security vulnerabilities
- **Dependency Review** - Review dependency changes in PRs

### Automated Updates

- Weekly dependency updates via automated PRs
- Security patch updates
- Compatibility testing before updates

## 🚨 Troubleshooting

### Common Issues

#### Build Failures

1. **Missing Environment Variables**
   - Ensure all required secrets are configured
   - Check Vercel environment variables

2. **TypeScript Errors**
   - Run `npx tsc --noEmit` locally to check for type errors
   - Update type definitions if needed

3. **Dependency Issues**
   - Clear cache: `pnpm store prune`
   - Update lockfile: `pnpm install --frozen-lockfile=false`

#### Deployment Issues

1. **Vercel Deployment Failed**
   - Check Vercel token permissions
   - Verify project configuration in Vercel dashboard

2. **Sanity Deployment Failed**
   - Verify SANITY_AUTH_TOKEN has deployment permissions
   - Check Sanity project configuration

### Debug Commands

```bash
# Check workflow runs
gh run list

# View workflow logs
gh run view [run-id] --log

# Re-run failed workflows
gh run rerun [run-id]
```

## 📈 Monitoring and Alerts

### Deployment Status

- Successful deployments are automatically notified
- Failed deployments trigger alerts
- Preview URLs are automatically commented on PRs

### Performance Alerts

- Lighthouse scores below thresholds trigger warnings
- Bundle size increases are flagged in PRs
- Core Web Vitals regressions are reported

## 🔄 Workflow Customization

### Adding New Jobs

1. Create new job in appropriate workflow file
2. Add necessary dependencies with `needs:`
3. Include proper error handling and notifications

### Modifying Performance Budgets

Edit `lighthouse-budget.json` to adjust performance thresholds:

```json
{
  "budgets": [
    {
      "path": "/*",
      "timings": [
        {
          "metric": "first-contentful-paint",
          "budget": 2000,
          "tolerance": 500
        }
      ]
    }
  ]
}
```

### Environment-Specific Configurations

Use workflow inputs and conditions to customize behavior:

```yaml
- name: Deploy to Staging
  if: github.ref == 'refs/heads/develop'
  run: vercel deploy --token=${{ secrets.VERCEL_TOKEN }}
```

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Sanity CLI Documentation](https://www.sanity.io/docs/cli)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🤝 Contributing

When contributing to this project:

1. Create feature branches from `main`
2. Ensure all checks pass before requesting review
3. Preview deployments are automatically created for PRs
4. Security scans run automatically on all PRs

## 📝 Changelog

- **v1.0.0** - Initial CI/CD setup with Vercel and Sanity deployment
- **v1.1.0** - Added security scanning and dependency updates
- **v1.2.0** - Enhanced performance monitoring with Lighthouse
- **v1.3.0** - Added preview deployments and bundle analysis