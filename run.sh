#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

print_help() {
  cat <<'EOF'
Usage: ./run.sh <command>

Commands:
  setup     Install dependencies using npm ci
  dev       Start local dev server (vite --host)
  build     Clean dist and create a production build
  preview   Preview the latest production build
  deploy    Build and deploy to Vercel production (requires Vercel CLI + login)
  help      Show this help message
EOF
}

if [[ $# -lt 1 ]]; then
  print_help
  exit 1
fi

command="$1"

case "$command" in
  setup)
    npm ci
    ;;
  dev)
    npm run dev
    ;;
  build)
    rm -rf dist
    npm run build
    ;;
  preview)
    npm run preview
    ;;
  deploy)
    rm -rf dist
    npm run build
    npx vercel --prod
    ;;
  help|-h|--help)
    print_help
    ;;
  *)
    echo "Unknown command: $command"
    print_help
    exit 1
    ;;
esac
