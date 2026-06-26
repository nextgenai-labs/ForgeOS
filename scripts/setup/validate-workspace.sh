#!/usr/bin/env bash

set -e

echo "Checking TypeScript..."
npx tsc --noEmit

echo
echo "Running ForgeOS Doctor..."
./scripts/setup/doctor.sh

echo
echo "Workspace OK."
