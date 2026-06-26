#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

echo
echo "========================================"
echo "        ForgeOS Doctor"
echo "========================================"
echo

"$ROOT/scripts/setup/check-docs.sh"
"$ROOT/scripts/setup/verify-agents.sh"
"$ROOT/scripts/setup/verify-packages.sh"
"$ROOT/scripts/setup/verify-services.sh"
"$ROOT/scripts/setup/verify-runtime.sh"
"$ROOT/scripts/setup/verify-apps.sh"
"$ROOT/scripts/setup/verify-plugins.sh"
"$ROOT/scripts/setup/verify-integrations.sh"
"$ROOT/scripts/setup/verify-doc-structure.sh"

echo
echo "========================================"
echo "Repository Healthy"
echo "========================================"
