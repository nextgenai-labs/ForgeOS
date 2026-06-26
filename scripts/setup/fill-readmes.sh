#!/usr/bin/env bash

set -e

ROOT="$(pwd)"

echo "======================================="
echo " ForgeOS README Auto Generator"
echo "======================================="

find "$ROOT" -name "README.md" | while read file
do
    if [ ! -s "$file" ]; then

        DIR=$(basename "$(dirname "$file")")

        cat > "$file" <<EOF
# ${DIR}

## Purpose

Describe the purpose of this directory.

## Contents

- Documentation
- Source Code
- Configuration

## Status

Skeleton

## Owner

ForgeOS

EOF

        echo "Generated $file"

    fi
done

echo
echo "Done."
