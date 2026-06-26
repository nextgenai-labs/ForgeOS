#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

APPS=(
api
dashboard
discord
docs
web
)

for app in "${APPS[@]}"
do
cat > "$ROOT/apps/$app/package.json" <<JSON
{
  "name": "@forgeos/$app",
  "private": true,
  "version": "0.1.0",
  "description": "ForgeOS $app application",
  "type": "module",
  "scripts": {
    "dev": "echo Starting $app...",
    "build": "echo Building $app...",
    "lint": "echo Linting $app...",
    "test": "echo Testing $app..."
  }
}
JSON

echo "Generated apps/$app/package.json"

done

echo
echo "Done."
