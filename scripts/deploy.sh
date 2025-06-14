#!/bin/bash

# Simple Deployment Script
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

info() { echo -e "${BLUE}[INFO]${NC} $1"; }
success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Load environment variables
load_env() {
    if [ -f ".env.local" ]; then
        info "Loading .env.local..."
        set -a
        source .env.local
        set +a
    fi
}

# Check required tools
check_tools() {
    if ! command_exists pnpm; then
        error "pnpm is required"
        exit 1
    fi

    if ! command_exists vercel; then
        warning "Installing Vercel CLI..."
        pnpm add -g vercel@latest
    fi
}

# Check required environment variables
check_env() {
    if [ -z "$VERCEL_TOKEN" ]; then
        error "VERCEL_TOKEN is required"
        exit 1
    fi
}

# Run pre-deployment checks
pre_checks() {
    info "Running pre-deployment checks..."
    pnpm lint
    npx tsc --noEmit
    pnpm build
    success "Pre-checks passed ✓"
}

# Deploy to Vercel
deploy_vercel() {
    local env=${1:-production}

    info "Deploying to Vercel ($env)..."

    # Link project if needed
    if [ ! -f ".vercel/project.json" ]; then
        vercel link --token="$VERCEL_TOKEN"
    fi

    # Pull environment
    vercel pull --yes --environment="$env" --token="$VERCEL_TOKEN"

    # Build and deploy
    vercel build --token="$VERCEL_TOKEN" ${env:+--prod}

    local url
    if [ "$env" = "production" ]; then
        url=$(vercel deploy --prebuilt --prod --token="$VERCEL_TOKEN")
    else
        url=$(vercel deploy --prebuilt --token="$VERCEL_TOKEN")
    fi

    success "Deployed to: $url"
    echo "$url" > .vercel-url
}

# Deploy Sanity Studio
deploy_sanity() {
    info "Deploying Sanity Studio..."

    cd sanity
    pnpm install --frozen-lockfile

    if [ -n "$SANITY_AUTH_TOKEN" ]; then
        SANITY_AUTH_TOKEN="$SANITY_AUTH_TOKEN" pnpm deploy
    else
        pnpm deploy
    fi

    cd ..
    success "Sanity Studio deployed ✓"
}

# Show deployment status
show_status() {
    info "Checking deployment status..."

    if [ -f ".vercel-url" ]; then
        local url=$(cat .vercel-url)
        success "Last deployment: $url"
    fi

    info "Sanity Studio: https://portafolio.sanity.studio"

    if command_exists curl; then
        if curl -s -o /dev/null -w "%{http_code}" https://diegodev1.vercel.app | grep -q "200"; then
            success "Site is accessible"
        else
            warning "Site may not be accessible"
        fi
    fi
}

# Show help
show_help() {
    echo "Simple Deployment Script"
    echo ""
    echo "Usage: $0 [command] [environment]"
    echo ""
    echo "Commands:"
    echo "  all       - Deploy both portfolio and Sanity (default)"
    echo "  portfolio - Deploy portfolio only"
    echo "  sanity    - Deploy Sanity Studio only"
    echo "  status    - Show deployment status"
    echo "  check     - Run pre-deployment checks"
    echo "  help      - Show this help"
    echo ""
    echo "Environment:"
    echo "  production - Production deployment (default)"
    echo "  preview    - Preview deployment"
    echo ""
    echo "Required Environment Variables:"
    echo "  VERCEL_TOKEN     - Vercel deployment token"
    echo "  SANITY_AUTH_TOKEN - Sanity auth token (optional)"
    echo ""
    echo "Examples:"
    echo "  $0                    # Deploy everything to production"
    echo "  $0 portfolio preview  # Deploy portfolio to preview"
    echo "  $0 sanity            # Deploy Sanity Studio only"
    echo "  $0 status            # Check status"
}

# Main function
main() {
    local command=${1:-all}
    local environment=${2:-production}

    case "$command" in
        all)
            load_env
            check_env
            check_tools
            pre_checks
            deploy_vercel "$environment"
            deploy_sanity
            success "Full deployment completed!"
            ;;
        portfolio)
            load_env
            check_env
            check_tools
            pre_checks
            deploy_vercel "$environment"
            ;;
        sanity)
            load_env
            check_tools
            deploy_sanity
            ;;
        status)
            load_env
            show_status
            ;;
        check)
            load_env
            check_env
            check_tools
            pre_checks
            success "All checks passed! Ready to deploy."
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

main "$@"
