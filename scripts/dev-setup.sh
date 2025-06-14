#!/bin/bash

# Simple Development Setup Script
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

# Check Node.js version
check_node() {
    if ! command_exists node; then
        error "Node.js is not installed. Please install Node.js 18+"
        exit 1
    fi

    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        error "Node.js 18+ required. Current: $(node -v)"
        exit 1
    fi

    success "Node.js $(node -v) ✓"
}

# Check/install pnpm
check_pnpm() {
    if ! command_exists pnpm; then
        warning "Installing pnpm..."
        npm install -g pnpm
    fi
    success "pnpm $(pnpm -v) ✓"
}

# Install dependencies
install_deps() {
    info "Installing dependencies..."
    pnpm install
    cd sanity && pnpm install && cd ..
    success "Dependencies installed ✓"
}

# Setup environment
setup_env() {
    if [ ! -f ".env.local" ]; then
        info "Creating .env.local..."
        cat > .env.local << 'EOF'
# Sanity (these are public, safe to commit)
NEXT_PUBLIC_SANITY_PROJECT_ID=d0xtwzoe
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: Disable telemetry
NEXT_TELEMETRY_DISABLED=1
EOF
        success ".env.local created ✓"
    else
        success ".env.local exists ✓"
    fi
}

# Run checks
run_checks() {
    info "Running checks..."
    pnpm lint
    npx tsc --noEmit
    cd sanity && npx tsc --noEmit && cd ..
    success "All checks passed ✓"
}

# Build project
build_project() {
    info "Building project..."
    pnpm build
    cd sanity && pnpm build && cd ..
    success "Build completed ✓"
}

# Start development servers
start_dev() {
    info "Starting development servers..."

    if command_exists tmux; then
        tmux new-session -d -s portfolio
        tmux split-window -h -t portfolio
        tmux send-keys -t portfolio:0.0 'pnpm dev' Enter
        tmux send-keys -t portfolio:0.1 'cd sanity && pnpm dev' Enter

        success "Development servers started in tmux session 'portfolio'"
        info "Portfolio: http://localhost:3000"
        info "Sanity Studio: http://localhost:3333"
        info "Attach with: tmux attach -t portfolio"
    else
        warning "Install tmux for better development experience"
        info "Starting Next.js dev server..."
        info "Run 'cd sanity && pnpm dev' in another terminal"
        pnpm dev
    fi
}

# Clean project
clean() {
    info "Cleaning project..."
    rm -rf .next node_modules sanity/dist sanity/node_modules
    pnpm store prune
    success "Project cleaned ✓"
}

# Show help
show_help() {
    echo "Simple Development Setup"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  setup     - Complete setup (default)"
    echo "  install   - Install dependencies only"
    echo "  env       - Setup environment files"
    echo "  check     - Run linting and type checking"
    echo "  build     - Build the project"
    echo "  dev       - Start development servers"
    echo "  clean     - Clean build files"
    echo "  help      - Show this help"
    echo ""
    echo "Examples:"
    echo "  $0        # Full setup"
    echo "  $0 dev    # Start development"
    echo "  $0 clean  # Clean everything"
}

# Main function
main() {
    case "${1:-setup}" in
        setup)
            info "Starting setup..."
            check_node
            check_pnpm
            install_deps
            setup_env
            success "Setup complete! Run '$0 dev' to start development."
            ;;
        install)
            check_pnpm
            install_deps
            ;;
        env)
            setup_env
            ;;
        check)
            run_checks
            ;;
        build)
            build_project
            ;;
        dev)
            start_dev
            ;;
        clean)
            clean
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

main "$@"
