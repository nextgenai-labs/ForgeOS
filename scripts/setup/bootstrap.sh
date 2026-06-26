#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

echo "======================================"
echo " ForgeOS Bootstrap"
echo "======================================"
echo

check_command() {
    if command -v "$1" >/dev/null 2>&1; then
        printf "✓ %-15s found\n" "$1"
    else
        printf "✗ %-15s missing\n" "$1"
        exit 1
    fi
}

echo "[1/7] Checking dependencies..."
check_command git
check_command node
check_command npm
check_command pnpm

if command -v docker >/dev/null 2>&1; then
    echo "✓ docker          found"
else
    echo "! docker          not installed (optional)"
fi

echo
echo "[2/7] Installing dependencies..."
cd "$ROOT"
pnpm install

echo
echo "[3/7] Generating project documentation..."
./scripts/setup/generate-project-docs.sh

echo
echo "[4/7] Filling README files..."
./scripts/setup/fill-readmes.sh

echo
echo "[5/7] Filling placeholders..."
./scripts/setup/fill-placeholders.sh

echo
echo "[6/7] Running documentation checks..."
./scripts/setup/check-docs.sh

echo
echo "[7/7] Running repository doctor..."
./scripts/setup/doctor.sh

echo
echo "======================================"
echo " Bootstrap completed successfully."
echo "======================================"
