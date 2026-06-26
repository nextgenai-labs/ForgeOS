#!/usr/bin/env bash

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

count_dirs() {
    find "$1" -mindepth 1 -maxdepth 1 -type d | wc -l
}

echo "=========================================="
echo "        ForgeOS Project Report"
echo "=========================================="
echo

printf "%-20s %5s\n" "Agents" "$(count_dirs "$ROOT/agents")"
printf "%-20s %5s\n" "Packages" "$(count_dirs "$ROOT/packages")"
printf "%-20s %5s\n" "Services" "$(count_dirs "$ROOT/services")"
printf "%-20s %5s\n" "Runtime Engines" "$(count_dirs "$ROOT/runtime")"
printf "%-20s %5s\n" "Applications" "$(count_dirs "$ROOT/apps")"
printf "%-20s %5s\n" "Plugins" "$(count_dirs "$ROOT/plugins")"
printf "%-20s %5s\n" "Integrations" "$(count_dirs "$ROOT/integrations")"

echo
echo "Repository Status : READY"
